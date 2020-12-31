<template>
  <nav class="breadcrumb" :class="{ disable: !enable }">
    <ul v-if="enable">
      <li
        v-for="(item, index) in config"
        :key="item.url"
        :class="{ 'is-active': config.length - 1 === index }"
      >
        <RouterLink :to="item.url">
          <i
            v-if="item.icon && iconEnable"
            :class="`iconfont ${iconPrefix}${item.icon}`"
          />
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {
  usePageFrontmatter,
  usePagesData,
  useThemeLocaleData,
} from "@vuepress/client";
import { getLinks } from "../composables";
import { useRoute } from "vue-router";

interface BreadCrumbConfig {
  title: string;
  icon?: string;
  url: string;
}

export default defineComponent({
  name: "BreadCrumb",

  setup() {
    const pageFrontmatter = usePageFrontmatter();
    const themeLocaleData = useThemeLocaleData();
    const pagesData = usePagesData();
    const route = useRoute();

    const config = computed<BreadCrumbConfig[]>(() => {
      const breadcrumbConfig: BreadCrumbConfig[] = [];
      const pages = pagesData.value;
      const links = getLinks(route);

      // generate breadcrumb config
      for (let index = 1; index < links.length; index++)
        for (let index2 = 0; index2 < pages.length; index2++) {
          const element = pages[index2];

          if (element.path === links[index]) {
            breadcrumbConfig.push({
              title: element.title,
              icon: element.frontmatter.icon,
              url: element.path,
            });
            break;
          }
        }

      return breadcrumbConfig;
    });

    const enable = computed<boolean>(() => {
      const globalEnable = themeLocaleData.value.breadcrumb !== false;
      const pageEnable = pageFrontmatter.value.breadcrumb;

      return (
        ((globalEnable && pageEnable !== false) || pageEnable === true) &&
        config.value.length > 1
      );
    });

    const iconEnable = computed<boolean>(() => {
      const globalEnable = themeLocaleData.value.breadcrumbIcon !== false;
      const pageEnable = pageFrontmatter.value.breadcrumbIcon;

      return (
        enable.value &&
        ((globalEnable && pageEnable !== false) || pageEnable === true)
      );
    });

    const iconPrefix = computed<string>(() => {
      const { iconPrefix } = themeLocaleData.value;

      return iconPrefix === "" ? "" : iconPrefix || "icon-";
    });

    return {
      config,
      enable,
      iconEnable,
      iconPrefix,
    };
  },
});
</script>

<style lang="stylus">
@require '~@mr-hope/vuepress-shared/styles/wrapper.styl'

$navbarMobileHeight ?= 3.2rem

// Fix top boarder of heading1
.theme-default-content:not(.custom)
  > *:first-child
    margin-top 0

h1, h2, h3, h4, h5, h6
  .theme-default-content:not(.custom) &:first-child
    margin-top 0.5rem - $navbarHeight !important
    padding-top $navbarHeight + 1rem !important

    @media (max-width $MQMobile)
      margin-top 0.5rem - $navbarMobileHeight !important
      padding-top $navbarMobileHeight + 1rem !important

.breadcrumb
  @extend $wrapper
  position relative
  margin-top $navbarHeight
  margin-bottom (- $navbarHeight)
  padding-top 0.2rem
  padding-bottom 0.2rem
  font-size 15px
  z-index 2

  @media (max-width $MQNarrow)
    margin-top $navbarMobileHeight
    margin-bottom (- $navbarMobileHeight)
    font-size 14px

  @media (max-width $MQMobileNarrow)
    font-size 12.8px

  // breadcrumb is disabled
  &.disable
    padding-bottom 1.3em

  ul
    margin 0.5rem 0
    padding-left 0px
    list-style none

  li
    display inline-block

    &:first-child a
      padding-left 0

    &:last-child a
      padding-right 0

    &.is-active a
      color var(--light-grey, #999)
      cursor default
      pointer-events none

  li + li::before
    color var(--light-grey, #999)
    content '\0002f'

  a
    display inline-block
    padding 0 0.5em
    line-height 2

    &:before
      position relative
      bottom 0.125rem
      margin-right 0.25em

    &:hover
      color var(--accent-color-l10, lighten($accentColor, 10%))

      .theme-dark &
        color var(--accent-color-d10, darken($accentColor, 10%))
</style>
