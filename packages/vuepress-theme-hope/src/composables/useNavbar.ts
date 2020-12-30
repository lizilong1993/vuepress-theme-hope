import { computed } from "vue";
import { useRouter } from "vue-router";
import {
  useRouteLocale,
  useThemeLocaleData,
  useSiteLocaleData,
} from "@vuepress/client";
import { isString } from "@vuepress/shared";
import { useNavLink } from "./useNavLink";
import { resolveRepoType } from "../utils/repoType";

import type { ComputedRef } from "vue";
import type {
  ThemeHopeOptions,
  NavbarItem,
  NavbarGroup,
  ResolvedNavbarItem,
} from "../types";

/**
 * Get navbar config of select language dropdown
 */
export const useNavbarSelectLanguage = (): ComputedRef<
  ResolvedNavbarItem[]
> => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData<ThemeHopeOptions>();

  return computed<ResolvedNavbarItem[]>(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    // do not display language selection dropdown if there is only one language
    if (localePaths.length < 2) {
      return [];
    }
    const currentPath = router.currentRoute.value.path;
    const currentFullPath = router.currentRoute.value.fullPath;

    const languageDropdown: ResolvedNavbarItem = {
      text: themeLocale.value.selectLanguageText ?? "unkown language",
      ariaLabel: themeLocale.value.selectLanguageAriaLabel ?? "unkown language",
      children: localePaths.map((targetLocalePath) => {
        // target locale config of this langauge link
        const targetSiteLocale =
          siteLocale.value.locales?.[targetLocalePath] ?? {};
        const targetThemeLocale =
          themeLocale.value.locales?.[targetLocalePath] ?? {};
        const targetLang = targetSiteLocale.lang || "";

        const text = targetThemeLocale.selectLanguageName ?? targetLang;
        let link;

        if (targetLang === siteLocale.value.lang) {
          // if the target language is current language, stay at current link
          link = currentFullPath;
        } else {
          // if the target language is not current language
          // try to link to the corresponding page of current page
          // or fallback to homepage
          const targetLocalePage = currentPath.replace(
            routeLocale.value,
            targetLocalePath
          );

          if (router.getRoutes().some((item) => item.path === targetLocalePage))
            link = targetLocalePage;
          else link = targetThemeLocale.home ?? targetLocalePath;
        }

        return {
          text,
          link,
        };
      }),
    };

    return [languageDropdown];
  });
};

/**
 * Get navbar config of repository link
 */
export const useNavbarRepo = (): ComputedRef<ResolvedNavbarItem[]> => {
  const themeLocale = useThemeLocaleData<ThemeHopeOptions>();

  const repo = computed(() => themeLocale.value.repo);

  const repoType = computed(() =>
    repo.value ? resolveRepoType(repo.value) : null
  );

  const repoLink = computed(() => {
    if (repoType.value === "GitHub")
      return `https://github.com/${(repo as ComputedRef<string>).value}`;

    return repo.value;
  });

  const repoLabel = computed(() =>
    !repoLink.value
      ? null
      : themeLocale.value.repoLabel
      ? themeLocale.value.repoLabel
      : repoType.value === null
      ? "Source"
      : repoType.value
  );

  return computed(() =>
    !repoLink.value || !repoLabel.value
      ? []
      : [
          {
            text: repoLabel.value,
            link: repoLink.value,
          },
        ]
  );
};

const resolveNavbarItem = (
  item: NavbarItem | NavbarGroup | string
): ResolvedNavbarItem => {
  if (isString(item)) return useNavLink(item);

  if ((item as NavbarGroup).children) {
    return {
      ...item,
      children: (item as NavbarGroup).children.map(resolveNavbarItem),
    };
  }
  return item as ResolvedNavbarItem;
};

export const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
  const themeLocale = useThemeLocaleData<ThemeHopeOptions>();

  return computed(() =>
    (themeLocale.value.navbar || []).map(resolveNavbarItem)
  );
};
