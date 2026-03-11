import { useState, useEffect } from "react";

/* ════════════════════════════════════════════════════════════════
   ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗
  ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║
  ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║
  ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║
  ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗
   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
   PANEL — EDIT EVERYTHING HERE, TOUCH NOTHING BELOW THE LINE
════════════════════════════════════════════════════════════════ */

// ── LOGO ─────────────────────────────────────────────────────────
// Drop your logo image URL here. Leave as "" to show text "CCE" instead.
const LOGO_URL = "https://i.imgur.com/BsPWXqH.png";

// ── CONTACT / BOOKING ─────────────────────────────────────────────
const BOOKING_LINK = "creatorcollectd@gmail.com"; // swap with your real email or cal.com link
const MUSIC_LINK = "https://untd.io/a/casmusic";
const STORE_LINK = "https://athletesworld.us/";

// ── HERO COPY ─────────────────────────────────────────────────────
const HERO_LINE_1 = "THIS IS MORE THAN";
const HERO_LINE_2 = "A BRAND.";
const HERO_LINE_3 = "IT IS AN";
const HERO_LINE_4 = "EMPIRE."; // accented
const HERO_SUB =
  "Music. Film. Streetwear. Culture.\nThe 20-year counter-culture empire\nbuilt from the underground — up.";
const HERO_CTA = "ENTER THE VAULT";
const HERO_CTA_2 = "SEE THE WORK";

// ── LOCATION ──────────────────────────────────────────────────────
const LOCATION_TAG = "MEMPHIS, TN — WORLDWIDE";

// ── HERO YOUTUBE VIDEOS (cycles every 10s) ────────────────────────
const HERO_VIDEOS = [
  "https://www.youtube.com/watch?v=xtvHKPYcbRE", // CHICKEN - CAS x LUV KD
  "https://www.youtube.com/watch?v=AU877BURU8s", // Day in life of clothing brand 2
  "https://www.youtube.com/watch?v=audl9CSQKfs", // VIKING 4K
  "https://www.youtube.com/watch?v=2IQbDD4Zp6g", // Standard Collection Promo
];

// ── OFC PILLAR VIDEOS ─────────────────────────────────────────────
const OFC_LINK = "https://www.youtube.com/@ourfreedomscollide";
const OFC_VIDEOS = [
  "https://www.youtube.com/watch?v=VWt6PH1TS0g",
  "https://www.youtube.com/watch?v=GnHfDxjhfwE",
  "https://www.youtube.com/watch?v=K4O2J65MyNw",
  "https://www.youtube.com/watch?v=FwPwE0Uqrjs",
];

// ── CREATOR COLLECT PILLAR VIDEOS ─────────────────────────────────
const CREATOR_LINK = "https://untd.io/a/casmusic";
const CREATOR_VIDEOS = [
  "https://www.youtube.com/watch?v=604uQJHAlCs",
  "https://www.youtube.com/watch?v=KUDVNJ-dkCM",
  "https://www.youtube.com/watch?v=IpR0XxfFZcU",
  "https://www.youtube.com/watch?v=m0hCZiGjw4Q",
];

// ── ATHLETES WORLD PILLAR VIDEOS ──────────────────────────────────
const ATHLETES_VIDEOS = [
  "https://www.youtube.com/watch?v=2IQbDD4Zp6g",
  "https://www.youtube.com/watch?v=M-YQikh0P2U",
  "https://www.youtube.com/watch?v=AU877BURU8s",
];

// ── COMMISSIONS ───────────────────────────────────────────────────
// Set active: true to enable a tier, false to lock it (shows "COMING SOON")
const TIERS = [
  {
    active: true,
    label: "SHOWRUNNER PACKAGE",
    tag: "TIER 01 / ACTIVE",
    tagColor: "#00F0FF",
    price: "STARTING AT $500",
    desc: "You have the vision — I bring it to life. We map out your series together, I oversee the full project, edit every cut, and give you the creative direction feedback loop that actually moves the needle. Built for creators who are done doing it alone.",
    cta: "BOOK YOUR SESSION",
    link: BOOKING_LINK,
  },
  {
    active: false,
    label: "AD-RUN VISUALS",
    tag: "TIER 02 / COMING SOON",
    tagColor: "#444",
    price: "COMING SOON",
    desc: "Campaign-level video ads engineered for massive market awareness. The high-ticket engine of the movement. Drops when demand signals are locked.",
    cta: "LOCKED",
    link: null,
  },
  {
    active: false,
    label: "THE VAULT ACCESS",
    tag: "TIER 03 / COMING SOON",
    tagColor: "#444",
    price: "COMING SOON",
    desc: "A curated archive of raw assets, presets, and production loops from a decade of prd.cas sessions. Built for creators who want the sauce, not the tutorial.",
    cta: "LOCKED",
    link: null,
  },
];

