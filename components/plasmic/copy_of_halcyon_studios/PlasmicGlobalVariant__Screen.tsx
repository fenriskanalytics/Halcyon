// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "tablet" | "mobile";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  tablet: "(max-width:834px)",
  mobile: "(max-width:414px)",
});

export default ScreenContext;
/* prettier-ignore-end */
