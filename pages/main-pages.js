/* main-pages.js – Home, Vehicle, Finding, Trip, Rating, Delivery pages */
document.getElementById('pagesContainer').innerHTML += `
<div id="home" class="page p-4"><div class="pt-4">
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-2xl font-bold">Home</h2>
    <button onclick="toggleMenu()" class="text-2xl cursor-pointer"><i class="fa-solid fa-bars"></i></button>
  </div>
  <div class="card mb-4"><p class="text-sm text-slate-500">Welcome back, <strong id="homeName">Ram</strong></p>
    <p class="text-lg font-bold">Select Service</p></div>
  <div class="grid grid-cols-2 gap-3 mb-6">
    <button onclick="pickSvc('ride')" class="svc-btn sel" data-svc="ride"><i class="text-3xl mb-2 block">🚗</i><p>Ride</p></button>
    <button onclick="pickSvc('bike')" class="svc-btn" data-svc="bike"><i class="text-3xl mb-2 block">🏍️</i><p>Bike</p></button>
    <button onclick="pickSvc('delivery')" class="svc-btn" data-svc="delivery"><i class="text-3xl mb-2 block">📦</i><p>Delivery</p></button>
    <button onclick="pickSvc('food')" class="svc-btn" data-svc="food"><i class="text-3xl mb-2 block">🍜</i><p>Food</p></button>
  </div>
  <div class="card mb-6"><label class="text-sm font-bold">Branch Location</label>
    <p id="homeBranchName" class="text-lg">Kathmandu</p></div>
  <button onclick="go('vehicle')" class="btn-primary">Find Ride</button>
</div></div>
<div id="vehicle" class="page p-4"><h2 class="text-2xl font-bold mb-4">Select Vehicle</h2>
  <div class="space-y-3 mb-6">
    <div class="vehicle-sel sel" onclick="pickVeh(this, 'bike')"><strong>🏍️ Bike</strong> <span id="fBike" class="float-right">रू 80</span></div>
    <div class="vehicle-sel" onclick="pickVeh(this, 'eco')"><strong>🚗 Go</strong> <span id="fEco" class="float-right">रू 250</span></div>
    <div class="vehicle-sel" onclick="pickVeh(this, 'prem')"><strong>🚙 Premium</strong> <span id="fPrem" class="float-right">रू 450</span></div>
    <div class="vehicle-sel" onclick="pickVeh(this, 'auto')"><strong>🛺 Auto</strong> <span id="fAuto" class="float-right">रू 150</span></div>
  </div>
  <div class="card mb-6"><p class="text-slate-500">Est. Fare: <span id="estFare" class="font-bold text-slate-800">रू 80</span></p></div>
  <button id="bookBtn" onclick="doBook()" class="btn-primary mb-2">Book Bike</button>
  <button onclick="go('home')" class="w-full py-2 text-center text-slate-600">Back</button>
</div>
<div id="finding" class="page flex flex-col items-center justify-center text-center"><i class="fa-solid fa-spinner text-4xl text-red-600 mb-4 animate-spin"></i>
  <h2 class="text-xl font-bold">Finding your ride...</h2><p class="text-slate-500 mt-2">Please wait</p></div>
<div id="trip" class="page p-4"><h2 class="text-2xl font-bold mb-4">Active Trip</h2>
  <div class="card mb-4"><p id="tripStat" class="text-lg font-bold">Waiting for driver acceptance...</p></div>
  <div id="endBtn" class="hidden"><button onclick="endTrip()" class="btn-primary">End Trip</button></div>
  <button onclick="showSOS()" class="w-full py-2 border-2 border-red-600 text-red-600 font-bold rounded mt-3">🚨 SOS</button>
</div>
<div id="rating" class="page p-4"><h2 class="text-2xl font-bold mb-4">Rate Your Ride</h2>
  <div class="flex gap-2 mb-4 justify-center">
    <i class="star fa-solid fa-star text-slate-300 text-3xl cursor-pointer" onclick="rate(1)"></i>
    <i class="star fa-solid fa-star text-slate-300 text-3xl cursor-pointer" onclick="rate(2)"></i>
    <i class="star fa-solid fa-star text-slate-300 text-3xl cursor-pointer" onclick="rate(3)"></i>
    <i class="star fa-solid fa-star text-slate-300 text-3xl cursor-pointer" onclick="rate(4)"></i>
    <i class="star fa-solid fa-star text-slate-300 text-3xl cursor-pointer" onclick="rate(5)"></i>
  </div>
  <div class="card mb-4"><label class="text-sm font-bold mb-2 block">Add Tip (Optional)</label>
    <div class="space-y-2">
      <button class="tip w-full" onclick="addTip(50)">रू 50</button>
      <button class="tip w-full" onclick="addTip(100)">रू 100</button>
    </div>
  </div>
  <button onclick="subRating()" class="btn-primary">Submit Rating</button>
</div>
<div id="delivery" class="page p-4"><h2 class="text-2xl font-bold mb-4">Send Delivery</h2>
  <label class="text-sm font-bold block mb-2">Package Size</label>
  <div class="grid grid-cols-3 gap-2 mb-4">
    <button class="pkg bg-slate-100 rounded p-3 text-center" onclick="pickPkg(this)"><p>Small</p></button>
    <button class="pkg bg-slate-100 rounded p-3 text-center" onclick="pickPkg(this)"><p>Medium</p></button>
    <button class="pkg bg-slate-100 rounded p-3 text-center" onclick="pickPkg(this)"><p>Large</p></button>
  </div>
  <div class="card mb-4"><p class="text-lg font-bold">रू 150</p></div>
  <button onclick="doDelivery()" class="btn-primary">Book Delivery</button>
</div>
`;
