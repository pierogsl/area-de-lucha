(() => {
  const cfg = window.ADL || {};
  const home = cfg.home || {};
  const $ = (s) => document.querySelector(s);

  const currentProgram = 'https://www.youtube.com/live/eW1pDaidU-8?si=Vy9XLRtEymjgnfg7';
  const previousProgram = 'https://www.youtube.com/live/Z8iFdiO1k18?si=LxXFPu6ftvnOgxy9';
  const leftCombatYouTube = 'https://youtu.be/bQ7E1sBCKlg?si=628JmoHgE8FNL74u';
  const leftCombatReels = [
    'https://www.instagram.com/reel/DbXHaNsu7rU/?igsh=MTZxbjZoOGxzYW96bw==',
    'https://www.instagram.com/reel/DbVnDuxuhFZ/?igsh=MWR0cW5wbmY3bGpkMQ==',
    'https://www.instagram.com/reel/DbYktXjRI-Z/?igsh=MWhzbGxza2c3MDQ3dw=='
  ];

  if (cfg.contact) cfg.contact.email = 'areadelucha@gmail.com';

  const diego = Array.isArray(cfg.team) ? cfg.team.find((person) => person.id === 'diego') : null;
  if (diego) {
    diego.firstName = 'Diego Alejandro';
    diego.lastName = 'Escoda';
    diego.name = 'Diego Alejandro Escoda';
    diego.displayName = 'Diego Escoda';
    diego.nickname = 'El Cule';
  }

  // Navigation: keep only sections that already have a clear purpose.
  const nav = document.querySelector('.main-nav');
  if (nav) {
    nav.innerHTML = `
      <a href="#inicio">Inicio</a>
      <a href="#que-es">Qué es ADL</a>
      <a href="#episodios">Último programa</a>
      <a href="#envivo">Próximo</a>
      <a href="#coberturas">Coberturas</a>
      <a href="#sobre">Equipo</a>
      <a class="nav-cta" href="#contacto">Contacto</a>`;
  }

  // Hero
  const heroTitle = $('#heroTitle');
  const heroSubtitle = $('#heroSubtitle');
  const heroBadge = $('#heroBadgeText');
  if (heroBadge) heroBadge.textContent = cfg.brand?.tagline || 'Domina tu Destino';
  if (heroTitle) heroTitle.innerHTML = 'El deporte contado<br><span>por quienes lo viven.</span>';
  if (heroSubtitle) heroSubtitle.textContent = 'Un programa de streaming para conocer disciplinas, historias y personas: atletas, entrenadores y profesionales del deporte y la salud, desde el amateur hasta el alto rendimiento.';

  const heroActions = document.querySelector('.hero-actions');
  if (heroActions) {
    heroActions.innerHTML = `
      <a class="button button-primary" href="${previousProgram}" target="_blank" rel="noopener">Ver último programa</a>
      <a class="button button-outline" href="${cfg.links?.youtube || 'https://www.youtube.com/@areadelucha'}" target="_blank" rel="noopener">YouTube</a>
      <a class="button button-text" href="${cfg.links?.instagram || 'https://www.instagram.com/areadelucha/'}" target="_blank" rel="noopener">Instagram ↗</a>
      <a class="button button-kick" href="${cfg.links?.kick || 'https://kick.com/areadelucha'}" target="_blank" rel="noopener">Kick</a>`;
  }

  const disciplineRow = document.querySelector('.discipline-row');
  if (disciplineRow) disciplineRow.innerHTML = '<span>Deporte</span><i></i><span>Historias</span><i></i><span>Salud</span><i></i><span>Rendimiento</span>';

  const panelKicker = document.querySelector('.panel-kicker');
  const panelCopy = document.querySelector('.panel-copy');
  const panelLink = document.querySelector('.hero-panel .text-link');
  if (panelKicker) panelKicker.textContent = 'PROGRAMA DE STREAMING';
  if (panelCopy) panelCopy.textContent = 'Invitados que viven el deporte desde lugares distintos: atletas, entrenadores y profesionales que aportan experiencia, conocimiento e historias reales.';
  if (panelLink) {
    panelLink.href = '#que-es';
    panelLink.removeAttribute('target');
    panelLink.innerHTML = 'Conocer Área de Lucha <span>↓</span>';
  }

  // About section
  const episodes = $('#episodios');
  if (episodes && !$('#que-es')) {
    const about = document.createElement('section');
    about.id = 'que-es';
    about.className = 'home-about anchor';
    about.innerHTML = `
      <div class="shell home-about-grid">
        <div>
          <span class="home-label">Qué es Área de Lucha</span>
          <h2>Aprender<br>del deporte.</h2>
        </div>
        <div class="home-about-copy">
          <p>Área de Lucha es un programa de streaming dedicado a conocer el deporte desde adentro, disciplina por disciplina y persona por persona.</p>
          <p>Nacimos muy ligados a los deportes de combate, pero el programa no se limita a ellos. Nuestro fuerte son los invitados: deportistas en actividad, ex deportistas, entrenadores y profesionales de la salud o del rendimiento vinculados a cada disciplina. Nos interesa escuchar tanto al amateur que está construyendo su camino como al atleta profesional que compite al máximo nivel.</p>
          <div class="home-pill-row"><span>Atletas</span><span>Entrenadores</span><span>Salud</span><span>Rendimiento</span><span>Amateur</span><span>Alto rendimiento</span></div>
        </div>
      </div>`;
    episodes.parentNode.insertBefore(about, episodes);
  }

  // Latest program
  if (episodes) {
    const latest = home.latest || {};
    episodes.className = 'home-latest anchor';
    episodes.innerHTML = `
      <div class="shell">
        <div class="home-feature">
          <div class="home-feature-art">
            <small>Área de Lucha · Último programa</small>
            <img src="/assets/adl-iso-color-light.svg" alt="Área de Lucha" aria-hidden="true">
          </div>
          <div class="home-feature-copy">
            <span class="home-kicker">Último programa</span>
            <h2>${latest.firstName || 'Antonella'}<span>${latest.lastName || 'Lasorsa'}</span></h2>
            <p class="home-feature-role">${latest.role || 'Atleta Wellness · NPC'}</p>
            <p class="home-feature-desc">${latest.description || 'Una conversación sobre fisicoculturismo, preparación, competencia y la experiencia de vivir el deporte desde la categoría Wellness.'}</p>
            <div class="home-feature-actions">
              <a class="button button-primary" href="${previousProgram}" target="_blank" rel="noopener">Ver en YouTube</a>
              <a class="button button-outline" href="${cfg.links?.youtube || 'https://www.youtube.com/@areadelucha'}" target="_blank" rel="noopener">Ir al canal</a>
            </div>
          </div>
        </div>
      </div>`;
  }

  // Platforms: small copy corrections to reflect current scope.
  const platformCopies = document.querySelectorAll('.platform-card p');
  if (platformCopies[0]) platformCopies[0].textContent = 'Programas completos, entrevistas, coberturas, clips y especiales.';
  if (platformCopies[1]) platformCopies[1].textContent = 'El programa en vivo y las conversaciones completas.';
  if (platformCopies[2]) platformCopies[2].textContent = 'Reels, backstage, coberturas, invitados y anuncios.';

  // Next program. Keep countdown nodes intact because app.js updates them every second.
  const live = $('#envivo');
  if (live) {
    const next = home.next || {};
    const liveTitle = live.querySelector('.live-copy h2');
    if (liveTitle) liveTitle.innerHTML = 'Próximo<br>programa.';
    const status = live.querySelector('#liveStatus');
    if (status) status.textContent = 'Sábado 15/08 · 20 hs · Horario Argentina';
    const liveActions = live.querySelector('.live-actions');
    if (liveActions && !live.querySelector('.home-next-card')) {
      const card = document.createElement('div');
      card.className = 'home-next-card';
      card.innerHTML = `
        <small>Próximo invitado</small>
        <h3>${next.name || 'Ramiro Díaz Suguer'}</h3>
        <p><strong>${next.role || 'Psicólogo Deportivo'}</strong><br>${next.organization || 'Club Social y Deportivo Miriñaque'}</p>`;
      liveActions.parentNode.insertBefore(card, liveActions);
    }
    const kick = live.querySelector('#liveKick');
    const youtube = live.querySelector('#liveYouTube');
    if (kick) {
      kick.textContent = 'Ver en Kick';
      kick.href = cfg.links?.kick || 'https://kick.com/areadelucha';
    }
    if (youtube) {
      youtube.textContent = 'Ver programa de hoy';
      youtube.href = currentProgram;
    }
  }

  // Coverage section
  const platforms = $('#plataformas');
  if (platforms && !$('#coberturas')) {
    const coverage = document.createElement('section');
    coverage.id = 'coberturas';
    coverage.className = 'home-coverage anchor';
    coverage.innerHTML = `
      <div class="shell">
        <div class="home-coverage-head">
          <div><span class="home-label">Fuera del estudio</span><h2>Coberturas.</h2></div>
          <p>Área de Lucha también sale a buscar historias, competencias y protagonistas donde sucede el deporte.</p>
        </div>
        <div class="coverage-grid">
          <article class="coverage-card">
            <span class="coverage-index">01 · COBERTURA RECIENTE</span>
            <div>
              <div class="coverage-kicker">Evento</div>
              <h3>Left<br>Combat.</h3>
              <p>Nuestra cobertura más reciente fuera del estudio. Mirá el video principal en YouTube y las notas y momentos destacados en Instagram.</p>
              <div class="coverage-links">
                <a href="${leftCombatYouTube}" target="_blank" rel="noopener">Video en YouTube ↗</a>
                <a href="${leftCombatReels[0]}" target="_blank" rel="noopener">Reel 01 ↗</a>
                <a href="${leftCombatReels[1]}" target="_blank" rel="noopener">Reel 02 ↗</a>
                <a href="${leftCombatReels[2]}" target="_blank" rel="noopener">Reel 03 ↗</a>
              </div>
            </div>
          </article>
          <article class="coverage-card">
            <span class="coverage-index">02 · HOY EN EL DOJO</span>
            <div>
              <div class="coverage-kicker">Visita especial · Lotus BJJ</div>
              <h3>Ryan Martinez<br>+ Camila Reynoso.</h3>
              <p>Hoy visitan Lotus BJJ en el Club El Porvenir de Gerli, dojo a cargo del Mestre faixa preta Leandro Márquez. Área de Lucha va a estar ahí para conversar y generar contenido desde el lugar donde también entrenamos.</p>
              <div class="coverage-links"><a href="${cfg.links?.instagram || '#'}" target="_blank" rel="noopener">Seguir en Instagram ↗</a></div>
            </div>
          </article>
        </div>
      </div>`;
    platforms.parentNode.insertBefore(coverage, platforms);
  }

  // Merch is intentionally out of the current navigation and development focus.
  const merch = $('#merch');
  if (merch) merch.setAttribute('aria-hidden', 'true');

  // Reserva visual para una futura foto de los tres integrantes y limpieza de contacto.
  const placeholderCss = document.createElement('style');
  placeholderCss.textContent = `
    .team-group-placeholder{min-height:360px;margin:0 0 24px;border:1px dashed rgba(0,0,0,.28);display:grid;place-items:center;background:linear-gradient(135deg,rgba(0,223,252,.06),rgba(230,0,126,.06)),#ececea;text-align:center;padding:32px;overflow:hidden;position:relative}
    .team-group-placeholder::before{content:"";position:absolute;width:180px;height:3px;background:linear-gradient(90deg,#00dffc 0 50%,#e6007e 50%);top:50%;left:50%;transform:translate(-50%,-50%) rotate(-58deg);opacity:.55}
    .team-group-placeholder-inner{position:relative;z-index:1;max-width:520px}
    .team-group-placeholder small{display:block;color:#e6007e;font-size:.65rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;margin-bottom:14px}
    .team-group-placeholder strong{display:block;font-size:clamp(2rem,5vw,4.8rem);line-height:.88;letter-spacing:-.06em;text-transform:uppercase}
    .team-group-placeholder p{margin:16px auto 0;max-width:420px;color:#666;line-height:1.55;font-size:.88rem}
    @media(max-width:640px){.team-group-placeholder{min-height:280px}}
  `;
  document.head.appendChild(placeholderCss);

  document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelector('.team-editorial .team-members');
    if (teamMembers && !document.querySelector('.team-group-placeholder')) {
      const placeholder = document.createElement('div');
      placeholder.className = 'team-group-placeholder';
      placeholder.innerHTML = `
        <div class="team-group-placeholder-inner">
          <small>Foto grupal · espacio reservado</small>
          <strong>Piero · Fer · El Cule</strong>
          <p>Este bloque queda preparado para incorporar una foto de los tres integrantes cuando la tengan.</p>
        </div>`;
      teamMembers.parentNode.insertBefore(placeholder, teamMembers);
    }

    const emailLink = document.querySelector('#contactEmail');
    const emailText = document.querySelector('#emailText');
    if (emailLink) emailLink.href = 'mailto:areadelucha@gmail.com';
    if (emailText) emailText.textContent = 'areadelucha@gmail.com';

    // No publicamos un WhatsApp de ejemplo mientras no exista un número oficial confirmado.
    const wa = document.querySelector('#contactWhatsApp');
    if (wa) wa.remove();
  });
})();
