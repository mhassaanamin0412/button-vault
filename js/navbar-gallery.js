/**
 * NavVault — Premium Navbar Gallery
 * navbar-gallery.js
 */

/* ── Navbar Code Data ─────────────────────────────────────── */
const NAV_DATA = {
  1: {
    name: "Clean Minimal",
    html: `<nav class="navbar">
  <div class="nav-logo">Brand</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#" class="active">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="nav-cta">Hire Me</button>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 1px 8px rgba(0,0,0,0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #111;
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}
.nav-links a {
  font-size: 0.88rem;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;
}
.nav-links a:hover,
.nav-links a.active {
  color: #111;
}
.nav-cta {
  padding: 8px 20px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}
.nav-cta:hover { background: #333; }`,
    js: `/* No JavaScript required */`
  },
  2: {
    name: "Underline Active",
    html: `<nav class="navbar">
  <div class="nav-logo">◆ Studio</div>
  <ul class="nav-links">
    <li><a href="#">Work</a></li>
    <li><a href="#" class="active">Lab</a></li>
    <li><a href="#">Journal</a></li>
    <li><a href="#">Info</a></li>
  </ul>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #0d0f14;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
}
.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}
.nav-links a {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease;
}
.nav-links a:hover {
  color: #fff;
  border-color: rgba(255,255,255,0.3);
}
.nav-links a.active {
  color: #fff;
  border-color: #5b8def;
}`,
    js: `/* No JavaScript required */`
  },
  3: {
    name: "Dot Navigation",
    html: `<nav class="navbar">
  <span class="nav-logo">ÆTHER</span>
  <ul class="nav-links">
    <li><a href="#" class="active"><span class="dot"></span>Index</a></li>
    <li><a href="#"><span class="dot"></span>Store</a></li>
    <li><a href="#"><span class="dot"></span>About</a></li>
  </ul>
  <span class="nav-tag">EST. 2024</span>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  background: #f8f4ed;
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #111;
  letter-spacing: 0.08em;
}
.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}
.nav-links a {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.82rem;
  color: #666;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.active { color: #111; }
.nav-links a.active .dot { background: #111; }
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ccc;
  transition: background 0.2s;
}
.nav-tag {
  font-size: 0.65rem;
  color: #aaa;
  font-weight: 600;
  letter-spacing: 0.12em;
}`,
    js: `/* No JavaScript required */`
  },
  4: {
    name: "Floating Pill",
    html: `<nav class="navbar">
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #1a1d2a;
}
.nav-links {
  display: flex;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 100px;
  padding: 5px;
  gap: 2px;
  list-style: none;
}
.nav-links a {
  padding: 7px 18px;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  transition: all 0.25s ease;
}
.nav-links a:hover {
  color: #fff;
  background: rgba(255,255,255,0.06);
}
.nav-links a.active {
  background: #5b8def;
  color: #fff;
  box-shadow: 0 2px 12px rgba(91,141,239,0.4);
}`,
    js: `/* No JavaScript required */`
  },
  5: {
    name: "Centered Mono",
    html: `<nav class="navbar">
  <ul class="nav-links">
    <li><a href="#">INDEX</a></li>
    <li><a href="#">WORK</a></li>
    <li class="logo-item"><a href="#">MK</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">SHOP</a></li>
  </ul>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background: #fafaf5;
  border-bottom: 1px solid #eee;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  font-family: 'Courier New', monospace;
  font-size: 0.72rem;
  font-weight: 400;
  color: #888;
  letter-spacing: 0.12em;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover { color: #111; }
.logo-item a {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #111;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #111;
}`,
    js: `/* No JavaScript required */`
  },
  6: {
    name: "Frosted Glass",
    html: `<!-- Place over a colorful background -->
<nav class="navbar">
  <div class="nav-logo">⬡ Frost</div>
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Docs</a></li>
  </ul>
  <button class="nav-btn">Sign Up</button>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.25);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  color: #fff;
}
.nav-links {
  display: flex;
  gap: 22px;
  list-style: none;
}
.nav-links a {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.active { color: #fff; }
.nav-btn {
  padding: 7px 18px;
  background: rgba(255,255,255,0.25);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 100px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-btn:hover { background: rgba(255,255,255,0.35); }`,
    js: `/* No JavaScript required */`
  },
  7: {
    name: "Tinted Glass Bar",
    html: `<nav class="navbar">
  <div class="nav-logo">PRISM</div>
  <ul class="nav-links">
    <li><a href="#">Features</a></li>
    <li><a href="#" class="active">Gallery</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">FAQ</a></li>
  </ul>
  <div class="nav-actions">
    <button class="btn-login">Login</button>
    <button class="btn-signup">Start Free</button>
  </div>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  background: rgba(91,141,239,0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.15);
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 0.92rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.06em;
}
.nav-links { display:flex; gap:20px; list-style:none; }
.nav-links a { font-size:0.84rem; color:rgba(255,255,255,0.65); font-weight:500; text-decoration:none; transition:color .2s; }
.nav-links a:hover,.nav-links a.active { color:#fff; }
.nav-actions { display:flex; gap:8px; }
.btn-login {
  padding: 6px 14px; background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px; color: #fff;
  font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all .2s;
}
.btn-login:hover { background: rgba(255,255,255,0.1); }
.btn-signup {
  padding: 6px 14px; background: rgba(255,255,255,0.9);
  border: none; border-radius: 6px; color: #111;
  font-size: 0.78rem; font-weight: 700; cursor: pointer; transition: all .2s;
}
.btn-signup:hover { background: #fff; }`,
    js: `/* No JavaScript required */`
  },
  8: {
    name: "Glass Floating Pill",
    html: `<nav class="navbar">
  <div class="pill-inner">
    <span class="nav-logo">◈</span>
    <ul class="nav-links">
      <li><a href="#" class="active">Explore</a></li>
      <li><a href="#">Create</a></li>
      <li><a href="#">Share</a></li>
    </ul>
    <button class="nav-btn">↗</button>
  </div>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: transparent;
}
.pill-inner {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.14);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 100px;
  padding: 7px 7px 7px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
.nav-logo { font-size: 1.1rem; color: #fff; margin-right: 10px; }
.nav-links { display:flex; gap:2px; list-style:none; }
.nav-links a {
  padding: 6px 14px; border-radius: 100px;
  font-size: 0.8rem; font-weight: 600;
  color: rgba(255,255,255,0.7);
  text-decoration: none; transition: all .2s;
}
.nav-links a:hover,.nav-links a.active {
  background: rgba(255,255,255,0.2); color: #fff;
}
.nav-btn {
  width: 34px; height: 34px; background: #fff;
  border: none; border-radius: 50%; font-size: 1rem;
  cursor: pointer; font-weight: 700; transition: transform .2s; margin-left: 4px;
}
.nav-btn:hover { transform: scale(1.1) rotate(45deg); }`,
    js: `/* No JavaScript required */`
  },
  9: {
    name: "Dark Glass",
    html: `<nav class="navbar">
  <div class="nav-logo"><em>N</em>ova</div>
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Explore</a></li>
    <li><a href="#">Build</a></li>
    <li><a href="#">Deploy</a></li>
  </ul>
  <div class="nav-avatar">JS</div>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  background: rgba(15,12,41,0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 1rem; font-weight: 800; color: #fff;
}
.nav-logo em { font-style: normal; color: #5b8def; }
.nav-links { display:flex; gap:20px; list-style:none; }
.nav-links a { font-size:0.84rem; color:rgba(255,255,255,0.5); font-weight:500; text-decoration:none; transition:color .2s; }
.nav-links a:hover,.nav-links a.active { color: #fff; }
.nav-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg, #5b8def, #ef5b8d);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.65rem; font-weight: 700; color: #fff;
}`,
    js: `/* No JavaScript required */`
  },
  10: {
    name: "Crystal Border",
    html: `<nav class="navbar">
  <div class="nav-logo">CRYST</div>
  <ul class="nav-links">
    <li><a href="#">Vision</a></li>
    <li><a href="#" class="active">Mission</a></li>
    <li><a href="#">Team</a></li>
  </ul>
  <button class="nav-btn">Join Waitlist</button>
</nav>`,
    css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 28px;
  margin: 8px;
  border-radius: 12px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.35);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.2);
}
.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; letter-spacing:.08em; }
.nav-links { display:flex; gap:20px; list-style:none; }
.nav-links a { font-size:.82rem; color:rgba(255,255,255,.7); font-weight:500; text-decoration:none; transition:all .2s; }
.nav-links a:hover,.nav-links a.active { color:#fff; text-shadow:0 0 12px rgba(255,255,255,.5); }
.nav-btn {
  padding: 7px 16px;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 6px; color: #fff;
  font-size: 0.78rem; font-weight: 600; cursor: pointer;
  backdrop-filter: blur(4px); transition: all .2s;
}
.nav-btn:hover { background: rgba(255,255,255,0.3); }`,
    js: `/* No JavaScript required */`
  },
  11: { name: "Aurora Gradient", html: `<nav class="navbar">\n  <div class="nav-logo">Aurora</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Features</a></li>\n    <li><a href="#">Pricing</a></li>\n    <li><a href="#">Blog</a></li>\n  </ul>\n  <button class="nav-btn">Get Started</button>\n</nav>`, css: `.navbar {\n  display:flex; align-items:center; justify-content:space-between;\n  padding:14px 32px;\n  background:linear-gradient(90deg, #43e97b, #38f9d7);\n}\n.nav-logo { font-family:'Syne',sans-serif; font-size:.95rem; font-weight:800; color:#0a1a12; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(10,26,18,.65); font-weight:600; text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#0a1a12; }\n.nav-btn { padding:8px 18px; background:#0a1a12; color:#43e97b; border:none; border-radius:6px; font-size:.8rem; font-weight:700; cursor:pointer; transition:all .2s; }\n.nav-btn:hover { background:#111; }`, js: `/* No JavaScript required */` },
  12: { name: "Sunset Bar", html: `<nav class="navbar">\n  <div class="nav-logo">Dusk</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Discover</a></li>\n    <li><a href="#">Create</a></li>\n    <li><a href="#">Community</a></li>\n    <li><a href="#">Pro</a></li>\n  </ul>\n  <button class="nav-btn">Try Free</button>\n</nav>`, css: `.navbar {\n  display:flex; align-items:center; justify-content:space-between;\n  padding:14px 32px;\n  background:linear-gradient(90deg, #f093fb, #f5576c);\n}\n.nav-logo { font-family:'Syne',sans-serif; font-size:.95rem; font-weight:800; color:#fff; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.75); font-weight:600; text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.nav-btn { padding:7px 18px; background:rgba(255,255,255,.25); border:1px solid rgba(255,255,255,.5); border-radius:6px; color:#fff; font-size:.8rem; font-weight:700; cursor:pointer; transition:all .2s; }\n.nav-btn:hover { background:rgba(255,255,255,.35); }`, js: `/* No JavaScript required */` },
  13: { name: "Ocean Gradient", html: `<nav class="navbar">\n  <div class="nav-logo">◉ Wave</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Surface</a></li>\n    <li><a href="#">Depths</a></li>\n    <li><a href="#">Current</a></li>\n    <li><a href="#">Tides</a></li>\n  </ul>\n</nav>`, css: `.navbar {\n  display:flex; align-items:center; justify-content:space-between;\n  padding:14px 32px;\n  background:linear-gradient(90deg, #667eea, #43e8ff);\n}\n.nav-logo { font-family:'Syne',sans-serif; font-size:.95rem; font-weight:800; color:#fff; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.75); font-weight:600; text-decoration:none; transition:all .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; text-shadow:0 0 8px rgba(255,255,255,.5); }`, js: `/* No JavaScript required */` },
  14: { name: "Gradient Underline", html: `<nav class="navbar">\n  <div class="nav-logo">SHIFT</div>\n  <ul class="nav-links">\n    <li><a href="#">Products</a></li>\n    <li><a href="#" class="active">Design</a></li>\n    <li><a href="#">Code</a></li>\n    <li><a href="#">Dev</a></li>\n  </ul>\n  <button class="nav-btn">Hire Us</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#0d0f14; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; letter-spacing:.08em; }\n.nav-links { display:flex; gap:24px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.45); font-weight:500; text-decoration:none; padding-bottom:4px; position:relative; transition:color .2s; }\n.nav-links a::after { content:''; position:absolute; bottom:0; left:0; right:100%; height:2px; background:linear-gradient(90deg,#5b8def,#ef5b8d); border-radius:2px; transition:right .3s ease; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.nav-links a:hover::after,.nav-links a.active::after { right:0; }\n.nav-btn { padding:7px 18px; background:linear-gradient(135deg,#5b8def,#ef5b8d); border:none; border-radius:6px; color:#fff; font-size:.8rem; font-weight:700; cursor:pointer; }`, js: `/* No JavaScript required */` },
  15: { name: "Rainbow Border", html: `<nav class="navbar">\n  <div class="nav-logo">SPEC</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Work</a></li>\n    <li><a href="#">Team</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>`, css: `.navbar {\n  display:flex; align-items:center; justify-content:space-between;\n  padding:12px 30px; margin:2px; border-radius:10px;\n  background:#0d0f14; position:relative;\n}\n.navbar::before {\n  content:''; position:absolute; inset:-2px; border-radius:12px; z-index:-1;\n  background:linear-gradient(90deg,#5b8def,#ef5b8d,#3de89a,#ffd700,#5b8def);\n  background-size:300% 100%;\n  animation:rainbowBorder 3s linear infinite;\n}\n@keyframes rainbowBorder { to { background-position:300% 0; } }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; letter-spacing:.08em; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.5); font-weight:500; text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }`, js: `/* No JavaScript required */` },
  16: { name: "Obsidian", html: `<nav class="navbar">\n  <div class="nav-logo">⬡ OBS</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Products</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Blog</a></li>\n  </ul>\n  <div class="nav-actions">\n    <button class="btn-login">Login</button>\n    <button class="btn-cta">Sign Up ↗</button>\n  </div>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#0a0a0f; border-bottom:1px solid rgba(255,255,255,.06); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.4); font-weight:500; text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.nav-actions { display:flex; gap:8px; }\n.btn-login { padding:6px 14px; background:transparent; border:1px solid rgba(255,255,255,.15); border-radius:6px; color:rgba(255,255,255,.6); font-size:.76rem; cursor:pointer; transition:all .2s; }\n.btn-login:hover { border-color:rgba(255,255,255,.4); color:#fff; }\n.btn-cta { padding:6px 14px; background:#5b8def; border:none; border-radius:6px; color:#fff; font-size:.76rem; font-weight:700; cursor:pointer; transition:all .2s; }\n.btn-cta:hover { background:#7aa5f5; }`, js: `/* No JavaScript required */` },
  17: { name: "Carbon Bold", html: `<nav class="navbar">\n  <div class="nav-logo">CARBON</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Studio</a></li>\n    <li><a href="#">Cases</a></li>\n    <li><a href="#">Process</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n  <span class="nav-tag">DESIGN STUDIO</span>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#0d0d0d; border-bottom:2px solid #222; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:1rem; font-weight:800; color:#fff; letter-spacing:.06em; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.86rem; color:rgba(255,255,255,.45); font-weight:600; letter-spacing:.04em; text-decoration:none; transition:all .2s; }\n.nav-links a:hover { color:#fff; }\n.nav-links a.active { color:#fff; text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:4px; }\n.nav-tag { font-size:.6rem; color:rgba(255,255,255,.2); letter-spacing:.14em; text-transform:uppercase; }`, js: `/* No JavaScript required */` },
  18: { name: "Terminal", html: `<nav class="navbar">\n  <div class="nav-logo"><span class="prompt">~/</span>root</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">ls</a></li>\n    <li><a href="#">cd work</a></li>\n    <li><a href="#">cd about</a></li>\n    <li><a href="#">./contact</a></li>\n  </ul>\n  <span class="cursor">█</span>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#0d1117; font-family:'Courier New',monospace; }\n.nav-logo { font-size:.88rem; color:#3de89a; }\n.prompt { color:rgba(61,232,154,.5); }\n.nav-links { display:flex; gap:20px; list-style:none; }\n.nav-links a { font-family:'Courier New',monospace; font-size:.8rem; color:rgba(61,232,154,.6); text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#3de89a; }\n.cursor { color:#3de89a; animation:blink .8s step-end infinite; }\n@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`, js: `/* No JavaScript required */` },
  19: { name: "Void Dark", html: `<nav class="navbar">\n  <div class="nav-logo">VOID</div>\n  <ul class="nav-links">\n    <li><a href="#">∕ Enter</a></li>\n    <li><a href="#" class="active">∕ Explore</a></li>\n    <li><a href="#">∕ Build</a></li>\n    <li><a href="#">∕ Exit</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#050507; border-bottom:1px solid rgba(255,255,255,.04); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:1rem; font-weight:800; color:rgba(255,255,255,.12); letter-spacing:.15em; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.82rem; color:rgba(255,255,255,.2); font-weight:500; text-decoration:none; transition:all .3s; }\n.nav-links a:hover,.nav-links a.active { color:rgba(255,255,255,.9); letter-spacing:.06em; }`, js: `/* No JavaScript required */` },
  20: { name: "Midnight Solid", html: `<nav class="navbar">\n  <div class="nav-logo">MID<em>NIGHT</em></div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Gallery</a></li>\n    <li><a href="#">Archive</a></li>\n    <li><a href="#">Press</a></li>\n  </ul>\n  <div class="dot-menu"><span></span><span></span><span></span></div>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#0e1018; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.nav-logo em { font-style:normal; color:rgba(255,255,255,.25); font-weight:300; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.4); text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.dot-menu { display:flex; gap:5px; align-items:center; cursor:pointer; }\n.dot-menu span { width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,.2); }\n.dot-menu span:nth-child(2) { background:rgba(255,255,255,.5); }`, js: `/* No JavaScript required */` },
  21: { name: "Slide Reveal", html: `<nav class="navbar">\n  <div class="nav-logo">SL/DE</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Work</a></li>\n    <li><a href="#">Play</a></li>\n    <li><a href="#">Think</a></li>\n    <li><a href="#">Talk</a></li>\n  </ul>\n  <button class="nav-btn">Open</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#0d0f14; overflow:hidden; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; letter-spacing:.06em; }\n.nav-links { display:flex; gap:20px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.45); text-decoration:none; position:relative; overflow:hidden; display:inline-block; transition:color .3s; }\n.nav-links a::after { content:attr(href); position:absolute; top:100%; left:0; color:#5b8def; transition:top .3s cubic-bezier(.4,0,.2,1); }\n.nav-links a:hover { color:transparent; }\n.nav-links a:hover::after { top:0; }\n.nav-links a.active { color:#fff; }\n.nav-btn { padding:7px 16px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:6px; color:#fff; font-size:.8rem; font-weight:600; cursor:pointer; transition:all .2s; }\n.nav-btn:hover { background:rgba(91,141,239,.15); border-color:rgba(91,141,239,.3); }`, js: `/* No JavaScript required */` },
  22: { name: "Shimmer Links", html: `<nav class="navbar">\n  <div class="nav-logo">LUMINA</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Discover</a></li>\n    <li><a href="#">Create</a></li>\n    <li><a href="#">Share</a></li>\n    <li><a href="#">Earn</a></li>\n  </ul>\n  <button class="nav-btn">Dashboard →</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#14161f; overflow:hidden; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.88rem; font-weight:800; color:#fff; letter-spacing:.1em; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.45); font-weight:500; text-decoration:none; position:relative; overflow:hidden; padding:4px 8px; border-radius:4px; transition:color .2s; }\n.nav-links a::before { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent); animation:shimmer 2.4s infinite; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n@keyframes shimmer { to { left:200%; } }\n.nav-btn { padding:7px 16px; background:#5b8def; border:none; border-radius:6px; color:#fff; font-size:.78rem; font-weight:700; cursor:pointer; transition:all .2s; }\n.nav-btn:hover { background:#7aa5f5; }`, js: `/* No JavaScript required */` },
  23: { name: "Pulse Dot Nav", html: `<nav class="navbar">\n  <div class="nav-logo">\n    <span class="pulse-dot"></span>LIVE\n  </div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">● Stream</a></li>\n    <li><a href="#">○ Archive</a></li>\n    <li><a href="#">○ Schedule</a></li>\n    <li><a href="#">○ Clips</a></li>\n  </ul>\n  <button class="nav-btn">Watch Now</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#0a0c14; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; display:flex; align-items:center; gap:8px; }\n.pulse-dot { width:8px; height:8px; border-radius:50%; background:#ef5b8d; display:inline-block; animation:pulseDot 1.5s infinite; }\n@keyframes pulseDot { 0%{box-shadow:0 0 0 0 rgba(239,91,141,.5)} 70%{box-shadow:0 0 0 8px rgba(239,91,141,0)} 100%{box-shadow:0 0 0 0 rgba(239,91,141,0)} }\n.nav-links { display:flex; gap:16px; list-style:none; }\n.nav-links a { font-size:.8rem; color:rgba(255,255,255,.4); text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.nav-btn { padding:6px 14px; background:#ef5b8d; border:none; border-radius:100px; color:#fff; font-size:.76rem; font-weight:700; cursor:pointer; animation:pulseDot 1.5s infinite; }`, js: `/* No JavaScript required */` },
  24: { name: "Animated Underline", html: `<nav class="navbar">\n  <div class="nav-logo">Forma</div>\n  <ul class="nav-links">\n    <li><a href="#">About</a></li>\n    <li><a href="#" class="active">Process</a></li>\n    <li><a href="#">Projects</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n  <button class="nav-btn">Let's Talk</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#fafafa; border-bottom:1px solid #eee; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.95rem; font-weight:800; color:#111; }\n.nav-links { display:flex; gap:26px; list-style:none; }\n.nav-links a { font-size:.86rem; color:#888; font-weight:500; text-decoration:none; position:relative; padding-bottom:3px; transition:color .3s; }\n.nav-links a::after { content:''; position:absolute; bottom:0; left:50%; right:50%; height:2px; background:#111; border-radius:2px; transition:all .3s cubic-bezier(.4,0,.2,1); }\n.nav-links a:hover,.nav-links a.active { color:#111; }\n.nav-links a:hover::after,.nav-links a.active::after { left:0; right:0; }\n.nav-btn { padding:8px 18px; background:#111; color:#fff; border:none; border-radius:6px; font-size:.82rem; font-weight:600; cursor:pointer; transition:all .2s; }\n.nav-btn:hover { background:#333; }`, js: `/* No JavaScript required */` },
  25: { name: "Marquee Bar", html: `<nav class="navbar">\n  <div class="marquee-wrap">\n    <div class="marquee">\n      <span>HOME</span><span>·</span><span>WORK</span><span>·</span>\n      <span>ABOUT</span><span>·</span><span>CONTACT</span><span>·</span>\n      <span>HOME</span><span>·</span><span>WORK</span><span>·</span>\n      <span>ABOUT</span><span>·</span><span>CONTACT</span><span>·</span>\n    </div>\n  </div>\n</nav>`, css: `.navbar { background:#0d0f14; overflow:hidden; }\n.marquee-wrap { overflow:hidden; padding:14px 0; cursor:pointer; }\n.marquee { display:flex; gap:22px; white-space:nowrap; animation:marquee 6s linear infinite; }\n.marquee:hover { animation-play-state:paused; }\n.marquee span { font-family:'Syne',sans-serif; font-size:.78rem; font-weight:700; color:rgba(255,255,255,.35); letter-spacing:.12em; transition:color .2s; }\n.marquee span:hover { color:#fff; }\n.marquee span:nth-child(even) { color:rgba(91,141,239,.5); }\n@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`, js: `/* No JavaScript required */` },
  26: { name: "Neon Cyan", html: `<nav class="navbar">\n  <div class="nav-logo">CYBER</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Grid</a></li>\n    <li><a href="#">Matrix</a></li>\n    <li><a href="#">Nodes</a></li>\n    <li><a href="#">Exit</a></li>\n  </ul>\n  <button class="nav-btn">CONNECT</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#050507; border-bottom:1px solid rgba(0,245,255,.15); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#00f5ff; text-shadow:0 0 10px #00f5ff,0 0 20px rgba(0,245,255,.4); letter-spacing:.12em; }\n.nav-links { display:flex; gap:20px; list-style:none; }\n.nav-links a { font-size:.82rem; color:rgba(0,245,255,.45); text-decoration:none; transition:all .2s; }\n.nav-links a:hover,.nav-links a.active { color:#00f5ff; text-shadow:0 0 8px #00f5ff; }\n.nav-btn { padding:6px 14px; background:transparent; border:1px solid #00f5ff; border-radius:4px; color:#00f5ff; font-size:.76rem; font-weight:700; cursor:pointer; text-shadow:0 0 6px #00f5ff; box-shadow:0 0 10px rgba(0,245,255,.2),inset 0 0 10px rgba(0,245,255,.05); transition:all .2s; }\n.nav-btn:hover { background:rgba(0,245,255,.1); box-shadow:0 0 20px rgba(0,245,255,.4); }`, js: `/* No JavaScript required */` },
  27: { name: "Neon Pink", html: `<nav class="navbar">\n  <div class="nav-logo">SYNTH</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Beats</a></li>\n    <li><a href="#">Drops</a></li>\n    <li><a href="#">Mixes</a></li>\n    <li><a href="#">NFTs</a></li>\n  </ul>\n  <button class="nav-btn">PLAY ▶</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#050507; border-bottom:1px solid rgba(255,45,120,.15); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#ff2d78; text-shadow:0 0 10px #ff2d78; letter-spacing:.06em; }\n.nav-links { display:flex; gap:20px; list-style:none; }\n.nav-links a { font-size:.82rem; color:rgba(255,45,120,.45); text-decoration:none; transition:all .2s; }\n.nav-links a:hover,.nav-links a.active { color:#ff2d78; text-shadow:0 0 8px #ff2d78; }\n.nav-btn { padding:6px 14px; background:transparent; border:1px solid #ff2d78; border-radius:4px; color:#ff2d78; font-size:.76rem; font-weight:700; cursor:pointer; box-shadow:0 0 10px rgba(255,45,120,.3); transition:all .2s; animation:flicker 3s infinite; }\n@keyframes flicker { 0%,100%{box-shadow:0 0 8px rgba(255,45,120,.3)} 93%{box-shadow:0 0 3px rgba(255,45,120,.1)} 95%{box-shadow:0 0 18px rgba(255,45,120,.6)} }`, js: `/* No JavaScript required */` },
  28: { name: "Neon Green", html: `<nav class="navbar">\n  <div class="nav-logo">[HACK]</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">/root</a></li>\n    <li><a href="#">/sys</a></li>\n    <li><a href="#">/net</a></li>\n    <li><a href="#">/exit</a></li>\n  </ul>\n  <button class="nav-btn">RUN</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#050507; border-bottom:1px solid rgba(57,255,20,.12); }\n.nav-logo { font-family:'Courier New',monospace; font-size:.9rem; font-weight:400; color:#39ff14; text-shadow:0 0 8px #39ff14; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links a { font-family:'Courier New',monospace; font-size:.78rem; color:rgba(57,255,20,.5); text-decoration:none; transition:all .2s; }\n.nav-links a:hover,.nav-links a.active { color:#39ff14; text-shadow:0 0 8px #39ff14; }\n.nav-btn { padding:6px 12px; background:transparent; border:1px solid #39ff14; border-radius:3px; color:#39ff14; font-family:'Courier New',monospace; font-size:.72rem; cursor:pointer; box-shadow:0 0 10px rgba(57,255,20,.25); transition:all .2s; }\n.nav-btn:hover { background:rgba(57,255,20,.1); box-shadow:0 0 18px rgba(57,255,20,.4); }`, js: `/* No JavaScript required */` },
  29: { name: "Neon Purple", html: `<nav class="navbar">\n  <div class="nav-logo">∞ FLUX</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Realm</a></li>\n    <li><a href="#">Void</a></li>\n    <li><a href="#">Ether</a></li>\n    <li><a href="#">Abyss</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#050507; border-bottom:1px solid rgba(191,90,242,.15); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#bf5af2; text-shadow:0 0 10px #bf5af2,0 0 20px rgba(191,90,242,.4); }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.82rem; color:rgba(191,90,242,.45); text-decoration:none; transition:all .2s; }\n.nav-links a:hover,.nav-links a.active { color:#bf5af2; text-shadow:0 0 8px #bf5af2; }`, js: `/* No JavaScript required */` },
  30: { name: "Multi Neon", html: `<nav class="navbar">\n  <div class="nav-logo">RGB</div>\n  <ul class="nav-links">\n    <li class="c-red"><a href="#" class="active">Red</a></li>\n    <li class="c-green"><a href="#">Green</a></li>\n    <li class="c-blue"><a href="#">Blue</a></li>\n    <li class="c-white"><a href="#">White</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#050507; border-bottom:1px solid rgba(255,255,255,.04); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:1rem; font-weight:800; letter-spacing:.12em; background:linear-gradient(90deg,#ff2d78,#39ff14,#00f5ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }\n.nav-links { display:flex; gap:20px; list-style:none; }\n.nav-links a { font-size:.84rem; font-weight:600; text-decoration:none; transition:all .25s; }\n.c-red a { color:rgba(255,45,120,.5); } .c-red a:hover,.c-red a.active { color:#ff2d78; text-shadow:0 0 10px #ff2d78; }\n.c-green a { color:rgba(57,255,20,.5); } .c-green a:hover,.c-green a.active { color:#39ff14; text-shadow:0 0 10px #39ff14; }\n.c-blue a { color:rgba(0,245,255,.5); } .c-blue a:hover,.c-blue a.active { color:#00f5ff; text-shadow:0 0 10px #00f5ff; }\n.c-white a { color:rgba(255,255,255,.3); } .c-white a:hover,.c-white a.active { color:#fff; text-shadow:0 0 10px rgba(255,255,255,.7); }`, js: `/* No JavaScript required */` },
  31: { name: "Raised 3D Bar", html: `<nav class="navbar">\n  <div class="nav-logo">SOLID</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Shop</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n  <button class="nav-btn">Buy Now</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 28px; background:#e8e8ec; box-shadow:0 4px 0 #b0b0b8,0 6px 14px rgba(0,0,0,.2); border-radius:6px; margin:8px; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#111; }\n.nav-links { display:flex; gap:6px; list-style:none; }\n.nav-links a { font-size:.82rem; color:#666; font-weight:500; text-decoration:none; padding:5px 10px; border-radius:4px; transition:all .2s; }\n.nav-links a:hover { background:rgba(0,0,0,.06); color:#111; }\n.nav-links a.active { background:#fff; color:#111; box-shadow:0 2px 0 #c0c0c8; }\n.nav-btn { padding:7px 16px; background:#333; color:#fff; border:none; border-radius:5px; font-size:.8rem; font-weight:700; cursor:pointer; box-shadow:0 4px 0 #111; transition:all .1s; }\n.nav-btn:hover { transform:translateY(1px); box-shadow:0 3px 0 #111; }\n.nav-btn:active { transform:translateY(4px); box-shadow:none; }`, js: `/* No JavaScript required */` },
  32: { name: "Extruded Links", html: `<nav class="navbar">\n  <div class="nav-logo">EXTRUDE</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Work</a></li>\n    <li><a href="#">Lab</a></li>\n    <li><a href="#">Say Hi</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 32px; background:#f8f8f2; border-bottom:2px solid #ddd; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#111; }\n.nav-links { display:flex; gap:6px; list-style:none; }\n.nav-links a { font-size:.84rem; color:#666; font-weight:600; text-decoration:none; padding:7px 14px; border-radius:6px; border:1px solid transparent; transition:all .15s; }\n.nav-links a:hover { background:#fff; border-color:#ddd; box-shadow:0 4px 0 #ccc; color:#111; }\n.nav-links a:hover:active { transform:translateY(3px); box-shadow:0 1px 0 #ccc; }\n.nav-links a.active { background:#fff; border-color:#bbb; box-shadow:0 4px 0 #aaa; color:#111; }`, js: `/* No JavaScript required */` },
  33: { name: "Layered Shadow", html: `<nav class="navbar">\n  <div class="nav-logo">LAYER</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Overview</a></li>\n    <li><a href="#">Features</a></li>\n    <li><a href="#">Pricing</a></li>\n    <li><a href="#">Docs</a></li>\n  </ul>\n  <button class="nav-btn">Get App</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 28px; background:#1a1d2a; border-radius:6px; margin:8px; box-shadow:0 4px 0 rgba(91,141,239,.4),0 8px 0 rgba(91,141,239,.15),0 12px 24px rgba(0,0,0,.4); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.45); font-weight:500; text-decoration:none; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.nav-btn { padding:7px 16px; background:#5b8def; border:none; border-radius:5px; color:#fff; font-size:.8rem; font-weight:700; cursor:pointer; box-shadow:0 4px 0 #3a6bc7; transition:all .1s; }\n.nav-btn:hover { transform:translateY(1px); box-shadow:0 3px 0 #3a6bc7; }\n.nav-btn:active { transform:translateY(4px); box-shadow:none; }`, js: `/* No JavaScript required */` },
  34: { name: "Perspective Hover", html: `<nav class="navbar">\n  <div class="nav-logo">DEPTH</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Fore</a></li>\n    <li><a href="#">Mid</a></li>\n    <li><a href="#">Back</a></li>\n    <li><a href="#">Beyond</a></li>\n  </ul>\n  <button class="nav-btn">Dive In</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 32px; background:#0d0f1a; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.nav-links { display:flex; gap:18px; list-style:none; perspective:600px; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.45); font-weight:500; text-decoration:none; display:inline-block; transform-style:preserve-3d; transition:all .3s ease; }\n.nav-links a:hover { color:#5b8def; transform:perspective(200px) rotateX(-20deg) translateY(-2px); text-shadow:0 4px 8px rgba(91,141,239,.4); }\n.nav-links a.active { color:#5b8def; }\n.nav-btn { padding:7px 16px; background:rgba(91,141,239,.15); border:1px solid rgba(91,141,239,.3); border-radius:6px; color:#5b8def; font-size:.8rem; font-weight:700; cursor:pointer; transition:all .2s; }\n.nav-btn:hover { background:rgba(91,141,239,.25); }`, js: `/* No JavaScript required */` },
  35: { name: "Neumorphic", html: `<nav class="navbar">\n  <div class="nav-logo">NEU</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Work</a></li>\n    <li><a href="#">Skills</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:14px 28px; background:#1e2030; border-radius:10px; margin:8px; box-shadow:6px 6px 16px rgba(0,0,0,.5),-4px -4px 12px rgba(255,255,255,.03); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:rgba(255,255,255,.6); }\n.nav-links { display:flex; gap:6px; list-style:none; }\n.nav-links a { font-size:.82rem; color:rgba(255,255,255,.35); text-decoration:none; padding:7px 14px; border-radius:8px; font-weight:500; transition:all .2s; }\n.nav-links a:hover { color:rgba(255,255,255,.7); box-shadow:3px 3px 8px rgba(0,0,0,.4),-2px -2px 6px rgba(255,255,255,.025); }\n.nav-links a.active { color:#5b8def; box-shadow:inset 3px 3px 8px rgba(0,0,0,.5),inset -2px -2px 6px rgba(255,255,255,.025); }`, js: `/* No JavaScript required */` },
  36: { name: "Classic Mega Menu", html: `<nav class="navbar">\n  <div class="nav-logo">MEGA</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li class="has-mega">\n      <a href="#" class="active">Products ▾</a>\n      <div class="mega-menu">\n        <div class="mega-col">\n          <span class="col-title">Design</span>\n          <a href="#">UI Kit</a>\n          <a href="#">Icons</a>\n          <a href="#">Fonts</a>\n        </div>\n        <div class="mega-col">\n          <span class="col-title">Dev</span>\n          <a href="#">Components</a>\n          <a href="#">Templates</a>\n          <a href="#">APIs</a>\n        </div>\n        <div class="mega-col">\n          <span class="col-title">Tools</span>\n          <a href="#">Figma Plugin</a>\n          <a href="#">VS Code</a>\n          <a href="#">CLI</a>\n        </div>\n      </div>\n    </li>\n    <li><a href="#">Pricing</a></li>\n    <li><a href="#">Blog</a></li>\n  </ul>\n  <button class="nav-btn">Start Free</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; gap:18px; padding:12px 28px; background:#0d0f14; position:relative; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; margin-right:8px; }\n.nav-links { display:flex; gap:18px; list-style:none; flex:1; }\n.nav-links > li { position:relative; }\n.nav-links > li > a { font-size:.82rem; color:rgba(255,255,255,.5); font-weight:500; text-decoration:none; padding:6px 2px; transition:color .2s; cursor:pointer; }\n.nav-links > li > a:hover,.nav-links > li > a.active { color:#fff; }\n.mega-menu { display:none; position:absolute; top:calc(100% + 12px); left:-16px; background:#13161f; border:1px solid rgba(255,255,255,.08); border-radius:10px; padding:18px; display:grid; grid-template-columns:repeat(3,1fr); gap:18px; min-width:340px; z-index:100; box-shadow:0 18px 50px rgba(0,0,0,.6); }\n.has-mega:hover .mega-menu { display:grid; }\n.mega-col { display:flex; flex-direction:column; gap:6px; }\n.col-title { font-family:'Syne',sans-serif; font-size:.68rem; font-weight:700; color:#5b8def; text-transform:uppercase; letter-spacing:.1em; margin-bottom:4px; }\n.mega-col a { font-size:.78rem; color:rgba(255,255,255,.5); text-decoration:none; transition:color .2s; padding:2px 0; }\n.mega-col a:hover { color:#fff; }\n.nav-btn { padding:6px 14px; background:#5b8def; border:none; border-radius:5px; color:#fff; font-size:.76rem; font-weight:700; cursor:pointer; margin-left:auto; }`, js: `/* No JavaScript required - uses CSS :hover */` },
  37: { name: "Card Mega Menu", html: `<nav class="navbar">\n  <div class="nav-logo">Nexus</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li class="has-mega">\n      <a href="#" class="active">Solutions ▾</a>\n      <div class="mega-menu">\n        <a href="#" class="mega-card">\n          <div class="card-icon">⚡</div>\n          <strong>Speed</strong>\n          <span>Lightning builds</span>\n        </a>\n        <a href="#" class="mega-card">\n          <div class="card-icon">🛡</div>\n          <strong>Security</strong>\n          <span>Enterprise-grade</span>\n        </a>\n        <a href="#" class="mega-card">\n          <div class="card-icon">📊</div>\n          <strong>Analytics</strong>\n          <span>Real-time data</span>\n        </a>\n      </div>\n    </li>\n    <li><a href="#">Pricing</a></li>\n    <li><a href="#">About</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; gap:18px; padding:12px 28px; background:#fff; border-bottom:1px solid #eee; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.95rem; font-weight:800; color:#111; margin-right:8px; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links > li { position:relative; }\n.nav-links > li > a { font-size:.84rem; color:#666; font-weight:500; text-decoration:none; transition:color .2s; cursor:pointer; padding:6px 2px; }\n.nav-links > li > a:hover,.nav-links > li > a.active { color:#111; }\n.mega-menu { display:none; grid-template-columns:repeat(3,1fr); gap:10px; position:absolute; top:calc(100% + 12px); left:-16px; background:#fff; border:1px solid #eee; border-radius:12px; padding:14px; min-width:360px; z-index:100; box-shadow:0 16px 48px rgba(0,0,0,.12); }\n.has-mega:hover .mega-menu { display:grid; }\n.mega-card { display:flex; flex-direction:column; align-items:center; gap:6px; padding:14px 10px; background:#f8f8f8; border:1px solid #eee; border-radius:8px; text-decoration:none; text-align:center; transition:all .2s; }\n.mega-card:hover { background:#fff; border-color:#5b8def; box-shadow:0 4px 16px rgba(91,141,239,.15); }\n.card-icon { font-size:1.4rem; }\n.mega-card strong { font-size:.8rem; font-weight:700; color:#111; display:block; }\n.mega-card span { font-size:.7rem; color:#888; }`, js: `/* No JavaScript required - uses CSS :hover */` },
  38: { name: "Full Width Mega", html: `<nav class="navbar">\n  <div class="nav-logo">ARCH</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li class="has-mega">\n      <a href="#" class="active">Catalogue ▾</a>\n      <div class="mega-menu">\n        <div class="featured">\n          <span>Featured</span>\n          <strong>New Collection 2025</strong>\n          <p>Explore the latest drops</p>\n          <a href="#">View →</a>\n        </div>\n        <div class="mega-cats">\n          <div class="cat"><span>Tops</span><a href="#">T-Shirts</a><a href="#">Hoodies</a></div>\n          <div class="cat"><span>Bottoms</span><a href="#">Jeans</a><a href="#">Shorts</a></div>\n          <div class="cat"><span>Accessories</span><a href="#">Caps</a><a href="#">Bags</a></div>\n        </div>\n      </div>\n    </li>\n    <li><a href="#">About</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; gap:18px; padding:12px 28px; background:#0d0f14; position:relative; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; margin-right:8px; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links > li { position:relative; }\n.nav-links > li > a { font-size:.82rem; color:rgba(255,255,255,.5); text-decoration:none; transition:color .2s; cursor:pointer; }\n.nav-links > li > a:hover,.nav-links > li > a.active { color:#fff; }\n.mega-menu { display:none; flex-direction:row; gap:24px; position:absolute; top:calc(100% + 6px); left:-28px; right:-28px; background:#13161f; border:1px solid rgba(255,255,255,.07); padding:18px; z-index:100; box-shadow:0 18px 48px rgba(0,0,0,.6); }\n.has-mega:hover .mega-menu { display:flex; }\n.featured { background:linear-gradient(135deg,rgba(91,141,239,.12),rgba(61,232,154,.06)); border:1px solid rgba(91,141,239,.2); border-radius:8px; padding:16px; flex-shrink:0; width:160px; }\n.featured span { font-size:.62rem; font-weight:700; color:#5b8def; text-transform:uppercase; letter-spacing:.1em; display:block; margin-bottom:6px; }\n.featured strong { font-size:.84rem; color:#fff; display:block; margin-bottom:4px; }\n.featured p { font-size:.74rem; color:rgba(255,255,255,.45); margin-bottom:10px; }\n.featured a { font-size:.76rem; color:#5b8def; font-weight:600; text-decoration:none; }\n.mega-cats { display:flex; gap:22px; flex:1; }\n.cat span { font-family:'Syne',sans-serif; font-size:.66rem; font-weight:700; color:rgba(255,255,255,.25); text-transform:uppercase; letter-spacing:.1em; display:block; margin-bottom:6px; }\n.cat a { font-size:.78rem; color:rgba(255,255,255,.5); text-decoration:none; display:block; margin-bottom:4px; transition:color .2s; }\n.cat a:hover { color:#fff; }`, js: `/* No JavaScript required - uses CSS :hover */` },
  39: { name: "Icon Mega Menu", html: `<nav class="navbar">\n  <div class="nav-logo">◉ Hub</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li class="has-mega">\n      <a href="#" class="active">Services ▾</a>\n      <div class="mega-menu">\n        <a href="#" class="mega-item"><span class="m-ico">◈</span><div><strong>Design</strong><small>UI/UX</small></div></a>\n        <a href="#" class="mega-item"><span class="m-ico">⊕</span><div><strong>Dev</strong><small>Web App</small></div></a>\n        <a href="#" class="mega-item"><span class="m-ico">◎</span><div><strong>Brand</strong><small>Identity</small></div></a>\n        <a href="#" class="mega-item"><span class="m-ico">⊛</span><div><strong>Motion</strong><small>Animation</small></div></a>\n      </div>\n    </li>\n    <li><a href="#">Work</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; gap:18px; padding:12px 28px; background:#1a1d2a; position:relative; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; margin-right:8px; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links > li { position:relative; }\n.nav-links > li > a { font-size:.82rem; color:rgba(255,255,255,.5); text-decoration:none; transition:color .2s; cursor:pointer; }\n.nav-links > li > a:hover,.nav-links > li > a.active { color:#fff; }\n.mega-menu { display:none; flex-wrap:wrap; gap:8px; position:absolute; top:calc(100% + 10px); left:-16px; background:#13161f; border:1px solid rgba(255,255,255,.08); border-radius:10px; padding:12px; min-width:280px; z-index:100; box-shadow:0 16px 40px rgba(0,0,0,.5); }\n.has-mega:hover .mega-menu { display:flex; }\n.mega-item { display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:8px; text-decoration:none; width:calc(50% - 4px); transition:background .2s; }\n.mega-item:hover { background:rgba(255,255,255,.05); }\n.m-ico { width:32px; height:32px; background:rgba(91,141,239,.12); border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:.9rem; color:#5b8def; flex-shrink:0; }\n.mega-item strong { font-size:.8rem; color:#fff; display:block; }\n.mega-item small { font-size:.66rem; color:rgba(255,255,255,.35); }`, js: `/* No JavaScript required - uses CSS :hover */` },
  40: { name: "Sidebar Mega", html: `<nav class="navbar">\n  <div class="nav-logo">SIDE</div>\n  <ul class="nav-links">\n    <li><a href="#">Home</a></li>\n    <li class="has-mega">\n      <a href="#" class="active">Platform ▾</a>\n      <div class="mega-menu">\n        <div class="mega-sidebar">\n          <a href="#" class="stab active">Overview</a>\n          <a href="#" class="stab">Analytics</a>\n          <a href="#" class="stab">Integrations</a>\n        </div>\n        <div class="mega-content">\n          <strong>Platform Overview</strong>\n          <p>Everything you need to build, ship, and scale modern apps.</p>\n          <a href="#" class="learn-link">Learn more →</a>\n        </div>\n      </div>\n    </li>\n    <li><a href="#">Pricing</a></li>\n  </ul>\n</nav>`, css: `.navbar { display:flex; align-items:center; gap:18px; padding:12px 28px; background:#0d0f14; position:relative; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; margin-right:8px; }\n.nav-links { display:flex; gap:18px; list-style:none; }\n.nav-links > li { position:relative; }\n.nav-links > li > a { font-size:.82rem; color:rgba(255,255,255,.5); text-decoration:none; transition:color .2s; cursor:pointer; }\n.nav-links > li > a:hover,.nav-links > li > a.active { color:#fff; }\n.mega-menu { display:none; flex-direction:row; position:absolute; top:calc(100% + 10px); left:-16px; background:#13161f; border:1px solid rgba(255,255,255,.08); border-radius:10px; overflow:hidden; min-width:340px; z-index:100; box-shadow:0 16px 40px rgba(0,0,0,.6); }\n.has-mega:hover .mega-menu { display:flex; }\n.mega-sidebar { background:#0d0f14; padding:12px 8px; display:flex; flex-direction:column; gap:2px; width:120px; flex-shrink:0; }\n.stab { display:block; font-size:.76rem; font-weight:500; color:rgba(255,255,255,.4); padding:8px 12px; border-radius:6px; text-decoration:none; transition:all .2s; }\n.stab:hover,.stab.active { color:#fff; background:rgba(91,141,239,.15); }\n.mega-content { padding:18px; flex:1; }\n.mega-content strong { font-size:.86rem; color:#fff; display:block; margin-bottom:6px; }\n.mega-content p { font-size:.78rem; color:rgba(255,255,255,.45); margin-bottom:10px; line-height:1.55; }\n.learn-link { font-size:.78rem; color:#5b8def; font-weight:600; text-decoration:none; }`, js: `/* No JavaScript required - uses CSS :hover */` },
  41: { name: "Split Half", html: `<nav class="navbar">\n  <div class="nav-left">\n    <span>WORK</span>\n    <span>JOURNAL</span>\n  </div>\n  <div class="nav-logo">◈</div>\n  <div class="nav-right">\n    <span>ABOUT</span>\n    <span>CONTACT</span>\n  </div>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:16px 32px; background:#f8f8f5; border-bottom:1px solid #e5e5e0; }\n.nav-left,.nav-right { display:flex; gap:26px; }\n.nav-left span,.nav-right span { font-family:'Syne',sans-serif; font-size:.72rem; font-weight:700; color:#aaa; letter-spacing:.12em; cursor:pointer; transition:color .2s; }\n.nav-left span:hover,.nav-right span:hover { color:#111; }\n.nav-logo { font-size:1.6rem; color:#111; cursor:pointer; transition:transform .4s cubic-bezier(.34,1.56,.64,1); }\n.nav-logo:hover { transform:rotate(90deg); }`, js: `/* No JavaScript required */` },
  42: { name: "Editorial", html: `<nav class="navbar">\n  <div class="nav-issue">ISSUE 12 — 2025</div>\n  <div class="nav-logo">THE PRESS</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Front Page</a></li>\n    <li><a href="#">Culture</a></li>\n    <li><a href="#">Tech</a></li>\n    <li><a href="#">Opinion</a></li>\n  </ul>\n</nav>`, css: `.navbar { background:#fafaf5; border-top:3px solid #111; padding:8px 24px; }\n.nav-issue { font-size:.62rem; color:#888; letter-spacing:.14em; font-family:'Courier New',monospace; margin-bottom:4px; padding-top:4px; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:1.15rem; font-weight:800; color:#111; letter-spacing:.06em; border-bottom:2px solid #111; padding-bottom:7px; margin-bottom:8px; }\n.nav-links { display:flex; gap:22px; list-style:none; }\n.nav-links a { font-size:.78rem; color:#666; font-weight:500; font-family:'Syne',sans-serif; letter-spacing:.04em; text-decoration:none; transition:color .2s; }\n.nav-links a:hover { color:#111; }\n.nav-links a.active { color:#111; font-style:italic; }`, js: `/* No JavaScript required */` },
  43: { name: "Brutalist", html: `<nav class="navbar">\n  <div class="nav-logo">BRUT</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">HOME</a></li>\n    <li><a href="#">WORK</a></li>\n    <li><a href="#">ABOUT</a></li>\n    <li><a href="#">CONTACT</a></li>\n  </ul>\n  <button class="nav-btn">ENTER →</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:10px 20px; background:#f0e840; border-bottom:3px solid #111; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:1rem; font-weight:800; color:#111; letter-spacing:.08em; }\n.nav-links { display:flex; gap:0; list-style:none; }\n.nav-links a { font-family:'Syne',sans-serif; font-size:.76rem; font-weight:800; color:#111; text-decoration:none; padding:7px 12px; border-right:2px solid #111; letter-spacing:.06em; transition:all .15s; }\n.nav-links li:last-child a { border-right:none; }\n.nav-links a:hover,.nav-links a.active { background:#111; color:#f0e840; }\n.nav-btn { padding:7px 16px; background:#111; color:#f0e840; border:2px solid #111; font-family:'Syne',sans-serif; font-size:.76rem; font-weight:800; cursor:pointer; letter-spacing:.06em; transition:all .15s; }\n.nav-btn:hover { background:#f0e840; color:#111; }`, js: `/* No JavaScript required */` },
  44: { name: "Sticker Style", html: `<nav class="navbar">\n  <div class="nav-logo">🎨 Studio</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Portfolio</a></li>\n    <li><a href="#">Shop</a></li>\n    <li><a href="#">Blog</a></li>\n  </ul>\n  <button class="nav-btn">🚀 Launch</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:12px 24px; background:linear-gradient(135deg,#ffe0f0,#e0f4ff); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#333; }\n.nav-links { display:flex; gap:8px; list-style:none; }\n.nav-links a { font-size:.78rem; font-weight:700; color:#555; text-decoration:none; padding:5px 12px; background:#fff; border:2px solid #111; border-radius:100px; box-shadow:2px 2px 0 #111; transition:all .15s; }\n.nav-links a:hover { transform:translate(-1px,-1px); box-shadow:3px 3px 0 #111; }\n.nav-links a.active { background:#111; color:#fff; }\n.nav-btn { padding:7px 16px; background:#ff6584; color:#fff; border:2px solid #111; border-radius:100px; font-size:.78rem; font-weight:700; cursor:pointer; box-shadow:2px 2px 0 #111; transition:all .15s; }\n.nav-btn:hover { transform:translate(-1px,-1px); box-shadow:3px 3px 0 #111; }`, js: `/* No JavaScript required */` },
  45: { name: "Side Vertical Nav", html: `<nav class="navbar">\n  <div class="nav-logo">V</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Work</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n  <div class="nav-socials">\n    <a href="#">tw</a><a href="#">ig</a><a href="#">gh</a>\n  </div>\n</nav>`, css: `.navbar { display:flex; flex-direction:column; justify-content:space-between; align-items:flex-start; padding:20px 16px; background:#0d0f14; border-right:1px solid rgba(255,255,255,.07); width:80px; min-height:100vh; position:fixed; top:0; left:0; bottom:0; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:1.2rem; font-weight:800; color:#fff; writing-mode:vertical-rl; letter-spacing:.1em; }\n.nav-links { display:flex; flex-direction:column; gap:16px; list-style:none; }\n.nav-links a { font-size:.72rem; color:rgba(255,255,255,.35); font-weight:600; text-decoration:none; writing-mode:vertical-rl; transition:color .2s; }\n.nav-links a:hover,.nav-links a.active { color:#5b8def; }\n.nav-socials { display:flex; flex-direction:column; gap:8px; }\n.nav-socials a { font-size:.66rem; color:rgba(255,255,255,.2); text-transform:uppercase; letter-spacing:.08em; text-decoration:none; transition:color .2s; }\n.nav-socials a:hover { color:#fff; }`, js: `/* No JavaScript required */` },
  46: { name: "Bottom Tab Bar", html: `<!-- Mobile: place at bottom of page -->\n<nav class="tab-bar">\n  <a href="#" class="tab active">\n    <span class="tab-icon">⌂</span>\n    <small>Home</small>\n  </a>\n  <a href="#" class="tab">\n    <span class="tab-icon">⊕</span>\n    <small>Explore</small>\n  </a>\n  <a href="#" class="tab tab-center">\n    <span class="tab-icon">+</span>\n  </a>\n  <a href="#" class="tab">\n    <span class="tab-icon">◈</span>\n    <small>Save</small>\n  </a>\n  <a href="#" class="tab">\n    <span class="tab-icon">◉</span>\n    <small>Profile</small>\n  </a>\n</nav>`, css: `.tab-bar { display:flex; align-items:stretch; background:#0e1018; border-top:1px solid rgba(255,255,255,.07); position:fixed; bottom:0; left:0; right:0; z-index:100; padding-bottom:env(safe-area-inset-bottom); }\n.tab { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; padding:10px 4px; text-decoration:none; color:rgba(255,255,255,.35); font-size:.68rem; transition:all .2s; border:none; background:none; }\n.tab-icon { font-size:1.1rem; }\n.tab.active { color:#5b8def; }\n.tab-center { width:56px; height:56px; background:linear-gradient(135deg,#5b8def,#3de89a); color:#fff; border-radius:50%; margin-top:-18px; box-shadow:0 4px 14px rgba(91,141,239,.4); flex-direction:row; }\n.tab-center .tab-icon { font-size:1.4rem !important; }`, js: `// Activate tab on click\ndocument.querySelectorAll('.tab').forEach(tab => {\n  tab.addEventListener('click', (e) => {\n    e.preventDefault();\n    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));\n    tab.classList.add('active');\n  });\n});` },
  47: { name: "Hamburger Slide", html: `<nav class="navbar">\n  <div class="nav-bar">\n    <div class="nav-logo">SLIDE</div>\n    <button class="hamburger" id="hamburger">\n      <span></span><span></span><span></span>\n    </button>\n  </div>\n  <div class="nav-menu" id="navMenu">\n    <ul>\n      <li><a href="#" class="active">Home</a></li>\n      <li><a href="#">About</a></li>\n      <li><a href="#">Work</a></li>\n      <li><a href="#">Contact</a></li>\n    </ul>\n    <button class="menu-cta">Get In Touch →</button>\n  </div>\n</nav>`, css: `.navbar { background:#0d0f14; }\n.nav-bar { display:flex; align-items:center; justify-content:space-between; padding:12px 20px; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.hamburger { display:flex; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }\n.hamburger span { display:block; width:22px; height:2px; background:rgba(255,255,255,.6); border-radius:2px; transition:all .3s; }\n.hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }\n.hamburger.open span:nth-child(2) { opacity:0; }\n.hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }\n.nav-menu { max-height:0; overflow:hidden; transition:max-height .35s cubic-bezier(.4,0,.2,1); background:#13161f; }\n.nav-menu.open { max-height:300px; }\n.nav-menu ul { list-style:none; padding:14px 20px; display:flex; flex-direction:column; gap:2px; }\n.nav-menu ul li a { font-size:.88rem; color:rgba(255,255,255,.5); font-weight:500; display:block; padding:9px 0; border-bottom:1px solid rgba(255,255,255,.05); text-decoration:none; transition:color .2s; }\n.nav-menu ul li a:hover,.nav-menu ul li a.active { color:#fff; }\n.menu-cta { margin:0 20px 16px; width:calc(100% - 40px); padding:10px; background:#5b8def; border:none; border-radius:6px; color:#fff; font-size:.84rem; font-weight:700; cursor:pointer; }`, js: `const ham = document.getElementById('hamburger');\nconst menu = document.getElementById('navMenu');\n\nham.addEventListener('click', () => {\n  ham.classList.toggle('open');\n  menu.classList.toggle('open');\n});` },
  48: { name: "Fullscreen Overlay", html: `<nav class="navbar">\n  <div class="nav-bar">\n    <div class="nav-logo">FULL</div>\n    <button class="menu-open" id="menuOpen">☰</button>\n  </div>\n  <div class="nav-overlay" id="navOverlay">\n    <button class="menu-close" id="menuClose">✕</button>\n    <ul class="overlay-links">\n      <li><a href="#">01 Home</a></li>\n      <li><a href="#">02 Work</a></li>\n      <li><a href="#">03 About</a></li>\n      <li><a href="#">04 Contact</a></li>\n    </ul>\n  </div>\n</nav>`, css: `.navbar { background:#0d0f14; position:relative; }\n.nav-bar { display:flex; align-items:center; justify-content:space-between; padding:14px 24px; }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.menu-open { background:none; border:1px solid rgba(255,255,255,.2); color:#fff; font-size:1rem; width:36px; height:36px; border-radius:6px; cursor:pointer; transition:all .2s; }\n.menu-open:hover { background:rgba(255,255,255,.06); }\n.nav-overlay { position:fixed; inset:0; background:rgba(8,10,16,.97); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; opacity:0; transform:scale(1.04); pointer-events:none; transition:opacity .3s,transform .3s; z-index:999; }\n.nav-overlay.open { opacity:1; transform:scale(1); pointer-events:all; }\n.menu-close { position:absolute; top:20px; right:24px; background:none; border:none; color:rgba(255,255,255,.4); font-size:1.2rem; cursor:pointer; transition:color .2s; }\n.menu-close:hover { color:#fff; }\n.overlay-links { list-style:none; text-align:center; }\n.overlay-links li { padding:8px 0; }\n.overlay-links a { font-family:'Syne',sans-serif; font-size:1.8rem; font-weight:800; color:rgba(255,255,255,.5); text-decoration:none; letter-spacing:.04em; transition:all .3s; display:inline-block; }\n.overlay-links a:hover { color:#fff; transform:translateX(8px); }`, js: `const openBtn = document.getElementById('menuOpen');\nconst closeBtn = document.getElementById('menuClose');\nconst overlay = document.getElementById('navOverlay');\n\nopenBtn.addEventListener('click', () => overlay.classList.add('open'));\ncloseBtn.addEventListener('click', () => overlay.classList.remove('open'));\n\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape') overlay.classList.remove('open');\n});` },
  49: { name: "Dot Indicator", html: `<div class="app-wrap">\n  <nav class="top-bar">\n    <div class="nav-logo">APP</div>\n    <button class="ham-btn">☰</button>\n  </nav>\n  <div class="page-content">Swipe between pages</div>\n  <div class="dot-nav">\n    <span class="dot active"></span>\n    <span class="dot"></span>\n    <span class="dot"></span>\n    <span class="dot"></span>\n  </div>\n</div>`, css: `.app-wrap { display:flex; flex-direction:column; height:100vh; background:#0d0f14; }\n.top-bar { display:flex; align-items:center; justify-content:space-between; padding:14px 20px; background:#0d0f14; border-bottom:1px solid rgba(255,255,255,.06); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.9rem; font-weight:800; color:#fff; }\n.ham-btn { background:none; border:none; color:rgba(255,255,255,.5); font-size:1rem; cursor:pointer; }\n.page-content { flex:1; display:flex; align-items:center; justify-content:center; font-size:.8rem; color:rgba(255,255,255,.2); }\n.dot-nav { display:flex; gap:8px; align-items:center; justify-content:center; padding:16px; background:#0d0f14; border-top:1px solid rgba(255,255,255,.06); }\n.dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.15); cursor:pointer; transition:all .3s; }\n.dot.active { width:26px; border-radius:4px; background:#5b8def; }`, js: `document.querySelectorAll('.dot').forEach((dot, i) => {\n  dot.addEventListener('click', () => {\n    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));\n    dot.classList.add('active');\n  });\n});` },
  50: { name: "Sticky Shrink", html: `<nav class="navbar" id="navbar">\n  <div class="nav-logo">SHRINK</div>\n  <ul class="nav-links">\n    <li><a href="#" class="active">Home</a></li>\n    <li><a href="#">Work</a></li>\n    <li><a href="#">Blog</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n  <button class="nav-btn">Contact</button>\n</nav>`, css: `.navbar { display:flex; align-items:center; justify-content:space-between; padding:16px 32px; background:#0d0f14; border-bottom:1px solid rgba(255,255,255,.07); position:sticky; top:0; z-index:100; transition:all .4s ease; }\n.navbar.shrunk { padding:8px 32px; background:rgba(8,10,16,.96); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); box-shadow:0 2px 24px rgba(0,0,0,.5); }\n.nav-logo { font-family:'Syne',sans-serif; font-size:.95rem; font-weight:800; color:#fff; transition:font-size .3s; }\n.navbar.shrunk .nav-logo { font-size:.8rem; }\n.nav-links { display:flex; gap:18px; list-style:none; transition:gap .3s; }\n.navbar.shrunk .nav-links { gap:12px; }\n.nav-links a { font-size:.84rem; color:rgba(255,255,255,.45); text-decoration:none; transition:all .2s; }\n.nav-links a:hover,.nav-links a.active { color:#fff; }\n.navbar.shrunk .nav-links a { font-size:.76rem; }\n.nav-btn { padding:7px 16px; background:#5b8def; border:none; border-radius:6px; color:#fff; font-size:.8rem; font-weight:600; cursor:pointer; transition:all .3s; }\n.navbar.shrunk .nav-btn { padding:5px 12px; font-size:.72rem; }`, js: `window.addEventListener('scroll', () => {\n  const navbar = document.getElementById('navbar');\n  if (window.scrollY > 60) {\n    navbar.classList.add('shrunk');\n  } else {\n    navbar.classList.remove('shrunk');\n  }\n});` }
};

/* ── Site Header & Hamburger ──────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const siteNav = document.getElementById('nav');
const siteHeader = document.getElementById('header');

hamburger && hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  siteNav.classList.toggle('open');
});
document.addEventListener('click', e => {
  if (!e.target.closest('.header-inner') && siteNav.classList.contains('open')) {
    siteNav.classList.remove('open');
    hamburger && hamburger.classList.remove('open');
  }
});
window.addEventListener('scroll', () => {
  if (siteHeader) siteHeader.style.boxShadow = window.scrollY > 10
    ? '0 2px 40px rgba(0,0,0,.6)' : '0 1px 40px rgba(0,0,0,.4)';
});

/* ── Sidebar ──────────────────────────────────────────────── */
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

function openSidebar() { sidebar.classList.add('open'); sidebarOverlay.classList.add('open'); }
function closeSidebar() { sidebar.classList.remove('open'); sidebarOverlay.classList.remove('open'); }
sidebarOverlay && sidebarOverlay.addEventListener('click', closeSidebar);
sidebarClose && sidebarClose.addEventListener('click', closeSidebar);

/* ── Category Filtering ───────────────────────────────────── */
const catItems = document.querySelectorAll('.category-item');
const navboxes = document.querySelectorAll('.navbox');
const sectionTitle = document.getElementById('sectionTitle');
const countBadge = document.getElementById('countBadge');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
let activeCat = 'all';

function filterGrid() {
  const q = (searchInput.value || '').toLowerCase().trim();
  let visible = 0;
  navboxes.forEach((box, i) => {
    const cat = box.dataset.cat;
    const name = (box.dataset.name || '').toLowerCase();
    const catMatch = activeCat === 'all' || cat === activeCat;
    const nameMatch = !q || name.includes(q);
    const show = catMatch && nameMatch;
    box.style.display = show ? '' : 'none';
    if (show) { box.style.animationDelay = (visible * 0.04) + 's'; visible++; }
  });
  countBadge.textContent = visible + ' navbar' + (visible !== 1 ? 's' : '');
  noResults.style.display = visible === 0 ? 'block' : 'none';
  if (noResults) {
    const st = document.getElementById('searchTerm');
    if (st) st.textContent = searchInput.value;
  }
}

catItems.forEach(item => {
  item.addEventListener('click', () => {
    catItems.forEach(c => c.classList.remove('active'));
    item.classList.add('active');
    activeCat = item.dataset.cat;
    const label = item.textContent.replace(/\d+/g, '').trim();
    sectionTitle.textContent = activeCat === 'all' ? 'All Navbars' : label;
    filterGrid();
    if (window.innerWidth <= 768) closeSidebar();
  });
});

searchInput && searchInput.addEventListener('input', filterGrid);

/* ── Modal ────────────────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const modalCopyBtn = document.getElementById('modalCopyBtn');
const copyConfirm = document.getElementById('copyConfirm');
const tabBtns = document.querySelectorAll('.tab-btn');
const codePanels = document.querySelectorAll('.code-panel');
let activeTab = 'html';

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const data = NAV_DATA[id];
    if (!data) return;
    modalTitle.textContent = data.name;
    htmlCode.textContent = data.html;
    cssCode.textContent = data.css;
    jsCode.textContent = data.js;
    // Reset to HTML tab
    tabBtns.forEach(b => b.classList.remove('active'));
    codePanels.forEach(p => p.classList.remove('active'));
    document.querySelector('[data-tab="html"]').classList.add('active');
    document.getElementById('htmlPanel').classList.add('active');
    activeTab = 'html';
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    codePanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    document.getElementById(activeTab + 'Panel').classList.add('active');
  });
});

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose && modalClose.addEventListener('click', closeModal);
modalOverlay && modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

modalCopyBtn && modalCopyBtn.addEventListener('click', () => {
  const panelMap = { html: htmlCode, css: cssCode, js: jsCode };
  const text = panelMap[activeTab]?.textContent || '';
  navigator.clipboard.writeText(text).then(() => {
    copyConfirm.classList.add('show');
    setTimeout(() => copyConfirm.classList.remove('show'), 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    copyConfirm.classList.add('show');
    setTimeout(() => copyConfirm.classList.remove('show'), 2000);
  });
});

/* ── Demo Interactive Navbars ────────────────────────────── */

// n47: Hamburger Slide toggle
const n47Ham = document.getElementById('n47Ham');
const n47Menu = document.getElementById('n47Menu');
n47Ham && n47Ham.addEventListener('click', () => {
  n47Ham.classList.toggle('open');
  n47Menu.classList.toggle('open');
});

// n48: Fullscreen overlay toggle
const n48Open = document.getElementById('n48Open');
const n48Close = document.getElementById('n48Close');
const n48Overlay = document.getElementById('n48Overlay');
n48Open && n48Open.addEventListener('click', () => n48Overlay.classList.add('open'));
n48Close && n48Close.addEventListener('click', () => n48Overlay.classList.remove('open'));

// n50: Sticky shrink demo toggle
const n50 = document.getElementById('n50');
const n50Toggle = document.getElementById('n50Toggle');
n50Toggle && n50Toggle.addEventListener('click', () => {
  n50.classList.toggle('shrunk');
  n50Toggle.textContent = n50.classList.contains('shrunk') ? 'Expand ↓' : 'Shrink ↑';
});

document.getElementById('search2').addEventListener('click', function () {
  document.getElementById('searchInput').classList.add('active');
  document.getElementById('searchBarHide').style.visibility = 'visible';
});

function searchBarHide() {
  document.getElementById('searchInput').classList.remove('active');
  document.getElementById('searchBarHide').style.visibility = 'hidden';
}

/* ── Stagger card animations ─────────────────────────────── */
navboxes.forEach((box, i) => { box.style.animationDelay = (i * 0.035) + 's'; });

console.log('%cNavVault Ready ⬡', 'color:#5b8def;font-weight:700;font-size:1rem;');