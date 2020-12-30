import { h } from "vue";
import type { FunctionalComponent, VNode } from "vue";
import { useRoute } from "vue-router";
import { isActive } from "../utils";
import type { ResolvedSidebarItem } from "../types";
import NavLink from "./NavLink.vue";

const renderItem = (item: ResolvedSidebarItem, props: VNode["props"]): VNode =>
  item.link
    ? // if the item has link, render it as `<NavLink>`
      h(NavLink, {
        ...props,
        item,
      })
    : // if the item only has text, render it as `<p>`
      h("p", props, item.text);

const renderChildren = (
  item: ResolvedSidebarItem,
  depth: number
): VNode | null => {
  if (!item.children?.length) return null;

  return h(
    "ul",
    {
      class: {
        "sidebar-sub-headers": depth > 0,
      },
    },
    item.children.map((child) =>
      h(
        "li",
        h(SidebarChild, {
          item: child,
          depth: depth + 1,
        })
      )
    )
  );
};

export const SidebarChild: FunctionalComponent<{
  item: ResolvedSidebarItem;
  depth: number;
}> = ({ item, depth }) => {
  if (item.isGroup)
    return [
      h(
        "section",
        {
          class: {
            "sidebar-group": true,
          },
        },
        [
          renderItem(item, {
            class: "sidebar-heading",
          }),
          renderChildren(item, depth),
        ]
      ),
    ];

  const route = useRoute();
  const active =
    isActive(route, item.link) ||
    item.children?.some((child) => isActive(route, child.link));

  return [
    renderItem(item, {
      class: {
        "sidebar-link": true,
        active,
      },
    }),
    renderChildren(item, depth),
  ];
};

SidebarChild.displayName = "SidebarChild";

SidebarChild.props = {
  item: {
    type: Object,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
};
