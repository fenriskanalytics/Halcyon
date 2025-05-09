// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinterestSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinterestSvgrepoComSvgIcon(
  props: PinterestSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
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
          "M220.646 338.475c-13.423 70.35-29.804 137.794-78.346 173.025-14.996-106.33 21.994-186.188 39.173-270.971-29.293-49.292 3.518-148.498 65.285-124.059 76.001 30.066-65.809 183.279 29.38 202.417 99.405 19.974 139.989-172.476 78.359-235.054-89.063-90.372-259.244-2.058-238.322 127.328 5.09 31.626 37.765 41.22 13.062 84.884-57.001-12.65-74.005-57.6-71.822-117.533 3.53-98.108 88.141-166.787 173.024-176.293C337.779-9.795 438.52 41.617 452.43 142.595c15.67 113.978-48.442 237.412-163.23 228.529-31.115-2.42-44.177-17.841-68.554-32.649z"
        }
        display={"inline"}
      ></path>
    </svg>
  );
}

export default PinterestSvgrepoComSvgIcon;
/* prettier-ignore-end */
