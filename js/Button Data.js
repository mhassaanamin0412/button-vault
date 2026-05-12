/* ─── Button Code Data ──────────────────────────────────────── */
const BUTTON_DATA = {
  1: {
    name: "Slide Fill",
    html: `<button class="btn-1">Slide Fill</button>`,
    css: `.btn-1 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  color: #6c63ff;
  background-image: linear-gradient(to right, #6c63ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-1:hover {
  background-position: left;
  color: #fff;
}`,
    js: `/* No JavaScript required */`
  },
  2: {
    name: "Border Sweep",
    html: `<button class="btn-2">Border Sweep</button>`,
    css: `.btn-2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-2::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  border-radius: 10px;
  z-index: -1;
  background-size: 300% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.btn-2:hover::before {
  opacity: 1;
  animation: sweepGrad 2.5s ease-in-out infinite;
}
.btn-2:hover { color: #fff; }

@keyframes sweepGrad {
  to { background-position: 300% 0; }
}`,
    js: `/* No JavaScript required */`
  },
  3: {
    name: "Reveal Text",
    html: `<button class="btn-3">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-3 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 15px;
  position: absolute;
}
.btn-3 span:nth-child(1) { transform: translateY(0); }
.btn-3 span:nth-child(2) { transform: translateY(50px); color: #6c63ff; }
.btn-3:hover span:nth-child(1) { transform: translateY(-50px); opacity: 0; }
.btn-3:hover span:nth-child(2) { transform: translateY(0); }`,
    js: `/* No JavaScript required */`
  },
  4: {
    name: "Background Wipe",
    html: `<button class="btn-4">Background Wipe</button>`,
    css: `.btn-4 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-4::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-4:hover::before { transform: scaleX(1); }`,
    js: `/* No JavaScript required */`
  },
  5: {
    name: "Color Shift",
    html: `<button class="btn-5">Color Shift</button>`,
    css: `.btn-5 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  transition: filter 0.4s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-5:hover {
  filter: hue-rotate(45deg) brightness(1.2);
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },
  6: {
    name: "Aurora",
    html: `<button class="btn-6">Aurora</button>`,
    css: `.btn-6 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: #0a1a12;
  box-shadow: 0 4px 20px rgba(67,233,123,0.35);
  background-size: 200% 200%;
  animation: auroraShift 4s ease infinite;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-6:hover {
  box-shadow: 0 6px 30px rgba(67,233,123,0.55);
  transform: translateY(-2px);
}
@keyframes auroraShift {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },
  7: {
    name: "Sunset",
    html: `<button class="btn-7">Sunset</button>`,
    css: `.btn-7 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #fda085 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: sunsetShift 3s ease infinite alternate;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-7:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(245,87,108,0.4);
}
@keyframes sunsetShift {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}`,
    js: `/* No JavaScript required */`
  },
  8: {
    name: "Ocean Drift",
    html: `<button class="btn-8">Ocean Drift</button>`,
    css: `.btn-8 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #43e8ff 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: oceanDrift 5s ease infinite;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-8:hover { transform: scale(1.06); }
@keyframes oceanDrift {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },
  9: {
    name: "Cosmic",
    html: `<button class="btn-9">Cosmic</button>`,
    css: `.btn-9 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
  background-size: 300% 300%;
  animation: cosmicAnim 6s ease infinite;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-9:hover {
  border-color: rgba(108,99,255,0.5);
  box-shadow: 0 0 20px rgba(108,99,255,0.3);
}
@keyframes cosmicAnim {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },
  10: {
    name: "Mint Fresh",
    html: `<button class="btn-10">Mint Fresh</button>`,
    css: `.btn-10 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #2d3748;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-10:hover {
  background: linear-gradient(135deg, #fed6e3, #a8edea);
  transform: rotate(-2deg) scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },
  11: {
    name: "Classic Outline",
    html: `<button class="btn-11">Classic Outline</button>`,
    css: `.btn-11 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #6c63ff;
  border: 2px solid #6c63ff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-11:hover { background: #6c63ff; color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  12: {
    name: "Dash Border",
    html: `<button class="btn-12">Dash Border</button>`,
    css: `.btn-12 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 2px dashed rgba(108,99,255,0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-12:hover {
  border-color: #6c63ff;
  border-style: solid;
  color: #6c63ff;
}`,
    js: `/* No JavaScript required */`
  },
  13: {
    name: "Double Ring",
    html: `<button class="btn-13">Double Ring</button>`,
    css: `.btn-13 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 2px solid rgba(255,255,255,0.2);
  box-shadow: inset 0 0 0 4px rgba(255,255,255,0.04);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-13:hover {
  border-color: #6c63ff;
  box-shadow: inset 0 0 0 4px rgba(108,99,255,0.15), 0 0 0 4px rgba(108,99,255,0.15);
}`,
    js: `/* No JavaScript required */`
  },
  14: {
    name: "Corner Accent",
    html: `<button class="btn-14">Corner Accent</button>`,
    css: `.btn-14 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-14::before,
.btn-14::after {
  content: '';
  position: absolute;
  width: 12px; height: 12px;
  transition: all 0.3s ease;
}
.btn-14::before {
  top: 0; left: 0;
  border-top: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-14::after {
  bottom: 0; right: 0;
  border-bottom: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-14:hover::before { width: 100%; height: 100%; }
.btn-14:hover::after  { width: 100%; height: 100%; }
.btn-14:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  15: {
    name: "Animated Border",
    html: `<button class="btn-15">Animated Border</button>`,
    css: `.btn-15 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-15::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  background-size: 300% 100%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: borderAnim 2.5s linear infinite;
}
  .btn-15:hover {
  box-shadow: inset 0 0 2px 2px transparent;
}

.btn-15:hover::before {
  -webkit-mask: none;
  z-index: -1;
}

.btn-15:active::before {
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  z-index: -2;
}

.btn-15:active {
  z-index: 1;
  filter: blur(1px);
}
@keyframes borderAnim { to { background-position: 300% 0; } }`,
    js: `/* No JavaScript required */`
  },
  16: {
    name: "Pulse Ring",
    html: `<button class="btn-16">Pulse Ring</button>`,
    css: `.btn-16 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  box-shadow: 0 0 0 0 rgba(108,99,255,0.5);
  animation: pulseRing 2s infinite;
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-16:hover { background: #7c74ff; }
@keyframes pulseRing {
  0%   { box-shadow: 0 0 0 0 rgba(108,99,255,0.5); }
  70%  { box-shadow: 0 0 0 12px rgba(108,99,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
}`,
    js: `/* No JavaScript required */`
  },
  17: {
    name: "Ripple Wave",
    html: `<button class="btn-17">Ripple Wave</button>`,
    css: `.btn-17 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.btn-17:hover { background: #ff4d73; }
.btn-17 .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  transform: scale(0);
  animation: rippleAnim 0.6s linear;
  pointer-events: none;
}
@keyframes rippleAnim {
  to { transform: scale(4); opacity: 0; }
}`,
    js: `// Ripple effect
document.querySelectorAll('.btn-17').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width  = ripple.style.height = size + 'px';
    ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});`
  },
  18: {
    name: "Shimmer",
    html: `<button class="btn-18">Shimmer</button>`,
    css: `.btn-18 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1a1d2e, #2a2d40);
  color: #f0f2f8;
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
.btn-18::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  animation: shimmer 2s infinite;
}
@keyframes shimmer { to { left: 200%; } }`,
    js: `/* No JavaScript required */`
  },
  19: {
    name: "Bounce Load",
    html: `<button class="btn-19">Loading…</button>`,
    css: `.btn-19 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: not-allowed;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #43e97b;
  color: #0a1a10;
  position: relative;
  overflow: hidden;
}
.btn-19::after {
  content: '';
  display: inline-block;
  width: 6px; height: 6px;
  background: #0a1a10;
  border-radius: 50%;
  margin-left: 8px;
  vertical-align: middle;
  animation: bounceDot 0.8s ease infinite alternate;
}
@keyframes bounceDot {
  from { transform: translateY(0); }
  to   { transform: translateY(-6px); }
}`,
    js: `/* No JavaScript required */`
  },
  20: {
    name: "Rotate Icon",
    html: `<button class="btn-20">⟳ Refresh</button>`,
    css: `.btn-20 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #302b63;
  color: #fff;
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-20:hover { background: #6c63ff; }
.btn-20:hover::first-letter,
.btn-20:hover { animation: spinBtn 0.5s ease; }
@keyframes spinBtn {
  0%   { letter-spacing: 0.03em; }
  50%  { letter-spacing: 0.12em; }
  100% { letter-spacing: 0.03em; }
}`,
    js: `/* No JavaScript required */`
  },
  21: {
    name: "Deep Shadow",
    html: `<button class="btn-21">Deep Shadow</button>`,
    css: `.btn-21 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #4f46e5;
  color: #fff;
  box-shadow: 0 10px 30px rgba(79,70,229,0.4), 0 1px 0 rgba(255,255,255,0.15) inset;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-21:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(79,70,229,0.5), 0 1px 0 rgba(255,255,255,0.2) inset;
}
.btn-21:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(79,70,229,0.3);
}`,
    js: `/* No JavaScript required */`
  },
  22: {
    name: "Glow Lift",
    html: `<button class="btn-22">Glow Lift</button>`,
    css: `.btn-22 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: #13161e;
  color: #f0f2f8;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}
.btn-22:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(108,99,255,0.35);
  border-color: rgba(108,99,255,0.4);
}`,
    js: `/* No JavaScript required */`
  },
  23: {
    name: "Inner Shadow",
    html: `<button class="btn-23">Inner Shadow</button>`,
    css: `.btn-23 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #1e2030;
  color: #f0f2f8;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.04);
  transition: box-shadow 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-23:hover {
  box-shadow: inset 0 4px 12px rgba(0,0,0,0.6), 0 2px 15px rgba(108,99,255,0.2);
  color: #6c63ff;
}
.btn-23:active{
  transition:color 0s;
  color: black;
}`,
    js: `/* No JavaScript required */`
  },
  24: {
    name: "Colored Shadow",
    html: `<button class="btn-24">Colored Shadow</button>`,
    css: `.btn-24 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  box-shadow: 6px 6px 0 rgba(255,101,132,0.4);
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
}
.btn-24:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 rgba(255,101,132,0.4);
}
.btn-24:active {
  transform: translate(3px,3px);
  box-shadow: 0 0 0 rgba(255,101,132,0);
}`,
    js: `/* No JavaScript required */`
  },
  25: {
    name: "Neumorphic",
    html: `<button class="btn-25">Neumorphic</button>`,
    css: `.btn-25 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: #1e2030;
  color: #8b90a8;
  border: none;
  box-shadow: 5px 5px 12px rgba(0,0,0,0.5), -3px -3px 10px rgba(255,255,255,0.03);
  transition: color 0.3s ease, box-shadow 0.15s ease;
  position: relative;
  overflow: hidden;
}
.btn-25:hover { color: #6c63ff; }
.btn-25:active {
  box-shadow: inset 4px 4px 10px rgba(0,0,0,0.5), inset -2px -2px 8px rgba(255,255,255,0.02);
}`,
    js: `/* No JavaScript required */`
  },
  26: {
    name: "Arrow Right",
    html: `<button class="btn-26">Explore →</button>`,
    css: `.btn-26 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  transition: padding-right 0.3s ease, letter-spacing 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-26:hover { padding-right: 34px; letter-spacing: 0.06em; }`,
    js: `/* No JavaScript required */`
  },
  27: {
    name: "Download",
    html: `<button class="btn-27">⬇ Download</button>`,
    css: `.btn-27 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: #13161e;
  color: #43e97b;
  border: 1px solid rgba(67,233,123,0.25);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-27:hover {
  background: rgba(67,233,123,0.1);
  border-color: #43e97b;
  box-shadow: 0 0 20px rgba(67,233,123,0.2);
}`,
    js: `/* No JavaScript required */`
  },
  28: {
    name: "Heart Like",
    html: `<button class="btn-28">♡ Like</button>`,
    css: `.btn-28 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: #13161e;
  color: #8b90a8;
  border: 1px solid rgba(255,255,255,0.07);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-28:hover {
  background: rgba(255,101,132,0.1);
  color: #ff6584;
  border-color: rgba(255,101,132,0.3);
}`,
    js: `/* No JavaScript required */`
  },
  29: {
    name: "Star Favorite",
    html: `<button class="btn-29">★ Favorite</button>`,
    css: `.btn-29 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ffd700;
  color: #1a1200;
  box-shadow: 0 4px 20px rgba(255,215,0,0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-29:hover {
  background: #ffec4d;
  transform: scale(1.08) rotate(-3deg);
}`,
    js: `/* No JavaScript required */`
  },
  30: {
    name: "Share",
    html: `<button class="btn-30">↗ Share</button>`,
    css: `.btn-30 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-30:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 25px rgba(102,126,234,0.45);
}`,
    js: `/* No JavaScript required */`
  },
  31: {
    name: "Neon Cyan",
    html: `<button class="btn-31">Neon Cyan</button>`,
    css: `/* Place on a dark background for best effect */
.btn-31 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 6px;
  background: transparent;
  color: #00f5ff;
  border: 2px solid #00f5ff;
  text-shadow: 0 0 8px #00f5ff;
  box-shadow: 0 0 12px rgba(0,245,255,0.25), inset 0 0 12px rgba(0,245,255,0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-31:hover {
  background: rgba(0,245,255,0.1);
  box-shadow: 0 0 25px rgba(0,245,255,0.5), inset 0 0 25px rgba(0,245,255,0.08);
  text-shadow: 0 0 16px #00f5ff;
}`,
    js: `/* No JavaScript required */`
  },
  32: {
    name: "Neon Pink",
    html: `<button class="btn-32">Neon Pink</button>`,
    css: `/* Place on a dark background for best effect */
.btn-32 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 6px;
  background: transparent;
  color: #ff2d78;
  border: 2px solid #ff2d78;
  text-shadow: 0 0 8px #ff2d78;
  box-shadow: 0 0 12px rgba(255,45,120,0.3), inset 0 0 12px rgba(255,45,120,0.05);
  animation: neonPinkFlicker 3s infinite;
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-32:hover { background: rgba(255,45,120,0.1); }
@keyframes neonPinkFlicker {
  0%,100%  { box-shadow: 0 0 12px rgba(255,45,120,0.3), inset 0 0 12px rgba(255,45,120,0.05); }
  92% { box-shadow: 0 0 4px rgba(255,45,120,0.1), inset 0 0 4px rgba(255,45,120,0.02); }
  94% { box-shadow: 0 0 20px rgba(255,45,120,0.5), inset 0 0 20px rgba(255,45,120,0.1); }
}`,
    js: `/* No JavaScript required */`
  },
  33: {
    name: "Neon Green",
    html: `<button class="btn-33">Neon Green</button>`,
    css: `/* Place on a dark background for best effect */
.btn-33 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 6px;
  background: transparent;
  color: #39ff14;
  border: 2px solid #39ff14;
  text-shadow: 0 0 8px #39ff14;
  box-shadow: 0 0 16px rgba(57,255,20,0.25);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-33:hover {
  background: rgba(57,255,20,0.08);
  box-shadow: 0 0 30px rgba(57,255,20,0.5);
}`,
    js: `/* No JavaScript required */`
  },
  34: {
    name: "Neon Purple",
    html: `<button class="btn-34">Neon Purple</button>`,
    css: `/* Place on a dark background for best effect */
.btn-34 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 6px;
  background: transparent;
  color: #bf5af2;
  border: 2px solid #bf5af2;
  text-shadow: 0 0 8px #bf5af2;
  box-shadow: 0 0 14px rgba(191,90,242,0.3);
  animation: neonPurpleGlow 2s ease-in-out infinite alternate;
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-34:hover { background: rgba(191,90,242,0.1); }
@keyframes neonPurpleGlow {
  from { box-shadow: 0 0 10px rgba(191,90,242,0.2); }
  to   { box-shadow: 0 0 24px rgba(191,90,242,0.55); }
}`,
    js: `/* No JavaScript required */`
  },
  35: {
    name: "Neon Orange",
    html: `<button class="btn-35">Neon Orange</button>`,
    css: `/* Place on a dark background for best effect */
.btn-35 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 6px;
  background: transparent;
  color: #ff9500;
  border: 2px solid #ff9500;
  text-shadow: 0 0 8px #ff9500;
  box-shadow: 0 0 16px rgba(255,149,0,0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-35:hover {
  background: rgba(255,149,0,0.1);
  box-shadow: 0 0 30px rgba(255,149,0,0.55);
  text-shadow: 0 0 20px #ff9500;
}`,
    js: `/* No JavaScript required */`
  },
  36: {
    name: "Frost Glass",
    html: `<button class="btn-36">Frost Glass</button>`,
    css: `/* Needs a colorful background behind it */
.btn-36 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-36:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}`,
    js: `/* No JavaScript required */`
  },
  37: {
    name: "Tinted Glass",
    html: `<button class="btn-37">Tinted Glass</button>`,
    css: `/* Needs a colorful background behind it */
.btn-37 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: rgba(108,99,255,0.2);
  color: #d4d0ff;
  border: 1px solid rgba(108,99,255,0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-37:hover {
  background: rgba(108,99,255,0.35);
  color: #fff;
}`,
    js: `/* No JavaScript required */`
  },
  38: {
    name: "Mirror Glass",
    html: `<button class="btn-38">Mirror Glass</button>`,
    css: `/* Needs a colorful background behind it */
.btn-38 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-38:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.06));
  transform: scale(1.04);
}`,
    js: `/* No JavaScript required */`
  },
  39: {
    name: "Crystal",
    html: `<button class="btn-39">Crystal</button>`,
    css: `/* Needs a colorful background behind it */
