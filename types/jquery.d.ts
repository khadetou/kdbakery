interface JQuery {
  scrollIt: (options?: ScrollItOptions) => void;
  owlCarousel: (options?: OwlCarouselOptions) => void;
  magnificPopup: (options?: MagnificPopupOptions) => void;
  stellar: (options?: StellarOptions) => void;
  data: () => any;
  each: (callback: (this: JQuery) => void) => JQuery;
  addClass: (className: string) => JQuery;
  removeClass: (className: string) => JQuery;
  attr: (attributeName: string, value: string) => JQuery;
  scrollTop: () => number;
  on: (event: string, handler: (event: JQuery.Event) => void) => JQuery;
}

interface JQueryStatic {
  (selector: string | Document | JQuery | Element | Window): JQuery;
  scrollIt: (options?: ScrollItOptions) => void;
  fn: JQuery;
}

// Types pour les options des plugins
interface ScrollItOptions {
  upKey?: number;
  downKey?: number;
  easing?: string;
  scrollTime?: number;
  activeClass?: string;
  onPageChange?: null | ((pageIndex: number) => void);
  topOffset?: number;
}

interface StellarOptions {
  horizontalScrolling?: boolean;
}

interface MagnificPopupOptions {
  type?: string;
}

interface OwlCarouselOptions {
  [key: string]: any;
}

interface Window {
  jQuery: JQueryStatic;
  $: JQueryStatic;
}
