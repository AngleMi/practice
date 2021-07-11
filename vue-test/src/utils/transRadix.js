export function transRadix (num, radix = 64, precision = 2) {
  const chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~'.split('')
  const sign = num < 0 ? -1 : 1
  let decimal = (sign * num) % 1 // 取小数部分
  let integer = sign * num - decimal // 取整数部分
  let mod; let tmp; const arrInt = []; const arrDec = []

  while (integer > 0) {
    mod = integer % radix
    console.log(mod, 'mod')
    integer = (integer - mod) / radix
    arrInt.unshift(chars[mod])
  }
  while (precision > 0) {
    // 处理小数部分
    decimal = decimal * radix
    if (decimal >= 1) {
      tmp = decimal % 1
      mod = decimal - tmp // 取整
      decimal = tmp
    }
    arrDec.push(chars[mod])
    --precision
  }
  arrInt.length === 0 && arrInt.push(0)
  const strSign = sign > 0 ? '' : '-'
  const strArrInt = arrInt.join('')
  const strArrDec = `.${arrDec.join('')}`
  return strSign + strArrInt + strArrDec
}
