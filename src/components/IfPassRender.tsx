import { ReactNode } from "react";

interface IfPassRenderProp {
  check: boolean;
  children: ReactNode;
}

export const IfPassRender = ({ check, children }: IfPassRenderProp) => {
  return check ? <>{children}</> : null;
};
