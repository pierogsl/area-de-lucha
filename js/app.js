(() => {
  const cfg = window.ADL;
  if (!cfg) return;

  // Helpers
  const $ = (sel) => document.querySelector(sel);
  const pad = (n) => String(n).padStart(2, "0");

  // Toast (mini aviso)
  const toastEl = $("#toast");
  let toastTimer = null;
  const toast = (msg, ms = 2200) => {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), ms);
  };

  // Año footer
  const yy = $("#yy");
  if (yy) yy.textContent = new Date().getFullYear();

  // Inyectar marca
  const brandName = $("#brandName");
  const brandTagline = $("#brandTagline");
  const brandLogo = $("#brandLogo");
  const footerLogo = $("#footerLogo");
  const footerText = $("#footerText");

  if (brandName) brandName.textContent = cfg.brand?.name || "Área de Lucha";
  if (brandTagline) brandTagline.textContent = cfg.brand?.tagline || "técnica · data · análisis";
  if (brandLogo && cfg.brand?.logoHeader) brandLogo.src = cfg.brand.logoHeader;
  if (footerLogo && cfg.brand?.logoFooter) footerLogo.src = cfg.brand.logoFooter;
  if (footerText) footerText.textContent = `${cfg.brand?.name || "Área de Lucha"} — ${cfg.brand?.tagline || "técnica · data · análisis"}`;

  // Hero badge
  const heroBadge = $("#heroBadgeText");
  if (heroBadge) {
    const liveOn = !!cfg.live?.isLive;
    heroBadge.textContent = liveOn
      ? (cfg.hero?.badgeLiveText || "EN VIVO • Entrá al stream")
      : (cfg.hero?.badgeText || "Técnica + Data + Análisis");
  }

  // Links (botones + cards + playlist)
  const mapLinks = [
    ["#btnYouTube", cfg.links?.youtube],
    ["#btnKick", cfg.links?.kick],
    ["#btnInstagram", cfg.links?.instagram],
    ["#btnPlaylist", cfg.links?.playlist],

    ["#cardYouTube", cfg.links?.youtube],
    ["#cardKick", cfg.links?.kick],
    ["#cardInstagram", cfg.links?.instagram],

    ["#liveKick", cfg.links?.kick],
    ["#liveYouTube", cfg.links?.youtube],

    ["#contactYouTube", cfg.links?.youtube],
    ["#contactKick", cfg.links?.kick],
    ["#contactInstagram", cfg.links?.instagram],
  ];

  mapLinks.forEach(([sel, href]) => {
    const el = $(sel);
    if (el && href) el.href = href;
  });

  // Contacto: mail + WA
  const waFab = $("#waFab");
  const contactWA = $("#contactWhatsApp");
  const waText = $("#waText");

  const waNum = cfg.contact?.waNumber || "";
  const waDisp = cfg.contact?.waDisplay || "";
  if (waNum) {
    const waHref = `https://wa.me/${waNum}`;
    if (waFab) waFab.href = waHref;
    if (contactWA) contactWA.href = waHref;
  }
  if (waText) waText.textContent = waDisp || "Configurar en /js/config.js";

  const contactEmail = $("#contactEmail");
  const emailText = $("#emailText");
  const mail = cfg.contact?.email || "";
  if (mail) {
    const emailHref = `mailto:${mail}`;
    if (contactEmail) contactEmail.href = emailHref;
    if (emailText) emailText.textContent = mail;
  } else {
    if (emailText) emailText.textContent = "Configurar en /js/config.js";
  }

  // Ajustar alto real del header (por si el nav crece)
  const headerEl = $("#siteHeader");
  const syncHeaderHeight = () => {
    const h = headerEl?.offsetHeight || 78;
    document.documentElement.style.setProperty("--headerH", `${h}px`);
  };
  window.addEventListener("load", syncHeaderHeight);
  window.addEventListener("resize", syncHeaderHeight);
  document.addEventListener("DOMContentLoaded", syncHeaderHeight);

  // ========= Episodios dinámicos =========
  const grid = $("#episodesGrid");
  const hint = $("#episodesHint");

  const renderEpisodes = () => {
    if (!grid) return;

    const eps = Array.isArray(cfg.episodes) ? cfg.episodes : [];
    if (eps.length === 0) {
      if (hint) hint.textContent = "Próximamente: destacados del canal";
      grid.innerHTML = `
        <div class="card"><h3>Destacado #1</h3><p>Acá va el link, miniatura y resumen.</p></div>
        <div class="card"><h3>Destacado #2</h3><p>Acá va el link, miniatura y resumen.</p></div>
        <div class="card"><h3>Destacado #3</h3><p>Acá va el link, miniatura y resumen.</p></div>
      `;
      return;
    }

    if (hint) hint.textContent = "Destacados del canal";
    grid.innerHTML = eps.slice(0, 6).map((e) => {
      const safeHref = e.href ? `href="${e.href}" target="_blank" rel="noopener"` : "";
      const wrapOpen = e.href ? `<a class="card linkCard" ${safeHref}>` : `<div class="card">`;
      const wrapClose = e.href ? `</a>` : `</div>`;
      const thumb = e.img ? `<img class="epThumb" src="${e.img}" alt="${e.title || "Episodio"}">` : "";
      const tag = e.tag ? `<div class="epTag">${e.tag}</div>` : "";

      return `
        ${wrapOpen}
          <div class="epRow">
            ${thumb}
            <div>
              <h3>${e.title || "Episodio"}</h3>
              <p>${e.desc || "Descripción del episodio."}</p>
              ${tag}
            </div>
          </div>
        ${wrapClose}
      `;
    }).join("");
  };

  renderEpisodes();

  // ========= Countdown =========
  const statusEl = $("#liveStatus");
  const bigEl = $("#liveBig");
  const noteEl = $("#liveNote");
  const out = { d: $("#d"), h: $("#h"), m: $("#m"), s: $("#s") };

  const parseTarget = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const targetDate = parseTarget(cfg.live?.nextISO);

  const setCountdownBlank = (msg) => {
    if (bigEl) bigEl.textContent = msg;
    ["d","h","m","s"].forEach((k) => out[k] && (out[k].textContent = "—"));
    if (statusEl) statusEl.textContent = "Falta configurar la fecha del próximo stream.";
    if (noteEl) noteEl.textContent = "Tip: editá /js/config.js y listo.";
  };

  const tick = () => {
    if (cfg.live?.isLive) {
      if (bigEl) bigEl.textContent = "¡EN VIVO!";
      ["d","h","m","s"].forEach((k) => out[k] && (out[k].textContent = "—"));
      if (statusEl) statusEl.textContent = "Estamos en vivo. Entrá a Kick o YouTube.";
      if (noteEl) noteEl.textContent = "Si no lo ves, refrescá (puede haber delay).";
      return;
    }

    if (!targetDate) return setCountdownBlank("Fecha no seteada");

    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    const opts = { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit" };
    const when = targetDate.toLocaleString("es-AR", opts);

    if (diff <= 0) {
      if (out.d) out.d.textContent = "00";
      if (out.h) out.h.textContent = "00";
      if (out.m) out.m.textContent = "00";
      if (out.s) out.s.textContent = "00";
      if (bigEl) bigEl.textContent = "¡Es ahora!";
      if (statusEl) statusEl.textContent = `Horario del stream: ${when} (${cfg.live?.timezoneLabel || "AR"}). Si ya arrancó, entrá a Kick o YouTube.`;
      if (noteEl) noteEl.textContent = "Si no está en vivo todavía, puede haber delay.";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if (out.d) out.d.textContent = String(days);
    if (out.h) out.h.textContent = pad(hours);
    if (out.m) out.m.textContent = pad(mins);
    if (out.s) out.s.textContent = pad(secs);

    if (bigEl) {
      bigEl.textContent = days > 0
        ? `${days} día${days === 1 ? "" : "s"} • ${pad(hours)}:${pad(mins)}:${pad(secs)}`
        : `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    }

    if (statusEl) statusEl.textContent = `Stream programado: ${when} (${cfg.live?.timezoneLabel || "AR"}).`;
    if (noteEl) noteEl.textContent = "Se actualiza automático para todos (global del sitio).";
  };

  tick();
  setInterval(tick, 1000);

  // ========= Volver arriba =========
  const topBtn = $("#topBtn");
  const onScroll = () => {
    if (!topBtn) return;
    if (window.scrollY > 380) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ========= Música (toggle, sin autoplay) =========
  const audio = $("#bgAudio");
  const musicBtn = $("#musicBtn");
  const musicTxt = $("#musicTxt");

  if (audio && cfg.music?.enabled) {
    audio.src = cfg.music.src;
    audio.volume = cfg.music.volume ?? 0.22;

    const KEY = cfg.music.storageKey || "adl_music_on";

    const setMusicUI = (on) => {
      if (musicTxt) musicTxt.textContent = on ? "Pausar" : "Música";
      musicBtn?.setAttribute("aria-label", on ? "Pausar música de fondo" : "Activar música de fondo");
    };

    const toggleMusic = async () => {
      const wantOn = !(localStorage.getItem(KEY) === "1");
      if (wantOn) {
        try {
          await audio.play();
          localStorage.setItem(KEY, "1");
          setMusicUI(true);
          toast("Música activada");
        } catch (_) {
          localStorage.setItem(KEY, "0");
          setMusicUI(false);
          toast("No se pudo reproducir. Revisá /assets/bg.mp3", 2800);
        }
      } else {
        audio.pause();
        localStorage.setItem(KEY, "0");
        setMusicUI(false);
        toast("Música pausada");
      }
    };

    setMusicUI(false);
    musicBtn?.addEventListener("click", toggleMusic);

    // Si ya estaba ON, intentamos levantarla al primer gesto del usuario
    const wasOn = (localStorage.getItem(KEY) === "1");
    if (wasOn) {
      const oneShot = async () => {
        try { await audio.play(); setMusicUI(true); } catch (_) { setMusicUI(false); }
      };
      window.addEventListener("pointerdown", oneShot, { once: true });
    }
  } else {
    if (musicBtn) musicBtn.style.display = "none";
  }
})();
