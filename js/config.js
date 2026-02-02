// ========= CONFIG GLOBAL (editás SOLO esto) =========
window.ADL = {
  brand: {
  name: "Área de Lucha",
  tagline: " · análisis tecnico · debates · mucho mas ",
  logoHeader: "/assets/logo-round-512.png",
  logoFooter: "/assets/logo-round-256.png",
  },

  hero: {
    badgeText: "Técnica + Data + Análisis",
    badgeLiveText: "EN VIVO • Entrá al stream",
  },

  links: {
    youtube: "https://www.youtube.com/@areadelucha",
    kick: "https://kick.com/areadelucha",
    instagram: "https://www.instagram.com/areadelucha/?utm_source=ig_web_button_share_sheet",
    playlist: "https://www.youtube.com/watch?v=V-RS3uhtVWM&list=PLUdDS1WKQOBxZ8GaxVuiMTrzd2a2w6vdz",
  },

  // ✅ Episodios destacados (máx. 6 se muestran)
  // img: opcional (miniatura). Si no ponés img, se ve solo texto.
  episodes: [
    {
      title: "Episodio #1 — (título acá)",
      desc: "Resumen corto: de qué se habló, qué se analizó, etc.",
      href: "https://www.youtube.com/@areadelucha",
      img: "/assets/2.png",
      tag: "YouTube",
    },
    {
      title: "Episodio #2 — (título acá)",
      desc: "Resumen corto con el gancho del episodio.",
      href: "https://www.youtube.com/@areadelucha",
      img: "/assets/3.png",
      tag: "Análisis",
    },
    {
      title: "Clip / Reel — (título acá)",
      desc: "Clip destacado para enganchar a la gente.",
      href: "https://www.instagram.com/areadelucha/?utm_source=ig_web_button_share_sheet",
      img: "/assets/1.jpeg",
      tag: "Instagram",
    }
  ],

  contact: {
    email: "areadelucha@gmail.com",
    // WhatsApp: formato internacional SIN +, con código país (AR = 54) + 9 + código área + número
    // Ejemplo real: "54911XXXXXXXX"
    waNumber: "5491100000000",
    waDisplay: "+54 9 11 0000 0000",
  },

  live: {
    // Si están en vivo, poné isLive:true (y listo, no hace countdown)
    isLive: false,

    // Próximo stream en formato ISO con zona -03:00 (Argentina)
    // Ejemplo: "2026-02-01T21:00:00-03:00"
    nextISO: "2026-02-07T19:00:00-03:00",
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