.btn-39 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(100,200,255,0.08));
  color: #e0f4ff;
  border: 1px solid rgba(180,230,255,0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  text-shadow: 0 0 10px rgba(150,220,255,0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-39:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(100,200,255,0.15));
  box-shadow: 0 0 20px rgba(100,200,255,0.3);
}`,
    js: `/* No JavaScript required */`
  },
  40: {
    name: "Smoke Glass",
    html: `<button class="btn-40">Smoke Glass</button>`,
    css: `/* Needs a colorful background behind it */
.btn-40 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: rgba(20,20,30,0.5);
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(8px) grayscale(0.3);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-40:hover {
  background: rgba(30,30,45,0.7);
  color: rgba(255,255,255,0.95);
  border-color: rgba(255,255,255,0.18);
}`,
    js: `/* No JavaScript required */`
  },
  41: {
    name: "Push Down",
    html: `<button class="btn-41">Push Down</button>`,
    css: `.btn-41 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: #6c63ff;
  color: #fff;
  border: none;
  border-bottom: 4px solid #4a42cc;
  transform: translateY(0);
  transition: transform 0.1s ease, border-bottom-width 0.1s ease, background 0.2s ease;
  position: relative;
  overflow: hidden;
}
.btn-41:hover { background: #7c74ff; }
.btn-41:active {
  transform: translateY(3px);
  border-bottom-width: 1px;
}`,
    js: `/* No JavaScript required */`
  },
  42: {
    name: "Raised Block",
    html: `<button class="btn-42">Raised Block</button>`,
    css: `.btn-42 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  box-shadow: 0 6px 0 #c73a56, 0 8px 12px rgba(0,0,0,0.3);
  transition: box-shadow 0.1s ease, transform 0.1s ease, background 0.2s ease;
  position: relative;
  overflow: hidden;
}
.btn-42:hover { background: #ff7a9a; }
.btn-42:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #c73a56, 0 3px 6px rgba(0,0,0,0.2);
}`,
    js: `/* No JavaScript required */`
  },
  43: {
    name: "Extrude",
    html: `<button class="btn-43">Extrude</button>`,
    css: `.btn-43 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #43e97b;
  color: #0a1a10;
  box-shadow: 3px 6px 0 #22a84e, 6px 10px 0 rgba(34,168,78,0.3);
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
}
.btn-43:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 8px 0 #22a84e, 8px 13px 0 rgba(34,168,78,0.3);
}
.btn-43:active {
  transform: translate(2px,4px);
  box-shadow: 1px 2px 0 #22a84e;
}`,
    js: `/* No JavaScript required */`
  },
  44: {
    name: "Stamp",
    html: `<button class="btn-44">Stamp</button>`,
    css: `.btn-44 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: #1e2030;
  color: #f0f2f8;
  border: 2px solid rgba(108,99,255,0.4);
  box-shadow: 0 6px 0 rgba(108,99,255,0.25), inset 0 1px 0 rgba(255,255,255,0.05);
  transition: all 0.12s ease;
  position: relative;
  overflow: hidden;
}
.btn-44:hover { border-color: rgba(108,99,255,0.7); }
.btn-44:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 rgba(108,99,255,0.15);
}`,
    js: `/* No JavaScript required */`
  },
  45: {
    name: "Layered",
    html: `<button class="btn-45">Layered</button>`,
    css: `.btn-45 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #302b63;
  color: #d4d0ff;
  box-shadow: 4px 4px 0 #6c63ff, 8px 8px 0 rgba(108,99,255,0.3);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.btn-45:hover {
  transform: translate(-4px,-4px);
  box-shadow: 8px 8px 0 #6c63ff, 14px 14px 0 rgba(108,99,255,0.3);
}
.btn-45:active {
  transform: translate(4px,4px);
  box-shadow: none;
}`,
    js: `/* No JavaScript required */`
  },
  46: {
    name: "Underline Slide",
    html: `<button class="btn-46">Underline Slide</button>`,
    css: `.btn-46 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 4px;
  border-radius: 0;
  background: transparent;
  color: #f0f2f8;
  border: none;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-46::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: #6c63ff;
  transition: width 0.35s ease;
}
.btn-46:hover::after { width: 100%; }
.btn-46:hover { color: #6c63ff; }`,
    js: `/* No JavaScript required */`
  },
  47: {
    name: "Ghost Pill",
    html: `<button class="btn-47">Ghost Pill</button>`,
    css: `.btn-47 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 400;
  cursor: pointer;
  padding: 10px 28px;
  border-radius: 100px;
  background: transparent;
  color: #8b90a8;
  border: 1px solid rgba(255,255,255,0.07);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-47:hover {
  background: rgba(255,255,255,0.05);
  color: #f0f2f8;
  border-color: rgba(255,255,255,0.14);
}`,
    js: `/* No JavaScript required */`
  },
  48: {
    name: "Text Arrow",
    html: `<button class="btn-48">Read More →</button>`,
    css: `.btn-48 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
  border-radius: 0;
  background: transparent;
  color: #6c63ff;
  border: none;
  letter-spacing: 0.04em;
  transition: letter-spacing 0.3s ease, opacity 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-48:hover { letter-spacing: 0.12em; opacity: 0.8; }`,
    js: `/* No JavaScript required */`
  },
  49: {
    name: "Dot Leader",
    html: `<button class="btn-49">· · · Start</button>`,
    css: `.btn-49 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  font-weight: 400;
  cursor: pointer;
  padding: 10px 8px;
  border-radius: 0;
  background: transparent;
  color: #555a72;
  border: none;
  letter-spacing: 0.08em;
  transition: color 0.3s ease, letter-spacing 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-49:hover { color: #f0f2f8; letter-spacing: 0.18em; }`,
    js: `/* No JavaScript required */`
  },
  50: {
    name: "Bare Mono",
    html: `<button class="btn-50">[ EXECUTE ]</button>`,
    css: `.btn-50 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;
  padding: 10px 22px;
  border-radius: 4px;
  background: transparent;
  color: #8b90a8;
  border: 1px solid rgba(255,255,255,0.1);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.btn-50:hover {
  background: rgba(255,255,255,0.04);
  color: #f0f2f8;
  border-color: rgba(255,255,255,0.25);
  letter-spacing: 0.2em;
}
.btn-50:active{
  transition: all .1s;
  background: rgba(255,255,255,0.06);
  color: #f0f2e1;
  border-color: rgba(255,255,255,0.35);
  letter-spacing: 0.1em;
}`,
    js: `/* No JavaScript required */`
  },
  101: {
    name: "Slide Fill",
    html: `<button class="btn-101">Slide Fill</button>`,
    css: `.btn-101 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  color: #6c63ff;
  background-image: linear-gradient(to left, #6c63ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-101:hover {
  background-position: right;
  color: #fff;
}`,
    js: `/* No JavaScript required */`
  },
  102: {
    name: "Slide Fill",
    html: `<button class="btn-102">Slide Fill</button>`,
    css: `.btn-102 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  color: #6c63ff;
  background-image: linear-gradient(to top, #6c63ff 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-102:hover {
  background-position: bottom;
  color: #fff;
}`,
    js: `/* No JavaScript required */`
  },
  103: {
    name: "Slide Fill",
    html: `<button class="btn-103">Slide Fill</button>`,
    css: `.btn-103 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  color: #6c63ff;
  background-image: linear-gradient(to bottom, #6c63ff 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: bottom;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-103:hover {
  background-position: top;
  color: #fff;
}`,
    js: `/* No JavaScript required */`
  },
  104: {
    name: "Slide Fill",
    html: `<button class="btn-104">Slide Fill</button>`,
    css: `.btn-104 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  color: #fff;
  background-image: linear-gradient(to top, #6c63ff 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: bottom;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-104:hover {
  background-position: top;
  color: #6c63ff;
}`,
    js: `/* No JavaScript required */`
  },
  105: {
    name: "Slide Fill",
    html: `<button class="btn-105">Slide Fill</button>`,
    css: `.btn-105 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  color: #fff;
  background-image: linear-gradient(to bottom, #6c63ff 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-105:hover {
  background-position: bottom;
  color: #6c63ff;
}`,
    js: `/* No JavaScript required */`
  },
  106: {
    name: "Slide Fill",
    html: `<button class="btn-106">Slide Fill</button>`,
    css: `.btn-106 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  padding: 12px 26px;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  background-image: linear-gradient(to left, #6c63ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
}
.btn-106:hover {
  background-position: left;
  color: #6c63ff;
}`,
    js: `/* No JavaScript required */`
  },
  107: {
    name: "Slide Fill",
    html: `<button class="btn-107">Slide Fill</button>`,
    css: `.btn-107 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid #6c63ff;
  background: transparent;
  background-image: linear-gradient(to right, #6c63ff 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
  }
  .btn-107:hover {
    background-position: right;
  color: #6c63ff;
}`,
    js: `/* No JavaScript required */`
  },
  201: {
    name: "Blakish Border Sweep",
    html: `<button class="btn-201">Border Sweep</button>`,
    css: `.btn-201 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-201::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  border-radius: 10px;
  z-index: -1;
  background-size: 300% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.btn-201:hover::before {
  opacity: 1;
  animation: sweepGrad 2.5s ease-in-out infinite;
}
.btn-201:hover { color: #000; }

@keyframes sweepGrad {
  to { background-position: 300% 0; }
}`,
    js: `/* No JavaScript required */`
  },
  202: {
    name: "Linear Border Sweep",
    html: `<button class="btn-202">Border Sweep</button>`,
    css: `.btn-202 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-202::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  border-radius: 10px;
  z-index: -1;
  background-size: 300% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.btn-202:hover::before {
  opacity: 1;
  animation: sweepGrad 2.5s linear infinite;
}
.btn-202:hover { color: #fff; }

@keyframes sweepGrad {
  to { background-position: 300% 0; }
}`,
    js: `/* No JavaScript required */`
  },
  203: {
    name: "Black Border Sweep",
    html: `<button class="btn-203">Border Sweep</button>`,
    css: `.btn-203 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-203::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  border-radius: 10px;
  z-index: -1;
  background-size: 300% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.btn-203:hover::before {
  opacity: 1;
  inset: 0;
  animation: sweepGrad 2.5s ease-in-out infinite;
}
.btn-203:hover {
  color: #000;
  border: 2px solid black;
  font-weight: 700;
}
@keyframes sweepGrad {
  to { background-position: 300% 0; }
}`,
    js: `/* No JavaScript required */`
  },
  301: {
    name: "Reveal Text",
    html: `<button class="btn-301">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-301 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-301 span {
  display: inline;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-301 span:nth-child(1) {
    transform: translateX(0);
}

.btn-301 span:nth-child(2) {
    transform: translateX(130px);
    color: #6c63ff;
}

.btn-301:hover span:nth-child(1) {
    transform: translateX(-130px);
    opacity: 0;
}

.btn-301:hover span:nth-child(2) {
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  302: {
    name: "Reveal Text",
    html: `<button class="btn-302">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-302 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-302 span {
  display: inline;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-302 span:nth-child(1) {
    transform: translateX(0);
}

.btn-302 span:nth-child(2) {
    transform: translateX(-130px);
    color: #6c63ff;
}

.btn-302:hover span:nth-child(1) {
    transform: translateX(130px);
    opacity: 0;
}

.btn-302:hover span:nth-child(2) {
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  303: {
    name: "Reveal Text",
    html: `<button class="btn-303">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-303 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-303 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-303 span:nth-child(1) { transform: translateY(0); }
.btn-303 span:nth-child(2) { transform: translateY(-50px); color: #6c63ff; }
.btn-303:hover span:nth-child(1) { transform: translateY(50px); opacity: 0; }
.btn-303:hover span:nth-child(2) { transform: translateY(0); }`,
    js: `/* No JavaScript required */`
  },
  304: {
    name: "Reveal Text",
    html: `<button class="btn-304">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-304 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-304 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-304 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-304 span:nth-child(2) {
    transform: translate(-130px, -50px);
    color: #6c63ff;
}

.btn-304:hover span:nth-child(1) {
    transform: translate(130px, 50px);
    opacity: 0;
}

.btn-304:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  305: {
    name: "Reveal Text",
    html: `<button class="btn-305">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-305 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-305 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-305 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-305 span:nth-child(2) {
    transform: translate(-130px, 50px);
    color: #6c63ff;
}

.btn-305:hover span:nth-child(1) {
    transform: translate(130px, -50px);
    opacity: 0;
}

.btn-305:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  306: {
    name: "Reveal Text",
    html: `<button class="btn-306">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-306 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-306 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-306 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-306 span:nth-child(2) {
    transform: translate(130px, -50px);
    color: #6c63ff;
}

.btn-306:hover span:nth-child(1) {
    transform: translate(-130px, 50px);
    opacity: 0;
}

.btn-306:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  307: {
    name: "Reveal Text",
    html: `<button class="btn-307">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-307 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-307 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-307 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-307 span:nth-child(2) {
    transform: translate(130px, 50px);
    color: #6c63ff;
}

.btn-307:hover span:nth-child(1) {
    transform: translate(-130px, -50px);
    opacity: 0;
}

.btn-307:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  308: {
    name: "Reveal Text",
    html: `<button class="btn-308">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-308 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-308 span {
  display: inline;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-308 span:nth-child(1) {
    transform: translateX(0);
}

.btn-308 span:nth-child(2) {
    transform: translateX(130px);
    color: #6c63ff;
}

.btn-308:hover span:nth-child(1) {
    transform: translateX(130px);
    opacity: 0;
}

.btn-308:hover span:nth-child(2) {
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  309: {
    name: "Reveal Text",
    html: `<button class="btn-309">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-309 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-309 span {
  display: inline;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-309 span:nth-child(1) {
    transform: translateX(0);
}

.btn-309 span:nth-child(2) {
    transform: translateX(-130px);
    color: #6c63ff;
}

.btn-309:hover span:nth-child(1) {
    transform: translateX(-130px);
    opacity: 0;
}

.btn-309:hover span:nth-child(2) {
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  310: {
    name: "Reveal Text",
    html: `<button class="btn-310">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-310 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-310 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-310 span:nth-child(1) {
    transform: translateY(0);
}

.btn-310 span:nth-child(2) {
    transform: translateY(-130px);
    color: #6c63ff;
}

.btn-310:hover span:nth-child(1) {
    transform: translateY(-130px);
    opacity: 0;
}

.btn-310:hover span:nth-child(2) {
    transform: translateY(0);
}`,
    js: `/* No JavaScript required */`
  },
  311: {
    name: "Reveal Text",
    html: `<button class="btn-311">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-311 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-311 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-311 span:nth-child(1) {
    transform: translateY(0);
}

.btn-311 span:nth-child(2) {
    transform: translateY(130px);
    color: #6c63ff;
}

.btn-311:hover span:nth-child(1) {
    transform: translateY(130px);
    opacity: 0;
}

.btn-311:hover span:nth-child(2) {
    transform: translateY(0);
}`,
    js: `/* No JavaScript required */`
  },
  312: {
    name: "Reveal Text",
    html: `<button class="btn-312">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-312 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-312 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-312 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-312 span:nth-child(2) {
    transform: translate(-130px, -50px);
    color: #6c63ff;
}

.btn-312:hover span:nth-child(1) {
    transform: translate(-130px, -50px);
    opacity: 0;
}

.btn-312:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  313: {
    name: "Reveal Text",
    html: `<button class="btn-313">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-313 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-313 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-313 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-313 span:nth-child(2) {
    transform: translate(-130px, 50px);
    color: #6c63ff;
}

.btn-313:hover span:nth-child(1) {
    transform: translate(-130px, 50px);
    opacity: 0;
}

.btn-313:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  314: {
    name: "Reveal Text",
    html: `<button class="btn-314">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-314 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-314 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-314 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-314 span:nth-child(2) {
    transform: translate(130px, -50px);
    color: #6c63ff;
}

.btn-314:hover span:nth-child(1) {
    transform: translate(130px, -50px);
    opacity: 0;
}

.btn-314:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  315: {
    name: "Reveal Text",
    html: `<button class="btn-315">
  <span>Hover Me</span>
  <span>Let's Go →</span>
</button>`,
    css: `.btn-315 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  background: #1a1d2e;
  color: transparent;
  border: 1px solid rgba(108,99,255,0.3);
  overflow: hidden;
  padding: 0;
  width: 130px;
  height: 44px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
}
.btn-315 span {
  display: block;
  color: #f0f2f8;
  padding: 12px 26px;
  width: 100%;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease;
  font-size: 0.88rem;
  position: absolute;
}
.btn-315 span:nth-child(1) {
    transform: translateY(0);
    transform: translateX(0);
}

.btn-315 span:nth-child(2) {
    transform: translate(130px, 50px);
    color: #6c63ff;
}

.btn-315:hover span:nth-child(1) {
    transform: translate(130px, 50px);
    opacity: 0;
}

.btn-315:hover span:nth-child(2) {
    transform: translateY(0);
    transform: translateX(0);
}`,
    js: `/* No JavaScript required */`
  },
  401: {
    name: "Background Wipe",
    html: `<button class="btn-401">Background Wipe</button>`,
    css: `.btn-401 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-401::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-401:hover::before { transform: scaleY(1); }`,
    js: `/* No JavaScript required */`
  },
  402: {
    name: "Background Wipe",
    html: `<button class="btn-402">Background Wipe</button>`,
    css: `.btn-402 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-402::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-402:hover::before { transform: scaleY(1); }`,
    js: `/* No JavaScript required */`
  },
  403: {
    name: "Background Wipe",
    html: `<button class="btn-403">Background Wipe</button>`,
    css: `.btn-403 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-403::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-403:hover::before { transform: scaleX(1); }`,
    js: `/* No JavaScript required */`
  },
  404: {
    name: "Background Wipe",
    html: `<button class="btn-404">Background Wipe</button>`,
    css: `.btn-404 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-404::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleY(0);
  transform-origin: right;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-404:hover::before { transform: scaleX(1); }`,
    js: `/* No JavaScript required */`
  },
  405: {
    name: "Background Wipe",
    html: `<button class="btn-405">Background Wipe</button>`,
    css: `.btn-405 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-405::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleX(0);
  transform-origin: top;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-405:hover::before { transform: scaleX(1); }`,
    js: `/* No JavaScript required */`
  },
  406: {
    name: "Background Wipe",
    html: `<button class="btn-406">Background Wipe</button>`,
    css: `.btn-406 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-406::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleY(0);
  transform-origin: right;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-406:hover::before {
  transform: scaleY(1);
  transform-origin: top;
}`,
    js: `/* No JavaScript required */`
  },
  407: {
    name: "Background Wipe",
    html: `<button class="btn-407">Background Wipe</button>`,
    css: `.btn-407 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.btn-407::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff6584;
  transform: scaleX(0);
  transform-origin: top;
  transition: transform 0.4s ease;
  z-index: -1;
}
.btn-407:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}`,
    js: `/* No JavaScript required */`
  }, 408: {
    name: "Background Wipe",
    html: `<button class="btn-408">Background Wipe</button>`,
    css: `.btn-408 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn-408::before {
    content: '';
    position: absolute;
    /* inset: 0; */
    width: 240%;
    height: 600%;
    top: -530%;
    left: -180%;
    transform: rotateZ(-45deg);
    background: #ff6584;
    transition: all 0.9s ease;
    z-index: -1;
}

.btn-408:hover::before {
    left: -90%;
    top: -10%;
}`,
    js: `/* No JavaScript required */`
  },
  501: {
    name: "Amethyst Glow",
    html: `<button class="btn-501">Hover Me</button>`,
    css: `.btn-501 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
}
.btn-501:hover {
  filter: hue-rotate(45deg) brightness(1.2);
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  502: {
    name: "Emerald Forest",
    html: `<button class="btn-502">Hover Me</button>`,
    css: `.btn-502 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #11998e, #38ef7d);
  color: #fff;
}
.btn-502:hover {
  filter: contrast(1.2) saturate(1.5);
  transform: translateY(-3px);
}`,
    js: `/* No JavaScript required */`
  },

  503: {
    name: "Midnight Neon",
    html: `<button class="btn-503">Hover Me</button>`,
    css: `.btn-503 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #fff;
}
.btn-503:hover {
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.6);
  transform: scale(1.03);
}`,
    js: `/* No JavaScript required */`
  },

  504: {
    name: "Sunset Flare",
    html: `<button class="btn-504">Hover Me</button>`,
    css: `.btn-504 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #ff512f, #dd2476);
  color: #fff;
}
.btn-504:hover {
  filter: brightness(1.1);
  transform: rotate(-1deg) scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  505: {
    name: "Ocean Glass",
    html: `<button class="btn-505">Hover Me</button>`,
    css: `.btn-505 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #2193b0, #6dd5ed);
  color: #fff;
}
.btn-505:hover {
  filter: hue-rotate(-30deg);
  transform: scale(0.97);
}`,
    js: `/* No JavaScript required */`
  },

  506: {
    name: "Golden Hour",
    html: `<button class="btn-506">Hover Me</button>`,
    css: `.btn-506 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #f2994a, #f2c94c);
  color: #000;
}
.btn-506:hover {
  filter: brightness(1.05);
  box-shadow: 0 5px 15px rgba(242, 153, 74, 0.4);
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  507: {
    name: "Deep Space",
    html: `<button class="btn-507">Hover Me</button>`,
    css: `.btn-507 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #444;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #434343, #000000);
  color: #fff;
}
.btn-507:hover {
  background: #fff;
  color: #000;
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  508: {
    name: "Soft Lavender",
    html: `<button class="btn-508">Hover Me</button>`,
    css: `.btn-508 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #eecda3, #ef629f);
  color: #fff;
}
.btn-508:hover {
  filter: saturate(1.8);
  transform: skewX(-5deg) scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  509: {
    name: "Toxic Lime",
    html: `<button class="btn-509">Hover Me</button>`,
    css: `.btn-509 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #00b09b, #96c93d);
  color: #fff;
}
.btn-509:hover {
  filter: hue-rotate(90deg);
  transform: scale(1.08);
}`,
    js: `/* No JavaScript required */`
  },

  510: {
    name: "Royal Blue",
    html: `<button class="btn-510">Hover Me</button>`,
    css: `.btn-510 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #0575E6, #021B79);
  color: #fff;
}
.btn-510:hover {
  letter-spacing: 0.1em;
  filter: brightness(1.2);
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  511: {
    name: "Crimson Tide",
    html: `<button class="btn-511">Hover Me</button>`,
    css: `.btn-511 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #870000, #190a05);
  color: #fff;
}
.btn-511:hover {
  filter: drop-shadow(0 0 8px #870000);
  transform: scale(1.02);
}`,
    js: `/* No JavaScript required */`
  },

  512: {
    name: "Arctic Frost",
    html: `<button class="btn-512">Hover Me</button>`,
    css: `.btn-512 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #acb6e5, #86fde8);
  color: #2c3e50;
}
.btn-512:hover {
  filter: contrast(1.1) brightness(0.9);
  transform: translateY(2px) scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  513: {
    name: "Candy Pop",
    html: `<button class="btn-513">Hover Me</button>`,
    css: `.btn-513 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #8E2DE2, #4A00E0);
  color: #fff;
}
.btn-513:hover {
  filter: invert(1);
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  514: {
    name: "Industrial Steel",
    html: `<button class="btn-514">Hover Me</button>`,
    css: `.btn-514 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #bdc3c7, #2c3e50);
  color: #fff;
}
.btn-514:hover {
  filter: grayscale(1);
  transform: scale(1.05);
}`,
    js: `/* No JavaScript required */`
  },

  515: {
    name: "Cyber Yellow",
    html: `<button class="btn-515">Hover Me</button>`,
    css: `.btn-515 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  background: linear-gradient(135deg, #f7ff00, #db36a4);
  color: #fff;
}
.btn-515:hover {
  filter: hue-rotate(-180deg);
  transform: scale(1.1);
}`,
    js: `/* No JavaScript required */`
  },
  601: {
    name: "Cosmic Dust",
    html: `<button class="btn-601">Hover Me</button>`,
    css: `.btn-601 {
  /* Base Styles */
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.03em;
  white-space: nowrap;
  
  /* Unique Styles */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 4px 20px rgba(118, 75, 162, 0.35);
  background-size: 200% 200%;
  animation: auroraShift 4s ease infinite;
}

.btn-601:hover {
  box-shadow: 0 6px 30px rgba(118, 75, 162, 0.55);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  602: {
    name: "Deep Sea Glow",
    html: `<button class="btn-602">Hover Me</button>`,
    css: `.btn-602 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #2af598 0%, #009efd 100%);
  color: #052a3a;
  box-shadow: 0 4px 20px rgba(0, 158, 253, 0.3);
  background-size: 200% 200%;
  animation: auroraShift 5s ease-in-out infinite;
}

.btn-602:hover {
  box-shadow: 0 6px 30px rgba(0, 158, 253, 0.5);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  603: {
    name: "Magma Flow",
    html: `<button class="btn-603">Hover Me</button>`,
    css: `.btn-603 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: #fff;
  box-shadow: 0 4px 20px rgba(245, 87, 108, 0.4);
  background-size: 200% 200%;
  animation: auroraShift 3s linear infinite;
}

.btn-603:hover {
  box-shadow: 0 6px 30px rgba(245, 87, 108, 0.6);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  604: {
    name: "Royal Glare",
    html: `<button class="btn-604">Hover Me</button>`,
    css: `.btn-604 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  color: #4a2c11;
  box-shadow: 0 4px 20px rgba(253, 160, 133, 0.35);
  background-size: 200% 200%;
  animation: auroraShift 6s ease infinite;
}

.btn-604:hover {
  box-shadow: 0 6px 30px rgba(253, 160, 133, 0.55);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  605: {
    name: "Arctic Sky",
    html: `<button class="btn-605">Hover Me</button>`,
    css: `.btn-605 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
  color: #fff;
  box-shadow: 0 4px 20px rgba(102, 166, 255, 0.35);
  background-size: 200% 200%;
  animation: auroraShift 4s ease infinite;
}

.btn-605:hover {
  box-shadow: 0 6px 30px rgba(102, 166, 255, 0.55);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  606: {
    name: "Electric Violet",
    html: `<button class="btn-606">Hover Me</button>`,
    css: `.btn-606 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
  color: #2d1b4d;
  box-shadow: 0 4px 20px rgba(161, 140, 209, 0.4);
  background-size: 200% 200%;
  animation: auroraShift 4s ease-in-out infinite;
}

.btn-606:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  607: {
    name: "Night Rider",
    html: `<button class="btn-607">Hover Me</button>`,
    css: `.btn-607 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: auroraShift 4s ease infinite;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.btn-607:hover {
  border: 1px solid #43e97b;
  color: #43e97b;
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  608: {
    name: "Peach Punch",
    html: `<button class="btn-608">Hover Me</button>`,
    css: `.btn-608 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  color: #632b31;
  background-size: 200% 200%;
  animation: auroraShift 4s ease infinite;
  box-shadow: 0 4px 20px rgba(255, 154, 158, 0.3);
}

.btn-608:hover {
  filter: saturate(1.4);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },
  609: {
    name: "Toxic Lime",
    html: `<button class="btn-609">Hover Me</button>`,
    css: `.btn-609 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #000000 0%, #a8ff78 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: auroraShift 3s ease infinite;
  box-shadow: 0 4px 20px rgba(168, 255, 120, 0.3);
}

.btn-609:hover {
  box-shadow: 0 0 20px #a8ff78;
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  610: {
    name: "Candy Floss",
    html: `<button class="btn-610">Hover Me</button>`,
    css: `.btn-610 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #5f2c82 0%, #49a09d 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: auroraShift 4s ease infinite;
  box-shadow: 0 4px 20px rgba(73, 160, 157, 0.4);
}

.btn-610:hover {
  filter: hue-rotate(90deg);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  611: {
    name: "Cyber Neon",
    html: `<button class="btn-611">Hover Me</button>`,
    css: `.btn-611 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #000000 0%, #923cb5 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: auroraShift 3s ease infinite;
  box-shadow: 0 4px 20px rgba(146, 60, 181, 0.5);
}

.btn-611:hover {
  box-shadow: 0 0 25px #923cb5;
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  612: {
    name: "Desert Sand",
    html: `<button class="btn-612">Hover Me</button>`,
    css: `.btn-612 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  color: #5d4037;
  background-size: 200% 200%;
  animation: auroraShift 6s ease infinite;
  box-shadow: 0 4px 15px rgba(226, 209, 195, 0.5);
}

.btn-612:hover {
  background-size: 100% 100%;
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },

  613: {
    name: "Firestorm",
    html: `<button class="btn-613">Hover Me</button>`,
    css: `.btn-613 {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
  color: #fff;
  background-size: 200% 200%;
  animation: auroraShift 3s ease infinite;
  box-shadow: 0 4px 20px rgba(248, 54, 0, 0.4);
}

.btn-613:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
    js: `/* No JavaScript required */`
  },
  1401: {
    name: "Corner Accent",
    html: `<button class="btn-1401">Corner Accent</button>`,
    css: `.btn-1401 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1401::before,
.btn-1401::after {
  content: '';
  position: absolute;
  width: 7px; height: 7px;
  transition: all 0.3s ease;
}
.btn-1401::before {
  top: 0; left: 0;
  border-top: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1401::after {
  bottom: 0; right: 0;
  border-bottom: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1401:hover::before { width: 98%; height: 98%; }
.btn-1401:hover::after  { width: 98%; height: 98%; }
.btn-1401:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1402: {
    name: "Corner Accent",
    html: `<button class="btn-1402">Corner Accent</button>`,
    css: `.btn-1402 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1402::before,
.btn-1402::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
  transition: all 0.3s ease;
}
.btn-1402::before {
  top: 0; left: 0;
  border-top: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1402::after {
  bottom: 0; right: 0;
  border-bottom: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1402:hover::before { width: 98%; height: 98%; }
.btn-1402:hover::after  { width: 98%; height: 98%; }
.btn-1402:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1403: {
    name: "Corner Accent",
    html: `<button class="btn-1403">Corner Accent</button>`,
    css: `.btn-1403 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1403::before,
.btn-1403::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
  transition: all 0.3s ease;
}
.btn-1403::before {
  top: 0; right: 0;
  border-top: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1403::after {
  bottom: 0; left: 0;
  border-bottom: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1403:hover::before { width: 98%; height: 98%; }
.btn-1403:hover::after  { width: 98%; height: 98%; }
.btn-1403:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1404: {
    name: "Corner Accent",
    html: `<button class="btn-1404">Corner Accent</button>`,
    css: `.btn-1404 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1404::before,
.btn-1404::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
  transition: all 0.3s ease;
}
.btn-1404::before {
  bottom: 0; left: 0;
  border-top: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1404::after {
  top: 0; right: 0;
  border-bottom: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1404:hover::before { width: 98%; height: 98%; }
.btn-1404:hover::after  { width: 98%; height: 98%; }
.btn-1404:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1405: {
    name: "Corner Accent",
    html: `<button class="btn-1405">Corner Accent</button>`,
    css: `.btn-1405 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1405::before,
.btn-1405::after {
  content: '';
  position: absolute;
  width: 10px; height: 10px;
  transition: all 0.3s ease;
}
.btn-1405::before {
  bottom: 0; left: 0;
  border-bottom: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1405::after {
  top: 0; right: 0;
  border-top: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1405:hover::before { width: 98%; height: 98%; }
.btn-1405:hover::after  { width: 98%; height: 98%; }
.btn-1405:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1406: {
    name: "Corner Accent",
    html: `<button class="btn-1406">Corner Accent</button>`,
    css: `.btn-1406 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1406::before,
.btn-1406::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
}
.btn-1406::before {
  bottom: 0; left: 0;
  border-top: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1406::after {
  top: 0; right: 0;
  border-bottom: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1406:hover::before,
.btn-1406:hover::after{
    transition: all 0.3s ease, width .3s .3s;
}
.btn-1406:hover::before { width: 98%; height: 98%; }
.btn-1406:hover::after  { width: 98%; height: 98%; }
.btn-1406:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1407: {
    name: "Corner Accent",
    html: `<button class="btn-1407">Corner Accent</button>`,
    css: `.btn-1407 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1407::before,
.btn-1407::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
}
.btn-1407::before {
  top: 0; left: 0;
  border-bottom: 2px solid #6c63ff;
  border-left: 2px solid #6c63ff;
}
.btn-1407::after {
  bottom: 0; right: 0;
  border-top: 2px solid #ff6584;
  border-right: 2px solid #ff6584;
}
.btn-1407:hover::before,
.btn-1407:hover::after{
    transition: all 0.3s ease, width .3s .3s;
}
.btn-1407:hover::before { width: 98%; height: 98%; }
.btn-1407:hover::after  { width: 98%; height: 98%; }
.btn-1407:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1408: {
    name: "Corner Accent",
    html: `<button class="btn-1408">Corner Accent</button>`,
    css: `.btn-1408 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1408::before,
.btn-1408::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
}
.btn-1408::before {
  top: 0; left: 0;
  border-bottom: 2px solid #6c63ff;
  border-right: 2px solid #6c63ff;
}
.btn-1408::after {
  bottom: 0; right: 0;
  border-top: 2px solid #ff6584;
  border-left: 2px solid #ff6584;
}
.btn-1408:hover::before,
.btn-1408:hover::after{
    transition: all 0.3s ease, width .3s .3s;
}
.btn-1408:hover::before { width: 98%; height: 98%; }
.btn-1408:hover::after  { width: 98%; height: 98%; }
.btn-1408:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1409: {
    name: "Corner Accent",
    html: `<button class="btn-1409">Corner Accent</button>`,
    css: `.btn-1409 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.btn-1409::before,
.btn-1409::after {
  content: '';
  position: absolute;
  width: 0; height: 0;
}
.btn-1409::before {
  top: 0; left: 0;
  border-top: 2px solid #6c63ff;
  border-right: 2px solid #6c63ff;
}
.btn-1409::after {
  bottom: 0; right: 0;
  border-bottom: 2px solid #ff6584;
  border-left: 2px solid #ff6584;
}
.btn-1409:hover::before {
    width: 98%;
    height: 98%;
    transition: all 0.3s ease,width .4s, height .3s .3s;
}

.btn-1409:hover::after {
    transition: all 0.3s ease, width .4s .6s, height .3s .9s;
    width: 98%;
    height: 98%;
}
.btn-1409:hover { color: #fff; }`,
    js: `/* No JavaScript required */`
  },
  1501: {
    name: "Animated Border",
    html: `<button class="btn-1501">Animated Border</button>`,
    css: `.btn-1501 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #f0f2f8;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-1501::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  background-size: 300% 100%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: borderAnim 2.5s linear infinite;
}
  .btn-1501:hover {
  box-shadow: inset 0 0 2px 2px transparent;
  filter: blur(1px);
  color: black;
  backdrop-filter: blur(10px);
}

.btn-1501:hover::before {
  -webkit-mask: none;
  z-index: -1;
}

.btn-1501:active::before {
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  z-index: -2;
}

.btn-1501:active {
  z-index: 1;
  filter: blur(0px);
  color: white; 
}
@keyframes borderAnim { to { background-position: 300% 0; } }`,
    js: `/* No JavaScript required */`
  },
  1502: {
    name: "Animated Border",
    html: `<button class="btn-1502">Animated Border</button>`,
    css: `.btn-1502 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: #555a72;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-1502::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  background-size: 300% 100%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: borderAnim 2.5s linear infinite;
}
  .btn-1502:hover {
  box-shadow: inset 0 0 2px 2px transparent;
}

.btn-1502:hover::before {
  -webkit-mask: none;
  z-index: -1;
}

.btn-1502:active::before {
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  z-index: -2;
}

.btn-1502:active {
  z-index: 1;
  filter: blur(1px);
}
@keyframes borderAnim { to { background-position: 300% 0; } }`,
    js: `/* No JavaScript required */`
  },
  1503: {
    name: "Animated Border",
    html: `<button class="btn-1503">Animated Border</button>`,
    css: `.btn-1503 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: transparent;
  color: black;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-1503::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(90deg, #6c63ff, #ff6584, #43e97b, #6c63ff);
  background-size: 300% 100%;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: borderAnim 2.5s linear infinite;
}
  .btn-1503:hover {
  box-shadow: inset 0 0 2px 2px transparent;
}

.btn-1503:hover::before {
  -webkit-mask: none;
  z-index: -1;
}

.btn-1503:active::before {
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  z-index: -2;
}

.btn-1503:active {
  z-index: 1;
  filter: blur(1px);
}
@keyframes borderAnim { to { background-position: 300% 0; } }`,
    js: `/* No JavaScript required */`
  },
  1601: {
    name: "Active Pulse Ring",
    html: `<button class="btn-1601" id="btn-1601">Pulse Ring</button>`,
    css: `.btn-1601 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  box-shadow: 0 0 0 0 rgba(108,99,255,0.5);
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
}
.btn-1601.active {
  animation: pulseRing 2s;
}
.btn-1601:hover { background: #7c74ff; }
@keyframes pulseRing {
  0%   { box-shadow: 0 0 0 0 rgba(108,99,255,0.5); }
  70%  { box-shadow: 0 0 0 12px rgba(108,99,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
}`,
    js: `let btn_16 = document.getElementById('btn-1601');
btn_16.addEventListener('click', function () {
    btn_16.classList.add('active');
    setTimeout(() => {
        btn_16.classList.remove('active');
    }, 1000);
});`
  },
  1602: {
    name: "Hover Pulse Ring",
    html: `<button class="btn-1602" id="btn-1602">Pulse Ring</button>`,
    css: `.btn-1602 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #6c63ff;
  color: #fff;
  box-shadow: 0 0 0 0 rgba(108,99,255,0.5);
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
  }
  .btn-1602:hover {
    animation: pulseRing 2s;
    background: #7c74ff;
  }
@keyframes pulseRing {
  0%   { box-shadow: 0 0 0 0 rgba(108,99,255,0.5); }
  70%  { box-shadow: 0 0 0 12px rgba(108,99,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
}`,
    js: `/* No JavaScript required */`
  },
  1701: {
    name: "Mouse Enter Ripple Wave",
    html: `<button class="btn-1701">Ripple Wave</button>`,
    css: `.btn-1701 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.btn-1701:hover { background: #ff4d73; }
.btn-1701 .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  transform: scale(0);
  animation: rippleAnim 0.6s linear;
  pointer-events: none;
}
@keyframes rippleAnim {
  to { transform: scale(4); opacity: 0; }
}`,
    js: `// Ripple effect
document.querySelectorAll('.btn-1701').forEach(btn => {
  btn.addEventListener('mouseenter', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width  = ripple.style.height = size + 'px';
    ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});`
  },
  1702: {
    name: "Mouse Leave Ripple Wave",
    html: `<button class="btn-1702">Ripple Wave</button>`,
    css: `.btn-1702 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.btn-1702:hover { background: #ff4d73; }
.btn-1702 .ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  transform: scale(0);
  animation: rippleAnim 0.6s linear;
  pointer-events: none;
}
@keyframes rippleAnim {
  to { transform: scale(4); opacity: 0; }
}`,
    js: `// Ripple effect
document.querySelectorAll('.btn-1702').forEach(btn => {
  btn.addEventListener('mouseleave', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width  = ripple.style.height = size + 'px';
    ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});`
  },
  1703: {
    name: "Mouse Leave Ripple Wave",
    html: `<button class="btn-1703">Ripple Wave</button>`,
    css: `.btn-1703 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.btn-1703:hover { background: #ff4d73; }
.btn-1703::after {
  content: '';
  position: absolute;
  width: 0;height: 0;
  left: 50%;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}

.btn-1703.active::after{
  transition: all .8s;
  width: 200%;
  height: 500%;
  left: -50%;
  top: -200%;
  animation: rippleAnim2 .8s linear;  
}


@keyframes rippleAnim2 {
  from{opacity: 1;}
  to{opacity: 0;}
}
`,
    js: `// Ripple effect
document.querySelector('.btn-1703').addEventListener('click', function() {
  document.querySelector('.btn-1703').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1703').classList.remove('active'), 700);
});`
  },
  1704: {
    name: "Mouse Leave Ripple Wave",
    html: `<button class="btn-1704">Ripple Wave</button>`,
    css: `.btn-1704 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: none;
}
.btn-1704:hover {
  transition: all .3s !important;
  background-color: rgb(255, 255, 255, .03);
}
.btn-1704::after {
  content: '';
  position: absolute;
  width: 0;height: 0;
  left: -50%;
  top: -150%;
  background-color: #ff4d73;
  border-radius: 50%;
}

.btn-1704.active::after{
  transition: all .8s;
  width: 200%;
  height: 500%;
  z-index: -1;
}`,
    js: `// Ripple effect
document.querySelector('.btn-1704').addEventListener('click', function () {
    document.querySelector('.btn-1704').classList.add('active');
    document.querySelector('.btn-1704').addEventListener('mouseleave', function () {
        document.querySelector('.btn-1704').classList.remove('active');
    });
});`
  },
  1705: {
    name: "Mouse Leave Ripple Wave",
    html: `<button class="btn-1705">Ripple Wave</button>`,
    css: `.btn-1705 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.btn-1705:hover { background: #ff4d73; }
.btn-1705::after {
  content: '';
  position: absolute;
  width: 0;height: 0;
  left: 0%;
  top: 0%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}

.btn-1705.active::after{
  transition: all .8s;
  width: 300%;
  height: 500%;
  left: -150%;
  top: -250%;
  animation: rippleAnim2 .8s linear;  
}


@keyframes rippleAnim2 {
  from{opacity: 1;}
  to{opacity: 0;}
}
`,
    js: `// Ripple effect
document.querySelector('.btn-1705').addEventListener('click', function() {
  document.querySelector('.btn-1705').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1705').classList.remove('active'), 700);
});`
  },
  1706: {
    name: "Mouse Leave Ripple Wave",
    html: `<button class="btn-1706">Ripple Wave</button>`,
    css: `.btn-1706 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ff6584;
  color: #fff;
  overflow: hidden;
  position: relative;
  transition: background 0.3s ease;
}
.btn-1706:hover { background: #ff4d73; }
.btn-1706::after {
  content: '';
  position: absolute;
  width: 0;height: 100%;
  left: 50%;
  top: 5%;
  background-color: rgba(255, 255, 255, 0.4);
}

.btn-1706.active::after{
  transition: all .8s;
  width: 200%;
  height: 500%;
  left: -50%;
  top: -200%;
  animation: rippleAnim2 .8s linear;  
}


@keyframes rippleAnim2 {
  from{opacity: 1;}
  to{opacity: 0;}
}
`,
    js: `// Ripple effect
document.querySelector('.btn-1706').addEventListener('click', function() {
  document.querySelector('.btn-1706').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1706').classList.remove('active'), 700);
});`
  },
  1801: {
    name: "Hover Shimmer",
    html: `<button class="btn-1801">Shimmer</button>`,
    css: `.btn-1801 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1a1d2e, #2a2d40);
  color: #f0f2f8;
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
.btn-1801::before {
  content: '';
  position: absolute;
  top: 0;
  left: -60%;
  width: 60%;
  height: 100%;
  background: linear-gradient(75deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }
.btn-1801:hover::before {  
  animation: shimmer 2s infinite;
}
@keyframes shimmer { to { left: 200%; } }`,
    js: `/* No JavaScript required */`
  },
  1802: {
    name: "Shimmer",
    html: `<button class="btn-1802">Shimmer</button>`,
    css: `.btn-1802 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1a1d2e, #2a2d40);
  color: #f0f2f8;
  border: 1px solid rgba(255,255,255,0.08);
  background-size: 200% 200%;
  background-position: left;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
.btn-1802::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255, 255, 0.2), transparent);
}
.btn-1802.active::before{
  animation: shimmer 1s infinite;
}
.btn-1802:hover{
    animation: shimmer2Bgc 3s infinite;
}
@keyframes shimmer2Bgc {
  0%{background-position: left;}
  25%{background-position: bottom left;}
  50%{background-position: top right;}
  75%{background-position: bottom right;}
  100%{background-position: left;}
}
@keyframes shimmer { to { left: 200%; } }`,
    js: `document.querySelector('.btn-1802').addEventListener('click', function () {
    document.querySelector('.btn-1802').classList.add('active');
    setTimeout(() => document.querySelector('.btn-1802').classList.remove('active'), 700);
});`
  },
  1803: {
    name: "Background Shimmer",
    html: `<button class="btn-1803">Shimmer</button>`,
    css: `.btn-1803 {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 26px;
  border-radius: 8px;
  background: rgb(255, 255, 255, .03);
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
.btn-1803::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.btn-1803:hover::before{
    animation: shimmer3 2s;
}

.btn-1803::after{
    content: '';
    position: absolute;
    top: 0;
    left: -200%;
    width: 150%;
    height: 100%;
    background: linear-gradient(90deg, #282a31, #0c1133, #282a31);
    transition: all 2s;
    z-index: -1;
}

.btn-1803.active{
    transition: all .8s !important;
}

.btn-1803:hover::after{
    left: -50%;
    animation: shimmer3Bgc 5s ease infinite;
    animation-delay: 2s;
}

.btn-1803:active::after{
    background: linear-gradient(90deg, #282a31, #0c1133);
}

@keyframes shimmer3Bgc {
    0%{left: -50%;}
    50%{left: 0%;}
    100%{left: -50%;}
}

@keyframes shimmer3 {
    to {
        left: 200%;
    }
}`,
    js: `/* No JavaScript required */`
  },
  1901: {
    name: "Classic Spinner",
    html: `<button class="btn-1901">Loading</button>`,
    css: `.btn-1901 {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: wait;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  background: #6366f1;
  color: white;
}
.btn-1901::after {
  content: "";
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    js: `/* No JavaScript required */`
  },

  1902: {
    name: "Progress Line",
    html: `<button class="btn-1902">Uploading</button>`,
    css: `.btn-1902 {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: wait;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  position: relative;
  overflow: hidden;
  background: #1e293b;
  color: white;
}
.btn-1902::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 3px;
  background: #10b981;
  animation: lineProgress 2s infinite;
}
@keyframes lineProgress { 0% { left: -100%; } 100% { left: 100%; } }`,
    js: `/* No JavaScript required */`
  },

  1903: {
    name: "Dot Pulse",
    html: `<button class="btn-1903">Sending</button>`,
    css: `.btn-1903 {
  font-family: 'Inter', sans-serif;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #ec4899;
  color: white;
  font-weight: 600;
}
.btn-1903::after {
  content: "...";
  letter-spacing: 2px;
  animation: dotPulse 1.5s infinite;
}
@keyframes dotPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }`,
    js: `/* No JavaScript required */`
  },

  1904: {
    name: "Skeleton Shimmer",
    html: `<button class="btn-1904">Fetching</button>`,
    css: `.btn-1904 {
  font-family: 'Inter', sans-serif;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #e2e8f0;
  color: #64748b;
  position: relative;
  overflow: hidden;
}
.btn-1904::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer { 100% { left: 100%; } }`,
    js: `/* No JavaScript required */`
  },

  1905: {
    name: "Double Ring",
    html: `<button class="btn-1905">Waiting</button>`,
    css: `.btn-1905 {
  font-family: 'Inter', sans-serif;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #f59e0b;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.btn-1905::after {
  content: "";
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    js: `/* No JavaScript required */`
  },

  1906: {
    name: "Liquid Fill",
    html: `<button class="btn-1906">Filling</button>`,
    css: `.btn-1906 {
  font-family: 'Inter', sans-serif;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  background: #334155;
  color: white;
  position: relative;
  overflow: hidden;
}
.btn-1906::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0%;
  background: rgba(255,255,255,0.1);
  animation: fillHeight 3s infinite;
}
@keyframes fillHeight { 0% { height: 0; } 100% { height: 100%; } }`,
    js: `/* No JavaScript required */`
  },

  1907: {
    name: "Bounce Square",
    html: `<button class="btn-1907">Loading</button>`,
    css: `.btn-1907 {
  background: #8b5cf6;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-1907::before {
  content: "";
  width: 8px;
  height: 8px;
  background: white;
  animation: bounceSquare 0.6s infinite alternate;
}
@keyframes bounceSquare { to { transform: translateY(-10px) rotate(45deg); } }`,
    js: `/* No JavaScript required */`
  },

  1908: {
    name: "Neon Breath",
    html: `<button class="btn-1908">Active</button>`,
    css: `.btn-1908 {
  background: #000;
  color: #0f0;
  border: 1px solid #0f0;
  padding: 12px 26px;
  border-radius: 8px;
  animation: neonBreath 2s infinite;
}
@keyframes neonBreath { 0%, 100% { box-shadow: 0 0 5px #0f0; } 50% { box-shadow: 0 0 20px #0f0; } }`,
    js: `/* No JavaScript required */`
  },

  1909: {
    name: "Glass Blur",
    html: `<button class="btn-1909">Processing</button>`,
    css: `.btn-1909 {
  background: #6366f1;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  transition: 0.3s;
  animation: blurIn 1.5s infinite alternate;
}
@keyframes blurIn { from { filter: blur(0px); } to { filter: blur(3px); opacity: 0.7; } }`,
    js: `/* No JavaScript required */`
  },

  1910: {
    name: "Dashed Circle",
    html: `<button class="btn-1910">Syncing</button>`,
    css: `.btn-1910 {
  background: #ef4444;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-1910::after {
  content: "";
  width: 14px;
  height: 14px;
  border: 2px dashed #fff;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    js: `/* No JavaScript required */`
  },

  1911: {
    name: "Zoom Pulse",
    html: `<button class="btn-1911">Scanning</button>`,
    css: `.btn-1911 {
  background: #0ea5e9;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-1911::before {
  content: "";
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  background: white;
  opacity: 0.2;
  transform: scale(0);
  animation: zoomPulse 1.5s infinite;
}
@keyframes zoomPulse { to { transform: scale(2); opacity: 0; } }`,
    js: `/* No JavaScript required */`
  },

  1912: {
    name: "Bar Grow",
    html: `<button class="btn-1912">Loading</button>`,
    css: `.btn-1912 {
  background: #475569;
  color: #f8fafc;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
}
.btn-1912::after {
  content: "|||";
  font-weight: 900;
  margin-left: 10px;
  animation: barGrow 1s infinite alternate;
}
@keyframes barGrow { to { letter-spacing: 5px; opacity: 0.5; } }`,
    js: `/* No JavaScript required */`
  },

  1913: {
    name: "Corner Triangle",
    html: `<button class="btn-1913">Verifying</button>`,
    css: `.btn-1913 {
  background: #10b981;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  position: relative;
}
.btn-1913::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  border-style: solid;
  border-width: 10px 10px 0 0;
  border-color: white transparent transparent transparent;
  animation: fade 1s infinite;
}
@keyframes fade { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }`,
    js: `/* No JavaScript required */`
  },

  1914: {
    name: "Orbiting Dot",
    html: `<button class="btn-1914">Connecting</button>`,
    css: `.btn-1914 {
  background: #334155;
  color: white;
  padding: 12px 26px;
  border-radius: 50px;
  border: none;
  display: inline-flex;
  align-items: center;
}
.btn-1914::after {
  content: "";
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  margin-left: 15px;
  transform-origin: -10px;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    js: `/* No JavaScript required */`
  },

  1915: {
    name: "Hourglass Flip",
    html: `<button class="btn-1915">Waiting</button>`,
    css: `.btn-1915 {
  background: #1e293b;
  color: #94a3b8;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
}
.btn-1915::after {
  content: "⌛";
  margin-left: 10px;
  animation: flip 2s infinite;
}
@keyframes flip { 0%, 100% { transform: rotateX(0); } 50% { transform: rotateX(180deg); } }`,
    js: `/* No JavaScript required */`
  },

  1916: {
    name: "Text Stretch",
    html: `<button class="btn-1916">Loading...</button>`,
    css: `.btn-1916 {
  background: #7c3aed;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  animation: stretchText 1.5s infinite;
}
@keyframes stretchText { 0%, 100% { letter-spacing: 1px; } 50% { letter-spacing: 4px; } }`,
    js: `/* No JavaScript required */`
  },

  1917: {
    name: "Mini Glitch",
    html: `<button class="btn-1917">Error Retrying</button>`,
    css: `.btn-1917 {
  background: #ff0055;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  animation: miniGlitch 0.3s infinite;
}
@keyframes miniGlitch { 0% { transform: translate(0); } 50% { transform: translate(-1px, 1px); } 100% { transform: translate(1px, -1px); } }`,
    js: `/* No JavaScript required */`
  },

  1918: {
    name: "Ghost Pulse",
    html: `<button class="btn-1918">Syncing</button>`,
    css: `.btn-1918 {
  background: transparent;
  border: 2px solid #6366f1;
  color: #6366f1;
  padding: 12px 26px;
  border-radius: 8px;
  position: relative;
}
.btn-1918::after {
  content: "";
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  background: #6366f1;
  opacity: 0;
  animation: ghostPulse 1.5s infinite;
}
@keyframes ghostPulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }`,
    js: `/* No JavaScript required */`
  },

  1919: {
    name: "Pixel Blink",
    html: `<button class="btn-1919">Initializing</button>`,
    css: `.btn-1919 {
  background: #000;
  color: #fff;
  font-family: monospace;
  padding: 12px 26px;
  border-radius: 0px;
  border: none;
}
.btn-1919::after {
  content: "_";
  animation: blink 0.5s infinite;
}
@keyframes blink { 50% { opacity: 0; } }`,
    js: `/* No JavaScript required */`
  },

  1920: {
    name: "Slide Overlay",
    html: `<button class="btn-1920">Processing</button>`,
    css: `.btn-1920 {
  background: #f59e0b;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-1920::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.1);
  transform: translateX(-100%);
  animation: slideRight 2s infinite;
}
@keyframes slideRight { to { transform: translateX(100%); } }`,
    js: `/* No JavaScript required */`
  },

  1921: {
    name: "Clip Spinner",
    html: `<button class="btn-1921">Loading</button>`,
    css: `.btn-1921 {
  background: #14b8a6;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-1921::after {
  content: "";
  width: 14px;
  height: 14px;
  background: white;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: spin 1s infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    js: `/* No JavaScript required */`
  },

  1922: {
    name: "Hollow Spin",
    html: `<button class="btn-1922">Fetching</button>`,
    css: `.btn-1922 {
  background: white;
  color: #6366f1;
  border: 2px solid #6366f1;
  padding: 12px 26px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-1922::after {
  content: "";
  width: 12px;
  height: 12px;
  border: 2px solid #6366f1;
  border-radius: 50%;
  border-left-color: transparent;
  animation: spin 0.5s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }`,
    js: `/* No JavaScript required */`
  },

  1923: {
    name: "Rainbow Trace",
    html: `<button class="btn-1923">Magic Load</button>`,
    css: `.btn-1923 {
  background: #111;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  position: relative;
  overflow: hidden;
}
.btn-1923::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);
  background-size: 200%;
  animation: rainbowMove 2s linear infinite;
}
@keyframes rainbowMove { 0% { background-position: 0%; } 100% { background-position: 200%; } }`,
    js: `/* No JavaScript required */`
  },

  1924: {
    name: "Step Pulse",
    html: `<button class="btn-1924">Uploading</button>`,
    css: `.btn-1924 {
  background: #4f46e5;
  color: white;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  align-items: center;
}
.btn-1924::after {
  content: "";
  width: 4px;
  height: 12px;
  background: white;
  margin-left: 10px;
  animation: stepY 1s infinite;
}
@keyframes stepY { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.2); } }`,
    js: `/* No JavaScript required */`
  },

  1925: {
    name: "Elastic Load",
    html: `<button class="btn-1925">Wait...</button>`,
    css: `.btn-1925 {
  background: #000;
  color: #fff;
  padding: 12px 26px;
  border-radius: 8px;
  border: none;
  animation: elastic 2s infinite ease-in-out;
}
@keyframes elastic { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.9, 1.1); } }`,
    js: `/* No JavaScript required */`
  }
};