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

export const appTitle = derived(breakpoints, $bp => $bp.xs ? "Silampari Sriwijaya Eye Centre" : "SSEC")

export const navbar = (function createNavStore() {
  const init = {
    menuMobileShown: false,
    menuItems: [
      { name: "#service", title: "Pelayanan", active: false },
      { name: "#doctor", title: "Dokter", active: false },
      { name: "#schedule", title: "Jadwal", active: false },
      { name: "#contact", title: "Kontak", active: false },
      { name: "about", title: "Tentang", active: false },
    ]
  }
  const store = writable(init)

  function toggleMenuMobile() {
    store.update(p => ({ ...p, menuMobileShown: !p.menuMobileShown }))
  }

  function dismissMenuMobile() {
    store.update(p => ({ ...p, menuMobileShown: false }))
  }

  function setActiveMenu(name) {
    store.update(p => ({
      ...p,
      menuItems: p.menuItems.map(m => ({ ...m, active: m.name === name }))
    }))
  }

  return { ...store, toggleMenuMobile, dismissMenuMobile, setActiveMenu }
})()
