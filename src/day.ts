// 日期相关工具函数
/**
 * @description 返回传入的日期是今年的第几天,如果不传入参数则默认是传入的是当前日期
 * @date 2022-10-04
 * @param date?:Date|string  传入的日期
 * @returns number
 */
export const dayOfYear = (date?: Date | string): number => {
  let formatDate = null;
  if (!date) {
    formatDate = new Date();
  } else {
    formatDate = typeof date === "string" ? new Date(date) : date;
  }
  // 如果传入的是无效的字符串,那么就默认是当前日期
  if (!formatDate.getFullYear) {
    formatDate = new Date();
  }
  const year = formatDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 0);
  const timeGap = formatDate.getTime() - firstDayOfYear.getTime();
  return Math.floor(timeGap / 1000 / 60 / 60 / 24);
};

/**
 * @description 计算停留时间,格式化成x天x小时x分这种形式
 * @date 2022-10-04
 * @param startTime:number  开始时间时间戳
 * @returns string
 */
export function getStayTime(startTime: number): string {
  const now = Date.now();
  const stayTime = now - startTime;
  const dayTime = 1000 * 60 * 60 * 24;
  const hourTime = 1000 * 60 * 60;
  const minuteTime = 1000 * 60;
  const days = Math.floor(stayTime / dayTime);
  const hours = Math.floor((stayTime - days * dayTime) / hourTime);
  const minutes = Math.floor(
    (stayTime - days * dayTime - hours * hourTime) / minuteTime
  );
  let result = "";
  if (days > 0) {
    result += `${days}天`;
    if (hours === 0) {
      result += "0小时";
    }
  }
  if (hours > 0) {
    result += `${hours < 10 ? "0" + hours : hours}小时`;
  }
  if (minutes > 0) {
    result += `${minutes < 10 ? "0" + minutes : minutes}分`;
  } else {
    result += "0分";
  }
  return result;
}

export function formatTime(time: number) {
  return time < 10 ? `0${time}` : `${time}`;
}

// 格式化时间为几分钟前这种格式
/**
 * @description 格式化时间:一分钟内的，显示刚刚;一小时内的,显示xx分钟前;1-24小时内的，显示XX小时前;昨天发起的，显示昨天 时:分;前天发起的，显示前天 时:分;超过前天的，显示年-月-日 时:分
 * @date 2022-10-04
 * @param startTime:number  开始时间时间戳
 * @returns string
 */
export function getPassedTime(startTime: number): string {
  const now = Date.now();
  const passedTime = now - startTime;
  const dayTime = 1000 * 60 * 60 * 24;
  const hourTime = 1000 * 60 * 60;
  const minuteTime = 1000 * 60;
  const startDate = new Date(startTime);
  const year = startDate.getFullYear();
  const month = formatTime(startDate.getMonth() + 1);
  const day = formatTime(startDate.getDate());
  const hour = formatTime(startDate.getHours());
  const minutes = formatTime(startDate.getMinutes());
  // 一分钟内的，显示刚刚
  if (passedTime < minuteTime) {
    return "刚刚";
  }
  // 一小时内的,显示xx分钟前
  if (passedTime < hourTime) {
    return `${Math.floor(passedTime / minuteTime)}分钟前`;
  }
  // 1-24小时内的，显示XX小时前
  if (passedTime < dayTime) {
    return `${Math.floor(passedTime / hourTime)}小时前`;
  }
  // 昨天发起的，显示昨天 时:分；
  if (passedTime >= 0 && passedTime < dayTime) {
    const time = `${hour}:${minutes}`;
    return `昨天 ${time}`;
  }
  // 前天发起的，显示前天 时:分；
  if (passedTime >= dayTime && passedTime < 2 * dayTime) {
    const time = `${hour}:${minutes}`;
    return `前天 ${time}`;
  }
  // 超过前天的，显示年-月-日 时:分
  if (passedTime >= 3 * dayTime) {
    return `${year}-${month}-${day} ${hour}:${minutes}`;
  }
  return ""
}
