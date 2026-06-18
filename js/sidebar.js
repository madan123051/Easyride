/* sidebar.js – Sidebar menu & logout */

function toggleMenu() {
  menu = !menu;
  const overlay = document.getElementById('sbOverlay');
  const content = document.getElementById('sbContent');
  if (overlay) overlay.style.opacity = menu ? '1' : '0';
  if (content) content.style.transform = menu ? 'translateX(0)' : 'translateX(-100%)';
  const sb = document.getElementById('sidebar');
  if (sb) sb.style.pointerEvents = menu ? 'auto' : 'none';
}

function updateSidebarUser() {
  const avatarEl = document.getElementById('sbAvatar');
  const nameEl   = document.getElementById('sbName');
  const ratingEl = document.getElementById('sbRating');
  const ridesEl  = document.getElementById('sbRides');
  const savedEl  = document.getElementById('sbSaved');

  if (avatarEl) avatarEl.textContent  = userProfile.avatar;
  if (nameEl)   nameEl.textContent    = userProfile.name;
  if (ratingEl) ratingEl.textContent  = '⭐ ' + userProfile.rating;
  if (ridesEl)  ridesEl.textContent   = userProfile.totalRides;
  if (savedEl)  savedEl.textContent   = 'रू ' + userProfile.savedAmount;
}

function doLogout() {
  menu = false;
  const sb = document.getElementById('sidebar');
  if (sb) sb.style.pointerEvents = 'none';
  const overlay = document.getElementById('sbOverlay');
  const content = document.getElementById('sbContent');
  if (overlay) overlay.style.opacity  = '0';
  if (content) content.style.transform = 'translateX(-100%)';

  document.getElementById('bnav').classList.add('hidden');
  hist = ['splash'];
  go('login');
}
