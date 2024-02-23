declare module '*.jpg' {
  const src: string;
  export = src;
}
declare module '*.jpeg' {
  const src: string;
  export = src;
}
declare module '*.png' {
  const src: string;
  export = src;
}
declare module '*.svg' {
  const src: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default src;
}