// ── FOOTER LINKS ──────────────────────────────────────────────────
const EXPLORE_LINKS = [
  { label: "UnitedMasters / Music", url: "https://untd.io/a/casmusic" },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/artist/cas/1763988230",
  },
  { label: "OFC Archive", url: "https://www.youtube.com/@ourfreedomscollide" },
  { label: "Creator Collect", url: "https://www.youtube.com/@staticeditsyt" },
  { label: "Athletes World Store", url: "https://athletesworld.us/" },
];
const SOCIAL_LINKS = [
  { label: "Instagram @prd.cas", url: "https://www.instagram.com/prd.cas/" },
  {
    label: "Instagram @athletes.wrld",
    url: "https://www.instagram.com/athletes.wrld/",
  },
  {
    label: "YouTube @KingCasThegreat",
    url: "https://www.youtube.com/@KingCasThegreat",
  },
  {
    label: "TikTok @kingcasthegreat",
    url: "https://www.tiktok.com/@kingcasthegreat",
  },
  { label: "SoundCloud", url: "https://soundcloud.com/kingcas-music" },
];

/* ════════════════════════════════════════════════════════════════
   END OF CONTROL PANEL — CODE BELOW IS THE ENGINE, DON'T EDIT
════════════════════════════════════════════════════════════════ */

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;700&family=Barlow+Condensed:ital,wght@0,700;0,900;1,900&display=swap');

  :root {
    --accent:  #00F0FF;
    --orange:  #FF6200;
    --black:   #000000;
    --dark:    #060606;
    --card:    #080808;
    --border:  #1a1a1a;
    --text:    #F0EDE8;
    --muted:   #888;
    --dim:     #444;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--black);
    color: var(--text);
    font-family: 'IBM Plex Mono', monospace;
    cursor: crosshair;
    overflow-x: hidden;
  }

  ::selection { background: var(--accent); color: #000; }
  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-thumb { background: var(--accent); }

  .bebas  { font-family: 'Bebas Neue', sans-serif; }
  .barlow { font-family: 'Barlow Condensed', sans-serif; }
  .mono   { font-family: 'IBM Plex Mono', monospace; }

  /* ── NAV ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 40px;
    background: rgba(0,0,0,0.88);
    border-bottom: 1px solid rgba(0,240,255,0.15);
    backdrop-filter: blur(12px);
  }
  .nav-logo img { max-height: 32px; width: auto; object-fit: contain; display: block; }
  .nav-logo-text { font-family: 'Bebas Neue',sans-serif; font-size: 22px; letter-spacing: 0.18em; color: var(--text); }
  .nav-link {
    background: none; border: none; cursor: crosshair;
    font-family: 'IBM Plex Mono',monospace; font-size: 9px;
    letter-spacing: 0.25em; color: var(--muted); text-transform: uppercase;
    transition: color 0.2s;
  }
  .nav-link:hover { color: var(--accent); }
  .nav-cta {
    font-family: 'Bebas Neue', sans-serif; font-size: 11px; letter-spacing: 0.2em;
    padding: 9px 22px; background: var(--accent); color: #000;
    border: none; cursor: crosshair; text-decoration: none;
    transition: background 0.2s;
  }
  .nav-cta:hover { background: #fff; }

  /* ── MARQUEE ── */
  .marquee-wrap { overflow: hidden; white-space: nowrap; }
  .marquee-inner { display: inline-block; animation: ticker 28s linear infinite; }
  @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  /* ── REVEAL ── */
  .reveal      { opacity:0; transform:translateY(36px); transition: opacity .65s ease, transform .65s ease; }
  .reveal-r    { opacity:0; transform:translateX(50px);  transition: opacity .65s ease, transform .65s ease; }
  .reveal.on, .reveal-r.on { opacity:1; transform:none; }

  /* ── YOUTUBE BG ── */
  .yt-wrap { position:absolute; inset:0; overflow:hidden; background:#000; }
  .yt-wrap iframe {
    position:absolute; top:50%; left:50%;
    width:100vw; height:56.25vw;
    min-height:100vh; min-width:177.77vh;
    transform:translate(-50%,-50%);
    pointer-events:none; border:none;
  }
  .yt-wrap.pillar iframe { width:160%; height:160%; min-height:unset; min-width:unset; }

  /* ── SECTION DIVIDER ── */
  .sec-label {
    display:flex; align-items:center; gap:14px;
    margin-bottom:52px;
  }
  .sec-label .num { font-size:9px; color:var(--accent); letter-spacing:0.3em; }
  .sec-label .line { flex:1; height:1px; background:var(--border); }
  .sec-label .txt  { font-size:9px; color:var(--dim); letter-spacing:0.3em; }

  /* ── PILLAR CARDS ── */
  .p-card {
    border: 1px solid var(--border);
    background: var(--card);
    position: relative; overflow: hidden;
    display: flex; flex-direction: column;
    transition: border-color .3s, transform .3s;
    cursor: crosshair;
  }
  .p-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .p-card::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background: linear-gradient(135deg, rgba(0,240,255,.05), transparent 55%);
    opacity:0; transition:opacity .3s;
  }
  .p-card:hover::before { opacity:1; }

  /* ── COMMISSION CARDS ── */
  .c-card {
    border: 1px solid var(--border);
    border-top: 2px solid var(--accent);
    background: var(--card);
    padding: 36px 32px;
    display: flex; flex-direction: column;
    transition: border-color .3s;
  }
  .c-card.locked { opacity: .35; border-top-color: var(--dim); }

  /* ── BUTTONS ── */
  .btn {
    display: inline-block; font-family: 'Bebas Neue',sans-serif;
    font-size: 14px; letter-spacing: 0.2em;
    padding: 14px 38px; border: none; cursor: crosshair;
    text-decoration: none; text-align: center;
    transition: background .2s, color .2s, border-color .2s;
  }
  .btn-solid { background: var(--accent); color: #000; }
  .btn-solid:hover { background: #fff; }
  .btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--dim); }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
  .btn-tier {
    width:100%; margin-top:20px; padding:12px;
    font-family:'Bebas Neue',sans-serif; font-size:14px; letter-spacing:0.15em;
    background: transparent; color: var(--text);
    border: 1px solid var(--dim); cursor: crosshair;
    transition: .3s; text-transform: uppercase;
  }
  .btn-tier:hover { border-color: var(--accent); color: var(--accent); background: rgba(0,240,255,.04); }
  .btn-tier.off { opacity:.4; cursor:not-allowed; pointer-events:none; }

  /* ── TAG ── */
  .tag {
    display:inline-block; font-family:'IBM Plex Mono',monospace;
    font-size:8px; letter-spacing:0.25em; text-transform:uppercase;
    padding: 3px 10px; border: 1px solid var(--accent); color: var(--accent);
  }
  .tag.dim { border-color: var(--dim); color: var(--dim); }

  /* ── MARKET BAR ── */
  .market-bar {
    display:flex; justify-content:space-between; align-items:center;
    padding:18px 24px; margin-top:40px;
    background:#080808; border:1px solid var(--border);
  }

  /* ── WAREHOUSE LIST ── */
  .wh-item {
    display:flex; justify-content:space-between; align-items:center;
    padding: 22px 0; border-bottom: 1px solid #111;
    transition: padding-left .25s, border-color .25s;
    cursor:crosshair;
  }
  .wh-item:hover { padding-left: 14px; border-color: var(--accent); }
  .wh-item:hover .wh-arrow { color: var(--accent); }

  /* ── FOOT LINK ── */
  .flink {
    font-family:'IBM Plex Mono',monospace; font-size:11px;
    letter-spacing:0.15em; color:var(--muted); text-decoration:none;
    text-transform:uppercase; transition:color .2s; cursor:crosshair;
  }
  .flink:hover { color: var(--accent); }

  /* ── GRID OVERLAY ── */
  .grid-over {
    background-image:
      linear-gradient(rgba(0,240,255,.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,240,255,.025) 1px, transparent 1px);
    background-size: 60px 60px;
  }
`;

/* ── HELPERS ──────────────────────────────────────────── */
const ytId = (url) => {
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/
  );
  return m ? m[1] : "";
};

function YT({ url, on = true, opacity = 0.38, pillar = false }) {
  const id = ytId(url);
  if (!id) return null;
  return (
    <div
      className={`yt-wrap${pillar ? " pillar" : ""}`}
      style={{ opacity: on ? 1 : 0, transition: "opacity 1.4s ease" }}
    >
      <iframe
        style={{ opacity }}
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1&playlist=${id}&playsinline=1`}
        allow="autoplay; encrypted-media"
      />
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-r");
    const obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCycle(len, ms) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % len), ms);
    return () => clearInterval(t);
  }, [len, ms]);
  return i;
}

