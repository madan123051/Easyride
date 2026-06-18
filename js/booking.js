/* booking.js – Vehicle, booking, trip, rating */

function pickVeh(el, v) {
  document.querySelectorAll('.vehicle-sel').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  veh = v;

  const f = fares[v] || fares.eco;
  const price = selBranch ? Math.round(f.n * 0.9) : f.n;

  const estFare = document.getElementById('estFare');
  const bookBtn = document.getElementById('bookBtn');
  if (estFare) estFare.textContent = 'रू ' + price;
  if (bookBtn) bookBtn.textContent = 'Book ' + (vehNames[v] || v);
}

function doBook() {
  go('finding');
  setTimeout(() => {
    go('trip');
    setTimeout(() => {
      const endBtn  = document.getElementById('endBtn');
      const tripStat = document.getElementById('tripStat');
      if (endBtn)   endBtn.style.display = 'block';
      if (tripStat) tripStat.textContent = 'Driver arrived';
    }, 2000);
  }, 3500);
}

function endTrip() {
  const from = document.getElementById('pickup') ? document.getElementById('pickup').value : 'Current Location';
  const to   = document.getElementById('drop')   ? document.getElementById('drop').value   : 'Destination';
  const fare = selBranch ? Math.round((fares[veh] || fares.eco).n * 0.9) : (fares[veh] || fares.eco).n;

  const newRide = {
    id:      'R' + String(rideHistory.length + 43).padStart(3, '0'),
    type:    'ride',
    from:    from || 'Current Location',
    to:      to   || 'Destination',
    vehicle: vehNames[veh] || 'Yatri Go',
    fare:    fare,
    date:    new Date().toISOString().split('T')[0],
    time:    new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' }),
    status:  'completed',
    driver:  'Ram Rai',
    rating:  0,
  };
  rideHistory.unshift(newRide);
  userProfile.totalRides++;

  go('rating');
}

function rate(r) {
  rat = r;
  document.querySelectorAll('.star').forEach((s, i) => {
    if (i < r) {
      s.classList.remove('text-slate-300');
      s.classList.add('text-yellow-400');
    } else {
      s.classList.add('text-slate-300');
      s.classList.remove('text-yellow-400');
    }
  });
}

function addTip(a) {
  tipAmt = a;
  const inp = document.getElementById('tipInput');
  if (inp) inp.value = 'रू ' + a;
  document.querySelectorAll('.tip').forEach(t => {
    t.classList.remove('bg-red-50', 'text-red-600');
    t.classList.add('bg-slate-100', 'text-slate-600');
  });
  event.currentTarget.classList.add('bg-red-50', 'text-red-600');
  event.currentTarget.classList.remove('bg-slate-100', 'text-slate-600');
}

function subRating() {
  const fare = (fares[veh] || fares.eco).n;
  walletBal = Math.max(0, walletBal - fare);
  userProfile.loyaltyPoints += Math.floor(fare / 10);

  if (rideHistory.length > 0) rideHistory[0].rating = rat;

  showModal('Thank You! 🙏', 'Your feedback helps us improve. Loyalty points added!');
  setTimeout(() => {
    closeModal();
    go('home');
  }, 1800);
}

function showSOS() {
  showModal('SOS Sent! 🚨', 'Emergency contact and local authority notified. Stay safe!');
}
