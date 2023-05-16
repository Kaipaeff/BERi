declare module '*.css' {
  const styles: { [key: string]: string };
  export = styles;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpeg';

declare module '*.jpg';

declare module '*.png';
