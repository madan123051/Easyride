/* branches.js – Branch list, filter, detail */

const provNames = {
  koshi: 'Koshi Province', madhesh: 'Madhesh Province', bagmati: 'Bagmati Province',
  gandaki: 'Gandaki Province', lumbini: 'Lumbini Province', karnali: 'Karnali Province',
  sudurpaschim: 'Sudurpaschim Province',
};

const svcIcons = {
  ride:     { i:'fa-car',      c:'red',   l:'Ride' },
  bike:     { i:'fa-motorcycle', c:'blue',  l:'Bike' },
  delivery: { i:'fa-box',      c:'amber', l:'Delivery' },
  food:     { i:'fa-utensils', c:'pink',  l:'Food' },
};

function renderBranches() {
  const list   = document.getElementById('branchList');
  if (!list) return;

  const search = (document.getElementById('branchSearch') || {}).value || '';
  const q      = search.toLowerCase();

  const filtered = branches.filter(b => {
    const matchProv   = provinceFilter === 'all' || b.prov === provinceFilter;
    const matchSearch = !q || b.name.toLowerCase().includes(q) || b.city.toLowerCase().includes(q);
    return matchProv && matchSearch;
  });

  if (filtered.length === 0) {
    list.innerHTML = `<div class="text-center py-12">
      <i class="fa-solid fa-building text-4xl text-slate-300 mb-3 block"></i>
      <p class="text-slate-500">No branches found</p>
    </div>`;
    return;
  }

  const grouped = {};
  filtered.forEach(b => {
    if (!grouped[b.prov]) grouped[b.prov] = [];
    grouped[b.prov].push(b);
  });

  let html = '';
  for (const [prov, items] of Object.entries(grouped)) {
    html += `<div class="mb-4">
      <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
        <span class="badge badge-blue">${provNames[prov] || prov}</span>
        <span class="text-xs font-normal text-slate-400">${items.length}</span>
      </h3>`;

    items.forEach(b => {
      const svcColor = b.services.length >= 4 ? 'badge-green' : b.services.length >= 3 ? 'badge-blue' : 'badge-orange';
      html += `
      <div class="branch-card mb-3 p-4" onclick="openBranch('${b.id}')">
        <div class="flex items-start gap-3">
          <div class="w-12 h-12 bg-gradient-to-br from-red-100 to-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-building text-red-600"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <p class="font-semibold text-slate-800 truncate">${b.name}</p>
              <span class="badge ${b.status === 'Open' ? 'badge-green' : 'badge-red'}">${b.status}</span>
            </div>
            <p class="text-xs text-slate-500 mb-1"><i class="fa-solid fa-location-dot mr-1"></i>${b.addr}</p>
            <div class="flex items-center gap-3 text-xs text-slate-400">
              <span>⭐ ${b.rating}</span>
              <span>🚗 ${b.drivers}</span>
              <span class="badge ${svcColor}">${b.services.length} svc</span>
            </div>
          </div>
        </div>
      </div>`;
    });

    html += '</div>';
  }

  list.innerHTML = html;
}

function filterBranches() { renderBranches(); }

function filterByProvince(p) {
  provinceFilter = p;
  document.querySelectorAll('.branch-filter').forEach(f => {
    if (f.dataset.filter === p) {
      f.classList.add('badge-red');
      f.classList.remove('bg-slate-100', 'text-slate-600');
    } else {
      f.classList.remove('badge-red');
      f.classList.add('bg-slate-100', 'text-slate-600');
    }
  });
  renderBranches();
}

function openBranch(id) {
  const b = branches.find(x => x.id === id);
  if (!b) return;
  selBranch = b;

  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.textContent = val; };
  set('bdTitle',    b.name);
  set('bdSubtitle', b.addr);
  set('bdStatus',   b.status);
  set('bdRating',   b.rating);
  set('bdAddr',     b.addr);
  set('bdPhone',    b.phone);
  set('bdHours',    b.hours);
  set('bdManager',  b.mgr);
  set('bdDrivers',  b.drivers.toLocaleString());
  set('bdResponse', b.resp);

  const bar = document.getElementById('bdDriverBar');
  if (bar) bar.style.width = Math.min(100, Math.round((b.drivers / 1240) * 100)) + '%';

  const badge = document.getElementById('bdStatus');
  if (badge) {
    badge.className = 'badge ' + (b.status === 'Open' ? 'badge-green' : 'badge-red');
  }

  const svcDiv = document.getElementById('bdServices');
  if (svcDiv) {
    svcDiv.innerHTML = b.services.map(s => {
      const ic = svcIcons[s];
      return `<div class="text-center p-3 bg-${ic.c}-50 rounded-xl">
        <i class="fa-solid ${ic.i} text-${ic.c}-600 text-xl mb-1 block"></i>
        <p class="text-xs">${ic.l}</p>
      </div>`;
    }).join('');
  }

  go('branchDetail');
}

function selectThisBranch() {
  if (!selBranch) return;
  const nameEl = document.getElementById('homeBranchName');
  if (nameEl) nameEl.textContent = selBranch.city;

  ['bike','eco','prem','auto'].forEach(v => {
    const el = document.getElementById('f' + v.charAt(0).toUpperCase() + v.slice(1));
    if (el) el.textContent = 'रू ' + (fares[v] || fares.eco).n;
  });

  go('home');
}

function callBranch() {
  if (selBranch) showModal('Calling Branch 📞', 'Dialing ' + selBranch.phone);
}
