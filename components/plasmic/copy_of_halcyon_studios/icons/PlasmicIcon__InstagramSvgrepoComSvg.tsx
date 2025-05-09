// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramSvgrepoComSvgIcon(
  props: InstagramSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 291.319 291.319"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M145.659 0c80.44 0 145.66 65.219 145.66 145.66S226.1 291.319 145.66 291.319 0 226.1 0 145.66 65.21 0 145.659 0z"
        }
        fill={"#3f729b"}
      ></path>

      <path
        d={
          "M195.93 63.708H95.38c-17.47 0-31.672 14.211-31.672 31.672v100.56c0 17.47 14.211 31.672 31.672 31.672h100.56c17.47 0 31.672-14.211 31.672-31.672V95.38c-.001-17.461-14.212-31.672-31.682-31.672zm9.978 18.326l3.587-.009v27.202l-27.402.091-.091-27.202 23.906-.082zm-60.248 36.205c22.732 0 27.42 21.339 27.42 27.429 0 15.103-12.308 27.411-27.42 27.411-15.121 0-27.42-12.308-27.42-27.411-.01-6.09 4.688-27.429 27.42-27.429zm63.99 75.716c0 8.658-7.037 15.704-15.713 15.704H97.073c-8.667 0-15.713-7.037-15.713-15.704v-66.539h22.759c-2.112 5.198-3.305 12.299-3.305 18.253 0 24.708 20.101 44.818 44.818 44.818s44.808-20.11 44.808-44.818c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539h.02z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default InstagramSvgrepoComSvgIcon;
/* prettier-ignore-end */
