/**
 * ButtonVault — Premium Button Gallery
 * script.js
 */
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
  padding: 12px 24px;
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
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

const updateGridAnimations = () => {
  const container = document.querySelector('.btn-grid'); // Change to your actual grid container class
  const items = document.querySelectorAll('.btnbox');

  if (!container || items.length === 0) return;

  // 1. Get the number of columns by looking at the computed grid template
  const gridComputedStyle = window.getComputedStyle(container);
  const columns = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;

  // 2. Calculate how many items are in the first 2 rows
  const itemsToDisable = columns * 2;

  // 3. Loop through items and toggle a 'no-anim' class
  items.forEach((item, index) => {
    if (index < itemsToDisable) {
      item.style.animation = 'none';
      item.style.animationTimeline = 'auto';
      item.style.opacity = '1';
      item.style.scale = '1';
    } else {
      // Re-enable for other items (important if window is resized larger)
      item.style.animation = '';
      item.style.animationTimeline = '';
      item.style.opacity = '';
      item.style.scale = '';
    }
  });
};

// Run on load and whenever the window is resized
window.addEventListener('resize', updateGridAnimations);
window.addEventListener('DOMContentLoaded', updateGridAnimations);
/* =========================
   SCROLL TO TOP BUTTON
========================= */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let cursorDiv = document.getElementById('cursorDiv');
let body = document.body;

document.addEventListener('click', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursorDiv.style.left = x + 'px';
  cursorDiv.style.top = y + 'px';
  cursorDiv.classList.add('active');
  setTimeout(() => {
    cursorDiv.classList.remove('active');
  }, 700);
});

/* ─── DOM References ────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const categoryItems = document.querySelectorAll('.category-item');
const btnGrid = document.getElementById('btnGrid');
const allCards = document.querySelectorAll('.btnbox');
const allBtns = 50;
const searchInput = document.getElementById('searchInput');
const sectionTitle = document.getElementById('sectionTitle');
const noResults = document.getElementById('noResults');
const searchTerm = document.getElementById('searchTerm');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalCopyBtn = document.getElementById('modalCopyBtn');
const cusmodalOverlay = document.getElementById('cusmodalOverlay');
const cusmodal = document.getElementById('cusmodal');
const cusmodalClose = document.getElementById('cusmodalClose');
const cusmodalTitle = document.getElementById('cusmodalTitle');
const cusmodalCopyBtn = document.getElementById('cusmodalCopyBtn');
const copyConfirm = document.getElementById('copyConfirm');
const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = { html: document.getElementById('htmlPanel'), css: document.getElementById('cssPanel'), js: document.getElementById('jsPanel') };
const cuscopyConfirm = document.getElementById('cuscopyConfirm');
const cushtmlCode = document.getElementById('cushtmlCode');
const cuscssCode = document.getElementById('cuscssCode');
const cusjsCode = document.getElementById('cusjsCode');
const custabBtns = document.querySelectorAll('.custab-btn');
const cuspanels = { html: document.getElementById('cushtmlPanel'), css: document.getElementById('cuscssPanel'), js: document.getElementById('cusjsPanel') };

let currentCategory = 'all';
let activeTab = 'html';
let currentBtnId = null;
let cuscurrentBtnId = null;
let cusactiveTab = 'html';

/* ─── Hamburger Toggle ──────────────────────────────────────── */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

/* ─── Sidebar Mobile Toggle ─────────────────────────────────── */
function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('open');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
}

// Open sidebar via hamburger on mobile when sidebar is hidden
hamburger.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    openSidebar();
  }
});

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

/* ─── Category Filtering ────────────────────────────────────── */
categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Update active state
    categoryItems.forEach(ci => ci.classList.remove('active'));
    item.classList.add('active');
    currentCategory = item.dataset.category;
    searchInput.value = '';

    filterCards(currentCategory, '');

    // Update section title
    const catName = item.querySelector('.cat-icon').nextSibling.textContent.trim();
    const visibleCount = [...allCards].filter(c => !c.classList.contains('hidden')).length;
    sectionTitle.querySelector('h2').textContent = catName;
    sectionTitle.querySelector('.btn-count-badge').textContent = `${visibleCount} button${visibleCount !== 1 ? 's' : ''}`;

    // On mobile, close sidebar after selection
    if (window.innerWidth <= 768) closeSidebar();
  });
});

/* ─── Filter Logic ──────────────────────────────────────────── */
function filterCards(category, search) {
  let visibleCount = 0;
  allCards.forEach(card => {
    const matchCat = category === 'all' || card.dataset.category === category;
    const matchSearch = !search || card.dataset.name.toLowerCase().includes(search.toLowerCase()) || card.dataset.category.toLowerCase().includes(search.toLowerCase());
    const show = matchCat && matchSearch;
    card.classList.toggle('hidden', !show);
    if (show) {
      visibleCount++;
      card.style.animationDelay = (visibleCount * 0.04) + 's';
      card.style.animation = 'none';
      requestAnimationFrame(() => {
        card.style.animation = '';
      });
    }
  });
  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  return visibleCount;
}

/* ─── Search ────────────────────────────────────────────────── */
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim();
  const count = filterCards(currentCategory, q);
  searchTerm.textContent = q;

  const catItem = [...categoryItems].find(ci => ci.classList.contains('active'));
  const catName = catItem ? catItem.querySelector('.cat-icon').nextSibling.textContent.trim() : 'All Buttons';
  sectionTitle.querySelector('h2').textContent = q ? `Search: "${q}"` : catName;
  sectionTitle.querySelector('.btn-count-badge').textContent = `${count} button${count !== 1 ? 's' : ''}`;
});

// btnbox-options-tools-Logic
let btnboxOptionsBtn = document.querySelectorAll('.btnbox-options-btn');
let btnboxOptionsTools = document.querySelectorAll('.btnbox-options-tools');

btnboxOptionsBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    // Stop the click from bubbling up to the 'window' listener immediately
    e.stopPropagation();

    let id = this.dataset.id;

    // 1. Close other open menus first (Optional, but better UX)
    btnboxOptionsBtn.forEach(otherBtn => {
      if (otherBtn !== btn) otherBtn.classList.remove('active');
    });
    btnboxOptionsTools.forEach(tool => {
      if (tool.dataset.id !== id) tool.classList.remove('active');
    });

    // 2. Toggle the current menu
    this.classList.toggle('active');
    let currentTool = document.querySelector(`.btnbox-options-tools[data-id="${id}"]`);
    if (currentTool) {
      currentTool.classList.toggle('active');
    }
  });
});

// NEW: Close menus when clicking anywhere else on the page
window.addEventListener('click', function (e) {
  // Check if the click is NOT inside a tools menu or on a trigger button
  if (!e.target.closest('.btnbox-options-tools') && !e.target.closest('.btnbox-options-btn')) {
    btnboxOptionsBtn.forEach(btn => btn.classList.remove('active'));
    btnboxOptionsTools.forEach(tool => tool.classList.remove('active'));
  }
});
// -----btn-16_2 Effect -------------------------

let btn_16 = document.getElementById('btn-1601');
btn_16.addEventListener('click', function () {
  btn_16.classList.add('active');
  setTimeout(() => {
    btn_16.classList.remove('active');
  }, 1000);
});

/* ─── Ripple Effect ─────────────────────────────────────────── */
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-17')) {
    const btn = e.target;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }
});

