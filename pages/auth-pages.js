/* auth-pages.js – Splash, Language, Login, Signup, OTP pages */
// HTML injector for authentication flows
document.getElementById('pagesContainer').innerHTML += `
<div id="splash" class="page active bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
  <div class="text-center text-white"><i class="fa-solid fa-car text-6xl mb-4 block"></i>
    <h1 class="text-4xl font-bold mb-2">यात्री</h1><p class="text-lg opacity-90">Nepal's #1 Ride & Delivery</p></div>
</div>
<div id="lang" class="page px-4 py-12"><h2 class="text-2xl font-bold mb-6">Choose Language</h2>
  <button onclick="setLang('en')" class="w-full btn-primary mb-3">🇬🇧 English</button>
  <button onclick="setLang('ne')" class="w-full btn-primary mb-3">🇳🇵 नेपाली</button>
  <button onclick="setLang('hi')" class="w-full btn-primary mb-3">🇮🇳 हिन्दी</button>
  <button onclick="setLang('new')" class="w-full btn-primary">नेपाल भाषा</button>
</div>
<div id="login" class="page p-4"><div class="mt-20">
  <h2 class="text-2xl font-bold mb-6">Login</h2>
  <input id="ph" type="tel" placeholder="Phone Number" class="input mb-4">
  <button onclick="doLogin()" class="btn-primary mb-3">Send OTP</button>
  <p class="text-center text-slate-500 text-sm">Don't have account? <a onclick="go('signup')" class="text-red-600 font-bold cursor-pointer">Sign Up</a></p>
</div></div>
<div id="signup" class="page p-4"><div class="mt-16">
  <h2 class="text-2xl font-bold mb-6">Sign Up</h2>
  <input id="sn" type="text" placeholder="Full Name" class="input mb-4">
  <input id="sp" type="tel" placeholder="Phone Number" class="input mb-4">
  <button onclick="doSignup()" class="btn-primary mb-3">Send OTP</button>
  <p class="text-center text-slate-500 text-sm">Already have account? <a onclick="go('login')" class="text-red-600 font-bold cursor-pointer">Login</a></p>
</div></div>
<div id="otp" class="page p-4"><div class="mt-20">
  <h2 class="text-2xl font-bold mb-2">Verify OTP</h2>
  <p class="text-slate-500 mb-6">Enter code sent to <span id="otpPh">+977 9841234567</span></p>
  <div class="flex gap-2 mb-6 justify-center">
    <input class="otp w-12 h-12 text-center text-2xl border-2 rounded" oninput="otpNext(this)" onkeydown="otpBack(event, this)" maxlength="1">
    <input class="otp w-12 h-12 text-center text-2xl border-2 rounded" oninput="otpNext(this)" onkeydown="otpBack(event, this)" maxlength="1">
    <input class="otp w-12 h-12 text-center text-2xl border-2 rounded" oninput="otpNext(this)" onkeydown="otpBack(event, this)" maxlength="1">
    <input class="otp w-12 h-12 text-center text-2xl border-2 rounded" oninput="otpNext(this)" onkeydown="otpBack(event, this)" maxlength="1">
  </div>
  <button onclick="doOTP()" class="btn-primary">Verify & Continue</button>
</div></div>
`;
