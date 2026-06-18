/* branch-pages.js – Branch Selector, Branch Detail pages */
document.getElementById('pagesContainer').innerHTML += `
<div id="branchSel" class="page p-4"><h2 class="text-2xl font-bold mb-4">Our Branches</h2>
  <input id="branchSearch" type="text" placeholder="Search branches..." class="input mb-4" oninput="filterBranches()">
  <div class="flex gap-2 mb-4 overflow-x-auto pb-2">
    <button class="branch-filter badge-blue px-4 py-2 rounded-full" data-filter="all" onclick="filterByProvince('all')">All</button>
    <button class="branch-filter bg-slate-100 px-4 py-2 rounded-full" data-filter="bagmati" onclick="filterByProvince('bagmati')">Bagmati</button>
    <button class="branch-filter bg-slate-100 px-4 py-2 rounded-full" data-filter="gandaki" onclick="filterByProvince('gandaki')">Gandaki</button>
  </div>
  <div id="branchList"></div>
</div>
<div id="branchDetail" class="page p-4"><button onclick="goBack()" class="text-red-600 mb-4"><i class="fa-solid fa-chevron-left"></i> Back</button>
  <h2 id="bdTitle" class="text-2xl font-bold">Branch Name</h2>
  <p id="bdSubtitle" class="text-slate-500 mb-4">Address</p>
  <div class="card mb-4">
    <div class="flex items-center justify-between mb-3">
      <span class="text-sm text-slate-500">Status</span>
      <span id="bdStatus" class="badge badge-green">Open</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm text-slate-500">Rating</span>
      <span id="bdRating" class="font-bold">4.9</span>
    </div>
  </div>
  <div class="card mb-4">
    <label class="text-sm font-bold block mb-2">Available Services</label>
    <div id="bdServices" class="grid grid-cols-4 gap-2"></div>
  </div>
  <button onclick="selectThisBranch()" class="btn-primary mb-2">Select This Branch</button>
  <button onclick="callBranch()" class="w-full py-2 border-2 border-slate-300 rounded">📞 Call Branch</button>
</div>
`;
