/**
 * @function 字符串隐藏指定位置的值替换成特定的字符
 * @param s {number} 开始索引 
 * @param l {number} 替换长度 
 * @param str {string} 字符串
 * @param tag {string} 替换标识符
 * @return {string} 替换后的字符串
 */
// 方法一
export function hidePhone( str:string,s:number=3, l:number=4,tag:string='*') {
  const arr = str.split('')
  const n = arr.splice(s, l)
  const nL = n.length
  if (nL === 0) {
      return str
  } else if (nL>0 && nL<5) {
      arr.splice(s, 0, ...n.fill(tag))
      return arr.join('')
  } else {
      arr.splice(s,0,...new Array(l).fill(tag))
      return arr.join('')
  }
}
// 方法二
export function hidePhone1(str: string| number, s: number = 3, l: number = 4, tag: string = '*') {
  const stringL = String(str)
  if (typeof stringL === 'string') {
    const sStr = stringL.substr(0,s)
    let mStr = stringL.substr(s, l)
    mStr = mStr.replace(/[\s\S]/g,tag)
    const eStr = stringL.substr(s + l)
    return `${sStr}${mStr}${eStr}`
  } else {
    return str
  }
}
