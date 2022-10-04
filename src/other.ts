/**
 * @description 比较两个对象，以确定第一个对象是否包含与第二个对象相同的属性与值
 * @date 2022-10-04
 * @param {any} target:{ [k: string]: unknown }
 * @param {any} source:{ [k: string]: unknown }
 * @returns boolean
 */
export const matches = (
  target: { [k: string]: unknown },
  source: { [k: string]: unknown }
): boolean =>
  Object.keys(source).every(
    (key) => target.hasOwnProperty(key) && target[key] === source[key]
  );
