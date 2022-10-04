/* 数字相关工具函数 */

/**
 * @description 判断两个数字是否近似相等
 * @date 2022-10-04
 * @param num1:number  数字1
 * @param num2:number  数字2
 * @param epsilon?:number  精度,如不传则默认为0.001
 * @returns boolean
 */
export const approximatelyEqual = (
  num1: number,
  num2: number,
  epsilon?: number
): boolean => {
  const gap = epsilon ?? 0.001;
  return Math.abs(num1 - num2) < gap;
};

/**
 * @description 生成一个(min,max)范围内的随机数
 * @date 2022-10-04
 * @param  min:number  最小值
 * @param  max:number  最大值
 * @returns number  生成的随机值
 */
export const RandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * @description 计算两个或多个数的平均数
 * @date 2022-10-04
 * @param number  入参为一个或多个数字
 * @returns number 出参为平均数
 */
export const average = (...nums: number[]): number => {
  if (nums.length === 0) return 0;
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};

type TPoint = {
  x: number;
  y: number;
};

/**
 * @description 计算两点之间的距离
 * @date 2022-10-04
 * @param  pointA:TPoint
 * @param  pointB:TPoint
 * @returns number
 */
export const distance = (pointA: TPoint, pointB: TPoint): number => {
  const { x: x0, y: y0 } = pointA;
  const { x: x1, y: y1 } = pointB;
  return Math.hypot(x1 - x0, y1 - y0);
};

/**
 * @description 格式化金钱
 * @date 2022-10-04
 * @param num:number
 * @returns string
 * const money = ThousandNum(20190214);---> money => "20,190,214"
 */
export const thousandNum = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * @description 生成n位随机字符串
 * @date 2022-10-04
 * @param n=8 随机字符串的位数,默认为8位
 * @returns string
 */
export const randomId = (n = 8): string => {
  return Math.random()
    .toString(36)
    .slice(3, 3 + n);
};

/**
 * @description 生成随机HEX色值
 * @date 2022-10-04
 * @returns string  随机HEX色值;如"#f03665"
 */
export const randomColor = (): string => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
};

/**
 * @description 生成星级评分
 * @date 2022-10-04
 * @param rate:number  1<=rate<=5
 * @returns string
 */
export const startScore = (rate: number): string =>
  "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);

/**
 * @description 判断给定的字符串是否是 JSON 字符串
 * @date 2022-10-04
 * @param str:string
 * @returns boolean
 */
export const isValidJSON = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * @description 求一个字符串的字节长度，假设：一个英文字符占用一个字节，一个中文字符占用两个字节
 * @date 2022-10-04
 * @param str:string
 * @returns number
 */
export function getBytes(str: string): number {
  let len = str.length;
  let bytes = len;
  for (let i = 0; i < len; i++) {
    if (str.charCodeAt(i) > 255) {
      bytes++;
    }
  }
  return bytes;
}
