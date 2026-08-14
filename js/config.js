// ========= CONFIG GLOBAL =========
window.ADL = {
  brand: {
    name: "Área de Lucha",
    tagline: "Domina tu Destino",
    logoHeader: "/assets/adl-iso-color-light.svg",
    logoFooter: "/assets/adl-logo-color-light.svg",
  },

  hero: {
    badgeText: "Domina tu Destino",
    badgeLiveText: "EN VIVO • Entrá al stream",
  },

  links: {
    youtube: "https://www.youtube.com/@areadelucha",
    kick: "https://kick.com/areadelucha",
    instagram: "https://www.instagram.com/areadelucha/?utm_source=ig_web_button_share_sheet",
    playlist: "https://www.youtube.com/watch?v=V-RS3uhtVWM&list=PLUdDS1WKQOBxZ8GaxVuiMTrzd2a2w6vdz",
  },

  episodes: [
    {
      title: "Episodio #1 — (título acá)",
      desc: "Resumen corto: de qué se habló, qué se analizó, etc.",
      href: "https://www.youtube.com/@areadelucha",
      img: "/assets/adl-iso-color-light.svg",
      tag: "YouTube",
    },
    {
      title: "Episodio #2 — (título acá)",
      desc: "Resumen corto con el gancho del episodio.",
      href: "https://www.youtube.com/@areadelucha",
      img: "/assets/adl-logo-color-light.svg",
      tag: "Análisis",
    },
    {
      title: "Clip / Reel — (título acá)",
      desc: "Clip destacado para enganchar a la gente.",
      href: "https://www.instagram.com/areadelucha/?utm_source=ig_web_button_share_sheet",
      img: "/assets/adl-iso-color-light.svg",
      tag: "Instagram",
    }
  ],

  team: [
    {
      id: "piero",
      name: "Piero Giovanny Saldaña Lopez",
      displayName: "Piero Saldaña",
      profession: "Licenciado en Kinesiología y Fisiatría",
      combat: "Profesor de Judo · 2º Dan · practicante de Jiu-Jitsu faixa azul",
      image: "/assets/team/piero-saldana.webp",
      instagram: "https://www.instagram.com/piero_gsl/",
      instagramLabel: "@piero_gsl",
      role: "Responsable del área técnica del stream: conectividad, audio, resolución de problemas de PC, armado y operación en OBS y gestión técnica de YouTube.",
      clinical: "Trabaja como kinesiólogo en Kineset, Banfield, con especial afinidad por la rehabilitación y el abordaje de pacientes vinculados al deporte.",
      hospital: "Integra el Hospital Especializado en Rehabilitación Dr. J. M. Jorge de Burzaco como residente de 4º año de Cuidados Progresivos y Rehabilitación Psicofísica. Su práctica incluye personas con ACV, lesión medular, traumatismo craneoencefálico y amputaciones.",
      personal: "Amante de los perros y de los animales. Su vida cruza el consultorio, el hospital, el tatami y la parte técnica que sostiene el programa detrás de cámara.",
      quote: "Me interesa entender cómo funcionan las cosas: el cuerpo, el entrenamiento y también la tecnología que hace posible el programa.",
    }
  ],

  contact: {
    email: "areadelucha@gmail.com",
    waNumber: "5491100000000",
    waDisplay: "+54 9 11 0000 0000",
  },

  live: {
    isLive: false,
    nextISO: "2026-02-07T19:00:00-03:00",
    timezoneLabel: "AR",
  },

  music: {
    enabled: false,
    src: "",
    volume: 0.22,
    storageKey: "adl_music_on",
  },
};

// ========= IDENTIDAD PUBLICA DURANTE LA CONSTRUCCION =========
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const constructionKicker = document.querySelector(".construction-kicker");
    if (constructionKicker) constructionKicker.textContent = window.ADL?.brand?.tagline || "Domina tu Destino";
  });
})();

// ========= NUEVA SECCIÓN EQUIPO (se desarrolla detrás de la pantalla de construcción) =========
(() => {
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "/css/team.css";
  document.head.appendChild(css);

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#sobre");
    const p = window.ADL?.team?.find((person) => person.id === "piero");
    if (!section || !p) return;

    section.className = "team-editorial anchor";
    section.innerHTML = `
      <div class="shell">
        <div class="team-head">
          <div>
            <span class="team-index">05 · EL EQUIPO</span>
            <h2>Detrás de<br>Área de Lucha.</h2>
          </div>
          <p>Tres perfiles distintos. Una misma mesa. El deporte de combate como punto de encuentro.</p>
        </div>

        <article class="member-feature" id="piero">
          <figure class="member-photo">
            <img src="${esc(p.image)}" alt="${esc(p.displayName)}" loading="lazy" decoding="async">
            <figcaption class="member-photo-tag">Integrante · Área de Lucha</figcaption>
          </figure>

          <div class="member-body">
            <div class="member-kicker"><b>01</b> Técnica · Kinesiología · Tatami</div>
            <h3 class="member-name">Piero<span>Saldaña</span></h3>
            <p class="member-title">${esc(p.profession)} · ${esc(p.combat)}</p>

            <p class="member-quote">“${esc(p.quote)}”</p>

            <div class="member-grid">
              <div class="member-block">
                <small>Kinesiología</small>
                <p>${esc(p.clinical)}</p>
              </div>
              <div class="member-block">
                <small>Rehabilitación</small>
                <p>${esc(p.hospital)}</p>
              </div>
            </div>

            <div class="member-role">
              <small>Rol en Área de Lucha</small>
              <p>${esc(p.role)}</p>
            </div>

            <div class="member-role">
              <small>Fuera de cámara</small>
              <p>${esc(p.personal)}</p>
            </div>

            <div class="member-meta">
              <div class="member-tags" aria-label="Áreas de Piero">
                <span>Kinesiología</span><span>Judo</span><span>Jiu-Jitsu</span><span>OBS</span><span>Audio</span>
              </div>
              <a class="member-instagram" href="${esc(p.instagram)}" target="_blank" rel="noopener">${esc(p.instagramLabel)} ↗</a>
            </div>
          </div>
        </article>

        <div class="team-coming" aria-label="Próximos integrantes">
          <article><span>02</span><div><h3>Fer</h3><p>Perfil en preparación</p></div></article>
          <article><span>03</span><div><h3>Diego</h3><p>Perfil en preparación</p></div></article>
        </div>
      </div>`;
  });
})();
