import { writable, derived } from 'svelte/store'

export const windowWidth = writable(0)

export const breakpoints = derived(windowWidth, $w => ({
  all: $w >= 0 && $w <= Number.POSITIVE_INFINITY,
  xs: $w >= 480,
  sm: $w >= 640,
  md: $w >= 768,
  lg: $w >= 1024,
  xl: $w >= 1280
}))

export const navbar = (function createNavStore() {
  const init = {
    menuMobileShown: false
  }
  const store = writable(init)
  return {
    ...store,
    toggleMenuMobile: () => store.update(p => ({ ...p, menuMobileShown: !p.menuMobileShown }))
  }
})()