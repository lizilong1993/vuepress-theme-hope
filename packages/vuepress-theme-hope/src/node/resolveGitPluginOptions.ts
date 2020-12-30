import type { GitPluginOptions } from "@vuepress/plugin-git";
import type { ThemeHopeOptions } from "../types";

/**
 * Resolve options for @vuepress/plugin-git
 */
export const resolveGitPluginOptions = (
  options: ThemeHopeOptions
): GitPluginOptions | boolean => {
  if (options.themePlugins?.git === false) {
    return false;
  }

  const enableUpdatedTime = options.lastUpdated !== false;
  const enableContributors = options.contributors !== false;

  if (!enableUpdatedTime && !enableContributors) {
    return false;
  }

  return {
    updatedTime: enableUpdatedTime,
    contributors: enableContributors,
  };
};
