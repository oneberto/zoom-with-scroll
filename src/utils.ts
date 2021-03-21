export function getScrollPercentage() {
  const windowHeight =
    window?.innerHeight ||
    document?.documentElement?.clientHeight ||
    document?.body?.clientHeight ||
    0;

  const getWindowYScroll =
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop ||
    0;

  const docHeight = Math.max(
    document.body.scrollHeight || 0,
    document.documentElement?.scrollHeight || 0,
    document.body.offsetHeight || 0,
    document.documentElement?.offsetHeight || 0,
    document.body.clientHeight || 0,
    document.documentElement?.clientHeight || 0
  );

  return ((getWindowYScroll + windowHeight) / docHeight) * 100;
}

export function formatToWholeNumber(value: number) {
  if (value < 0) {
    return 0;
  }

  if (value > 1) {
    return 1;
  }

  return value;
}
