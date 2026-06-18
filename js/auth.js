/* auth.js – Language, Login, Signup, OTP */

function setLang(l) {
  lang = l;
  document.querySelectorAll('#lang button').forEach(b => {
    b.classList.remove('border-red-200', 'bg-red-50');
    b.classList.add('border-transparent');
  });
  event.currentTarget.classList.add('border-red-200', 'bg-red-50');
  event.currentTarget.classList.remove('border-transparent');

  const labels = { en: 'English', ne: 'नेपाली', hi: 'हिन्दी', new: 'नेपाल भाषा' };
  const lbl = document.getElementById('currentLangLabel');
  if (lbl) lbl.textContent = labels[l] || 'English';

  // Navigate to login after short delay so user sees selection
  setTimeout(() => go('login'), 350);
}

function doLogin() {
  const p = document.getElementById('ph').value.trim();
  if (!p) {
    alert('Please enter your phone number.');
    return;
  }
  document.getElementById('otpPh').textContent = '+977 ' + p;
  go('otp');
}

function togPw() {
  const i  = document.getElementById('pw');
  const ic = document.getElementById('pwIcon');
  if (i.type === 'password') {
    i.type = 'text';
    ic.className = 'fa-solid fa-eye-slash';
  } else {
    i.type = 'password';
    ic.className = 'fa-solid fa-eye';
  }
}

function doSignup() {
  const n = document.getElementById('sn').value.trim();
  const p = document.getElementById('sp').value.trim();
  if (!n || !p) {
    alert('Please fill in Name and Phone number.');
    return;
  }
  userProfile.name  = n;
  userProfile.phone = p;
  userProfile.avatar = n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  document.getElementById('otpPh').textContent = '+977 ' + p;
  go('otp');
}

function togPw2() {
  const i  = document.getElementById('spw');
  const ic = document.getElementById('pwIcon2');
  if (i.type === 'password') {
    i.type = 'text';
    ic.className = 'fa-solid fa-eye-slash';
  } else {
    i.type = 'password';
    ic.className = 'fa-solid fa-eye';
  }
}

function otpNext(el) {
  if (el.value) {
    const nxt = el.nextElementSibling;
    if (nxt && nxt.classList.contains('otp')) nxt.focus();
  }
}

function otpBack(e, el) {
  if (e.key === 'Backspace' && !el.value) {
    const prev = el.previousElementSibling;
    if (prev && prev.classList.contains('otp')) prev.focus();
  }
}

function doOTP() {
  go('home');
  document.getElementById('bnav').classList.remove('hidden');
  updateSidebarUser();
}

function togPwField(inputId, iconId) {
  const i  = document.getElementById(inputId);
  const ic = document.getElementById(iconId);
  if (!i || !ic) return;
  if (i.type === 'password') {
    i.type = 'text';
    ic.className = 'fa-solid fa-eye-slash';
  } else {
    i.type = 'password';
    ic.className = 'fa-solid fa-eye';
  }
}