document.querySelectorAll('.btn-1701').forEach(btn => {
  btn.addEventListener('mouseenter', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

document.querySelectorAll('.btn-1702').forEach(btn => {
  btn.addEventListener('mouseleave', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

document.querySelector('.btn-1703').addEventListener('click', function () {
  document.querySelector('.btn-1703').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1703').classList.remove('active'), 700);
});

document.querySelector('.btn-1704').addEventListener('click', function () {
  document.querySelector('.btn-1704').classList.add('active');
  document.querySelector('.btn-1704').addEventListener('mouseleave', function () {
    document.querySelector('.btn-1704').classList.remove('active');
  });
});

document.querySelector('.btn-1705').addEventListener('click', function () {
  document.querySelector('.btn-1705').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1705').classList.remove('active'), 700);
});

document.querySelector('.btn-1706').addEventListener('click', function () {
  document.querySelector('.btn-1706').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1706').classList.remove('active'), 700);
});

// -----------------btn-1802----------------------
document.querySelector('.btn-1802').addEventListener('click', function () {
  document.querySelector('.btn-1802').classList.add('active');
  setTimeout(() => document.querySelector('.btn-1802').classList.remove('active'), 700);
});
/* ─── Copy Code Modal ───────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const id = parseInt(btn.dataset.id);
  openModal(id);
});

function openModal(id) {
  const data = BUTTON_DATA[id];
  if (!data) return;
  currentBtnId = id;
  modalTitle.textContent = `Button ${id} — ${data.name}`;
  htmlCode.textContent = data.html;
  cssCode.textContent = data.css;
  jsCode.textContent = data.js;
  switchTab('html');
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  copyConfirm.classList.remove('show');
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ─── Modal Tabs ────────────────────────────────────────────── */
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tab) {
  activeTab = tab;
  tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  Object.keys(panels).forEach(key => panels[key].classList.toggle('active', key === tab));
}

/* ─── Copy to Clipboard ─────────────────────────────────────── */
modalCopyBtn.addEventListener('click', () => {
  const data = BUTTON_DATA[currentBtnId];
  if (!data) return;
  const code = activeTab === 'html' ? data.html : activeTab === 'css' ? data.css : data.js;
  navigator.clipboard.writeText(code).then(() => {
    copyConfirm.classList.add('show');
    setTimeout(() => copyConfirm.classList.remove('show'), 2200);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    copyConfirm.classList.add('show');
    setTimeout(() => copyConfirm.classList.remove('show'), 2200);
  });
});

// EXPORTING
const exportBtn = document.getElementById('exportBtn');
const exportMenu = document.getElementById('exportMenu');

// Open/Close logic
exportBtn.addEventListener('click', () => exportMenu.classList.add('active'));
document.getElementById('closeExport').addEventListener('click', () => exportMenu.classList.remove('active'));

// Handling the Export Logic
document.querySelectorAll('.export-item').forEach(item => {
  item.addEventListener('click', function () {
    const type = this.dataset.type;
    const data = BUTTON_DATA[currentBtnId]; // Ensure currentBtnId is global

    let fileName = `button-${currentBtnId}`;
    let content = "";

    // JS Support Fix: Ensure JS is included in HTML bundle
    const buttonJs = data.js || "";

    if (type === 'html') {
      fileName += ".html";
      content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exported Button - ${data.name}</title>
    <style>
        body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #121212; }
        ${data.css}
    </style>
</head>
<body>
    ${data.html}
    
    <script>
        // Exported JavaScript Logic
        ${buttonJs}
    </script>
</body>
</html>`;
    }
    else if (type === 'json') {
      fileName += ".json";
      content = JSON.stringify(data, null, 2);
    }
    else if (type === 'txt') {
      fileName += ".txt";
      content = `HTML:\n${data.html}\n\nCSS:\n${data.css}\n\nJS:\n${buttonJs}`;
    }

    downloadBlob(content, fileName, 'text/plain');
    exportMenu.classList.remove('active');
  });
});

function downloadBlob(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
// EXPORTING

/* ─── Sticky Header Shadow ──────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('header').style.boxShadow =
    window.scrollY > 10 ? '0 2px 40px rgba(0,0,0,0.6)' : '0 1px 40px rgba(0,0,0,0.4)';
});

/* ─── Close nav on outside click ───────────────────────────── */
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-inner') && nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

//addButtons

const htmlInput = document.getElementById('addhtmlCode');
const cssInput = document.getElementById('addcssCode');
const jsInput = document.getElementById('addjsCode');
const liveCanvas = document.getElementById('addliveCanvas');
const galleryGrid = document.getElementById('addgalleryGrid');

// Load items from LocalStorage or start empty
let vaultItems = JSON.parse(localStorage.getItem('addmyVault')) || [];
let itemIndexToDelete = null;

// --- 2. GALLERY RENDERING (The Shadow DOM Fix) ---
function renderGallery() {
  galleryGrid.innerHTML = '';

  vaultItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'addbtnbox';
    card.id = `card-${index}`;

    const isolationWrapper = document.createElement('div');
    isolationWrapper.className = 'addbutton-wrapper';
    card.appendChild(isolationWrapper);

    // Attach Shadow Root
    const shadow = isolationWrapper.attachShadow({ mode: 'open' });

    // Inject HTML and CSS
    shadow.innerHTML = `
            <style>
                :host { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
                ${item.css}
            </style>
            <div class="shadow-content-root">${item.html}</div>
        `;

    // --- THE FIX FOR JS ---
    if (item.js) {
      const script = document.createElement('script');
      // We wrap your stored JS in an IIFE (Immediately Invoked Function Expression)
      // We then redefine 'document' locally inside that function to point to the Shadow Root
      script.textContent = `
                (function() {
                    const card = document.getElementById('card-${index}');
                    const shadowRoot = card.querySelector('.addbutton-wrapper').shadowRoot;
                    
                    // This helper allows standard selectors to work inside the shadow
                    const querySelector = (selector) => shadowRoot.querySelector(selector);
                    const querySelectorAll = (selector) => shadowRoot.querySelectorAll(selector);

                    // We execute the stored JS here. 
                    // Note: If the stored JS uses 'document.querySelector', 
                    // you might need to wrap it to redirect to shadowRoot.
                    try {
                        ${item.js.replace(/document\.querySelector/g, 'shadowRoot.querySelector')
          .replace(/document\.getElementById/g, 'shadowRoot.getElementById')}
                    } catch (err) {
                        console.error("Gallery JS Error in card ${index}:", err);
                    }
                })();
            `;
      card.appendChild(script);
    }

    // Standard Tools
    const tools = document.createElement('div');
    tools.className = 'addcard-tools';
    // Inside renderGallery() loop...
    tools.innerHTML = `
    <button class="addtool-btn" onclick="viewSource(${index})">Source</button>
    <button class="addtool-btn delete-btn" style="color:#ff6584" onclick="deleteItem(${index})">Delete</button>
`;
    card.appendChild(tools);
    galleryGrid.prepend(card);
  });
}


// password Logic

const ADMIN_KEY = "Emperor Webix"; // Set your password here

// 1. Keyboard Listeners
document.addEventListener('keydown', function (e) {
  // Ctrl + U (Unlock)
  // if (e.ctrlKey && e.key.toLowerCase() === 'u') {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
    e.preventDefault();
    openAdminModal();
  }

  // Ctrl + Y (Yield/Lock)
  if (e.ctrlKey && e.key.toLowerCase() === 'y') {
    const modal = document.getElementById('adminModal');
    if (document.body.classList.contains('admin-mode')) {
      e.preventDefault();
      document.body.classList.remove('admin-mode');
      // Visual feedback using your existing thanksOverlay logic
      document.getElementById('thanksOverlay').style.display = 'flex';
      document.querySelector('.thanksText').innerText = "Vault Locked";
      document.querySelector('.thanksPara').innerText = "Management tools are now hidden.";
      setTimeout(() => {
        document.getElementById('thanksOverlay').style.display = 'none';
        document.querySelector('.thanksText').innerText = "Thanks for Uploading!";
        document.querySelector('.thanksPara').innerText = "We are very very thankful to you for uploading Your Button";
      }, 2000);
    }
  }
});

// 2. Modal Functions
function openAdminModal() {
  const modal = document.getElementById('adminModal');
  modal.style.display = 'flex'; // Overlay usually uses flex to center
  const input = document.getElementById('adminPassInput');
  input.value = '';
  setTimeout(() => input.focus(), 1000);
}

let passDone = document.getElementById('adminSubmitBtn');
const input = document.getElementById('adminPassInput');

function closeAdminModal() {
  passDone.innerText = null;
  passDone.innerText = "Unlock";
  passDone.style.color = 'white';
  input.style.borderColor = 'var(--border-h)';
  document.getElementById('adminModal').style.display = 'none';
}

// 3. Password Verification
function verifyAdmin() {
  if (input.value === ADMIN_KEY) {
    document.body.classList.add('admin-mode');
    passDone.innerText = "Done!";
    passDone.style.color = '#43e97b';
    input.style.borderColor = '#43e97b';
    setTimeout(() => {
      closeAdminModal();
    }, 1200);
  } else {
    // Shake animation for wrong password
    passDone.innerText = "Wrong!";
    passDone.style.color = '#ff6584';
    input.style.borderColor = "#ff6584";
    input.animate([
      { transform: 'translateX(-10px)' },
      { transform: 'translateX(10px)' },
      { transform: 'translateX(0)' }
    ], { duration: 200, iterations: 2 });
  }
}

// Event Listeners for Submit
document.getElementById('adminSubmitBtn').addEventListener('click', verifyAdmin);
document.getElementById('adminPassInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') verifyAdmin();
});

// password Logic

// --- 3. LIVE EDITOR LOGIC ---
// Live Preview Function for Add Button with JS Support
function updatePreview() {
  const html = document.getElementById('addhtmlCode').value;
  const css = document.getElementById('addcssCode').value;
  const js = document.getElementById('addjsCode').value;

  const previewContainer = document.getElementById('addliveCanvas');
  if (!previewContainer) return;

  // Create or get iframe
  let iframe = previewContainer.querySelector('.add-preview-iframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.className = 'add-preview-iframe';
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms allow-modals');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.background = 'white';
    previewContainer.innerHTML = '';
    previewContainer.appendChild(iframe);
  }

  // Escape content to prevent XSS
  const safeHtml = html.replace(/<\/script>/gi, '<\\/script>');
  const safeCss = css.replace(/<\/style>/gi, '<\\/style>');
  const safeJs = js.replace(/<\/script>/gi, '<\\/script>');

  // Create complete document with JS support
  const doc = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        // background: #0d0f14;
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        padding: 20px;
      }
      
      /* User CSS */
      ${safeCss}
    </style>
  </head>
  <body>
    ${safeHtml}
    
    <script>
      // Error handler for preview
      window.addEventListener('error', function(e) {
        console.warn('Preview error:', e.message);
        return true;
      });
      
      // Execute user JavaScript
      (function() {
        try {
          ${safeJs}
        } catch(e) {
          console.warn('JavaScript execution error:', e.message);
        }
      })();
    <\/script>
  </body>
  </html>`;

  // Update iframe content
  iframe.srcdoc = doc;
}

// Listen for typing in editors
[htmlInput, cssInput, jsInput].forEach(el => el.addEventListener('input', updatePreview));

// --- 4. PUBLISHING & STORAGE ---
document.getElementById('addpublishBtn').addEventListener('click', () => {
  const htmlValue = htmlInput.value.trim();

  // 1. Basic empty check
  if (!htmlValue) {
    alert("The HTML field is empty!");
    return;
  }
  document.getElementById('thanksOverlay').style.display = 'flex';
  setTimeout(() => {
    document.getElementById('thanksOverlay').style.display = 'none';
  }, 2400);

  // 2. Create a virtual parser to inspect the HTML structure
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlValue, 'text/html');

  // Check for <button>, <input type="button">, <input type="submit">, or <a> tags
  const hasButton = doc.querySelector('button, input[type="button"], input[type="submit"], a');

  if (!hasButton) {
    // --- ERROR MESSAGE ---
    // You can replace this alert with a custom toast notification if you have one
    alert("⚠️ Invalid Component: Your HTML must contain at least one <button> or <a> tag to be saved to the Vault.");

    // Optional: Highlight the HTML textarea to show where the error is
    htmlInput.style.borderColor = "#ff6584";
    setTimeout(() => htmlInput.style.borderColor = "var(--border)", 2000);
    return;
  }

  // 3. If check passes, proceed with saving
  const newItem = {
    html: htmlValue,
    css: cssInput.value,
    js: jsInput.value,
    id: Date.now()
  };

  vaultItems.push(newItem);
  localStorage.setItem('addmyVault', JSON.stringify(vaultItems));

  // UI Feedback
  resetEditor();
  renderGallery();
  openDone();
});

// --- 5. MODAL & DELETION LOGIC ---
window.viewSource = (i) => {
  const item = vaultItems[i];
  const modalBody = document.getElementById('addmodalBody');

  // Format code for display
  modalBody.innerHTML = `
        <h4 style="color:var(--accent); margin-bottom:10px; font-family:'Syne'">HTML</h4>
        <pre><code>${item.html.replace(/</g, '&lt;')}</code></pre>
        
        <h4 style="color:var(--accent); margin-top:20px; margin-bottom:10px; font-family:'Syne'">CSS</h4>
        <pre><code>${item.css}</code></pre>

        <h4 style="color:var(--accent); margin-bottom:10px; font-family:'Syne'">JS</h4>
        <pre><code>${item.js}</code></pre>
    `;
  document.getElementById('addcodeModal').classList.add('active');
};

// window.closeModal = () => document.getElementById('addcodeModal').classList.remove('active');


// Danger Modal Trigger
window.deleteItem = (index) => {
  itemIndexToDelete = index;
  document.getElementById('adddeleteModal').classList.add('active');
};

window.closeDeleteModal = () => {
  document.getElementById('adddeleteModal').classList.remove('active');
};

document.getElementById('addconfirmDeleteBtn').addEventListener('click', () => {
  if (itemIndexToDelete !== null) {
    vaultItems.splice(itemIndexToDelete, 1);
    localStorage.setItem('addmyVault', JSON.stringify(vaultItems));
    renderGallery();
    closeDeleteModal();
  }
});

let currentCopyContent = ""; // Stores code for the copy button

window.viewSource = (i) => {
  const item = vaultItems[i];
  const modalBody = document.getElementById('addmodalBody');

  // Set the content to be copied
  currentCopyContent = `\n${item.html}\n<style>\n${item.css}\n</style>\n<script>\n${item.js}\n</script>`;

  // Inject visible content into scroll area
  modalBody.innerHTML = `
        <label style="color:var(--accent); font-size:0.7rem; font-weight:800; display:block; margin-bottom:10px;">HTML</label>
        <pre><code>${item.html.replace(/</g, '&lt;')}</code></pre>
        
        <label style="color:var(--accent); font-size:0.7rem; font-weight:800; display:block; margin-bottom:10px; margin-top:20px;">CSS</label>
        <pre><code>${item.css}</code></pre>
        
        <label style="color:var(--accent); font-size:0.7rem; font-weight:800; display:block; margin-bottom:10px; margin-top:20px;">JS</label>
        <pre><code>${item.js}</code></pre>
    `;

  document.getElementById('addcodeModal').classList.add('active');
};

function addcloseModal() {
  document.getElementById('addcodeModal').classList.remove('active');
}



// Copy to Clipboard Function
document.getElementById('addcopyVaultCode').addEventListener('click', function () {
  navigator.clipboard.writeText(currentCopyContent).then(() => {
    // Visual feedback on the button
    const originalText = this.innerText;
    this.innerText = "✓ Copied!";
    this.style.background = "var(--accent-3)"; // Change to green (if defined)

    setTimeout(() => {
      this.innerText = originalText;
      this.style.background = "var(--accent)";
    }, 2000);
  });
});

window.closeModal = () => document.getElementById('addcodeModal').classList.remove('active');

// Reset function
window.resetEditor = () => {
  htmlInput.value = '';
  cssInput.value = '';
  jsInput.value = '';
  updatePreview();
};

// --- 6. INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  updatePreview(); // Show initial state
});


function openAddButton() {
  document.getElementById('addbutton').style.display = 'block';

}

function closeAddButton() {
  document.getElementById('addbutton').style.display = 'none';
}

function openAddGallery() {
  document.getElementById('addGallery').style.display = 'block';
}

function closeAddGallery() {
  document.getElementById('addGallery').style.display = 'none';
}

function openDone() {
  document.getElementById('uploadButton').style.display = 'flex';
}

function closeComDone() {
  document.getElementById('addbutton').style.display = 'none';
  document.getElementById('uploadButton').style.display = 'none';
  // document.getElementById('thanksOverlay').style.display = 'flex';
  // setTimeout(() => {
  //     document.getElementById('thanksOverlay').style.display = 'none';
  // }, 2400);
}

function closeDone() {
  document.getElementById('uploadButton').style.display = 'none';
  document.getElementById('thanksOverlay').style.display = 'flex';
  document.getElementById('thanksOverlay').style.display = 'none';
}

function switchHtmlTab() {
  document.getElementById('addhtmlCode').classList.add('active');
  document.getElementById('addcssCode').classList.remove('active');
  document.getElementById('addjsCode').classList.remove('active');
  document.getElementById('addHTMLButton').classList.add('active');
  document.getElementById('addCSSButton').classList.remove('active');
  document.getElementById('addJSButton').classList.remove('active');
}
function switchcssTab() {
  document.getElementById('addcssCode').classList.add('active');
  document.getElementById('addhtmlCode').classList.remove('active');
  document.getElementById('addjsCode').classList.remove('active');
  document.getElementById('addCSSButton').classList.add('active');
  document.getElementById('addHTMLButton').classList.remove('active');
  document.getElementById('addJSButton').classList.remove('active');
}
function switchjsTab() {
  document.getElementById('addjsCode').classList.add('active');
  document.getElementById('addcssCode').classList.remove('active');
  document.getElementById('addhtmlCode').classList.remove('active');
  document.getElementById('addJSButton').classList.add('active');
  document.getElementById('addHTMLButton').classList.remove('active');
  document.getElementById('addCSSButton').classList.remove('active');
}

//addButtonsend

// search
// const search1 = document.getElementById('searchInput');
document.getElementById('search2').addEventListener('click', function () {
  document.getElementById('searchInput').classList.add('active');
  document.getElementById('searchBarHide').style.visibility = 'visible';
});

function searchBarHide() {
  document.getElementById('searchInput').classList.remove('active');
  document.getElementById('searchBarHide').style.visibility = 'hidden';
}
// searchEnd

// logo

// ===================== COMPANY CV CARD =====================
const logoIcon = document.getElementById('logoIcon');
const companyCVOverlay = document.getElementById('companyCVOverlay');
const companyCVClose = document.getElementById('companyCVClose');

// Tab switching functionality
function initCVTabs() {
  const tabBtns = document.querySelectorAll('.cv-tab-btn');
  const tabPanes = document.querySelectorAll('.cv-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all tabs and panes
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active class to clicked tab
      btn.classList.add('active');

      // Show corresponding pane
      const tabId = btn.dataset.tab;
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
}

// Project filter functionality
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.cv-filter-btn');
  const projectCards = document.querySelectorAll('.cv-project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Open CV card when logo is clicked
if (logoIcon) {
  logoIcon.addEventListener('click', (e) => {
    e.preventDefault();
    companyCVOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize tabs and filters if not already initialized
    if (!window.cvInitialized) {
      initCVTabs();
      initProjectFilters();
      window.cvInitialized = true;
    }
  });
}

// Close CV card
function closeCompanyCV() {
  companyCVOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (companyCVClose) {
  companyCVClose.addEventListener('click', closeCompanyCV);
}

// Close when clicking outside the card
companyCVOverlay.addEventListener('click', (e) => {
  if (e.target === companyCVOverlay) {
    closeCompanyCV();
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && companyCVOverlay.classList.contains('active')) {
    closeCompanyCV();
  }
});

// Smooth scroll for tabs
document.querySelectorAll('.cv-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.cv-tab-content').scrollTop = 0;
  });
});

// LOGO IMG

document.getElementById('cv-logo-wrapper').addEventListener('click', function () {
  document.getElementById('logo-image').style.display = 'flex';
});

document.getElementById('logo-image-close').addEventListener('click', function () {
  document.getElementById('logo-image').style.display = 'none';
});

// logoend


/* ===================== SIMPLIFIED CUSTOMIZER ===================== */

let currentCustomizerId = null;
let originalButtonData = null;
let customizerUpdateTimer = null;

// Store button CSS for quick access
let storedButtonCSS = {};

// ===================== OPEN/CLOSE MODAL =====================
function cusopenModal(id) {
  const data = BUTTON_DATA[id];
  if (!data) {
    console.error('Button data not found for ID:', id);
    return;
  }

  currentCustomizerId = id;
  originalButtonData = JSON.parse(JSON.stringify(data));

  // Store the original CSS for this button
  storedButtonCSS[id] = data.css;

  const modalTitle = document.getElementById('cusmodalTitle');
  if (modalTitle) modalTitle.textContent = `Customize: ${data.name}`;

  // Set editor values
  const htmlEditor = document.getElementById('cushtmlEditor');
  const cssEditor = document.getElementById('cuscssEditor');
  const jsEditor = document.getElementById('cusjsEditor');

  if (htmlEditor) htmlEditor.value = data.html;
  if (cssEditor) cssEditor.value = data.css;
  if (jsEditor) jsEditor.value = data.js;

  // Parse CSS and populate controls
  parseCSSAndUpdateControls(data.css);

  // Update live preview
  setTimeout(() => {
    updateCustomizerPreview();
  }, 100);

  // Switch to HTML tab
  cusswitchTab('html');

  // Show modal
  const overlay = document.getElementById('cusmodalOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  const confirm = document.getElementById('cuscopyConfirm');
  if (confirm) confirm.classList.remove('show');

  console.log(`✅ Loaded CSS for button ${id}`);
}

function cuscloseModal() {
  const overlay = document.getElementById('cusmodalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ===================== TAB SWITCHING =====================
function cusswitchTab(tab) {
  const tabBtns = document.querySelectorAll('.custab-btn');
  const panels = {
    html: document.getElementById('cushtmlPanel'),
    css: document.getElementById('cuscssPanel'),
    js: document.getElementById('cusjsPanel')
  };

  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

  Object.keys(panels).forEach(key => {
    if (panels[key]) {
      panels[key].classList.toggle('active', key === tab);
    }
  });
}

// ===================== PARSE CSS AND UPDATE CONTROLS =====================
function parseCSSAndUpdateControls(css) {
  const btnSelector = new RegExp(`\\.btn-${currentCustomizerId}\\s*{([^}]+)}`, 'i');
  const btnMatch = css.match(btnSelector);

  if (btnMatch) {
    const styles = btnMatch[1];

    // Extract values
    const colorMatch = styles.match(/color:\s*([^;]+)/);
    const bgMatch = styles.match(/background(?:-color)?:\s*([^;]+)/);
    const paddingMatch = styles.match(/padding:\s*([^;]+)/);
    const radiusMatch = styles.match(/border-radius:\s*([^;]+)/);
    const fontSizeMatch = styles.match(/font-size:\s*([^;]+)/);
    const fontWeightMatch = styles.match(/font-weight:\s*([^;]+)/);
    const letterMatch = styles.match(/letter-spacing:\s*([^;]+)/);
    const borderMatch = styles.match(/border:\s*([^;]+)/);
    const shadowMatch = styles.match(/box-shadow:\s*([^;]+)/);

    // Update UI
    if (colorMatch) updateColorControl('cusTextColor', colorMatch[1].trim());

    // Check if background is transparent
    if (bgMatch) {
      const bgValue = bgMatch[1].trim();
      const isTransparent = bgValue === 'transparent' || bgValue === 'rgba(0,0,0,0)' || bgValue === 'rgba(0, 0, 0, 0)';

      const transparentCheckbox = document.getElementById('cusBgTransparent');
      if (transparentCheckbox) {
        transparentCheckbox.checked = isTransparent;
      }

      if (!isTransparent) {
        updateColorControl('cusBgColor', bgValue);
      }
    }

    if (paddingMatch) updatePaddingControls(paddingMatch[1].trim());
    if (radiusMatch) updateSliderControl('cusBorderRadius', radiusMatch[1].trim());
    if (fontSizeMatch) updateSliderControl('cusFontSize', fontSizeMatch[1].trim());
    if (fontWeightMatch) {
      const weight = document.getElementById('cusFontWeight');
      if (weight) weight.value = fontWeightMatch[1].trim();
    }
    if (letterMatch) updateSliderControl('cusLetterSpacing', letterMatch[1].trim());

    // Parse border
    if (borderMatch && borderMatch[1] !== 'none') {
      const borderParts = borderMatch[1].split(' ');
      if (borderParts.length >= 3) {
        updateSliderControl('cusBorderWidth', borderParts[0]);
        updateColorControl('cusBorderColor', borderParts[2]);
        const styleSelect = document.getElementById('cusBorderStyle');
        if (styleSelect && borderParts[1]) styleSelect.value = borderParts[1];
      }
    } else {
      updateSliderControl('cusBorderWidth', '0');
      const styleSelect = document.getElementById('cusBorderStyle');
      if (styleSelect) styleSelect.value = 'none';
    }

    // Parse shadow
    if (shadowMatch && shadowMatch[1] !== 'none') {
      const shadowParts = shadowMatch[1].match(/(-?\d+)px\s+(-?\d+)px\s+(\d+)px\s+(#[0-9a-f]+)/i);
      if (shadowParts) {
        updateSliderControl('cusShadowX', shadowParts[1]);
        updateSliderControl('cusShadowY', shadowParts[2]);
        updateSliderControl('cusShadowBlur', shadowParts[3]);
        updateColorControl('cusShadowColor', shadowParts[4]);
      }
    } else {
      updateSliderControl('cusShadowX', '0');
      updateSliderControl('cusShadowY', '0');
      updateSliderControl('cusShadowBlur', '0');
    }
  }
}

function updatePaddingControls(paddingValue) {
  const parts = paddingValue.split(' ');
  let topBottom = '12';
  let leftRight = '26';

  if (parts.length === 1) {
    topBottom = leftRight = parts[0].replace('px', '');
  } else if (parts.length === 2) {
    topBottom = parts[0].replace('px', '');
    leftRight = parts[1].replace('px', '');
  } else if (parts.length >= 3) {
    topBottom = parts[0].replace('px', '');
    leftRight = parts[1].replace('px', '');
  }

  updateSliderControl('cusPaddingY', topBottom);
  updateSliderControl('cusPaddingX', leftRight);
}

// ===================== HELPER FUNCTIONS =====================
function updateColorControl(id, value) {
  const element = document.getElementById(id);
  if (element && value) {
    element.value = value;
    const hexInput = document.getElementById(`${id}Hex`);
    if (hexInput) hexInput.value = value;
  }
}

function updateSliderControl(id, value) {
  const element = document.getElementById(id);
  if (element && value) {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      element.value = numericValue;
      const valueSpan = document.getElementById(`${id}Val`);
      if (valueSpan) {
        valueSpan.textContent = numericValue + 'px';
      }
    }
  }
}

// ===================== UPDATE EXISTING CSS PROPERTIES =====================
function updateCSSProperties(existingStyles, newStyles) {
  let updatedStyles = existingStyles;

  // Update color
  if (newStyles.color !== undefined) {
    if (updatedStyles.includes('color:')) {
      updatedStyles = updatedStyles.replace(/color:\s*[^;]+;/, `color: ${newStyles.color};`);
    } else {
      updatedStyles += `\n  color: ${newStyles.color};`;
    }
  }

  // Update background (supports transparent)
  if (newStyles.background !== undefined) {
    if (updatedStyles.includes('background:')) {
      updatedStyles = updatedStyles.replace(/background:\s*[^;]+;/, `background: ${newStyles.background};`);
    } else if (updatedStyles.includes('background-color:')) {
      updatedStyles = updatedStyles.replace(/background-color:\s*[^;]+;/, `background: ${newStyles.background};`);
    } else {
      updatedStyles += `\n  background: ${newStyles.background};`;
    }
  }

  // Update padding
  if (newStyles.padding !== undefined) {
    if (updatedStyles.includes('padding:')) {
      updatedStyles = updatedStyles.replace(/padding:\s*[^;]+;/, `padding: ${newStyles.padding};`);
    } else {
      updatedStyles += `\n  padding: ${newStyles.padding};`;
    }
  }

  // Update border-radius
  if (newStyles.borderRadius !== undefined) {
    if (updatedStyles.includes('border-radius:')) {
      updatedStyles = updatedStyles.replace(/border-radius:\s*[^;]+;/, `border-radius: ${newStyles.borderRadius};`);
    } else {
      updatedStyles += `\n  border-radius: ${newStyles.borderRadius};`;
    }
  }

  // Update font-size
  if (newStyles.fontSize !== undefined) {
    if (updatedStyles.includes('font-size:')) {
      updatedStyles = updatedStyles.replace(/font-size:\s*[^;]+;/, `font-size: ${newStyles.fontSize};`);
    } else {
      updatedStyles += `\n  font-size: ${newStyles.fontSize};`;
    }
  }

  // Update font-weight
  if (newStyles.fontWeight !== undefined) {
    if (updatedStyles.includes('font-weight:')) {
      updatedStyles = updatedStyles.replace(/font-weight:\s*[^;]+;/, `font-weight: ${newStyles.fontWeight};`);
    } else {
      updatedStyles += `\n  font-weight: ${newStyles.fontWeight};`;
    }
  }

  // Update letter-spacing
  if (newStyles.letterSpacing !== undefined) {
    if (updatedStyles.includes('letter-spacing:')) {
      updatedStyles = updatedStyles.replace(/letter-spacing:\s*[^;]+;/, `letter-spacing: ${newStyles.letterSpacing};`);
    } else {
      updatedStyles += `\n  letter-spacing: ${newStyles.letterSpacing};`;
    }
  }

  // Update border
  if (newStyles.border !== undefined) {
    if (updatedStyles.includes('border:')) {
      updatedStyles = updatedStyles.replace(/border:\s*[^;]+;/, `border: ${newStyles.border};`);
    } else {
      updatedStyles += `\n  border: ${newStyles.border};`;
    }
  } else if (newStyles.border === 'none') {
    if (updatedStyles.includes('border:')) {
      updatedStyles = updatedStyles.replace(/border:\s*[^;]+;/, '');
    }
  }

  // Update box-shadow
  if (newStyles.boxShadow !== undefined) {
    if (updatedStyles.includes('box-shadow:')) {
      updatedStyles = updatedStyles.replace(/box-shadow:\s*[^;]+;/, `box-shadow: ${newStyles.boxShadow};`);
    } else {
      updatedStyles += `\n  box-shadow: ${newStyles.boxShadow};`;
    }
  } else if (newStyles.boxShadow === 'none') {
    if (updatedStyles.includes('box-shadow:')) {
      updatedStyles = updatedStyles.replace(/box-shadow:\s*[^;]+;/, '');
    }
  }

  return updatedStyles;
}

// ===================== GENERATE UPDATED CSS FROM CONTROLS =====================
function generateUpdatedCSSFromControls(currentCSS) {
  // Extract existing styles block
  const btnSelector = new RegExp(`\\.btn-${currentCustomizerId}\\s*{([^}]+)}`, 'i');
  const btnMatch = currentCSS.match(btnSelector);

  let existingStyles = '';
  if (btnMatch) {
    existingStyles = btnMatch[1];
  }

  document.addEventListener('click', (e) => {
    if (e.target != document.getElementById('cusTextColorHex')) {
      updateCustomizerPreview();
      generateUpdatedCSSFromControls();
      updateCSSProperties();
    }
  });

  // Get values from controls
  const textColor = document.getElementById('cusTextColor').value && document.getElementById('cusTextColorHex').value;
  const bgColor = document.getElementById('cusBgColor').value && document.getElementById('cusBgColorHex').value;
  const isTransparent = document.getElementById('cusBgTransparent').checked;
  const paddingX = document.getElementById('cusPaddingX').value;
  const paddingY = document.getElementById('cusPaddingY').value;
  const borderRadius = document.getElementById('cusBorderRadius').value;
  const fontSize = document.getElementById('cusFontSize').value;
  const fontWeight = document.getElementById('cusFontWeight').value;
  const letterSpacing = document.getElementById('cusLetterSpacing').value;
  const borderWidth = document.getElementById('cusBorderWidth').value;
  const borderColor = document.getElementById('cusBorderColor').value;
  const borderStyle = document.getElementById('cusBorderStyle').value;
  const shadowX = document.getElementById('cusShadowX').value;
  const shadowY = document.getElementById('cusShadowY').value;
  const shadowBlur = document.getElementById('cusShadowBlur').value;
  const shadowColor = document.getElementById('cusShadowColor').value;

  // Prepare background value
  let background = isTransparent ? 'transparent' : bgColor;

  // Prepare new styles object
  const newStyles = {
    color: textColor,
    background: background,
    padding: `${paddingY}px ${paddingX}px`,
    borderRadius: `${borderRadius}px`,
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    letterSpacing: `${letterSpacing}px`
  };

  // Add border if not none
  if (borderStyle !== 'none' && borderWidth > 0) {
    newStyles.border = `${borderWidth}px ${borderStyle} ${borderColor}`;
  } else {
    newStyles.border = 'none';
  }

  // Add shadow if any values are non-zero
  if (shadowX != 0 || shadowY != 0 || shadowBlur != 0) {
    newStyles.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`;
  } else {
    newStyles.boxShadow = 'none';
  }

  // Update existing styles with new values
  let updatedStyles = existingStyles;

  // Preserve important properties
  const preservedProperties = ['position', 'overflow', 'transition', 'cursor', 'font-family', 'z-index', 'opacity', 'display', 'align-items', 'justify-content', 'text-decoration', 'white-space', 'border-style', 'border-width', 'border-color'];

  preservedProperties.forEach(prop => {
    const propRegex = new RegExp(`${prop}:\\s*[^;]+;`, 'i');
    const match = existingStyles.match(propRegex);
    if (match && !updatedStyles.includes(match[0])) {
      updatedStyles += `\n  ${match[0]}`;
    }
  });

  // Apply all updates
  updatedStyles = updateCSSProperties(updatedStyles, newStyles);

  // Clean up
  updatedStyles = updatedStyles.replace(/\n\s*\n/g, '\n').trim();

  // Reconstruct full CSS
  const newCSS = `.btn-${currentCustomizerId} {\n${updatedStyles}\n}`;

  // Add any other CSS rules (hover effects, pseudo-elements, etc.)
  const otherRules = currentCSS.replace(btnSelector, '').trim();
  if (otherRules) {
    return newCSS + '\n\n' + otherRules;
  }

  return newCSS;
}

// ===================== UPDATE PREVIEW FROM CONTROLS =====================
function updatePreviewFromControls() {
  const cssEditor = document.getElementById('cuscssEditor');
  if (!cssEditor || !currentCustomizerId) return;

  let currentCSS = cssEditor.value;
  const newCSS = generateUpdatedCSSFromControls(currentCSS);

  cssEditor.value = newCSS;

  // Store the updated CSS for this button
  storedButtonCSS[currentCustomizerId] = newCSS;

  updateCustomizerPreview();

  console.log('✅ Updated CSS with transparent background support');
}

// ===================== LIVE PREVIEW UPDATE =====================
function updateCustomizerPreview() {
  const html = document.getElementById('cushtmlEditor')?.value || '';
  const css = document.getElementById('cuscssEditor')?.value || '';
  const js = document.getElementById('cusjsEditor')?.value || '';

  const iframe = document.getElementById('cusliveFrame');
  if (!iframe) return;

  const safeHtml = html.replace(/<\/script>/gi, '<\\/script>');
  const safeCss = css.replace(/<\/style>/gi, '<\\/style>');
  const safeJs = js.replace(/<\/script>/gi, '<\\/script>');

  const doc = `<!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0d0f14;
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        padding: 20px;
        }
      ${safeCss}
    </style>
  </head>
  <body>
  ${safeHtml}
    <script>
      (function() {
        try {
          ${safeJs}
          } catch(e) {
          console.warn('Preview JS error:', e);
        }
        })();
    <\/script>
  </body>
  </html>`;

  iframe.srcdoc = doc;
}

function debouncedPreviewUpdate() {
  clearTimeout(customizerUpdateTimer);
  customizerUpdateTimer = setTimeout(() => {
    updateCustomizerPreview();
  }, 10);
}

// ===================== RESET, EXPORT, COPY =====================
function resetToOriginal() {
  if (originalButtonData) {
    const htmlEditor = document.getElementById('cushtmlEditor');
    const cssEditor = document.getElementById('cuscssEditor');
    const jsEditor = document.getElementById('cusjsEditor');

    if (htmlEditor) htmlEditor.value = originalButtonData.html;
    if (cssEditor) cssEditor.value = originalButtonData.css;
    if (jsEditor) jsEditor.value = originalButtonData.js;

    // Restore stored CSS
    if (currentCustomizerId) {
      storedButtonCSS[currentCustomizerId] = originalButtonData.css;
    }

    parseCSSAndUpdateControls(originalButtonData.css);
    updateCustomizerPreview();

    console.log(`✅ Reset to original CSS for button ${currentCustomizerId}`);
  }
}

function exportCSS() {
  const css = document.getElementById('cuscssEditor')?.value || '';
  const blob = new Blob([css], { type: 'text/css' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `button-${currentCustomizerId}.css`;
  a.click();
  URL.revokeObjectURL(url);
}

function copyFullCode() {
  const html = document.getElementById('cushtmlEditor')?.value || '';
  const css = document.getElementById('cuscssEditor')?.value || '';
  const js = document.getElementById('cusjsEditor')?.value || '';
  const fullCode = `<!-- HTML -->\n${html}\n\n<!-- CSS -->\n<style>\n${css}\n</style>\n\n<script>\n${js}\n</script>`;

  navigator.clipboard.writeText(fullCode).then(() => {
    const confirm = document.getElementById('cuscopyConfirm');
    if (confirm) {
      confirm.classList.add('show');
      setTimeout(() => confirm.classList.remove('show'), 2000);
    }
  });
}

// ===================== GET STORED CSS =====================
function getStoredCSS(buttonId) {
  return storedButtonCSS[buttonId] || null;
}

function getAllStoredCSS() {
  return storedButtonCSS;
}

function clearStoredCSS(buttonId) {
  if (buttonId) {
    delete storedButtonCSS[buttonId];
  } else {
    storedButtonCSS = {};
  }
  console.log('Stored CSS cleared');
}

// ===================== SETUP VISUAL CONTROLS =====================
function setupVisualControls() {
  const controls = [
    'cusTextColor', 'cusBgColor', 'cusBgTransparent', 'cusPaddingX', 'cusPaddingY',
    'cusBorderRadius', 'cusFontSize', 'cusFontWeight', 'cusLetterSpacing',
    'cusBorderWidth', 'cusBorderColor', 'cusBorderStyle',
    'cusShadowX', 'cusShadowY', 'cusShadowBlur', 'cusShadowColor'
  ];

  controls.forEach(controlId => {
    const element = document.getElementById(controlId);
    if (element) {
      element.addEventListener('input', () => {
        // Special handling for transparent checkbox
        if (controlId === 'cusBgTransparent') {
          const bgColorInput = document.getElementById('cusBgColor');
          const bgColorHex = document.getElementById('cusBgColorHex');
          if (element.checked) {
            bgColorInput.disabled = true;
            bgColorHex.disabled = true;
          } else {
            bgColorInput.disabled = false;
            bgColorHex.disabled = false;
          }
        }
        updatePreviewFromControls();
      });
    }
  });


  // Setup slider value displays
  const sliders = ['cusPaddingX', 'cusPaddingY', 'cusBorderRadius', 'cusFontSize', 'cusLetterSpacing', 'cusBorderWidth', 'cusShadowX', 'cusShadowY', 'cusShadowBlur'];
  sliders.forEach(sliderId => {
    const slider = document.getElementById(sliderId);
    const valueSpan = document.getElementById(`${sliderId}Val`);
    if (slider && valueSpan) {
      slider.addEventListener('input', () => {
        valueSpan.textContent = slider.value + 'px';
      });
    }
  });

  // Setup color picker sync with hex inputs
  const colorPickers = ['cusTextColor', 'cusBgColor', 'cusBorderColor', 'cusShadowColor'];
  colorPickers.forEach(pickerId => {
    const picker = document.getElementById(pickerId);
    const hexInput = document.getElementById(`${pickerId}Hex`);
    if (picker && hexInput) {
      picker.addEventListener('input', () => {
        hexInput.value = picker.value;
      });
      hexInput.addEventListener('input', () => {
        if (/^#[0-9A-F]{6}$/i.test(hexInput.value)) {
          picker.value = hexInput.value;
        }
      });
    }
  });
}

// ===================== INITIALIZE CUSTOMIZER =====================
function initAdvancedCustomizer() {
  setupVisualControls();

  // Setup customizer button click handler
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.cuscopy-btn');
    if (!btn) return;
    e.preventDefault();
    const id = parseInt(btn.dataset.id);
    if (id && BUTTON_DATA[id]) {
      cusopenModal(id);
    }
  });

  // Setup close button
  const closeBtn = document.getElementById('cusmodalClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', cuscloseModal);
  }

  // Setup overlay click
  const overlay = document.getElementById('cusmodalOverlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) cuscloseModal();
    });
  }

  // Setup reset button
  const resetBtn = document.getElementById('cusresetBtn');
  if (resetBtn) resetBtn.addEventListener('click', resetToOriginal);

  // Setup export button
  const exportBtn = document.getElementById('cusmodalExportBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportCSS);

  // Setup copy button
  const copyBtn = document.getElementById('cusmodalCopyBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyFullCode);

  // Setup refresh button
  const refreshBtn = document.getElementById('cuspreviewRefresh');
  if (refreshBtn) refreshBtn.addEventListener('click', updateCustomizerPreview);

  // Setup tab switching
  const tabBtns = document.querySelectorAll('.custab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cusswitchTab(btn.dataset.tab);
    });
  });

  // Setup editor changes
  const editors = ['cushtmlEditor', 'cuscssEditor', 'cusjsEditor'];
  editors.forEach(editorId => {
    const editor = document.getElementById(editorId);
    if (editor) {
      editor.addEventListener('input', debouncedPreviewUpdate);
    }
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('cusmodalOverlay');
      if (overlay && overlay.classList.contains('open')) {
        cuscloseModal();
      }
    }
  });

  console.log('✅ Customizer initialized - with transparent background support');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initAdvancedCustomizer();
});




// ===============More BTN ===================

// let morebtnOperner1 = document.getElementById('morebtnOperner1');
// let morebtnOperner2 = document.getElementById('morebtnOperner2');
// let morebtnOverlay1 = document.getElementById('morebtnOverlay1');

// morebtnOperner1.addEventListener('click', function () {
//     morebtnOverlay1.style.display = 'flex';
// });
// morebtnCloser.addEventListener('click', function () {
//     morebtnOverlay1.style.display = 'none';
// });



const moreBtnOverlay = document.getElementById('moreBtnOverlay');
const btnGridAll = document.querySelectorAll('.moreBtnGrid');
const btnGrid1 = document.getElementById('btnGrid1');
const btnGrid2 = document.getElementById('btnGrid2');
const btnGrid3 = document.getElementById('btnGrid3');
const btnGrid4 = document.getElementById('btnGrid4');
const btnGrid5 = document.getElementById('btnGrid5');
const btnGrid6 = document.getElementById('btnGrid6');
const btnGrid7 = document.getElementById('btnGrid7');
const btnGrid8 = document.getElementById('btnGrid8');
const btnGrid9 = document.getElementById('btnGrid9');
const btnGrid10 = document.getElementById('btnGrid10');
const btnGrid11 = document.getElementById('btnGrid11');
const btnGrid12 = document.getElementById('btnGrid12');
const btnGrid13 = document.getElementById('btnGrid13');
const btnGrid14 = document.getElementById('btnGrid14');
const btnGrid15 = document.getElementById('btnGrid15');
const btnGrid16 = document.getElementById('btnGrid16');
const btnGrid17 = document.getElementById('btnGrid17');
const btnGrid18 = document.getElementById('btnGrid18');
const btnGrid19 = document.getElementById('btnGrid19');
const btnGrid20 = document.getElementById('btnGrid20');
const btnGrid21 = document.getElementById('btnGrid21');
const btnGrid22 = document.getElementById('btnGrid22');
const btnGrid23 = document.getElementById('btnGrid23');
const btnGrid24 = document.getElementById('btnGrid24');
const btnGrid25 = document.getElementById('btnGrid25');
const btnGrid26 = document.getElementById('btnGrid26');
const btnGrid27 = document.getElementById('btnGrid27');
const btnGrid28 = document.getElementById('btnGrid28');
const btnGrid29 = document.getElementById('btnGrid29');
const btnGrid30 = document.getElementById('btnGrid30');
const btnGrid31 = document.getElementById('btnGrid31');
const btnGrid32 = document.getElementById('btnGrid32');
const btnGrid33 = document.getElementById('btnGrid33');
const btnGrid34 = document.getElementById('btnGrid34');
const btnGrid35 = document.getElementById('btnGrid35');
const btnGrid36 = document.getElementById('btnGrid36');
const btnGrid37 = document.getElementById('btnGrid37');
const btnGrid38 = document.getElementById('btnGrid38');
const btnGrid39 = document.getElementById('btnGrid39');
const btnGrid40 = document.getElementById('btnGrid40');
const btnGrid41 = document.getElementById('btnGrid41');
const btnGrid42 = document.getElementById('btnGrid42');
const btnGrid43 = document.getElementById('btnGrid43');
const btnGrid44 = document.getElementById('btnGrid44');
const btnGrid45 = document.getElementById('btnGrid45');
const btnGrid46 = document.getElementById('btnGrid46');
const btnGrid47 = document.getElementById('btnGrid47');
const btnGrid48 = document.getElementById('btnGrid48');
const btnGrid49 = document.getElementById('btnGrid49');
const btnGrid50 = document.getElementById('btnGrid50');
const btnGridElse = document.getElementById('btnGridElse');
const morebtnCloser = document.getElementById('morebtnClose');

btnGridAll.forEach(btnGridAll => {
  btnGridAll.style.display = 'none';
});

function moreGridDisplayNone() {
  btnGridAll.forEach(btnGridAll => {
    btnGridAll.style.display = 'none';
  });
}

function OpenMoreBtn() {
  moreBtnOverlay.style.display = 'flex';
}

morebtnCloser.addEventListener('click', function () {
  moreBtnOverlay.style.display = 'none';
});

function morebtn_close() {
  moreBtnOverlay.style.display = 'none';
}
moreBtnOverlay.addEventListener('click', (e) => {
  if (e.target === moreBtnOverlay) morebtn_close();
});


document.addEventListener('click', (e) => {
  const btn = e.target.closest('.more-btn-opener');
  if (!btn) return;
  if (btn.dataset.id == 1) {
    moreGridDisplayNone();
    btnGrid1.style.display = 'grid';
  } else if (btn.dataset.id == 2) {
    moreGridDisplayNone();
    btnGrid2.style.display = 'grid';
  } else if (btn.dataset.id == 3) {
    moreGridDisplayNone();
    btnGrid3.style.display = 'grid';
  } else if (btn.dataset.id == 4) {
    moreGridDisplayNone();
    btnGrid4.style.display = 'grid';
  } else if (btn.dataset.id == 5) {
    moreGridDisplayNone();
    btnGrid5.style.display = 'grid';
  } else if (btn.dataset.id == 6) {
    moreGridDisplayNone();
    btnGrid6.style.display = 'grid';
  } else if (btn.dataset.id == 7) {
    moreGridDisplayNone();
    btnGrid7.style.display = 'grid';
  } else if (btn.dataset.id == 8) {
    moreGridDisplayNone();
    btnGrid8.style.display = 'grid';
  } else if (btn.dataset.id == 9) {
    moreGridDisplayNone();
    btnGrid9.style.display = 'grid';
  } else if (btn.dataset.id == 10) {
    moreGridDisplayNone();
    btnGrid10.style.display = 'grid';
  } else if (btn.dataset.id == 11) {
    moreGridDisplayNone();
    btnGrid11.style.display = 'grid';
  } else if (btn.dataset.id == 12) {
    moreGridDisplayNone();
    btnGrid12.style.display = 'grid';
  } else if (btn.dataset.id == 13) {
    moreGridDisplayNone();
    btnGrid13.style.display = 'grid';
  } else if (btn.dataset.id == 14) {
    moreGridDisplayNone();
    btnGrid14.style.display = 'grid';
  } else if (btn.dataset.id == 15) {
    moreGridDisplayNone();
    btnGrid15.style.display = 'grid';
  } else if (btn.dataset.id == 16) {
    moreGridDisplayNone();
    btnGrid16.style.display = 'grid';
  } else if (btn.dataset.id == 17) {
    moreGridDisplayNone();
    btnGrid17.style.display = 'grid';
  } else if (btn.dataset.id == 18) {
    moreGridDisplayNone();
    btnGrid18.style.display = 'grid';
  } else if (btn.dataset.id == 19) {
    moreGridDisplayNone();
    btnGrid19.style.display = 'grid';
  } else if (btn.dataset.id == 20) {
    moreGridDisplayNone();
    btnGrid20.style.display = 'grid';
  } else if (btn.dataset.id == 21) {
    moreGridDisplayNone();
    btnGrid21.style.display = 'grid';
  } else if (btn.dataset.id == 22) {
    moreGridDisplayNone();
    btnGrid22.style.display = 'grid';
  } else if (btn.dataset.id == 23) {
    moreGridDisplayNone();
    btnGrid23.style.display = 'grid';
  } else if (btn.dataset.id == 24) {
    moreGridDisplayNone();
    btnGrid24.style.display = 'grid';
  } else if (btn.dataset.id == 25) {
    moreGridDisplayNone();
    btnGrid25.style.display = 'grid';
  } else if (btn.dataset.id == 26) {
    moreGridDisplayNone();
    btnGrid26.style.display = 'grid';
  } else if (btn.dataset.id == 27) {
    moreGridDisplayNone();
    btnGrid27.style.display = 'grid';
  } else if (btn.dataset.id == 28) {
    moreGridDisplayNone();
    btnGrid28.style.display = 'grid';
  } else if (btn.dataset.id == 29) {
    moreGridDisplayNone();
    btnGrid29.style.display = 'grid';
  } else if (btn.dataset.id == 30) {
    moreGridDisplayNone();
    btnGrid30.style.display = 'grid';
  } else if (btn.dataset.id == 31) {
    moreGridDisplayNone();
    btnGrid31.style.display = 'grid';
  } else if (btn.dataset.id == 32) {
    moreGridDisplayNone();
    btnGrid32.style.display = 'grid';
  } else if (btn.dataset.id == 33) {
    moreGridDisplayNone();
    btnGrid33.style.display = 'grid';
  } else if (btn.dataset.id == 34) {
    moreGridDisplayNone();
    btnGrid34.style.display = 'grid';
  } else if (btn.dataset.id == 35) {
    moreGridDisplayNone();
    btnGrid35.style.display = 'grid';
  } else if (btn.dataset.id == 36) {
    moreGridDisplayNone();
    btnGrid36.style.display = 'grid';
  } else if (btn.dataset.id == 37) {
    moreGridDisplayNone();
    btnGrid37.style.display = 'grid';
  } else if (btn.dataset.id == 38) {
    moreGridDisplayNone();
    btnGrid38.style.display = 'grid';
  } else if (btn.dataset.id == 39) {
    moreGridDisplayNone();
    btnGrid39.style.display = 'grid';
  } else if (btn.dataset.id == 40) {
    moreGridDisplayNone();
    btnGrid40.style.display = 'grid';
  } else if (btn.dataset.id == 41) {
    moreGridDisplayNone();
    btnGrid41.style.display = 'grid';
  } else if (btn.dataset.id == 42) {
    moreGridDisplayNone();
    btnGrid42.style.display = 'grid';
  } else if (btn.dataset.id == 43) {
    moreGridDisplayNone();
    btnGrid43.style.display = 'grid';
  } else if (btn.dataset.id == 44) {
    moreGridDisplayNone();
    btnGrid44.style.display = 'grid';
  } else if (btn.dataset.id == 45) {
    moreGridDisplayNone();
    btnGrid45.style.display = 'grid';
  } else if (btn.dataset.id == 46) {
    moreGridDisplayNone();
    btnGrid46.style.display = 'grid';
  } else if (btn.dataset.id == 47) {
    moreGridDisplayNone();
    btnGrid47.style.display = 'grid';
  } else if (btn.dataset.id == 48) {
    moreGridDisplayNone();
    btnGrid48.style.display = 'grid';
  } else if (btn.dataset.id == 49) {
    moreGridDisplayNone();
    btnGrid49.style.display = 'grid';
  } else if (btn.dataset.id == 50) {
    moreGridDisplayNone();
    btnGrid50.style.display = 'grid';
  } else {
    moreGridDisplayNone();
    btnGridElse.style.display = 'grid';
  }
});

// ===============More BTN ===================

// =================Check Buttons=============


console.log('%cButtonVault 🎨 Ready!', 'color:#6c63ff;font-size:1.2rem;font-weight:700;');
console.log('%c50 premium buttons loaded ✦', 'color:#43e97b;font-size:0.9rem;');

// ===========================NOW========================
// ===========================NOW========================


const LabManager = {
  overlay: document.getElementById('checkOverlay'),
  viewport: document.getElementById('btnOverlay'),
  input: document.getElementById('checkInput'),
  previewDot: document.getElementById('colorPreview'),

  // Central function to update all background visuals
  setSurface: (value) => {
    // Update Input and Dot
    LabManager.input.value = value;
    LabManager.previewDot.style.background = value;

    // Update Viewport Background
    LabManager.viewport.style.background = value;

    // Update Iframe Internal Background (via transition)
    const frame = LabManager.viewport.querySelector('iframe');
    if (frame) {
      frame.style.background = 'transparent'; // Let the viewport handle the color
    }
  },

  open: (buttonId) => {
    const data = BUTTON_DATA[buttonId];
    if (!data) return;

    // Create the Simulation Iframe
    const iframe = document.createElement('iframe');
    iframe.style.cssText = "width:100%; height:100%; border:none; background:transparent;";

    const htmlContent = `
            <style>
                body { 
                    margin:0; min-height:100vh; display:flex; 
                    align-items:center; justify-content:center; 
                    font-family: system-ui; 
                }
                ${data.css}
            </style>
            <body>${data.html}</body>
            <script>${data.js}<\/script>
        `;

    iframe.srcdoc = htmlContent;

    LabManager.viewport.innerHTML = '';
    LabManager.viewport.appendChild(iframe);
    LabManager.overlay.style.display = 'flex';

    // Apply current surface
    LabManager.setSurface(LabManager.input.value);
  },

  close: () => {
    LabManager.overlay.style.display = 'none';
    LabManager.viewport.innerHTML = '<div class="viewport-hint">Simulation Ended</div>';
  }
};

// --- Event Listeners ---

// 1. Listen for clicks on the tokens
document.querySelectorAll('.token').forEach(btn => {
  btn.addEventListener('click', () => LabManager.setSurface(btn.dataset.value));
});

// 2. Listen for manual typing
LabManager.input.addEventListener('input', (e) => LabManager.setSurface(e.target.value));

// 3. Close actions
document.getElementById('checkClose').onclick = LabManager.close;
LabManager.overlay.onclick = (e) => { if (e.target === LabManager.overlay) LabManager.close(); };

// 4. Trigger from your grid (assuming btnGrid exists)
document.getElementById('btnGrid').addEventListener('click', (e) => {
  const trigger = e.target.closest('.check-btn-opener');
  if (trigger) LabManager.open(trigger.dataset.id);
});

// ===========================NOW========================


const LabManager = {
  overlay: document.getElementById('checkOverlay'),
  viewport: document.getElementById('btnOverlay'),
  input: document.getElementById('checkInput'),
  previewDot: document.getElementById('colorPreview'),

  // Central function to update all background visuals
  setSurface: (value) => {
    // Update Input and Dot
    LabManager.input.value = value;
    LabManager.previewDot.style.background = value;

    // Update Viewport Background
    LabManager.viewport.style.background = value;

    // Update Iframe Internal Background (via transition)
    const frame = LabManager.viewport.querySelector('iframe');
    if (frame) {
      frame.style.background = 'transparent'; // Let the viewport handle the color
    }
  },

  open: (buttonId) => {
    const data = BUTTON_DATA[buttonId];
    if (!data) return;

    // Create the Simulation Iframe
    const iframe = document.createElement('iframe');
    iframe.style.cssText = "width:100%; height:100%; border:none; background:transparent;";

    const htmlContent = `
            <style>
                body { 
                    margin:0; min-height:100vh; display:flex; 
                    align-items:center; justify-content:center; 
                    font-family: system-ui; 
                }
                ${data.css}
            </style>
            <body>${data.html}</body>
            <script>${data.js}<\/script>
        `;

    iframe.srcdoc = htmlContent;

    LabManager.viewport.innerHTML = '';
    LabManager.viewport.appendChild(iframe);
    LabManager.overlay.style.display = 'flex';

    // Apply current surface
    LabManager.setSurface(LabManager.input.value);
  },

  close: () => {
    LabManager.overlay.style.display = 'none';
    LabManager.viewport.innerHTML = '<div class="viewport-hint">Simulation Ended</div>';
  }
};

// --- Event Listeners ---

// 1. Listen for clicks on the tokens
document.querySelectorAll('.token').forEach(btn => {
  btn.addEventListener('click', () => LabManager.setSurface(btn.dataset.value));
});

// 2. Listen for manual typing
LabManager.input.addEventListener('input', (e) => LabManager.setSurface(e.target.value));

// 3. Close actions
document.getElementById('checkClose').onclick = LabManager.close;
LabManager.overlay.onclick = (e) => { if (e.target === LabManager.overlay) LabManager.close(); };

// 4. Trigger from your grid (assuming btnGrid exists)
document.getElementById('btnGrid').addEventListener('click', (e) => {
  const trigger = e.target.closest('.check-btn-opener');
  if (trigger) LabManager.open(trigger.dataset.id);
});

// ===========================NOW========================


// ── Send button code to n8n workflow ──────────────────────────
async function sendToWorkflow() {
  const HTML = document.getElementById('addhtmlCode').value.trim();
  const CSS = document.getElementById('addcssCode').value.trim();
  const JS = document.getElementById('addjsCode').value.trim();

  if (!HTML && !CSS && !JS) {
    alert('Please enter at least HTML, CSS, or JS code before sending.');
    return;
  }

  const btn = document.getElementById('sendToAIBtn');
  const panel = document.getElementById('aiResponsePanel');
  const output = document.getElementById('aiOutput');
  const statusText = document.getElementById('aiStatusText');
  const dot = document.getElementById('aiDot');
  const cards = document.getElementById('aiResponseCards');

  // Show panel
  panel.classList.add('visible');

  // Loading state
  btn.disabled = true;
  btn.textContent = '⏳ Sending...';
  output.className = 'ai-output loading';
  output.textContent = 'Sending code to n8n workflow...';
  statusText.textContent = 'Sending...';
  statusText.className = 'ai-status-text loading';
  dot.className = 'ai-dot active';
  cards.innerHTML = '';

  try {
    const res = await fetch('https://dci.app.n8n.cloud/webhook/receive-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ HTML, CSS, JS })
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);

    const data = await res.json();

    // Success
    output.className = 'ai-output has-data';
    output.textContent = JSON.stringify(data, null, 2);
    statusText.textContent = '✅ Response received';
    statusText.className = 'ai-status-text success';
    dot.className = 'ai-dot active';

    // Render cards
    if (typeof data === 'object' && !Array.isArray(data)) {
      Object.entries(data).forEach(([key, value]) => {
        const card = document.createElement('div');
        card.className = 'ai-card';
        card.innerHTML = `
          <div class="ai-card-label">${key}</div>
          <div class="ai-card-value">${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}</div>
        `;
        cards.appendChild(card);
      });
    }

  } catch (err) {
    output.className = 'ai-output has-error';
    output.textContent = `Error: ${err.message}`;
    statusText.textContent = '❌ Request failed';
    statusText.className = 'ai-status-text error';
    dot.className = 'ai-dot error';
  } finally {
    btn.disabled = false;
    btn.textContent = '⚡ Send to AI';
  }
}

// ── Close AI response panel ───────────────────────────────────
function closeAIResponse() {
  document.getElementById('aiResponsePanel').classList.remove('visible');
}
