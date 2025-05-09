// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2p9VhVhxAWhB5Nusx9QUQ2
// Component: i6hAdr-YUMOP

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

import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: yxQmGgAy9hde/component
import Button from "../../Button"; // plasmic-import: EyzplKTGD_DF/component
import ContainerTermsOfService from "../../ContainerTermsOfService"; // plasmic-import: IiQiNRBehBFl/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: 7Ks2sCBPZV9k/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: Mjl6P60oGLT_/component

import { useScreenVariants as useScreenVariants_0QmF6MtAnaU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _0qmF6MTAnaU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 2p9VhVhxAWhB5Nusx9QUQ2/projectcss
import sty from "./PlasmicTermsOfService.module.css"; // plasmic-import: i6hAdr-YUMOP/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: j3whR53MQDz4/icon

createPlasmicElementProxy;

export type PlasmicTermsOfService__VariantMembers = {};
export type PlasmicTermsOfService__VariantsArgs = {};
type VariantPropType = keyof PlasmicTermsOfService__VariantsArgs;
export const PlasmicTermsOfService__VariantProps = new Array<VariantPropType>();

export type PlasmicTermsOfService__ArgsType = {};
type ArgPropType = keyof PlasmicTermsOfService__ArgsType;
export const PlasmicTermsOfService__ArgProps = new Array<ArgPropType>();

export type PlasmicTermsOfService__OverridesType = {
  root?: Flex__<"div">;
  halcyonNavBar?: Flex__<typeof HalcyonNavBar>;
  pageBanner?: Flex__<"div">;
  h1?: Flex__<"h1">;
  text?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  mainSection?: Flex__<"div">;
  containerTermsOfService?: Flex__<typeof ContainerTermsOfService>;
  halcyonFooter?: Flex__<typeof HalcyonFooter>;
  halcyonFooterBottom?: Flex__<typeof HalcyonFooterBottom>;
};

export interface DefaultTermsOfServiceProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTermsOfService__RenderFunc(props: {
  variants: PlasmicTermsOfService__VariantsArgs;
  args: PlasmicTermsOfService__ArgsType;
  overrides: PlasmicTermsOfService__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0QmF6MtAnaU()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <HalcyonNavBar
            data-plasmic-name={"halcyonNavBar"}
            data-plasmic-override={overrides.halcyonNavBar}
            className={classNames("__wab_instance", sty.halcyonNavBar)}
          />

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dEhrz)}>
              <div className={classNames(projectcss.all, sty.freeBox___3DwNt)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ooNgq)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    <Trans__>{"Terms of Service"}</Trans__>
                  </h1>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <Trans__>
                      {"Below are our Terms of Service, last updated 05/04/24"}
                    </Trans__>
                  </div>
                </Stack__>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "100%"
                      : "100%"
                  }
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? "lazy"
                      : "lazy"
                  }
                  src={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? {
                          src: "/plasmic/copy_of_halcyon_studios/images/halcyonZoomedAngleViewJpg.jpg",
                          fullWidth: 3840,
                          fullHeight: 2160,
                          aspectRatio: undefined
                        }
                      : {
                          src: "/plasmic/copy_of_halcyon_studios/images/halcyonAngleViewJpg.jpg",
                          fullWidth: 3840,
                          fullHeight: 2160,
                          aspectRatio: undefined
                        }
                  }
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <ContainerTermsOfService
              data-plasmic-name={"containerTermsOfService"}
              data-plasmic-override={overrides.containerTermsOfService}
              className={classNames(
                "__wab_instance",
                sty.containerTermsOfService
              )}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wkFV)}>
            <HalcyonFooter
              data-plasmic-name={"halcyonFooter"}
              data-plasmic-override={overrides.halcyonFooter}
              className={classNames("__wab_instance", sty.halcyonFooter)}
            />

            <HalcyonFooterBottom
              data-plasmic-name={"halcyonFooterBottom"}
              data-plasmic-override={overrides.halcyonFooterBottom}
              className={classNames("__wab_instance", sty.halcyonFooterBottom)}
            />
          </div>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "halcyonNavBar",
    "pageBanner",
    "h1",
    "text",
    "img",
    "mainSection",
    "containerTermsOfService",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],
  halcyonNavBar: ["halcyonNavBar"],
  pageBanner: ["pageBanner", "h1", "text", "img"],
  h1: ["h1"],
  text: ["text"],
  img: ["img"],
  mainSection: ["mainSection", "containerTermsOfService"],
  containerTermsOfService: ["containerTermsOfService"],
  halcyonFooter: ["halcyonFooter"],
  halcyonFooterBottom: ["halcyonFooterBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  halcyonNavBar: typeof HalcyonNavBar;
  pageBanner: "div";
  h1: "h1";
  text: "div";
  img: typeof PlasmicImg__;
  mainSection: "div";
  containerTermsOfService: typeof ContainerTermsOfService;
  halcyonFooter: typeof HalcyonFooter;
  halcyonFooterBottom: typeof HalcyonFooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTermsOfService__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTermsOfService__VariantsArgs;
    args?: PlasmicTermsOfService__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTermsOfService__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTermsOfService__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTermsOfService__ArgProps,
          internalVariantPropNames: PlasmicTermsOfService__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTermsOfService__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTermsOfService";
  } else {
    func.displayName = `PlasmicTermsOfService.${nodeName}`;
  }
  return func;
}

export const PlasmicTermsOfService = Object.assign(
  // Top-level PlasmicTermsOfService renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    pageBanner: makeNodeComponent("pageBanner"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),
    mainSection: makeNodeComponent("mainSection"),
    containerTermsOfService: makeNodeComponent("containerTermsOfService"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),

    // Metadata about props expected for PlasmicTermsOfService
    internalVariantProps: PlasmicTermsOfService__VariantProps,
    internalArgProps: PlasmicTermsOfService__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTermsOfService;
/* prettier-ignore-end */
