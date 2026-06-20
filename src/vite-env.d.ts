/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare module "react-syntax-highlighter" {
  export const Prism: any;
  export const Light: any;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const vscDarkPlus: any;
  const styles: { [key: string]: any };
  export default styles;
}
