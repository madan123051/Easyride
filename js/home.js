/* home.js – Home page: Service selection */

function pickSvc(s) {
  svc = s;

  document.querySelectorAll('.svc-btn').forEach(b => {
    b.classList.remove('border-red-200', 'bg-red-50');
    b.classList.add('border-transparent', 'bg-slate-50');
  });

  const el = document.querySelector(`.svc-btn[data-svc="${s}"]`);
  if (el) {
    el.classList.add('border-red-200', 'bg-red-50');
    el.classList.remove('border-transparent', 'bg-slate-50');
  }

  if (s === 'delivery') {
    go('delivery');
    return;
  }

  const labels = {
    ride: 'Find Ride',
    bike: 'Find Bike',
    food: 'Order Food',
  };
  const btn = document.querySelector('#home .btn-primary');
  if (btn) btn.textContent = labels[s] || 'Find Ride';
}
