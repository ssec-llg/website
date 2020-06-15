export function debounce(callback, wait) {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}

export function scrollTo(elementId) {
  if (!process.browser) return
  const targetEl = document.getElementById(elementId)
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, null, `#${elementId}`);
  }
}

export function linkScrollTo(event) {
  const hash = event.target.hash
  const id = hash && hash.replace("#", '')
  id && scrollTo(id)
}