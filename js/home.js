(() => {
  const cfg = window.ADL || {};
  const home = cfg.home || {};
  const $ = (s) => document.querySelector(s);

  const latestImage = '/assets/programs/ramiro-diaz-suguer.webp';
  const previousImage = '/assets/programs/antonella-lasorsa.webp';
  const latestFallback = 'https://img.youtube.com/vi/eW1pDaidU-8/hqdefault.jpg';
  const previousFallback = 'https://img.youtube.com/vi/Z8iFdiO1k18/hqdefault.jpg';

  const leftCombatYouTube = 'https://youtu.be/bQ7E1sBCKlg?si=628JmoHgE8FNL74u';
  const leftCombatReels = [
    'https://www.instagram.com/reel/DbXHaNsu7rU/?igsh=MTZxbjZoOGxzYW96bw==',
    'https://www.instagram.com/reel/DbVnDuxuhFZ/?igsh=MWR0cW5wbmY3bGpkMQ==',
    'https://www.instagram.com/reel/DbYktXjRI-Z/?igsh=MWhzbGxza2c3MDQ3dw=='
  ];

  const nav = document.querySelector('.main-nav');
  if (nav) {
    nav.innerHTML = `
      <a href="#inicio">Inicio</a>
      <a href="#que-es">Qué es ADL</a>
      <a href="#episodios">Programas</a>
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

  const extraCss = document.createElement('style');
  extraCss.textContent = `
    .home-origin{margin-top:52px;border-top:1px solid rgba(0,0,0,.16);padding-top:34px;display:grid;grid-template-columns:.72fr 1.28fr;gap:42px;align-items:start}
    .home-origin-mark{position:relative;min-height:330px;background:#050505;color:#fff;overflow:hidden;padding:30px;display:flex;flex-direction:column;justify-content:space-between}
    .home-origin-mark::before{content:"";position:absolute;width:280px;height:280px;border:1px solid rgba(255,255,255,.16);border-radius:50%;right:-70px;top:25px;box-shadow:0 0 70px rgba(0,223,252,.12),0 0 120px rgba(230,0,126,.12)}
    .home-origin-mark::after{content:"";position:absolute;width:150px;height:3px;right:32px;top:50%;background:linear-gradient(90deg,#00dffc 0 50%,#e6007e 50%);transform:rotate(-58deg)}
    .home-origin-mark small{position:relative;z-index:1;color:#00dffc;font-size:.64rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
    .home-origin-mark strong{position:relative;z-index:1;font-size:clamp(2.3rem,4.6vw,5.2rem);line-height:.84;letter-spacing:-.065em;text-transform:uppercase;max-width:440px}
    .home-origin-copy{padding-top:4px}.home-origin-copy>span{display:block;color:#e6007e;font-size:.66rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;margin-bottom:14px}
    .home-origin-copy h3{margin:0 0 24px;font-size:clamp(2rem,4vw,4.3rem);line-height:.9;letter-spacing:-.055em;text-transform:uppercase}
    .home-origin-copy p{margin:0 0 18px;color:#4c4c4c;font-size:1rem;line-height:1.68}
    .origin-timeline{margin-top:30px;display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(0,0,0,.16);border-bottom:1px solid rgba(0,0,0,.16)}
    .origin-step{padding:20px 18px 20px 0;border-right:1px solid rgba(0,0,0,.16)}.origin-step:nth-child(2),.origin-step:nth-child(3){padding-left:18px}.origin-step:last-child{border-right:0}
    .origin-step b{display:block;color:#000;font-size:1rem;text-transform:uppercase;margin-bottom:5px}.origin-step span{color:#777;font-size:.72rem;font-weight:700;line-height:1.35;text-transform:uppercase;letter-spacing:.04em}

    .program-stack{display:grid;gap:1px;background:rgba(255,255,255,.15)}
    .program-feature{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);align-items:center;background:#070707;overflow:hidden}
    .program-feature--previous{grid-template-columns:minmax(360px,.75fr) minmax(0,1.25fr)}
    .program-feature--previous .program-art{order:2}.program-feature--previous .program-copy{order:1}
    .program-art{position:relative;display:block;width:100%;aspect-ratio:16/9;align-self:center;overflow:hidden;background:#090909}
    .program-art img{display:block;width:100%;height:100%;object-fit:contain;object-position:center;background:#090909}
    .program-art::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 70%,rgba(0,0,0,.42))}
    .program-art small{position:absolute;left:20px;bottom:17px;z-index:2;padding:8px 10px;background:rgba(0,0,0,.72);color:#fff;font-size:.62rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;backdrop-filter:blur(7px)}
    .program-copy{padding:clamp(32px,5vw,68px);display:flex;flex-direction:column;justify-content:center}
    .program-kicker{color:#00dffc;font-size:.67rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase}
    .program-copy h2{margin:18px 0 12px;font-size:clamp(2.8rem,5.7vw,6.5rem);line-height:.83;letter-spacing:-.07em;text-transform:uppercase}
    .program-copy h2 span{display:block;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.85)}
    .program-role{margin:0;color:#fff;font-size:1rem;font-weight:800}.program-desc{margin:24px 0 0;color:#999;line-height:1.65;max-width:620px}
    .program-actions{margin-top:30px;display:flex;gap:10px;flex-wrap:wrap}
    .program-feature--previous .program-kicker{color:#e6007e}.program-feature--previous .program-copy h2{font-size:clamp(2.4rem,4.2vw,5rem)}

    .team-group-photo{position:relative;margin:0 0 34px;overflow:hidden;background:#080808;border:1px solid rgba(0,0,0,.18)}
    .team-group-photo img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;object-position:center center}
    .team-group-photo figcaption{position:absolute;left:22px;bottom:20px;padding:10px 13px;background:rgba(0,0,0,.75);color:#fff;font-size:.68rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase;backdrop-filter:blur(8px)}
    #envivo{display:none!important}

    @media(max-width:900px){
      .program-feature,.program-feature--previous{grid-template-columns:1fr}
      .program-feature--previous .program-art,.program-feature--previous .program-copy{order:initial}
      .program-art{aspect-ratio:16/9}
    }
    @media(max-width:800px){.home-origin{grid-template-columns:1fr}.home-origin-mark{min-height:280px}.origin-timeline{grid-template-columns:1fr}.origin-step,.origin-step:nth-child(2),.origin-step:nth-child(3){padding:16px 0;border-right:0;border-bottom:1px solid rgba(0,0,0,.12)}.origin-step:last-child{border-bottom:0}}
    @media(max-width:560px){.program-copy{padding:30px 22px}.program-art small{left:12px;bottom:12px;font-size:.56rem}.team-group-photo img{aspect-ratio:4/3}}
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
          <div><span class="home-label">Qué es Área de Lucha</span><h2>Aprender<br>del deporte.</h2></div>
          <div class="home-about-copy">
            <p>Área de Lucha es un programa de streaming dedicado a conocer el deporte desde adentro, disciplina por disciplina y persona por persona.</p>
            <p>Nacimos muy ligados a los deportes de combate, pero el programa no se limita a ellos. Nuestro fuerte son los invitados: deportistas en actividad, ex deportistas, entrenadores y profesionales de la salud o del rendimiento vinculados a cada disciplina. Nos interesa escuchar tanto al amateur que está construyendo su camino como al atleta profesional que compite al máximo nivel.</p>
            <div class="home-pill-row"><span>Atletas</span><span>Entrenadores</span><span>Salud</span><span>Rendimiento</span><span>Amateur</span><span>Alto rendimiento</span></div>
          </div>
        </div>
        <div class="home-origin">
          <div class="home-origin-mark"><small>Nuestra historia · 2026</small><strong>Una idea fugaz. Una puesta en marcha inmediata.</strong></div>
          <div class="home-origin-copy">
            <span>Cómo nació ADL</span><h3>Como un agujero negro.</h3>
            <p>Área de Lucha nació en febrero de 2026 como una idea fugaz y potente: de esas que aparecen de golpe y empiezan a atraer todo a su alrededor, como un agujero negro que no deja escapar nada.</p>
            <p>La idea apareció y prácticamente no tuvo tiempo de enfriarse. A la semana siguiente ya la estábamos poniendo en marcha y durante marzo el proyecto empezó a tomar forma. Desde entonces fuimos mejorando el programa, la producción y la manera de contar cada historia.</p>
            <p>El objetivo sigue siendo simple: que todo deportista tenga un lugar para contar su experiencia, su recorrido, sus dificultades, sus aprendizajes y aquello que normalmente queda fuera del resultado o de la competencia.</p>
            <div class="origin-timeline"><div class="origin-step"><b>Febrero 2026</b><span>Nace la idea.</span></div><div class="origin-step"><b>Marzo 2026</b><span>Área de Lucha se pone en marcha.</span></div><div class="origin-step"><b>Hoy</b><span>Seguimos aprendiendo, produciendo y creciendo.</span></div></div>
          </div>
        </div>
      </div>`;
    episodes.parentNode.insertBefore(about, episodes);
  }

  if (episodes) {
    const latest = home.latest || {};
    const previous = home.previous || {};
    episodes.className = 'section section-black anchor';
    episodes.innerHTML = `
      <div class="shell">
        <div class="section-heading">
          <div><span class="section-index">01</span><h2>Programas</h2></div>
          <p>Últimos programas de Área de Lucha.</p>
        </div>
        <div class="program-stack">
          <article class="program-feature">
            <a class="program-art" href="${latest.href || '#'}" target="_blank" rel="noopener">
              <img src="${latestImage}" data-fallback="${latestFallback}" alt="${latest.firstName || 'Ramiro'} ${latest.lastName || 'Díaz Suguer'}" loading="eager" decoding="async">
              <small>Último programa · ver en YouTube ↗</small>
            </a>
            <div class="program-copy"><span class="program-kicker">Último programa</span><h2>${latest.firstName || 'Ramiro'}<span>${latest.lastName || 'Díaz Suguer'}</span></h2><p class="program-role">${latest.role || 'Psicólogo Deportivo'}${latest.organization ? ' · ' + latest.organization : ''}</p><p class="program-desc">${latest.description || ''}</p><div class="program-actions"><a class="button button-primary" href="${latest.href || '#'}" target="_blank" rel="noopener">Ver programa</a><a class="button button-outline" href="${cfg.links?.youtube || '#'}" target="_blank" rel="noopener">Canal de YouTube</a></div></div>
          </article>
          <article class="program-feature program-feature--previous">
            <a class="program-art" href="${previous.href || '#'}" target="_blank" rel="noopener">
              <img src="${previousImage}" data-fallback="${previousFallback}" alt="${previous.firstName || 'Antonella'} ${previous.lastName || 'Lasorsa'}" loading="lazy" decoding="async">
              <small>Programa anterior · ver en YouTube ↗</small>
            </a>
            <div class="program-copy"><span class="program-kicker">Programa anterior</span><h2>${previous.firstName || 'Antonella'}<span>${previous.lastName || 'Lasorsa'}</span></h2><p class="program-role">${previous.role || 'Atleta Wellness · NPC'}</p><p class="program-desc">${previous.description || ''}</p><div class="program-actions"><a class="button button-outline" href="${previous.href || '#'}" target="_blank" rel="noopener">Ver programa</a></div></div>
          </article>
        </div>
      </div>`;

    episodes.querySelectorAll('img[data-fallback]').forEach((img) => {
      img.addEventListener('error', () => {
        const fallback = img.dataset.fallback;
        if (fallback && img.src !== fallback) img.src = fallback;
      }, { once: true });
    });
  }

  const live = $('#envivo');
  if (live) live.remove();

  const platforms = $('#plataformas');
  if (platforms && !$('#coberturas')) {
    const coverage = document.createElement('section');
    coverage.id = 'coberturas';
    coverage.className = 'home-coverage anchor';
    coverage.innerHTML = `
      <div class="shell">
        <div class="home-coverage-head"><div><span class="home-label">Fuera del estudio</span><h2>Coberturas.</h2></div><p>Área de Lucha también sale a buscar historias, competencias y protagonistas donde sucede el deporte.</p></div>
        <div class="coverage-grid">
          <article class="coverage-card"><span class="coverage-index">01 · COBERTURA</span><div><div class="coverage-kicker">Evento</div><h3>Left<br>Combat.</h3><p>Video principal en YouTube y momentos destacados en Instagram.</p><div class="coverage-links"><a href="${leftCombatYouTube}" target="_blank" rel="noopener">Video en YouTube ↗</a><a href="${leftCombatReels[0]}" target="_blank" rel="noopener">Reel 01 ↗</a><a href="${leftCombatReels[1]}" target="_blank" rel="noopener">Reel 02 ↗</a><a href="${leftCombatReels[2]}" target="_blank" rel="noopener">Reel 03 ↗</a></div></div></article>
          <article class="coverage-card"><span class="coverage-index">02 · VISITA AL DOJO</span><div><div class="coverage-kicker">Lotus BJJ · Club El Porvenir, Gerli</div><h3>Ryan Martinez<br>+ Camila Reynoso.</h3><p>Visita a Lotus BJJ en el Club El Porvenir de Gerli, dojo a cargo del Mestre faixa preta Leandro Márquez. Área de Lucha estuvo ahí para conversar y generar contenido desde el lugar donde también entrenamos.</p><div class="coverage-links"><a href="${cfg.links?.instagram || '#'}" target="_blank" rel="noopener">Ver Instagram ↗</a></div></div></article>
        </div>
      </div>`;
    platforms.parentNode.insertBefore(coverage, platforms);
  }

  const merch = $('#merch');
  if (merch) merch.remove();

  const finishPage = () => {
    const teamMembers = document.querySelector('.team-editorial .team-members');
    if (teamMembers && !document.querySelector('.team-group-photo')) {
      const figure = document.createElement('figure');
      figure.className = 'team-group-photo';
      figure.innerHTML = `<img src="/assets/team/adl-equipo-grupal.webp" alt="Equipo de Área de Lucha: Piero, Fer y El Cule" loading="lazy" decoding="async"><figcaption>Piero · Fer · El Cule · Área de Lucha</figcaption>`;
      teamMembers.parentNode.insertBefore(figure, teamMembers);
    }

    const emailLink = document.querySelector('#contactEmail');
    const emailText = document.querySelector('#emailText');
    if (emailLink) emailLink.href = 'mailto:areadelucha@gmail.com';
    if (emailText) emailText.textContent = 'areadelucha@gmail.com';
    document.querySelector('#contactWhatsApp')?.remove();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', finishPage, { once: true });
  else finishPage();
})();
