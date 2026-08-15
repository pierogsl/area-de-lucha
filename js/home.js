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

  const extraCss = document.createElement('style');
  extraCss.textContent = `
    .home-origin{margin-top:52px;border-top:1px solid rgba(0,0,0,.16);padding-top:34px;display:grid;grid-template-columns:.72fr 1.28fr;gap:42px;align-items:start}
    .home-origin-mark{position:relative;min-height:330px;background:#050505;color:#fff;overflow:hidden;padding:30px;display:flex;flex-direction:column;justify-content:space-between}
    .home-origin-mark::before{content:"";position:absolute;width:280px;height:280px;border:1px solid rgba(255,255,255,.16);border-radius:50%;right:-70px;top:25px;box-shadow:0 0 70px rgba(0,223,252,.12),0 0 120px rgba(230,0,126,.12)}
    .home-origin-mark::after{content:"";position:absolute;width:150px;height:3px;right:32px;top:50%;background:linear-gradient(90deg,#00dffc 0 50%,#e6007e 50%);transform:rotate(-58deg)}
    .home-origin-mark small{position:relative;z-index:1;color:#00dffc;font-size:.64rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
    .home-origin-mark strong{position:relative;z-index:1;font-size:clamp(2.3rem,4.6vw,5.2rem);line-height:.84;letter-spacing:-.065em;text-transform:uppercase;max-width:440px}
    .home-origin-copy{padding-top:4px}
    .home-origin-copy>span{display:block;color:#e6007e;font-size:.66rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;margin-bottom:14px}
    .home-origin-copy h3{margin:0 0 24px;font-size:clamp(2rem,4vw,4.3rem);line-height:.9;letter-spacing:-.055em;text-transform:uppercase}
    .home-origin-copy p{margin:0 0 18px;color:#4c4c4c;font-size:1rem;line-height:1.68}
    .origin-timeline{margin-top:30px;display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(0,0,0,.16);border-bottom:1px solid rgba(0,0,0,.16)}
    .origin-step{padding:20px 18px 20px 0;border-right:1px solid rgba(0,0,0,.16)}
    .origin-step:nth-child(2),.origin-step:nth-child(3){padding-left:18px}
    .origin-step:last-child{border-right:0}
    .origin-step b{display:block;color:#000;font-size:1rem;text-transform:uppercase;margin-bottom:5px}
    .origin-step span{color:#777;font-size:.72rem;font-weight:700;line-height:1.35;text-transform:uppercase;letter-spacing:.04em}
    .team-group-placeholder{min-height:360px;margin:0 0 24px;border:1px dashed rgba(0,0,0,.28);display:grid;place-items:center;background:linear-gradient(135deg,rgba(0,223,252,.06),rgba(230,0,126,.06)),#ececea;text-align:center;padding:32px;overflow:hidden;position:relative}
    .team-group-placeholder::before{content:"";position:absolute;width:180px;height:3px;background:linear-gradient(90deg,#00dffc 0 50%,#e6007e 50%);top:50%;left:50%;transform:translate(-50%,-50%) rotate(-58deg);opacity:.55}
    .team-group-placeholder-inner{position:relative;z-index:1;max-width:520px}
    .team-group-placeholder small{display:block;color:#e6007e;font-size:.65rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;margin-bottom:14px}
    .team-group-placeholder strong{display:block;font-size:clamp(2rem,5vw,4.8rem);line-height:.88;letter-spacing:-.06em;text-transform:uppercase}
    .team-group-placeholder p{margin:16px auto 0;max-width:420px;color:#666;line-height:1.55;font-size:.88rem}
    @media(max-width:800px){.home-origin{grid-template-columns:1fr}.home-origin-mark{min-height:280px}.origin-timeline{grid-template-columns:1fr}.origin-step,.origin-step:nth-child(2),.origin-step:nth-child(3){padding:16px 0;border-right:0;border-bottom:1px solid rgba(0,0,0,.12)}.origin-step:last-child{border-bottom:0}}
    @media(max-width:640px){.team-group-placeholder{min-height:280px}}
  `;
  document.head.appendChild(extraCss);

  const episodes = $('#episodios');
  if (episodes && !$('#que-es')) {
    const about = document.createElement('section');
    about.id = 'que-es';
    about.className = 'home-about anchor';
    about.innerHTML = `
      <div class="shell">
        <div class="home-about-grid">
          <div>
            <span class="home-label">Qué es Área de Lucha</span>
            <h2>Aprender<br>del deporte.</h2>
          </div>
          <div class="home-about-copy">
            <p>Área de Lucha es un programa de streaming dedicado a conocer el deporte desde adentro, disciplina por disciplina y persona por persona.</p>
            <p>Nacimos muy ligados a los deportes de combate, pero el programa no se limita a ellos. Nuestro fuerte son los invitados: deportistas en actividad, ex deportistas, entrenadores y profesionales de la salud o del rendimiento vinculados a cada disciplina. Nos interesa escuchar tanto al amateur que está construyendo su camino como al atleta profesional que compite al máximo nivel.</p>
            <div class="home-pill-row"><span>Atletas</span><span>Entrenadores</span><span>Salud</span><span>Rendimiento</span><span>Amateur</span><span>Alto rendimiento</span></div>
          </div>
        </div>

        <div class="home-origin">
          <div class="home-origin-mark">
            <small>Nuestra historia · 2026</small>
            <strong>Una idea fugaz. Una puesta en marcha inmediata.</strong>
          </div>
          <div class="home-origin-copy">
            <span>Cómo nació ADL</span>
            <h3>Como un agujero negro.</h3>
            <p>Área de Lucha nació en febrero de 2026 como una idea fugaz y potente: de esas que aparecen de golpe y empiezan a atraer todo a su alrededor, como un agujero negro que no deja escapar nada.</p>
            <p>La idea apareció y prácticamente no tuvo tiempo de enfriarse. A la semana siguiente ya la estábamos poniendo en marcha y durante marzo el proyecto empezó a tomar forma. Desde entonces fuimos mejorando el programa, la producción y la manera de contar cada historia.</p>
            <p>El objetivo sigue siendo simple: que todo deportista tenga un lugar para contar su experiencia, su recorrido, sus dificultades, sus aprendizajes y aquello que normalmente queda fuera del resultado o de la competencia.</p>
            <div class="origin-timeline">
              <div class="origin-step"><b>Febrero 2026</b><span>Nace la idea.</span></div>
              <div class="origin-step"><b>Marzo 2026</b><span>Área de Lucha se pone en marcha.</span></div>
              <div class="origin-step"><b>Hoy</b><span>Seguimos aprendiendo, produciendo y creciendo.</span></div>
            </div>
          </div>
        </div>
      </div>`;
    episodes.parentNode.insertBefore(about, episodes);
  }

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

  const platformCopies = document.querySelectorAll('.platform-card p');
  if (platformCopies[0]) platformCopies[0].textContent = 'Programas completos, entrevistas, coberturas, clips y especiales.';
  if (platformCopies[1]) platformCopies[1].textContent = 'El programa en vivo y las conversaciones completas.';
  if (platformCopies[2]) platformCopies[2].textContent = 'Reels, backstage, coberturas, invitados y anuncios.';

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

  const merch = $('#merch');
  if (merch) merch.setAttribute('aria-hidden', 'true');

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

    const wa = document.querySelector('#contactWhatsApp');
    if (wa) wa.remove();
  });
})();