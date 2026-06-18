/* profile.js – User Profile, edit, history, wallet, settings */

function renderProfile() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set('profileAvatar',  userProfile.avatar);
  set('profileName',    userProfile.name);
  set('profilePhone',   '+977 ' + userProfile.phone);
  set('profileRating',  userProfile.rating);
  set('profileSince',   'Member since ' + userProfile.joinDate);
  set('profileLevel',   '🥇 ' + userProfile.level);
  set('profilePoints',  userProfile.loyaltyPoints.toLocaleString() + ' pts');
  set('statRides',      userProfile.totalRides);
  set('statDist',       userProfile.totalDist);
  set('statSaved',      'रू ' + userProfile.savedAmount);

  const editAv = document.getElementById('editAvatar');
  if (editAv) editAv.textContent = userProfile.avatar;

  updateSidebarUser();
}

function prefillEditProfile() {
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  setVal('epName',  userProfile.name);
  setVal('epEmail', userProfile.email);
  setVal('epPhone', userProfile.phone);
  setVal('epDob',   userProfile.dob);

  const sc = document.getElementById('epCity');
  if (sc) {
    for (let i = 0; i < sc.options.length; i++) {
      if (sc.options[i].text === userProfile.city) { sc.selectedIndex = i; break; }
    }
  }

  selectedGender = userProfile.gender;
  document.querySelectorAll('.gender').forEach(btn => {
    const g = btn.textContent.trim().split(' ').pop();
    if (g === userProfile.gender) {
      btn.classList.add('border-red-200', 'bg-red-50');
      btn.classList.remove('border-transparent', 'bg-slate-100');
    } else {
      btn.classList.remove('border-red-200', 'bg-red-50');
      btn.classList.add('border-transparent', 'bg-slate-100');
    }
  });
}

const _origGo = window.go;
window.go = function(id) {
  _origGo(id);
  if (id === 'editProfile') prefillEditProfile();
};

function pickGender(el, g) {
  selectedGender = g;
  document.querySelectorAll('.gender').forEach(b => {
    b.classList.remove('border-red-200', 'bg-red-50');
    b.classList.add('border-transparent', 'bg-slate-100');
  });
  el.classList.add('border-red-200', 'bg-red-50');
  el.classList.remove('border-transparent', 'bg-slate-100');
}

function saveProfile() {
  const name   = (document.getElementById('epName')  || {}).value || userProfile.name;
  const email  = (document.getElementById('epEmail') || {}).value || userProfile.email;
  const phone  = (document.getElementById('epPhone') || {}).value || userProfile.phone;
  const city   = ((document.getElementById('epCity')  || {}).value) || userProfile.city;
  const dob    = (document.getElementById('epDob')   || {}).value || userProfile.dob;

  if (!name.trim()) { alert('Name cannot be empty.'); return; }

  userProfile.name   = name.trim();
  userProfile.email  = email.trim();
  userProfile.phone  = phone.trim();
  userProfile.city   = city;
  userProfile.dob    = dob;
  userProfile.gender = selectedGender;
  userProfile.avatar = name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  showModal('Profile Updated ✅', 'Your changes have been saved successfully.');
  setTimeout(() => { closeModal(); goBack(); }, 1500);
}

