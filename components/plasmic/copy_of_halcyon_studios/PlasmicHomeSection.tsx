// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: 9rGWqtPg4lLP

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

import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component

import {
  UnnamedGlobalGroupOfVariantsValue,
  useUnnamedGlobalGroupOfVariants
} from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: wyqDOREeKIlt/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicHomeSection.module.css"; // plasmic-import: 9rGWqtPg4lLP/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: j3whR53MQDz4/icon

createPlasmicElementProxy;

export type PlasmicHomeSection__VariantMembers = {
  blurVariant: "unnamedVariant";
};
export type PlasmicHomeSection__VariantsArgs = {
  blurVariant?: SingleChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicHomeSection__VariantsArgs;
export const PlasmicHomeSection__VariantProps = new Array<VariantPropType>(
  "blurVariant"
);

export type PlasmicHomeSection__ArgsType = {};
type ArgPropType = keyof PlasmicHomeSection__ArgsType;
export const PlasmicHomeSection__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeSection__OverridesType = {
  root?: Flex__<"section">;
  registrationLinkButton?: Flex__<typeof Button>;
};

export interface DefaultHomeSectionProps {
  blurVariant?: SingleChoiceArg<"unnamedVariant">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomeSection__RenderFunc(props: {
  variants: PlasmicHomeSection__VariantsArgs;
  args: PlasmicHomeSection__ArgsType;
  overrides: PlasmicHomeSection__OverridesType;
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
        path: "blurVariant",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.blurVariant
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

  const globalVariants = ensureGlobalVariants({
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootblurVariant_unnamedVariant]: hasVariant(
            $state,
            "blurVariant",
            "unnamedVariant"
          )
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__agiL, {
          [sty.freeBoxblurVariant_unnamedVariant__agiLClSsh]: hasVariant(
            $state,
            "blurVariant",
            "unnamedVariant"
          ),
          [sty.freeBoxglobal_unnamedGlobalGroupOfVariants_unnamedVariant__agiLSeFlL]:
            hasVariant(
              globalVariants,
              "unnamedGlobalGroupOfVariants",
              "unnamedVariant"
            )
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pYU)}
        >
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__hqMo8
            )}
          >
            <Trans__>{"Halcyon Studios"}</Trans__>
          </h1>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__jVRgb,
              {
                [sty.h1global_unnamedGlobalGroupOfVariants_unnamedVariant__jVRgbSeFlL]:
                  hasVariant(
                    globalVariants,
                    "unnamedGlobalGroupOfVariants",
                    "unnamedVariant"
                  )
              }
            )}
          >
            <Trans__>
              {hasVariant(
                globalVariants,
                "unnamedGlobalGroupOfVariants",
                "unnamedVariant"
              )
                ? "Find Tranquility in Motion"
                : "Find Tranquility in Motion"}
            </Trans__>
          </h1>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lbNnH,
              {
                [sty.textglobal_unnamedGlobalGroupOfVariants_unnamedVariant__lbNnHSeFlL]:
                  hasVariant(
                    globalVariants,
                    "unnamedGlobalGroupOfVariants",
                    "unnamedVariant"
                  )
              }
            )}
          >
            <Trans__>
              {hasVariant(
                globalVariants,
                "unnamedGlobalGroupOfVariants",
                "unnamedVariant"
              )
                ? "New Memberships Available Including Reformer Pilates"
                : "New Memberships Available Including Reformer Pilates"}
            </Trans__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__duvf)}>
            <Button
              data-plasmic-name={"registrationLinkButton"}
              data-plasmic-override={overrides.registrationLinkButton}
              className={classNames(
                "__wab_instance",
                sty.registrationLinkButton,
                {
                  [sty.registrationLinkButtonglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
                    hasVariant(
                      globalVariants,
                      "unnamedGlobalGroupOfVariants",
                      "unnamedVariant"
                    )
                }
              )}
              color={"green"}
              onClick={async event => {
                const $steps = {};

                $steps["goToMemberships"] = true
                  ? (() => {
                      const actionArgs = { destination: `/memberships` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToMemberships"] != null &&
                  typeof $steps["goToMemberships"] === "object" &&
                  typeof $steps["goToMemberships"].then === "function"
                ) {
                  $steps["goToMemberships"] = await $steps["goToMemberships"];
                }
              }}
              size={"minimal"}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2JLsO,
                  {
                    [sty.textglobal_unnamedGlobalGroupOfVariants_unnamedVariant___2JLsOSeFlL]:
                      hasVariant(
                        globalVariants,
                        "unnamedGlobalGroupOfVariants",
                        "unnamedVariant"
                      )
                  }
                )}
              >
                <Trans__>
                  {hasVariant(
                    globalVariants,
                    "unnamedGlobalGroupOfVariants",
                    "unnamedVariant"
                  )
                    ? "See memberhips"
                    : "See Memberships"}
                </Trans__>
              </div>
            </Button>
          </div>
        </Stack__>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "registrationLinkButton"],
  registrationLinkButton: ["registrationLinkButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  registrationLinkButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeSection__VariantsArgs;
    args?: PlasmicHomeSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomeSection__ArgProps,
          internalVariantPropNames: PlasmicHomeSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeSection";
  } else {
    func.displayName = `PlasmicHomeSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeSection = Object.assign(
  // Top-level PlasmicHomeSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    registrationLinkButton: makeNodeComponent("registrationLinkButton"),

    // Metadata about props expected for PlasmicHomeSection
    internalVariantProps: PlasmicHomeSection__VariantProps,
    internalArgProps: PlasmicHomeSection__ArgProps
  }
);

export default PlasmicHomeSection;
/* prettier-ignore-end */
