<template>
  <div v-if="mediaLink" class="media-links-wrapper">
    <a
      v-for="link in links"
      :key="link.name"
      class="media-link"
      :href="link.url"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="link.icon"
      data-balloon-pos="up"
    >
      <span class="sr-only" v-text="link.icon" />
      <Component :is="link.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { usePageFrontmatter, useThemeData } from "@vuepress/client";
import { computed, defineComponent } from "vue";
import Baidu from "./icons/media/Baidu.vue";
import Bitbucket from "./icons/media/Bitbucket.vue";
import Dingding from "./icons/media/Dingding.vue";
import Discord from "./icons/media/Discord.vue";
import Dribbble from "./icons/media/Dribbble.vue";
import Evernote from "./icons/media/Evernote.vue";
import Facebook from "./icons/media/Facebook.vue";
import Flipboard from "./icons/media/Flipboard.vue";
import Gitee from "./icons/media/Gitee.vue";
import Github from "./icons/media/Github.vue";
import Gitlab from "./icons/media/Gitlab.vue";
import Gmail from "./icons/media/Gmail.vue";
import Instagram from "./icons/media/Instagram.vue";
import Lines from "./icons/media/Lines.vue";
import Linkedin from "./icons/media/Linkedin.vue";
import Pinterest from "./icons/media/Pinterest.vue";
import Pocket from "./icons/media/Pocket.vue";
import QQ from "./icons/media/QQ.vue";
import Qzone from "./icons/media/Qzone.vue";
import Reddit from "./icons/media/Reddit.vue";
import Rss from "./icons/media/Rss.vue";
import Steam from "./icons/media/Steam.vue";
import Twitter from "./icons/media/Twitter.vue";
import Wechat from "./icons/media/Wechat.vue";
import Weibo from "./icons/media/Weibo.vue";
import Whatsapp from "./icons/media/Whatsapp.vue";
import Youtube from "./icons/media/Youtube.vue";
import Zhihu from "./icons/media/Zhihu.vue";
import { BlogMedia } from "./types";

const medias: BlogMedia[] = [
  "Baidu",
  "Bitbucket",
  "Dingding",
  "Discord",
  "Dribbble",
  "Evernote",
  "Facebook",
  "Flipboard",
  "Gitee",
  "Github",
  "Gitlab",
  "Gmail",
  "Instagram",
  "Lines",
  "Linkedin",
  "Pinterest",
  "Pocket",
  "QQ",
  "Qzone",
  "Reddit",
  "Rss",
  "Steam",
  "Twitter",
  "Wechat",
  "Weibo",
  "Whatsapp",
  "Youtube",
  "Zhihu",
];

interface MediaLink {
  icon: string;
  url: string;
}

export default defineComponent({
  name: "MediaLinks",

  components: {
    Baidu,
    Bitbucket,
    Dingding,
    Discord,
    Dribbble,
    Evernote,
    Facebook,
    Flipboard,
    Gitee,
    Github,
    Gitlab,
    Gmail,
    Instagram,
    Lines,
    Linkedin,
    Pinterest,
    Pocket,
    QQ,
    Qzone,
    Reddit,
    Rss,
    Steam,
    Twitter,
    Wechat,
    Weibo,
    Whatsapp,
    Youtube,
    Zhihu,
  },

  setup() {
    const pageFrontmatter = usePageFrontmatter();
    const themeData = useThemeData();

    const mediaLink = computed<Partial<Record<BlogMedia, string>> | false>(
      () => {
        const { medialink } = pageFrontmatter.value;

        return medialink === false
          ? false
          : typeof medialink === "object"
          ? (medialink as Partial<Record<BlogMedia, string>>)
          : themeData.value.blog
          ? themeData.value.blog.links || false
          : false;
      }
    );

    const links = computed<MediaLink[]>(() => {
      if (mediaLink.value) {
        const links: MediaLink[] = [];

        for (const media in mediaLink.value)
          if (medias.includes(media as BlogMedia))
            links.push({
              icon: media,
              url: mediaLink.value[media as BlogMedia] as string,
            });

        return links;
      }

      return [];
    });

    return {
      links,
      mediaLink,
    };
  },
});
</script>

<style lang="stylus">
@require '../styles/palette'

.media-links-wrapper
  display flex
  justify-content center
  flex-wrap wrap
  margin 8px auto

  .media-link
    width 26px
    height 26px
    margin 4px
    transform scale(1, 1)
    transition transform 0.18s ease-out 0.18s

    &:hover
      cursor pointer
      transform scale(1.2, 1.2)

    &::after
      --balloon-font-size 8px
      padding 0.3em 0.6em

    .icon
      width 100%
      height 100%
</style>
