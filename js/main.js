/* Renders the page from content.js. You normally don't need to edit this file. */
(function () {
  const ICONS = {
    api: '<path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 15h9"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    brain: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="12" cy="10" r="1.6"/><path d="M7.6 7.2l3.1 1.9M16.4 7.2l-3.1 1.9M12 11.6V16"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
    orcid: '<circle cx="12" cy="12" r="10"/><path d="M8 10v7M8 7v.01M12 10v7h2.5a3.5 3.5 0 0 0 0-7z"/>',
    arrow: '<path d="M7 17L17 7M8 7h9v9"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'
  };
  const icon = (n, cls = "ic") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
  const head = (n, k, t, extra = "") =>
    `<header class="sec-head reveal"><span class="sec-num">${String(n).padStart(2, "0")}</span><span class="kicker">${k}</span><h2>${t}</h2>${extra}</header>`;
  const $ = (id) => document.getElementById(id);
  const L = SITE.links;
  const chips = (arr, cls = "") => `<div class="chips ${cls}">${arr.map(t => `<span class="chip">${t}</span>`).join("")}</div>`;
  let lang = "en";

  function render() {
    const c = CONTENT[lang];
    document.documentElement.lang = lang;
    let n = 0;

    /* NAV */
    $("navLinks").innerHTML = Object.entries(c.nav)
      .map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");

    /* HERO — photo first */
    const h = c.hero;
    $("hero").innerHTML = `
      <div class="hero-grid">
        <div class="hero-photo reveal">
          <div class="portrait"><img src="${SITE.photo}" alt="${SITE.name}"></div>
        </div>
        <div class="hero-text">
          <span class="status reveal"><span class="dot"></span>${h.status}</span>
          <span class="hello reveal">${h.hello}</span>
          <h1 class="hero-name reveal">${SITE.name}</h1>
          <p class="hero-role reveal">${h.role}</p>
          <p class="hero-tagline reveal">${h.title}</p>
          <p class="hero-intro reveal">${h.intro}</p>
          <ul class="facts reveal">${h.facts.map(f => `<li>${icon(f.icon, "ic sm")}${f.text}</li>`).join("")}</ul>
          <div class="cta reveal">
            <a class="btn primary" href="#projects">${h.ctaProjects}</a>
            <a class="btn" href="#contact">${icon("mail")}${h.ctaContact}</a>
            <a class="btn" href="${SITE.cv}" target="_blank" rel="noopener">${icon("download")}${h.ctaCv}</a>
          </div>
          <div class="socials reveal">
            <a href="${L.linkedin}" target="_blank" rel="noopener">${icon("linkedin", "ic sm")}LinkedIn</a>
            <a href="${L.github}" target="_blank" rel="noopener">${icon("github", "ic sm")}GitHub</a>
            <a href="${L.youtube}" target="_blank" rel="noopener">${icon("youtube", "ic sm")}YouTube</a>
            <a href="${L.orcid}" target="_blank" rel="noopener">${icon("orcid", "ic sm")}ORCID</a>
          </div>
        </div>
      </div>
      <div class="hero-strip reveal">
        <div class="strip-now"><span class="label">${h.nowLabel}</span><p>${h.now}</p></div>
        <div class="strip-prev"><span class="label">${h.prevLabel}</span><p>${h.prev.map(x => `<b>${x}</b>`).join('<i>/</i>')}</p></div>
      </div>
      <div class="stats reveal">
        ${h.stats.map(s => `<div class="stat"><span class="stat-v">${s.value}</span><span class="stat-l">${s.label}</span></div>`).join("")}
      </div>`;

    /* HUB — three sides of me */
    $("hub").innerHTML = `<div class="hub">${c.hub.map((d, i) => `
      <a class="door reveal" href="${d.href}">
        <span class="door-label">${d.label}</span>
        <h3>${d.title}</h3>
        <p>${d.text}</p>
        <span class="door-arrow">${icon("arrow")}</span>
      </a>`).join("")}</div>`;

    /* ABOUT */
    const a = c.about;
    $("about").innerHTML = head(++n, a.kicker, a.title) + `
      <div class="sec-body">
        <p class="big-text reveal">${a.intro}</p>
        <div class="focus">${a.cards.map(cd => `
          <div class="focus-item reveal">${icon(cd.icon, "ic big")}<div><h3>${cd.title}</h3><p>${cd.text}</p></div></div>`).join("")}
        </div>
      </div>`;

    /* EXPERIENCE */
    const j = c.journey;
    $("journey").innerHTML = head(++n, j.kicker, j.title) + `
      <div class="sec-body"><ol class="rows">${j.items.map((it, i) => `
        <li class="row reveal ${i === 0 ? "current" : ""}">
          <div class="row-meta">${it.period}</div>
          <div class="row-main">
            <h3>${it.role}</h3>
            <p class="row-org">${it.org}</p>
            <ul class="ticks">${it.points.map(p => `<li>${p}</li>`).join("")}</ul>
            ${it.tech ? chips(it.tech, "small") : ""}
          </div>
        </li>`).join("")}
      </ol></div>`;

    /* IMPACT */
    const im = c.impact;
    $("impact").innerHTML = `<div class="impact reveal"><span class="label">${im.kicker}</span>
      <div class="impact-row">${im.items.map(i => `<div class="impact-item"><span class="impact-v">${i.value}</span><p>${i.text}</p></div>`).join("")}</div></div>`;

    /* PROJECTS */
    const p = c.projects;
    $("projects").innerHTML = head(++n, p.kicker, p.title, `<p class="sec-lead">${p.intro}</p>`) + `
      <div class="sec-body"><div class="projects">
        ${p.items.map((pr, i) => `
        <article class="project reveal ${pr.featured ? "featured" : ""}">
          <div class="project-top"><span class="proj-num">P/${String(i + 1).padStart(2, "0")}</span><span class="tag">${pr.tag}</span>
            <a href="${pr.url}" target="_blank" rel="noopener" class="proj-link">${icon("github", "ic sm")}${p.code}${icon("arrow", "ic sm")}</a></div>
          <h3>${pr.name}</h3>
          <p class="role">${pr.role}</p>
          <p>${pr.text}</p>
          ${pr.highlights ? `<ul class="ticks">${pr.highlights.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
          ${chips(pr.tech, "small")}
        </article>`).join("")}
        <p class="soon reveal"><strong>${p.soon}.</strong> ${p.soonText}</p>
      </div></div>`;

    /* CREATING */
    const cr = c.creating;
    $("creating").innerHTML = head(++n, cr.kicker, cr.title, `<p class="sec-lead">${cr.intro}</p>`) + `
      <div class="sec-body"><div class="creating">${cr.items.map(it => `
        <article class="create reveal">
          <span class="badge ${it.status === "Live" ? "live" : ""}">${it.status}</span>
          <h3>${it.name}</h3>
          <p>${it.text}</p>
          ${it.url ? `<a class="text-link" href="${it.url}" target="_blank" rel="noopener">${it.linkLabel}${icon("arrow", "ic sm")}</a>` : ""}
        </article>`).join("")}
      </div></div>`;

    /* RESEARCH */
    const r = c.research;
    $("research").innerHTML = head(++n, r.kicker, r.title,
      `<a class="text-link" href="${L.orcid}" target="_blank" rel="noopener">${icon("orcid", "ic sm")}${r.orcid}</a>`) + `
      <div class="sec-body"><ol class="rows pubs">${r.items.map(pb => `
        <li class="row reveal"><div class="row-meta">${pb.year}</div><div class="row-main"><h3 class="serif">${pb.title}</h3><p class="row-org"><em>${pb.venue}</em></p></div></li>`).join("")}
      </ol></div>`;

    /* SKILLS */
    const s = c.skills;
    $("skills").innerHTML = head(++n, s.kicker, s.title) + `
      <div class="sec-body"><dl class="rows skills">${s.groups.map(g => `
        <div class="row reveal"><dt class="row-meta">${g.name}</dt><dd class="row-main">${chips(g.items)}</dd></div>`).join("")}
      </dl></div>`;

    /* EDUCATION */
    const e = c.education;
    $("education").innerHTML = head(++n, e.kicker, e.title) + `
      <div class="sec-body">
        <ol class="rows">${e.degrees.map(d => `
          <li class="row reveal"><div class="row-meta">${d.period}</div><div class="row-main"><h3>${d.degree}</h3><p class="row-org">${d.school}</p><p class="muted">${d.note}</p></div></li>`).join("")}
        </ol>
        <div class="two-col">
          <div class="reveal"><span class="label">${e.certTitle}</span>
            <ul class="plain">${e.certs.map(ct => `<li><strong>${ct.name}</strong><span>${ct.issuer}</span></li>`).join("")}</ul></div>
          <div class="reveal"><span class="label">${e.langTitle}</span>
            <ul class="plain">${e.langs.map(l => `<li><strong>${l.name}</strong><span>${l.level}</span></li>`).join("")}</ul></div>
        </div>
      </div>`;

    /* PRINCIPLES */
    const pr = c.principles;
    $("principles").innerHTML = head(++n, pr.kicker, pr.title) + `
      <div class="sec-body"><ol class="principles">${pr.items.map((x, i) => `
        <li class="reveal"><span class="pnum">${String(i + 1).padStart(2, "0")}</span><div><h3>${x.title}</h3><p>${x.text}</p></div></li>`).join("")}
      </ol></div>`;

    /* CONTACT */
    const ct = c.contact;
    $("contact").innerHTML = `
      <div class="contact-box reveal">
        <span class="hello">${ct.kicker}</span>
        <h2>${ct.title}</h2>
        <p class="sec-lead">${ct.text}</p>
        <a class="big-mail" href="mailto:${L.email}">${L.email}</a>
        <div class="contact-links">
          <button class="btn" id="copyMail">${ct.copy}</button>
          <a class="btn" href="${L.linkedin}" target="_blank" rel="noopener">${icon("linkedin")}LinkedIn</a>
          <a class="btn" href="${L.github}" target="_blank" rel="noopener">${icon("github")}GitHub</a>
          <a class="btn" href="${L.youtube}" target="_blank" rel="noopener">${icon("youtube")}YouTube</a>
          <a class="btn" href="${L.orcid}" target="_blank" rel="noopener">${icon("orcid")}ORCID</a>
        </div>
      </div>`;
    $("copyMail").addEventListener("click", async (ev) => {
      try { await navigator.clipboard.writeText(L.email); ev.target.textContent = ct.copied; }
      catch { ev.target.textContent = L.email; }
      setTimeout(() => (ev.target.textContent = ct.copy), 2000);
    });

    /* FOOTER */
    $("footer").innerHTML = `<span>© ${new Date().getFullYear()} ${SITE.name}. ${c.footer.rights}</span><span>${c.footer.built}</span>`;

    observe();
  }

  /* reveal-on-scroll */
  let io;
  function observe() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in")); return;
    }
    io && io.disconnect();
    io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  }

  /* language switch (remembered when possible) */
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    document.querySelectorAll(".lang-switch button").forEach(b => b.classList.toggle("active", b.dataset.lang === l));
    render();
  }
  document.querySelectorAll(".lang-switch button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* mobile menu */
  $("menuBtn").addEventListener("click", (e) => { e.stopPropagation(); document.body.classList.toggle("menu-open"); });
  document.addEventListener("click", (e) => { if (!e.target.closest("#navLinks")) document.body.classList.remove("menu-open"); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.body.classList.remove("menu-open"); });
  $("navLinks").addEventListener("click", e => { if (e.target.tagName === "A") document.body.classList.remove("menu-open"); });

  /* nav shadow on scroll */
  window.addEventListener("scroll", () => document.body.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  let start = "en";
  try { start = localStorage.getItem("lang") || ((navigator.language || "").startsWith("de") ? "de" : "en"); } catch (e) {}
  setLang(start);
})();
