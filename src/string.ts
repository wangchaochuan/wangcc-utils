/**
 * @description 返回字符串的字节长度
 * 这里用到了Blob对象，Blob（Binary Large Object）对象代表了一段二进制数据，提供了一系列操作接口。其他操作二进制数据的API（比如File对象），都是建立在Blob对象基础上的，继承了它的属性和方法。
 * 生成Blob对象有两种方法：一种是使用Blob构造函数，另一种是对现有的Blob对象使用slice方法切出一部分。
 * @date 2022-10-04
 * @param  str:string
 * @returns number
 */
export const byteSize = (str: string): number => new Blob([str]).size;

/**
 * @description 将字符串的首字母转成大写
 * @date 2022-10-04
 * @param  str:string  源字符串
 * @returns string  转换后的字符串
 */
export const capitalize = (str: string): string => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

// 10、将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
/**
 * @description 将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
 * @date 2022-10-04
 * @param str:string
 * @returns string
 */
export const capitalizeEveryWord = (str: string) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

