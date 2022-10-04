// 其他
/**
 * @description 比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性与值
 * @date 2022-10-04
 * @param target:{ [k: string]: unknown }
 * @param source:{ [k: string]: unknown }
 * @returns boolean
 */
export const matches = (
  target: { [k: string]: unknown },
  source: { [k: string]: unknown }
): boolean =>
  Object.keys(source).every(
    (key) => target.hasOwnProperty(key) && target[key] === source[key]
  );

/**
 * @description 导出文件
 * @date 2022-10-04
 * @param res:any  需要导出的数据
 * @param name:string  导出的文件名
 * @param type?:string 导出文件的类型
 */
export function exportFile(res: any, name: string, type?: string): void {
  const blobConfig = type ? { type } : {};
  const blob = new Blob([res], blobConfig);
  const urlObject = window.URL || window.webkitURL || window;
  const save_link = document.createElementNS(
    "http://www.w3.org/1999/xhtml",
    "a"
  ) as HTMLAnchorElement;

  save_link.href = urlObject.createObjectURL(blob);
  if (name) {
    save_link.download = name;
  }
  save_link.click();
}
