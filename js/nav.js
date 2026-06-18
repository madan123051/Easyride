/* nav.js – Global state & Navigation */

let hist          = ['splash'];
let cur           = 'splash';
let svc           = 'ride';
let veh           = 'eco';
let rat           = 0;
let tipAmt        = 0;
let selBranch     = null;
let menu          = false;
let lang          = 'en';
let provinceFilter = 'all';
let selectedGender = 'Male';
let walletBal     = userProfile.walletBalance;

function go(id) {
  const prev = document.getElementById(cur);
  if (prev) {
    prev.classList.remove('active');
    prev.classList.add('exit');
    setTimeout(() => prev.classList.remove('exit'), 400);
  }

  setTimeout(() => {
    const next = document.getElementById(id);
    if (!next) { console.warn('Page not found:', id); return; }
    next.classList.add('active');
    cur = id;
    hist.push(id);

    const bn = document.getElementById('bnav');
    if (['home', 'profile', 'rideHistory', 'delivery'].includes(id)) {
      bn.classList.remove('hidden');
    } else {
      bn.classList.add('hidden');
    }

    updateNavHighlight(id);

    if (id === 'profile')       renderProfile();
    if (id === 'rideHistory')   renderRideHistory('all');
    if (id === 'wallet')        renderWallet();
    if (id === 'branchSel')     renderBranches();
    if (id === 'profileSettings') loadSettings();
  }, 50);
}

function goBack() {
  if (hist.length > 1) {
    hist.pop();
    go(hist[hist.length - 1]);
  }
}

function navTab(t) {
  document.querySelectorAll('.nt').forEach(b => {
    b.classList.remove('text-red-600');
    b.classList.add('text-slate-400');
  });
  event.currentTarget.classList.add('text-red-600');
  event.currentTarget.classList.remove('text-slate-400');

  if (t === 'home')     go('home');
  if (t === 'rides')    go('rideHistory');
  if (t === 'del')      go('delivery');
  if (t === 'acc')      go('profile');
}

function updateNavHighlight(pageId) {
  const map = { home:'home', rideHistory:'rides', delivery:'del', profile:'acc' };
  const tab = map[pageId];
  if (!tab) return;
  document.querySelectorAll('.nt').forEach(b => {
    if (b.dataset.t === tab) {
      b.classList.add('text-red-600'); b.classList.remove('text-slate-400');
    } else {
      b.classList.remove('text-red-600'); b.classList.add('text-slate-400');
    }
  });
}

function showModal(title, msg) {
  document.getElementById('mTitle').textContent = title;
  document.getElementById('mMsg').textContent   = msg;
  const el = document.getElementById('modal');
  el.classList.remove('hidden');
  el.classList.add('flex');
}

function closeModal() {
  const el = document.getElementById('modal');
  el.classList.add('hidden');
  el.classList.remove('flex');
}

const modal = showModal;

setTimeout(() => go('lang'), 2000);
