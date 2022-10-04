/* 正则表达式相关 */

/**
 * @description 获取名称通用正则表达式,仅支持汉字、数字、大小写字母、下划线
 * @date 2022-10-04
 * @param min:number  最小长度,默认为1
 * @param max:number  最大长度,默认为20
 * @returns RegExp  返回的正则表达式
 */
export const getNameRegexp = (min = 1, max = 20) => {
  return new RegExp(`^[\u4e00-\u9fa5_a-zA-Z0-9]{${min},${max}}$`);
};


