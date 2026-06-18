/* delivery.js – Package delivery */

function pickPkg(el) {
  document.querySelectorAll('.pkg').forEach(p => {
    p.classList.remove('bg-red-50', 'border-red-200');
    p.classList.add('bg-slate-100', 'border-transparent');
  });
  el.classList.add('bg-red-50', 'border-red-200');
  el.classList.remove('bg-slate-100', 'border-transparent');

  const costs = { Small: 150, Medium: 220, Large: 350 };
  const label = el.querySelector('p').textContent.trim();
  const costEl = document.querySelector('#delivery .text-xl.font-bold');
  if (costEl && costs[label]) costEl.textContent = 'रू ' + costs[label];
}

function pickSpeed(el) {
  el.parentElement.querySelectorAll(':scope > button').forEach(b => {
    b.classList.remove('bg-red-50', 'border-red-200');
    b.classList.add('bg-slate-100', 'border-transparent');
  });
  el.classList.add('bg-red-50', 'border-red-200');
  el.classList.remove('bg-slate-100', 'border-transparent');
}

function doDelivery() {
  const newDel = {
    id:      'D' + String(rideHistory.filter(r => r.type === 'delivery').length + 9).padStart(3, '0'),
    type:    'delivery',
    from:    'Thamel',
    to:      'Destination',
    vehicle: 'Yatri Bike',
    fare:    180,
    date:    new Date().toISOString().split('T')[0],
    time:    new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' }),
    status:  'completed',
    driver:  'Suresh Khadka',
    rating:  0,
  };
  rideHistory.unshift(newDel);

  showModal('Delivery Booked! 📦', 'Your rider will pick up the package shortly.');
  setTimeout(() => {
    closeModal();
    go('delTrack');
  }, 1200);
}
