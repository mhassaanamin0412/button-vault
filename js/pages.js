/**
 * ButtonVault — Shared Pages JS
 * pages.js
 */

/* ─── Header ──────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');
const header    = document.getElementById('header');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

document.addEventListener('click', (e) => {
  if (nav && !e.target.closest('.header-inner') && nav.classList.contains('open')) {
    nav.classList.remove('open');
    hamburger && hamburger.classList.remove('open');
  }
});

window.addEventListener('scroll', () => {
  if (header) header.style.boxShadow = window.scrollY > 10
    ? '0 2px 40px rgba(0,0,0,0.6)' : '0 1px 40px rgba(0,0,0,0.4)';
});

/* ─── Stagger card animations ────────────────────────── */
document.querySelectorAll('.cat-card, .stack-card, .step-card').forEach((el, i) => {
  el.style.animationDelay = (i * 0.06) + 's';
});

/* ─── FAQ Accordion (contact page) ─────────────────── */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = btn.classList.contains('open');

    // close all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.classList.remove('open');
      b.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
    });

    // open clicked if was closed
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

/* ─── Contact Form Validation ───────────────────────── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const resetFormBtn= document.getElementById('resetForm');
const submitBtn   = document.getElementById('submitBtn');
const submitLabel = document.getElementById('submitLabel');
const submitSpinner=document.getElementById('submitSpinner');
const messageTA   = document.getElementById('message');
const charCount   = document.getElementById('charCount');

if (messageTA && charCount) {
  messageTA.addEventListener('input', () => {
    const len = messageTA.value.length;
    charCount.textContent = len;
    if (len > 500) messageTA.value = messageTA.value.slice(0, 500);
    charCount.textContent = Math.min(len, 500);
  });
}

function validateField(id, errId, test) {
  const el  = document.getElementById(id);
  const err = document.getElementById(errId);
  if (!el) return true;
  const valid = test(el.value.trim());
  el.closest('.form-group').classList.toggle('error', !valid);
  return valid;
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const v1 = validateField('fname',   'fnameErr', v => v.length > 0);
    const v2 = validateField('lname',   'lnameErr', v => v.length > 0);
    const v3 = validateField('email',   'emailErr', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const v4 = validateField('message', 'msgErr',   v => v.length >= 10);

    if (!v1 || !v2 || !v3 || !v4) return;

    // Simulate send
    submitBtn.disabled = true;
    if (submitLabel)  submitLabel.style.display  = 'none';
    if (submitSpinner)submitSpinner.style.display = 'inline';

    setTimeout(() => {
      contactForm.style.display  = 'none';
      if (formSuccess) formSuccess.style.display = 'flex';
    }, 1600);
  });
}

if (resetFormBtn) {
  resetFormBtn.addEventListener('click', () => {
    if (contactForm) {
      contactForm.reset();
      contactForm.style.display = 'flex';
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel)   submitLabel.style.display  = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
      if (charCount) charCount.textContent = '0';
    }
    if (formSuccess) formSuccess.style.display = 'none';
  });
}

/* ─── Flip card on click (about page) ──────────────── */
const rcInner = document.querySelector('.rc-inner');
if (rcInner) {
  rcInner.parentElement.addEventListener('click', () => {
    rcInner.style.animation = 'none';
    const cur = rcInner.style.transform;
    rcInner.style.transform = cur === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
}

console.log('%cButtonVault Pages Ready ⬡', 'color:#6c63ff;font-weight:700;font-size:1rem;');
```

---

// ## Final file structure
// ```
// your-project/
// ├── index.html       ← Gallery (from previous session)
// ├── style.css        ← Gallery styles
// ├── script.js        ← Gallery JS
// ├── categories.html  ← ✅ new
// ├── about.html       ← ✅ new
// ├── contact.html     ← ✅ new
// ├── pages.css        ← ✅ shared styles for new pages
// └── pages.js         ← ✅ shared JS for new pages