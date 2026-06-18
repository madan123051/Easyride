/* profile-pages.js – User Profile, Edit, History, Wallet, Settings pages */
document.getElementById('pagesContainer').innerHTML += `
<div id="profile" class="page p-4"><div class="flex items-center justify-between mb-4">
  <h2 class="text-2xl font-bold">My Profile</h2>
  <button onclick="toggleMenu()"><i class="fa-solid fa-bars text-2xl"></i></button>
</div>
  <div class="card mb-4 text-center">
    <div class="w-20 h-20 bg-gradient-to-br from-red-100 to-amber-100 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl font-bold" id="profileAvatar">RP</div>
    <h3 id="profileName" class="text-2xl font-bold">Ram Prasad</h3>
    <p id="profilePhone" class="text-slate-500">+977 9841234567</p>
    <div class="flex gap-2 justify-center mt-2">
      <span id="profileRating" class="badge badge-blue">⭐ 4.7</span>
      <span id="profileLevel" class="badge badge-green">🥇 Gold</span>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-3 mb-4">
    <div class="card text-center"><p class="text-2xl font-bold" id="statRides">42</p><p class="text-xs text-slate-500">Rides</p></div>
    <div class="card text-center"><p class="text-2xl font-bold" id="statDist">380 km</p><p class="text-xs text-slate-500">Distance</p></div>
    <div class="card text-center"><p class="text-2xl font-bold" id="statSaved">रू 850</p><p class="text-xs text-slate-500">Saved</p></div>
  </div>
  <div class="space-y-2 mb-4">
    <button onclick="go('editProfile')" class="w-full py-3 bg-slate-100 rounded font-bold">✏️ Edit Profile</button>
    <button onclick="go('rideHistory')" class="w-full py-3 bg-slate-100 rounded font-bold">📋 Ride History</button>
    <button onclick="go('wallet')" class="w-full py-3 bg-slate-100 rounded font-bold">💰 Wallet</button>
    <button onclick="go('profileSettings')" class="w-full py-3 bg-slate-100 rounded font-bold">⚙️ Settings</button>
  </div>
</div>
<div id="editProfile" class="page p-4"><button onclick="goBack()" class="text-red-600 mb-4"><i class="fa-solid fa-chevron-left"></i> Back</button>
  <h2 class="text-2xl font-bold mb-4">Edit Profile</h2>
  <div class="text-center mb-4">
    <div class="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center text-2xl font-bold" id="editAvatar">RP</div>
  </div>
  <div class="form-group">
    <label>Full Name</label>
    <input id="epName" type="text" class="input">
  </div>
  <div class="form-group">
    <label>Email</label>
    <input id="epEmail" type="email" class="input">
  </div>
  <div class="form-group">
    <label>Phone</label>
    <input id="epPhone" type="tel" class="input">
  </div>
  <div class="form-group">
    <label>City</label>
    <select id="epCity" class="input">
      <option>Kathmandu</option><option>Pokhara</option><option>Biratnagar</option>
    </select>
  </div>
  <div class="form-group">
    <label>Date of Birth</label>
    <input id="epDob" type="date" class="input">
  </div>
  <div class="form-group">
    <label>Gender</label>
    <div class="flex gap-2">
      <button class="gender flex-1" onclick="pickGender(this, 'Male')">👨 Male</button>
      <button class="gender flex-1" onclick="pickGender(this, 'Female')">👩 Female</button>
      <button class="gender flex-1" onclick="pickGender(this, 'Other')">🧑 Other</button>
    </div>
  </div>
  <button onclick="saveProfile()" class="btn-primary">Save Changes</button>
</div>
<div id="rideHistory" class="page p-4"><h2 class="text-2xl font-bold mb-4">Ride History</h2>
  <div class="flex gap-2 mb-4">
    <button class="hist-filter" data-hf="all" onclick="filterHistory('all')">All</button>
    <button class="hist-filter" data-hf="ride" onclick="filterHistory('ride')">Rides</button>
    <button class="hist-filter" data-hf="delivery" onclick="filterHistory('delivery')">Delivery</button>
  </div>
  <div id="historyList"></div>
</div>
<div id="wallet" class="page p-4"><h2 class="text-2xl font-bold mb-4">My Wallet</h2>
  <div class="card mb-4 bg-gradient-to-br from-red-600 to-amber-500 text-white">
    <p class="text-sm opacity-80">Wallet Balance</p>
    <p id="walletBalance" class="text-4xl font-bold">रू 1500</p>
  </div>
  <div class="grid grid-cols-3 gap-2 mb-4">
    <button onclick="addMoney(500)" class="py-2 bg-slate-100 rounded text-xs font-bold">+रू 500</button>
    <button onclick="addMoney(1000)" class="py-2 bg-slate-100 rounded text-xs font-bold">+रू 1000</button>
    <button onclick="addMoney(2000)" class="py-2 bg-slate-100 rounded text-xs font-bold">+रू 2000</button>
  </div>
  <div class="form-group mb-4">
    <input id="customAmt" type="number" placeholder="Custom amount" class="input" min="10">
    <button onclick="addMoneyCustom()" class="btn-primary mt-2">Add Custom Amount</button>
  </div>
  <h3 class="font-bold mb-2">Recent Transactions</h3>
  <div id="transactionList"></div>
</div>
<div id="profileSettings" class="page p-4"><button onclick="goBack()" class="text-red-600 mb-4"><i class="fa-solid fa-chevron-left"></i> Back</button>
  <h2 class="text-2xl font-bold mb-4">Settings</h2>
  <div class="card mb-2">
    <div class="flex items-center justify-between py-3">
      <span>Language</span>
      <span id="currentLangLabel" class="font-bold">English</span>
    </div>
  </div>
  <div class="card mb-2">
    <div class="flex items-center justify-between py-3">
      <span>Push Notifications</span>
      <input type="checkbox" onchange="toggleNotif('push', this)" checked>
    </div>
  </div>
  <div class="card mb-2">
    <div class="flex items-center justify-between py-3">
      <span>Two-Factor Auth</span>
      <input type="checkbox" onchange="toggle2FA(this)">
    </div>
  </div>
  <div class="space-y-2 mt-4">
    <button onclick="go('changePassword')" class="w-full py-3 bg-slate-100 rounded font-bold">🔒 Change Password</button>
    <button onclick="confirmDelete()" class="w-full py-3 border-2 border-red-600 text-red-600 rounded font-bold">❌ Delete Account</button>
  </div>
</div>
<div id="changePassword" class="page p-4"><button onclick="goBack()" class="text-red-600 mb-4"><i class="fa-solid fa-chevron-left"></i> Back</button>
  <h2 class="text-2xl font-bold mb-4">Change Password</h2>
  <div class="form-group">
    <label>Current Password</label>
    <input id="pwCurrent" type="password" class="input">
  </div>
  <div class="form-group">
    <label>New Password</label>
    <input id="pwNew" type="password" class="input">
  </div>
  <div id="pwStrengthWrap" class="hidden mb-4">
    <div class="flex gap-1">
      <div id="ps1" class="h-1.5 flex-1 rounded-full bg-slate-200"></div>
      <div id="ps2" class="h-1.5 flex-1 rounded-full bg-slate-200"></div>
      <div id="ps3" class="h-1.5 flex-1 rounded-full bg-slate-200"></div>
      <div id="ps4" class="h-1.5 flex-1 rounded-full bg-slate-200"></div>
    </div>
    <p id="pwStrengthLabel" class="text-xs mt-1"></p>
  </div>
  <div class="form-group">
    <label>Confirm Password</label>
    <input id="pwConfirm" type="password" class="input">
  </div>
  <button onclick="doChangePassword()" class="btn-primary">Update Password</button>
</div>
`;
