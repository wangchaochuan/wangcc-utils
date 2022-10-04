/**
 * @description 检测页面是否滚动到页面底部
 * @date 2022-10-04
 * @returns boolean
 */
export const bottomVisible = (): boolean => {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  );
};

/**
 * @description 返回DOM元素是否包含指定的Class类名
 * @date 2022-10-04
 * @param el:HTMLElement
 * @param className:string
 * @returns boolean
 */
export const hasClass = (el: HTMLElement, className: string): boolean =>
  el.classList.contains(className);

/**
 * @description 判断程序运行环境是否在浏览器，这有助于避免在node环境运行前端模块时出错
 * @date 2022-10-04
 * @returns boolean
 */
export const isBrowser = (): boolean =>
  ![typeof window, typeof document].includes("undefined");

/**
 * @description 判断是浏览器类型
 * @date 2022-10-04
 * @returns 
 */
export function myBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1;
  //判断是否Opera浏览器
  if (isOpera) {
    return "Opera";
  } 
  //判断是否Firefox浏览器
  if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } 
  //判断是否Google浏览器
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  } 
  //判断是否Safari浏览器
  if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } 
  //判断是否IE浏览器
  if (
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera
  ) {
    return "IE";
  } 
}
