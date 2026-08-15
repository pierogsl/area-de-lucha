(() => {
  const cfg = window.ADL || {};
  const home = cfg.home || {};
  const $ = (s) => document.querySelector(s);

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
      <a class="button button-primary" href="${home.latest?.href || 'https://www.youtube.com/@areadelucha/videos'}" target="_blank" rel="noopener">Ver último programa</a>
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
              <a class="button button-primary" href="${latest.href || 'https://www.youtube.com/@areadelucha/videos'}" target="_blank" rel="noopener">Ver en YouTube</a>
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
    if (kick) kick.textContent = 'Ver en Kick';
    if (youtube) youtube.textContent = 'Ver en YouTube';
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
              <p>Nuestra cobertura más reciente fuera del estudio. El material completo y los clips quedan repartidos entre YouTube e Instagram.</p>
              <div class="coverage-links"><a href="${cfg.links?.youtube || '#'}" target="_blank" rel="noopener">YouTube ↗</a><a href="${cfg.links?.instagram || '#'}" target="_blank" rel="noopener">Reels ↗</a></div>
            </div>
          </article>
          <article class="coverage-card">
            <span class="coverage-index">02 · HOY EN EL DOJO</span>
            <div>
              <div class="coverage-kicker">Visita especial</div>
              <h3>Ryan Martinez<br>+ Camila Reynoso.</h3>
              <p>Hoy visitan nuestro dojo. Una oportunidad para conversar, generar material y llevar el programa al lugar donde también entrenamos.</p>
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
})();
