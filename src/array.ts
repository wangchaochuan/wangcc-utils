/* 数组相关工具函数 */

/**
 * @description 判断数组中的元素是否都相等
 * @date 2022-10-04
 * @param array:Array<T>  传入的数组
 * @returns boolean  是否都相等
 */
export function allEqual<T>(array: Array<T>): boolean {
  if (array.length === 0) {
    return true;
  }
  return array.every((v) => v === array[0]);
}

/**
 * @description 移除数组中值为false的元素
 * @date 2022-10-04
 * @param  arr:unknown[]  入参为一个数组
 * @returns unknown[]  出参为过滤后的数组
 */
export const compact = (arr: unknown[]) => arr.filter(Boolean);

/**
 * @description 统计数组中某个值出现的次数
 * @date 2022-10-04
 * @param  arr:unknown[]
 * @param  val:unknown
 * @returns number
 */
export const countOccurrences = (arr: unknown[], val: unknown): number => {
  return arr.reduce((a: number, v) => (v === val ? a + 1 : a), 0);
};

/**
 * @description 比较两个给定数组的差异，查找出前者数组在后者数组中不存在元素
 * @date 2022-10-04
 * @param a:Array<string|number>
 * @param b:Array<string|number>
 * @returns Array<string|number>
 * difference([1, 2, 3], [1, 2, 4]); ----> [3]
 */
export const difference = (
  a: Array<string | number>,
  b: Array<string | number>
) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

/**
 * @description 通过给定的函数来处理需要对比差异的数组，查找出前者数组在后者数组中不存在元素
 * @date 2022-10-04
 * @param  a:T[]
 * @param  b:T[]
 * @param  fn:(val:T)=>T
 * @returns T[]
 * // differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
 * // differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
 */
export function differenceBy<T>(a: T[], b: T[], fn: (val: T) => T) {
  const s = new Set(b.map(fn));
  return a.filter((x) => !s.has(fn(x)));
}

/**
 * @description 将给定的数组从左边开始删除 n 个元素,不改变原数组
 * @date 2022-10-04
 * @param array:unknown[]  源数组
 * @param n:number  删除元素的个数,默认为1
 * @returns unknown[]  返回删除的元素组成的数组
 */
export function drop(array: unknown[], n = 1) {
  return array.slice(n);
}

/**
 * @description 将给定的数组从右边开始删除 n 个元素,不改变原数组
 * @date 2022-10-04
 * @param array:unknown[]  源数组
 * @param n:number  删除元素的个数,默认为1
 * @returns unknown[]  返回删除的元素组成的数组
 */
export function dropRight(array: unknown[], n = 1) {
  return array.slice(0, -n);
}

/**
 * @description 数组去重
 * @date 2022-10-04
 * @param  array:T[]  源数组
 * @returns T[]  去重后的数组
 */
export function filterNonUnique<T>(array: T[]) {
  return [...new Set(array)];
}

/**
 * @description 按照指定数组的深度，将嵌套数组拍平
 * @date 2022-10-04
 * @param arr:any[]  源数组
 * @param depth=1    指定深度,默认为1
 * @return any[]  拍平后的数组
 */
export const flatten = (arr: any[], depth = 1): any[] =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

/**
 * @description 通过递归的形式，将多维数组展平成一维数组。
 * @date 2022-10-04
 * @param arr:any[]  源数组
 * @returns  any[]  拍平后的数组
 */
const deepFlatten = (arr: any[]): any[] =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

/**
 * @description 返回两个数组之间的交集
 * @date 2022-10-04
 * @param a:T[]  源数组a
 * @param b:T[]  源数组b
 * @returns T[]  两个数组之间的交集
 */
export function intersection<T>(a: T[], b: T[]) {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
}

/**
 * @description 判断元素是否是空数组
 * @date 2022-10-04
 * @param  params:any
 * @returns boolean
 */
export const isEmptyArray = (params: any): boolean => {
  return Array.isArray(params) && params.length == 0;
};

/**
 * @description 混淆数组(数组打乱排序)
 * @date 2022-10-04
 * @param array:T[] 源数组
 * @returns  T[]  乱序后的数组
 */
export function confuseArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * @description 统计数组成员个数
 * @date 2022-10-04
 * @param array:T[]  源数组
 * @returns Record<T,number>  数组中每个元素出现的次数
 * countMember([0, 1, 1, 2, 2, 2]) ----->  { 0: 1, 1: 2, 2: 3 }
 */
export function countMember<T>(array: T[]) {
  return array.reduce((t: any, v) => {
    t[v] = t[v] ? ++t[v] : 1;
    return t;
  }, {});
}
