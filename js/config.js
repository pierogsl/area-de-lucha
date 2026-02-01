// ========= CONFIG GLOBAL (editás SOLO esto) =========
window.ADL = {
  brand: {
    name: "Área de Lucha",
    tagline: "técnica · data · análisis",
    logoHeader: "/assets/2.png",
    logoFooter: "/assets/3.png",
  },

  links: {
    youtube: "https://www.youtube.com/@areadelucha",
    kick: "https://kick.com/areadelucha",
    instagram: "https://www.instagram.com/areadelucha/?utm_source=ig_web_button_share_sheet",
    playlist: "https://www.youtube.com/watch?v=V-RS3uhtVWM&list=PLUdDS1WKQOBxZ8GaxVuiMTrzd2a2w6vdz",
  },

  contact: {
    email: "areadelucha@gmail.com",
    // WhatsApp: formato internacional SIN +, con código país (AR = 54) + código área + número
    waNumber: "5491100000000",
    waDisplay: "+54 9 11 0000 0000",
  },

  live: {
    // Poné la fecha del próximo stream en formato ISO con zona -03:00 (Argentina)
    // Ejemplo: "2026-02-01T21:00:00-03:00"
    nextISO: "2026-01-30T19:00:00-03:00",
    timezoneLabel: "AR",
  },

  music: {
    enabled: true,
    // Si no querés música, poné enabled:false
    src: "/assets/bg.mp3",
    volume: 0.22,
    storageKey: "adl_music_on",
  },
};
