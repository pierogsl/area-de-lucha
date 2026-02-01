(() => {
  const cfg = window.ADL;
  if (!cfg) return;

  // Helpers
  const $ = (sel) => document.querySelector(sel);
  const pad = (n) => String(n).padStart(2, "0");

  // Año footer
  const yy = $("#yy");
  if (yy) yy.textContent = new Date().getFullYear();

  // Inyectar marca
  const brandName = $("#brandName");
  const brandTagline = $("#brandTagline");
  const brandLogo = $("#brandLogo");
  const footerLogo = $("#footerLogo");
  const footerText = $("#footerText");

  if (brandName) brandName.textContent = cfg.brand.name;
  if (brandTagline) brandTagline.textContent = cfg.brand.tagline;
  if (brandLogo) brandLogo.src = cfg.brand.logoHeader;
  if (footerLogo) footerLogo.src = cfg.brand.logoFooter;
  if (footerText) footerText.textContent = `${cfg.brand.name} — ${cfg.brand.tagline}`;

  // Links (botones + cards + playlist)
  const mapLinks = [
    ["#btnYouTube", cfg.links.youtube],
    ["#btnKick", cfg.links.kick],
    ["#btnInstagram", cfg.links.instagram],
    ["#btnPlaylist", cfg.links.playlist],

    ["#cardYouTube", cfg.links.youtube],
    ["#cardKick", cfg.links.kick],
    ["#cardInstagram", cfg.links.instagram],

    ["#liveKick", cfg.links.kick],
    ["#liveYouTube", cfg.links.youtube],

    ["#contactYouTube", cfg.links.youtube],
    ["#contactKick", cfg.links.kick],
    ["#contactInstagram", cfg.links.instagram],
  ];

  mapLinks.forEach(([sel, href]) => {
    const el = $(sel);
    if (el && href) el.href = href;
  });

  // Contacto: mail + WA
  const waHref = `https://wa.me/${cfg.contact.waNumber}`;
  const waFab = $("#waFab");
  const contactWA = $("#contactWhatsApp");
  const waText = $("#waText");

  if (waFab) waFab.href = waHref;
  if (contactWA) contactWA.href = waHref;
  if (waText) waText.textContent = cfg.contact.waDisplay;

  const emailHref = `mailto:${cfg.contact.email}`;
  const contactEmail = $("#contactEmail");
  const emailText = $("#emailText");
  if (contactEmail) contactEmail.href = emailHref;
  if (emailText) emailText.textContent = cfg.contact.email;

  // Ajustar alto real del header
  const headerEl = $("#siteHeader");
  const syncHeaderHeight = () => {
    const h = headerEl?.offsetHeight || 78;
    document.documentElement.style.setProperty("--headerH", `${h}px`);
  };
  window.addEventListener("load", syncHeaderHeight);
  window.addEventListener("resize", syncHeaderHeight);

  // ========= Countdown =========
  const statusEl = $("#liveStatus");
  const bigEl = $("#liveBig");
  const noteEl = $("#liveNote");

  const out = { d: $("#d"), h: $("#h"), m: $("#m"), s: $("#s") };

  const parseTarget = (iso) => {
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const targetDate = parseTarget(cfg.live.nextISO);

  const setCountdownBlank = (msg) => {
    if (bigEl) bigEl.textContent = msg;
    ["d", "h", "m", "s"].forEach((k) => out[k] && (out[k].textContent = "—"));
    if (statusEl) statusEl.textContent = "Falta configurar la fecha del próximo stream.";
    if (noteEl) noteEl.textContent = "Tip: editá /js/config.js y listo.";
  };

  const tick = () => {
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
      if (statusEl) statusEl.textContent = `Horario del stream: ${when} (${cfg.live.timezoneLabel}). Si ya arrancó, entrá a Kick o YouTube.`;
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

    if (statusEl) statusEl.textContent = `Stream programado: ${when} (${cfg.live.timezoneLabel}).`;
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
        } catch (e) {
          localStorage.setItem(KEY, "0");
          setMusicUI(false);
          alert("No se pudo reproducir la música. Verificá que exista /assets/bg.mp3 y sea un archivo válido.");
        }
      } else {
        audio.pause();
        localStorage.setItem(KEY, "0");
        setMusicUI(false);
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
    // si música deshabilitada, ocultamos botón
    if (musicBtn) musicBtn.style.display = "none";
  }
})();