function Marquee({ items, flip = false }) {
  const txt = (items.join("  ///  ") + "  ///  ").repeat(2);
  return (
    <div
      className="marquee-wrap"
      style={{
        background: flip ? "var(--accent)" : "#0a0a0a",
        borderTop: "1px solid #111",
        borderBottom: "1px solid #111",
        padding: "9px 0",
      }}
    >
      <div className="marquee-inner">
        <span
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 12,
            letterSpacing: "0.28em",
            color: flip ? "#000" : "#1f1f1f",
          }}
        >
          {txt}
        </span>
      </div>
    </div>
  );
}

function SecLabel({ n, text }) {
  return (
    <div className="sec-label">
      <span className="num mono">[ {String(n).padStart(2, "0")} ]</span>
      <div className="line" />
      <span className="txt mono">{text}</span>
    </div>
  );
}

/* ── MAIN ───────────────────────────────────────────────── */
export default function CCE() {
  useReveal();
  const heroI = useCycle(HERO_VIDEOS.length, 10000);
  const ofcI = useCycle(OFC_VIDEOS.length, 12000);
  const creatI = useCycle(CREATOR_VIDEOS.length, 11000);
  const athI = useCycle(ATHLETES_VIDEOS.length, 13000);

  const navItems = ["MANIFESTO", "WORK", "COMMISSIONS", "CONNECT"];

  const wh = [
    {
      num: "01",
      label: "Recording Studio",
      sub: "Professional trap / rap production suite",
    },
    {
      num: "02",
      label: "Film & Photo Studio",
      sub: "Full rigging, cyc wall, color-graded suite",
    },
    {
      num: "03",
      label: "Indoor Basketball Court",
      sub: "Half court + culture programming",
    },
    {
      num: "04",
      label: "Skate Area",
      sub: "Custom obstacles, street-style layout",
    },
    {
      num: "05",
      label: "Event & Drop Space",
      sub: "Community gathering for releases & shows",
    },
  ];

  return (
    <>
      <style>{CSS}</style>

      {/* ══════════ NAV ══════════ */}
      <nav className="nav">
        <div className="nav-logo">
          {LOGO_URL ? (
            <img src={LOGO_URL} alt="CCE Logo" />
          ) : (
            <span className="nav-logo-text">
              <span style={{ color: "var(--accent)" }}>"</span>CCE
              <span style={{ color: "var(--accent)" }}>"</span>
            </span>
          )}
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {navItems.map((l) => (
            <button
              key={l}
              className="nav-link"
              onClick={() =>
                document
                  .getElementById(l.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span style={{ color: "var(--accent)" }}>"</span>
              {l}
              <span style={{ color: "var(--accent)" }}>"</span>
            </button>
          ))}
        </div>
        <a href={BOOKING_LINK} className="nav-cta">
          START PROJECT
        </a>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section
        id="manifesto"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background: "#000",
          }}
        >
          {HERO_VIDEOS.map((v, i) => (
            <YT key={i} url={v} on={i === heroI} opacity={0.38} />
          ))}
          <div
            className="grid-over"
            style={{ position: "absolute", inset: 0, opacity: 0.7 }}
          />
          {/* vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </div>

        <div
          style={{ position: "relative", zIndex: 2, padding: "0 40px 90px" }}
        >
          {/* eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 28,
            }}
          >
            <span className="tag">EST. NOW</span>
            <span
              className="mono"
              style={{
                fontSize: 9,
                color: "var(--dim)",
                letterSpacing: "0.25em",
              }}
            >
              {LOCATION_TAG}
            </span>
          </div>

          {/* headline */}
          <div
            className="bebas reveal"
            style={{
              fontSize: "clamp(64px,11vw,150px)",
              lineHeight: 0.9,
              letterSpacing: "0.03em",
              color: "var(--text)",
            }}
          >
            {HERO_LINE_1}
            <br />
            <span
              style={{ WebkitTextStroke: "1px #333", color: "transparent" }}
            >
              {HERO_LINE_2}
            </span>
          </div>
          <div
            className="bebas reveal"
            style={{
              fontSize: "clamp(64px,11vw,150px)",
              lineHeight: 0.9,
              letterSpacing: "0.03em",
              color: "var(--text)",
              marginBottom: 40,
            }}
          >
            {HERO_LINE_3}
            <br />
            <span style={{ color: "var(--accent)" }}>{HERO_LINE_4}</span>
          </div>

          {/* sub + cta */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 32,
            }}
          >
            <p
              className="reveal mono"
              style={{
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.85,
                maxWidth: 380,
                whiteSpace: "pre-line",
              }}
            >
              {HERO_SUB}
            </p>
            <div
              className="reveal"
              style={{ display: "flex", gap: 14, alignItems: "center" }}
            >
              <a href="#work" className="btn btn-solid">
                {HERO_CTA}
              </a>
              <a href="#work" className="btn btn-ghost">
                {HERO_CTA_2}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "MUSIC",
          "FILM",
          "STREETWEAR",
          "CULTURE",
          "MEMPHIS",
          "UNDERGROUND",
          "20 YEARS",
          "COUNTER CULTURE",
        ]}
      />

      {/* ══════════ MANIFESTO ══════════ */}
      <section
        style={{ padding: "110px 40px", maxWidth: 1100, margin: "0 auto" }}
      >
        <SecLabel n={1} text="THE MANIFESTO" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="bebas reveal"
              style={{
                fontSize: "clamp(44px,6vw,78px)",
                lineHeight: 1,
                color: "var(--text)",
                marginBottom: 36,
              }}
            >
              THE CYCLE
              <br />
              <span
                style={{ textDecoration: "line-through", color: "#2a2a2a" }}
              >
                REPEATS.
              </span>
              <br />
              <span style={{ color: "var(--accent)" }}>NOT ANYMORE.</span>
            </div>
            <a href="#commissions" className="btn btn-ghost reveal">
              WORK WITH US ↗
            </a>
          </div>
          <div className="reveal-r">
            <p
              className="mono"
              style={{
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 2.1,
                marginBottom: 24,
              }}
            >
              Every 20 years, a counter-culture movement rewrites the rules. The
              last one happened without us. This one we're building from the
              inside out — starting with the music, the film, the clothes, and
              the space.
            </p>
            <p
              className="mono"
              style={{
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 2.1,
                marginBottom: 28,
              }}
            >
              No label deal. No cosign. No permission from an industry that was
              never built for us. We are the audience, the creator, the brand,
              and the owner — simultaneously.
            </p>
            <div
              className="bebas"
              style={{
                fontSize: 17,
                color: "var(--accent)",
                letterSpacing: "0.14em",
              }}
            >
              "AUDIENCE → CULTURE → BRAND → OWNERSHIP"
            </div>
          </div>
        </div>

        {/* stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            marginTop: 80,
            border: "1px solid var(--border)",
          }}
        >
          {[
            { n: "10+", l: "Years Behind\nthe Timeline" },
            { n: "3", l: "Active\nBrands" },
            { n: "∞", l: "Beats in\nthe Vault" },
            { n: "20", l: "Year\nVision" },
          ].map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                padding: "38px 28px",
                background: "var(--card)",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                className="bebas"
                style={{ fontSize: 54, color: "var(--accent)", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  letterSpacing: "0.15em",
                  marginTop: 8,
                  textTransform: "uppercase",
                  whiteSpace: "pre-line",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Marquee
        items={[
          "OFC",
          "CREATOR COLLECT",
          "ATHLETES WORLD",
          "THE WAREHOUSE",
          "MEMPHIS UNDERGROUND",
        ]}
        flip
      />

      {/* ══════════ PILLARS / WORK ══════════ */}
      <section
        id="work"
        style={{ padding: "110px 40px", background: "var(--dark)" }}
      >
        <div style={{ maxWidth: 1360, margin: "0 auto" }}>
          <SecLabel n={2} text="THE PILLARS" />
          <div
            className="bebas reveal"
            style={{
              fontSize: "clamp(36px,5.5vw,70px)",
              lineHeight: 1,
              color: "var(--text)",
              marginBottom: 60,
            }}
          >
            THREE BRANDS.
            <br />
            ONE <span style={{ color: "var(--accent)" }}>ECOSYSTEM.</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 1,
              background: "var(--border)",
            }}
          >
            {/* OFC */}
            <div className="p-card reveal" style={{ padding: 0 }}>
              <div
                style={{
                  padding: "32px 28px 24px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span className="tag" style={{ fontSize: 7 }}>
                    THE ROOTS
                  </span>
                  <span
                    className="mono"
                    style={{ fontSize: 9, color: "var(--dim)" }}
                  >
                    [01]
                  </span>
                </div>
                <div
                  className="bebas"
                  style={{
                    fontSize: 40,
                    lineHeight: 0.9,
                    color: "var(--text)",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>OFC</span>
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--dim)",
                    letterSpacing: "0.2em",
                    marginTop: 6,
                  }}
                >
                  OUR FREEDOMS COLLIDE
                </div>
              </div>
              <div style={{ padding: "22px 28px 20px" }}>
                <p
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: 20,
                  }}
                >
                  The genesis. Gaming, anime, and subculture edits (StaticEdits,
                  Jollygeese) that proved the creative instincts from day one.
                  An archive of proof.
                </p>
              </div>
              <a
                href={OFC_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  position: "relative",
                  height: 260,
                  overflow: "hidden",
                  border: "none",
                  margin: "0 0 0 0",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {OFC_VIDEOS.map((v, i) => (
                  <YT key={i} url={v} on={i === ofcI} opacity={0.7} pillar />
                ))}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 40%)",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    className="bebas"
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      color: "#fff",
                      background: "rgba(0,0,0,0.65)",
                      border: "1px solid var(--accent)",
                      backdropFilter: "blur(8px)",
                      padding: "7px 18px",
                      borderRadius: 40,
                    }}
                  >
                    WATCH ARCHIVE ↗
                  </span>
                </div>
              </a>
              <div
                style={{
                  padding: "18px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    className="bebas"
                    style={{ fontSize: 26, color: "var(--accent)" }}
                  >
                    ARCHIVE
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 8,
                      color: "var(--dim)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    THE GENESIS
                  </div>
                </div>
              </div>
            </div>

            {/* CREATOR COLLECT */}
            <div
              className="p-card reveal"
              style={{ padding: 0, transitionDelay: "0.1s" }}
            >
              <div
                style={{
                  padding: "32px 28px 24px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span className="tag" style={{ fontSize: 7 }}>
                    SOUND & VISION
                  </span>
                  <span
                    className="mono"
                    style={{ fontSize: 9, color: "var(--dim)" }}
                  >
                    [02]
                  </span>
                </div>
                <div
                  className="bebas"
                  style={{
                    fontSize: 40,
                    lineHeight: 0.9,
                    color: "var(--text)",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>C</span>C
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--dim)",
                    letterSpacing: "0.2em",
                    marginTop: 6,
                  }}
                >
                  AUDIO / VISUAL AGENCY
                </div>
              </div>
              <div style={{ padding: "22px 28px 20px" }}>
                <p
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: 20,
                  }}
                >
                  A decade of timeline warfare meets trap production. We don't
                  just edit your videos — we're your Showrunner. Map out the
                  series, oversee the cuts, engineer the sound. For creators
                  ready to stop doing it alone.
                </p>
              </div>
              <a
                href={CREATOR_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  position: "relative",
                  height: 260,
                  overflow: "hidden",
                  border: "none",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {CREATOR_VIDEOS.map((v, i) => (
                  <YT key={i} url={v} on={i === creatI} opacity={0.7} pillar />
                ))}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 40%)",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    className="bebas"
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      color: "#fff",
                      background: "rgba(0,0,0,0.65)",
                      border: "1px solid var(--accent)",
                      backdropFilter: "blur(8px)",
                      padding: "7px 18px",
                      borderRadius: 40,
                    }}
                  >
                    EXPLORE PORTFOLIO ↗
                  </span>
                </div>
              </a>
              <div
                style={{
                  padding: "18px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    className="bebas"
                    style={{ fontSize: 26, color: "var(--accent)" }}
                  >
                    10 YRS
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 8,
                      color: "var(--dim)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    FRAME BY FRAME
                  </div>
                </div>
              </div>
            </div>

            {/* ATHLETES WORLD */}
            <div
              className="p-card reveal"
              style={{ padding: 0, transitionDelay: "0.2s" }}
            >
              <div
                style={{
                  padding: "32px 28px 24px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span className="tag" style={{ fontSize: 7 }}>
                    WEAR
                  </span>
                  <span
                    className="mono"
                    style={{ fontSize: 9, color: "var(--dim)" }}
                  >
                    [03]
                  </span>
                </div>
                <div
                  className="bebas"
                  style={{
                    fontSize: 40,
                    lineHeight: 0.9,
                    color: "var(--text)",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>A</span>W
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9,
                    color: "var(--dim)",
                    letterSpacing: "0.2em",
                    marginTop: 6,
                  }}
                >
                  ATHLETIC STREETWEAR
                </div>
              </div>
              <div style={{ padding: "22px 28px 20px" }}>
                <p
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: 20,
                  }}
                >
                  Premium drops where the court meets the street. Built for the
                  athlete who lives between the game and the culture. No mass
                  market. Intentional only.
                </p>
              </div>
              <a
                href={STORE_LINK}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  position: "relative",
                  height: 260,
                  overflow: "hidden",
                  border: "none",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {ATHLETES_VIDEOS.map((v, i) => (
                  <YT key={i} url={v} on={i === athI} opacity={0.7} pillar />
                ))}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 40%)",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    className="bebas"
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      color: "#fff",
                      background: "rgba(0,0,0,0.65)",
                      border: "1px solid var(--accent)",
                      backdropFilter: "blur(8px)",
                      padding: "7px 18px",
                      borderRadius: 40,
                    }}
                  >
                    VISIT STORE ↗
                  </span>
                </div>
              </a>
              <div
                style={{
                  padding: "18px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    className="bebas"
                    style={{ fontSize: 26, color: "var(--accent)" }}
                  >
                    LIVE
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 8,
                      color: "var(--dim)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    ALREADY BUILT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ COMMISSIONS ══════════ */}
      <section
        id="commissions"
        style={{ padding: "110px 40px", background: "var(--black)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel n={3} text="TRANSACTIONS & GROWTH" />
          <div
            className="bebas reveal"
            style={{
              fontSize: "clamp(34px,5vw,66px)",
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            WORK DIRECTLY{" "}
            <span style={{ color: "var(--accent)" }}>WITH CAS.</span>
          </div>
          <p
            className="reveal mono"
            style={{
              fontSize: 12,
              color: "var(--muted)",
              lineHeight: 1.9,
              maxWidth: 580,
              marginBottom: 60,
            }}
          >
            Three commission tiers unlocking over time. Tier 01 is live now —
            the Showrunner Package for creators who are ready to stop settling
            for generic edits and start building an actual series.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
              gap: 20,
            }}
          >
            {TIERS.map((t, i) => (
              <div
                key={i}
                className={`c-card ${!t.active ? "locked" : ""}`}
                style={{ borderTopColor: t.tagColor }}
              >
                <span
                  className={`tag ${!t.active ? "dim" : ""}`}
                  style={{ borderColor: t.tagColor, color: t.tagColor }}
                >
                  {t.tag}
                </span>
                <div
                  className="bebas"
                  style={{
                    fontSize: 28,
                    marginTop: 18,
                    color: t.active ? "var(--text)" : "#555",
                  }}
                >
                  {t.label}
                </div>
                <p
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    margin: "18px 0",
                    flexGrow: 1,
                  }}
                >
                  {t.desc}
                </p>
                <div
                  className="bebas"
                  style={{
                    fontSize: 22,
                    color: t.active ? "var(--accent)" : "#333",
                    marginBottom: 4,
                  }}
                >
                  {t.price}
                </div>
                {t.active ? (
                  <button
                    className="btn-tier"
                    onClick={() => window.open(t.link)}
                  >
                    {t.cta}
                  </button>
                ) : (
                  <button className="btn-tier off">{t.cta}</button>
                )}
              </div>
            ))}
          </div>

          <div className="market-bar">
            <span
              className="mono"
              style={{ fontSize: 10, color: "var(--accent)" }}
            >
              ● LIVE STATUS: HIGH DEMAND
            </span>
            <span className="mono" style={{ fontSize: 9, color: "var(--dim)" }}>
              PRICES RISE AS DEMAND SCALES — UNITED FRONT MECHANISM ACTIVE
            </span>
            <span
              className="mono"
              style={{ fontSize: 10, color: "var(--accent)" }}
            >
              ARCHIVE: 10+ YEARS
            </span>
          </div>
        </div>
      </section>

      {/* ══════════ WAREHOUSE ══════════ */}
      <section
        id="warehouse"
        style={{
          padding: "110px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 75% 50%, rgba(0,240,255,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <SecLabel n={4} text="THE MEMPHIS WAREHOUSE" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
              <div
                className="bebas reveal"
                style={{
                  fontSize: "clamp(44px,6vw,76px)",
                  lineHeight: 0.92,
                  color: "var(--text)",
                  marginBottom: 32,
                }}
              >
                THE
                <br />
                <span style={{ color: "var(--accent)" }}>PHYSICAL</span>
                <br />
                HEADQUARTERS.
              </div>
              <p
                className="reveal mono"
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  lineHeight: 2,
                  marginBottom: 32,
                }}
              >
                One space where beats get made, films get shot, athletes train,
                and culture gets created. The Memphis Warehouse is where the
                ecosystem becomes something you can walk into.
              </p>
              <div
                className="reveal"
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <span className="tag">COMING YEAR 3–5</span>
                <span className="tag dim">MEMPHIS, TN</span>
              </div>
            </div>
            <div className="reveal-r">
              {wh.map((f, i) => (
                <div key={i} className="wh-item">
                  <div
                    style={{ display: "flex", gap: 22, alignItems: "center" }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: 9,
                        color: "var(--accent)",
                        letterSpacing: "0.25em",
                      }}
                    >
                      {f.num}
                    </span>
                    <div>
                      <div
                        className="barlow"
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "var(--text)",
                        }}
                      >
                        {f.label}
                      </div>
                      <div
                        className="mono"
                        style={{
                          fontSize: 10,
                          color: "var(--dim)",
                          marginTop: 2,
                        }}
                      >
                        {f.sub}
                      </div>
                    </div>
                  </div>
                  <span
                    className="wh-arrow"
                    style={{
                      color: "var(--dim)",
                      fontSize: 18,
                      transition: "color .25s",
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* investor callout */}
          <div
            className="reveal"
            style={{
              marginTop: 80,
              padding: "44px 52px",
              border: "1px solid var(--border)",
              borderLeft: "4px solid var(--accent)",
              background: "var(--card)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 28,
            }}
          >
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  letterSpacing: "0.25em",
                  marginBottom: 10,
                }}
              >
                INVEST · PARTNER · COLLABORATE
              </div>
              <div
                className="bebas"
                style={{ fontSize: 34, color: "var(--text)" }}
              >
                WANT TO BE PART OF
                <br />
                <span style={{ color: "var(--accent)" }}>THE WAREHOUSE?</span>
              </div>
            </div>
            <a
              href={BOOKING_LINK}
              className="btn btn-solid"
              style={{ whiteSpace: "nowrap" }}
            >
              GET IN THE ROOM →
            </a>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "BEATS FOR LEASE",
          "BOOK CREATOR COLLECT",
          "ATHLETES WORLD DROPS",
          "FOLLOW @PRD.CAS",
          "JOIN THE LIST",
        ]}
      />

      {/* ══════════ CONNECT / FOOTER ══════════ */}
      <section
        id="connect"
        style={{ padding: "100px 40px 0", background: "#050505" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SecLabel n={5} text="CONNECT" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: 80,
              paddingBottom: 80,
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <div
                className="bebas reveal"
                style={{
                  fontSize: "clamp(44px,5vw,70px)",
                  lineHeight: 0.92,
                  color: "var(--text)",
                  marginBottom: 32,
                }}
              >
                READY TO
                <br />
                <span style={{ color: "var(--accent)" }}>WORK</span>
                <br />
                TOGETHER?
              </div>
              <p
                className="reveal mono"
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  lineHeight: 1.9,
                  maxWidth: 340,
                  marginBottom: 32,
                }}
              >
                Lease a beat, book Creator Collect for your next series, cop an
                Athletes World drop, or link about The Warehouse. The door is
                open.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href={MUSIC_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-solid"
                >
                  MUSIC CATALOG
                </a>
                <a
                  href={STORE_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  SHOP ATHLETES WORLD
                </a>
              </div>
            </div>

            <div className="reveal">
              <div
                className="mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  letterSpacing: "0.3em",
                  marginBottom: 24,
                }}
              >
                EXPLORE
              </div>
              {EXPLORE_LINKS.map((l, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #0d0d0d",
                  }}
                >
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flink"
                  >
                    {l.label}
                  </a>
                </div>
              ))}
            </div>

            <div className="reveal">
              <div
                className="mono"
                style={{
                  fontSize: 9,
                  color: "var(--dim)",
                  letterSpacing: "0.3em",
                  marginBottom: 24,
                }}
              >
                FOLLOW
              </div>
              {SOCIAL_LINKS.map((l, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #0d0d0d",
                  }}
                >
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flink"
                  >
                    {l.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "26px 0",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div
              className="bebas"
              style={{ fontSize: 18, color: "#1e1e1e", letterSpacing: "0.1em" }}
            >
              <span style={{ color: "var(--accent)" }}>"</span>COUNTER CULTURE
              EMPIRE<span style={{ color: "var(--accent)" }}>"</span>
            </div>
            <span
              className="mono"
              style={{
                fontSize: 9,
                color: "var(--dim)",
                letterSpacing: "0.2em",
              }}
            >
              © {new Date().getFullYear()} — ALL RIGHTS RESERVED — MEMPHIS, TN
            </span>
            <span
              className="mono"
              style={{ fontSize: 9, color: "#111", letterSpacing: "0.2em" }}
            >
              BUILT DIFFERENT
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