function renderRideHistory(filter) {
  const list = document.getElementById('historyList');
  if (!list) return;

  const items = filter === 'all' ? rideHistory : rideHistory.filter(r => r.type === filter);

  if (items.length === 0) {
    list.innerHTML = `<div class="text-center py-12">
      <i class="fa-solid fa-clock-rotate-left text-4xl text-slate-300 block mb-3"></i>
      <p class="text-slate-500">No history yet</p>
    </div>`;
    return;
  }

  const statusBadge = { completed:'badge-green', cancelled:'badge-red', ongoing:'badge-blue' };
  const typeIcon    = { ride:'fa-car', delivery:'fa-box' };

  list.innerHTML = items.map(r => `
    <div class="bg-white rounded-2xl border border-slate-100 p-4 sh-sm">
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 ${r.type === 'ride' ? 'bg-red-50' : 'bg-blue-50'} rounded-xl flex items-center justify-center flex-shrink-0">
          <i class="fa-solid ${typeIcon[r.type] || 'fa-car'} ${r.type === 'ride' ? 'text-red-600' : 'text-blue-600'}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1">
            <p class="font-semibold text-slate-800 text-sm">${r.from} → ${r.to}</p>
            <span class="badge ${statusBadge[r.status] || 'badge-blue'} text-[10px]">${r.status}</span>
          </div>
          <p class="text-xs text-slate-500 mb-1">${r.vehicle} • ${r.date}</p>
          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-slate-800">रू ${r.fare}</span>
            <div class="flex items-center gap-1">
              ${r.rating > 0 ? `<i class="fa-solid fa-star text-yellow-400 text-xs"></i><span class="text-xs">${r.rating}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterHistory(f) {
  document.querySelectorAll('.hist-filter').forEach(b => {
    if (b.dataset.hf === f) {
      b.classList.add('bg-red-600', 'text-white');
      b.classList.remove('bg-slate-100', 'text-slate-600');
    } else {
      b.classList.remove('bg-red-600', 'text-white');
      b.classList.add('bg-slate-100', 'text-slate-600');
    }
  });
  renderRideHistory(f);
}

function renderWallet() {
  const bal = document.getElementById('walletBalance');
  if (bal) bal.textContent = 'रू ' + walletBal.toLocaleString();

  const list = document.getElementById('transactionList');
  if (!list) return;

  list.innerHTML = walletTxns.map(t => `
    <div class="flex items-center gap-3 py-3 border-b border-slate-50">
      <div class="w-10 h-10 ${t.type === 'credit' ? 'bg-green-50' : 'bg-red-50'} rounded-xl flex items-center justify-center flex-shrink-0">
        <i class="fa-solid ${t.type === 'credit' ? 'fa-arrow-down text-green-600' : 'fa-arrow-up text-red-500'}"></i>
      </div>
      <div class="flex-1">
        <p class="text-sm font-medium text-slate-800">${t.desc}</p>
        <p class="text-xs text-slate-400">${t.date}</p>
      </div>
      <p class="text-sm font-bold ${t.type === 'credit' ? 'text-green-600' : 'text-red-500'}">
        ${t.type === 'credit' ? '+' : '-'}रू ${t.amount}
      </p>
    </div>
  `).join('');
}

function addMoney(amount) {
  walletBal += amount;
  walletTxns.unshift({
    id: 'T' + (walletTxns.length + 1), type: 'credit', desc: 'Added to wallet', amount,
    date: new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }),
  });
  renderWallet();
  showModal('Money Added! 💸', 'रू ' + amount + ' added to your Yatri Wallet.');
  setTimeout(closeModal, 1500);
}

function addMoneyCustom() {
  const inp = document.getElementById('customAmt');
  const amt = parseInt(inp ? inp.value : 0, 10);
  if (!amt || amt < 10) { alert('Enter a valid amount (min रू 10).'); return; }
  if (inp) inp.value = '';
  addMoney(amt);
}

function loadSettings() {
  const labels = { en:'English', ne:'नेपाली', hi:'हिन्दी', new:'नेपाल भाषा' };
  const lbl = document.getElementById('currentLangLabel');
  if (lbl) lbl.textContent = labels[lang] || 'English';
}

function toggleNotif(type, checkbox) {
  console.log('Notification', type, checkbox.checked ? 'ON' : 'OFF');
}

function toggle2FA(checkbox) {
  showModal(
    checkbox.checked ? '2FA Enabled 🔐' : '2FA Disabled',
    checkbox.checked ? 'Your account is now more secure.' : 'Two-factor auth turned off.'
  );
  setTimeout(closeModal, 1600);
}

function doChangePassword() {
  const curr = (document.getElementById('pwCurrent') || {}).value;
  const nw   = (document.getElementById('pwNew')     || {}).value;
  const conf = (document.getElementById('pwConfirm') || {}).value;

  if (!curr) { alert('Enter your current password.'); return; }
  if (nw.length < 8) { alert('New password must be at least 8 characters.'); return; }
  if (nw !== conf)   { alert('New passwords do not match.'); return; }

  showModal('Password Updated! 🔒', 'Your password has been changed successfully.');
  setTimeout(() => { closeModal(); goBack(); }, 1600);
}

document.addEventListener('input', function (e) {
  if (e.target.id !== 'pwNew') return;
  const val  = e.target.value;
  const wrap = document.getElementById('pwStrengthWrap');
  const lbl  = document.getElementById('pwStrengthLabel');
  if (!wrap) return;

  wrap.classList.remove('hidden');
  const score = [/.{8,}/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/].filter(r => r.test(val)).length;

  const colors  = ['bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500'];
  const textMap  = ['Too Weak', 'Weak', 'Good', 'Strong'];

  for (let i = 1; i <= 4; i++) {
    const bar = document.getElementById('ps' + i);
    if (bar) bar.className = 'h-1.5 flex-1 rounded-full ' + (i <= score ? colors[score - 1] : 'bg-slate-200');
  }
  if (lbl) {
    lbl.textContent = val ? (textMap[score - 1] || 'Too Weak') : '';
    lbl.className   = 'text-xs ' + (['text-red-500','text-orange-500','text-yellow-600','text-green-600'][score-1] || 'text-slate-400');
  }
});

function confirmDelete() {
  if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
    showModal('Account Deleted', 'Your account has been removed. Goodbye! 🙏');
    setTimeout(() => { closeModal(); doLogout(); }, 2000);
  }
}
