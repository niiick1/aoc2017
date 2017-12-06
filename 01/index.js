const captchaFn = (captcha, steps) => {
  const captchaArray = captcha.split(''),
    lastIndex = captchaArray.length - 1

  if (!steps) {
    steps = captchaArray.length / 2
  }

  return captchaArray.reduce((sum, digit, idx) => {
    let nextIndex = idx + steps

    if (nextIndex > lastIndex) {
      nextIndex -= captchaArray.length
    }

    const nextDigit = captchaArray[nextIndex]

    if (digit === nextDigit) {
      sum += parseInt(digit, 10)
    }

    return sum
  }, 0)
}

module.exports = {
  captcha01: captcha => captchaFn(captcha, 1),
  captcha02: captcha => captchaFn(captcha)
}