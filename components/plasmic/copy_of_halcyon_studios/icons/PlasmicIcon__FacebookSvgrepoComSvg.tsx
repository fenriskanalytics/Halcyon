// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookSvgrepoComSvgIcon(
  props: FacebookSvgrepoComSvgIconProps
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
          "M145.659 0c80.45 0 145.66 65.219 145.66 145.66 0 80.45-65.21 145.659-145.66 145.659S0 226.109 0 145.66C0 65.219 65.21 0 145.659 0z"
        }
        fill={"#3b5998"}
      ></path>

      <path
        d={
          "M163.394 100.277h18.772v-27.73h-22.067v.1c-26.738.947-32.218 15.977-32.701 31.763h-.055v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366c0-5.335 3.55-9.614 8.603-9.614z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default FacebookSvgrepoComSvgIcon;
/* prettier-ignore-end */
