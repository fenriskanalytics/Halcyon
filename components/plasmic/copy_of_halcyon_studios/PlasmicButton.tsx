// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: EyzplKTGD_DF

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: EyzplKTGD_DF/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: j3whR53MQDz4/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round";
  size: "compact" | "minimal";
  color:
    | "ivory"
    | "green"
    | "brGreen65"
    | "halcyonGray"
    | "sand"
    | "ivory2"
    | "brGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "unnamedVariant";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "ivory"
    | "green"
    | "brGreen65"
    | "halcyonGray"
    | "sand"
    | "ivory2"
    | "brGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "unnamedVariant"
  >;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "endIcon",
  "link",
  "submitsForm",
  "target",
  "children"
);

export type PlasmicButton__OverridesType = {
  homeButton?: Flex__<"button">;
  startIconContainer?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  shape?: SingleChoiceArg<"rounded" | "round">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "ivory"
    | "green"
    | "brGreen65"
    | "halcyonGray"
    | "sand"
    | "ivory2"
    | "brGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "unnamedVariant"
  >;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $translator = usePlasmicTranslator?.();

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [
    isHomeButtonFocusVisibleWithin,
    triggerHomeButtonFocusVisibleWithinProps
  ] = useTrigger("useFocusVisibleWithin", {
    isTextInput: false
  });
  const triggers = {
    focusVisibleWithin_homeButton: isHomeButtonFocusVisibleWithin
  };

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"homeButton"}
      data-plasmic-override={overrides.homeButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.homeButton,
        {
          [sty.homeButton___focusVisibleWithin]:
            triggers.focusVisibleWithin_homeButton,
          [sty.homeButtoncolor_brGreen65]: hasVariant(
            $state,
            "color",
            "brGreen65"
          ),
          [sty.homeButtoncolor_brGreen]: hasVariant($state, "color", "brGreen"),
          [sty.homeButtoncolor_clear]: hasVariant($state, "color", "clear"),
          [sty.homeButtoncolor_green]: hasVariant($state, "color", "green"),
          [sty.homeButtoncolor_halcyonGray]: hasVariant(
            $state,
            "color",
            "halcyonGray"
          ),
          [sty.homeButtoncolor_ivory2]: hasVariant($state, "color", "ivory2"),
          [sty.homeButtoncolor_ivory]: hasVariant($state, "color", "ivory"),
          [sty.homeButtoncolor_link]: hasVariant($state, "color", "link"),
          [sty.homeButtoncolor_link_size_minimal]:
            hasVariant($state, "color", "link") &&
            hasVariant($state, "size", "minimal"),
          [sty.homeButtoncolor_sand]: hasVariant($state, "color", "sand"),
          [sty.homeButtoncolor_softRed]: hasVariant($state, "color", "softRed"),
          [sty.homeButtoncolor_softSand]: hasVariant(
            $state,
            "color",
            "softSand"
          ),
          [sty.homeButtoncolor_softYellow]: hasVariant(
            $state,
            "color",
            "softYellow"
          ),
          [sty.homeButtoncolor_unnamedVariant]: hasVariant(
            $state,
            "color",
            "unnamedVariant"
          ),
          [sty.homeButtonisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.homeButtonshape_round]: hasVariant($state, "shape", "round"),
          [sty.homeButtonshape_round_size_compact]:
            hasVariant($state, "shape", "round") &&
            hasVariant($state, "size", "compact"),
          [sty.homeButtonshape_rounded]: hasVariant($state, "shape", "rounded"),
          [sty.homeButtonshape_rounded_showEndIcon]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "shape", "rounded"),
          [sty.homeButtonshape_rounded_showStartIcon]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.homeButtonshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.homeButtonshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.homeButtonsize_compact]: hasVariant($state, "size", "compact"),
          [sty.homeButtonsize_compact_color_sand]:
            hasVariant($state, "color", "sand") &&
            hasVariant($state, "size", "compact"),
          [sty.homeButtonsize_compact_shape_rounded]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.homeButtonsize_compact_showEndIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.homeButtonsize_compact_showEndIcon_showStartIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.homeButtonsize_compact_showStartIcon]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.homeButtonsize_minimal]: hasVariant($state, "size", "minimal")
        }
      )}
      ref={ref => {
        $refs["homeButton"] = ref;
      }}
      data-plasmic-trigger-props={[triggerHomeButtonFocusVisibleWithinProps]}
    >
      {(hasVariant($state, "showStartIcon", "showStartIcon") ? true : false) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_ivory]: hasVariant(
              $state,
              "color",
              "ivory"
            ),
            [sty.startIconContainershape_rounded_showStartIcon]:
              hasVariant($state, "shape", "rounded") &&
              hasVariant($state, "showStartIcon", "showStartIcon"),
            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__tOuKq)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_brGreen65]: hasVariant(
                $state,
                "color",
                "brGreen65"
              ),
              [sty.slotTargetStartIconcolor_brGreen]: hasVariant(
                $state,
                "color",
                "brGreen"
              ),
              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetStartIconcolor_ivory2]: hasVariant(
                $state,
                "color",
                "ivory2"
              ),
              [sty.slotTargetStartIconcolor_ivory]: hasVariant(
                $state,
                "color",
                "ivory"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),
              [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_homeButton,
          [sty.contentContainercolor_green]: hasVariant(
            $state,
            "color",
            "green"
          ),
          [sty.contentContainercolor_unnamedVariant]: hasVariant(
            $state,
            "color",
            "unnamedVariant"
          ),
          [sty.contentContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          ),
          [sty.contentContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"Button"}</Trans__>,
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencolor_brGreen65]: hasVariant(
              $state,
              "color",
              "brGreen65"
            ),
            [sty.slotTargetChildrencolor_green]: hasVariant(
              $state,
              "color",
              "green"
            ),
            [sty.slotTargetChildrencolor_halcyonGray]: hasVariant(
              $state,
              "color",
              "halcyonGray"
            ),
            [sty.slotTargetChildrencolor_ivory2]: hasVariant(
              $state,
              "color",
              "ivory2"
            ),
            [sty.slotTargetChildrencolor_ivory]: hasVariant(
              $state,
              "color",
              "ivory"
            ),
            [sty.slotTargetChildrencolor_unnamedVariant]: hasVariant(
              $state,
              "color",
              "unnamedVariant"
            )
          })
        })}
      </div>
      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_brGreen65]: hasVariant(
              $state,
              "color",
              "brGreen65"
            ),
            [sty.endIconContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__b5V4O)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_brGreen65]: hasVariant(
                $state,
                "color",
                "brGreen65"
              ),
              [sty.slotTargetEndIconcolor_brGreen]: hasVariant(
                $state,
                "color",
                "brGreen"
              ),
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetEndIconcolor_ivory2]: hasVariant(
                $state,
                "color",
                "ivory2"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.slotTargetEndIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),
              [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  homeButton: [
    "homeButton",
    "startIconContainer",
    "contentContainer",
    "endIconContainer"
  ],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  homeButton: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "homeButton") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("homeButton"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
