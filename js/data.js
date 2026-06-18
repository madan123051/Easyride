/* data.js – Static data: Fares, Branches, User Profile */

const fares = {
  bike: { n: 80,  k: 60,  p: 50  },
  eco:  { n: 250, k: 200, p: 150 },
  prem: { n: 450, k: 350, p: 250 },
  auto: { n: 150, k: 120, p: 100 },
};

const vehNames = {
  bike: 'Yatri Bike',
  eco:  'Yatri Go',
  prem: 'Yatri Premium',
  auto: 'Yatri Auto',
};

const branches = [
  { id:'ktm', name:'Kathmandu HQ', city:'Kathmandu', prov:'bagmati', addr:'Thamel, Kathmandu', phone:'01-4700000', hours:'24/7', mgr:'Binod Shrestha', rating:'4.9', drivers:1240, resp:'2 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'lal', name:'Lalitpur Branch', city:'Lalitpur', prov:'bagmati', addr:'Pulchowk, Lalitpur', phone:'01-5500000', hours:'6AM-10PM', mgr:'Sita Maharjan', rating:'4.8', drivers:890, resp:'3 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'bhk', name:'Bhaktapur Branch', city:'Bhaktapur', prov:'bagmati', addr:'Durbar Square', phone:'01-6600000', hours:'7AM-9PM', mgr:'Rajesh Prajapati', rating:'4.7', drivers:520, resp:'4 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'brt', name:'Bharatpur Branch', city:'Bharatpur', prov:'bagmati', addr:'Narayangarh, Bharatpur', phone:'056-520000', hours:'6AM-10PM', mgr:'Sunil Subedi', rating:'4.7', drivers:670, resp:'3 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'cht', name:'Chitwan Branch', city:'Chitwan', prov:'bagmati', addr:'Narayangarh, Chitwan', phone:'056-580000', hours:'6AM-10PM', mgr:'Kamal Sharma', rating:'4.8', drivers:860, resp:'3 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'pkr', name:'Pokhara Branch', city:'Pokhara', prov:'gandaki', addr:'Lakeside, Pokhara', phone:'061-460000', hours:'6AM-11PM', mgr:'Hari Gurung', rating:'4.9', drivers:980, resp:'3 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'bir', name:'Biratnagar Branch', city:'Biratnagar', prov:'koshi', addr:'Main Road, Biratnagar', phone:'021-450000', hours:'6AM-10PM', mgr:'Deepak Karki', rating:'4.6', drivers:650, resp:'4 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'dhn', name:'Dharan Branch', city:'Dharan', prov:'koshi', addr:'Chowk, Dharan', phone:'026-520000', hours:'6AM-10PM', mgr:'Bimal Rai', rating:'4.7', drivers:480, resp:'4 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'brg', name:'Birgunj Branch', city:'Birgunj', prov:'madhesh', addr:'Ghantaghar, Birgunj', phone:'051-520000', hours:'6AM-9PM', mgr:'Mohammad Ali', rating:'4.5', drivers:540, resp:'5 min', status:'Open', services:['ride','bike','delivery','food'] },
  { id:'jnp', name:'Janakpur Branch', city:'Janakpur', prov:'madhesh', addr:'Ram Chowk, Janakpur', phone:'041-520000', hours:'6AM-9PM', mgr:'Janki Yadav', rating:'4.6', drivers:380, resp:'6 min', status:'Open', services:['ride','bike','delivery','food'] },
];

const userProfile = {
  name: 'Ram Prasad',
  email: 'ram.prasad@email.com',
  phone: '9841234567',
  city: 'Kathmandu',
  dob: '1995-05-15',
  gender: 'Male',
  avatar: 'RP',
  rating: 4.7,
  totalRides: 42,
  totalDist: '380 km',
  savedAmount: 850,
  loyaltyPoints: 1240,
  walletBalance: 1500,
  joinDate: 'Jan 2024',
  level: 'Gold',
};

const rideHistory = [
  { id:'R042', type:'ride', from:'Thamel', to:'Durbar Square', vehicle:'Yatri Go', fare:250, date:'2026-06-15', time:'10:30 AM', status:'completed', driver:'Ram Rai', rating:5 },
  { id:'R041', type:'ride', from:'Baneshwor', to:'Naxal', vehicle:'Yatri Bike', fare:120, date:'2026-06-14', time:'2:15 PM', status:'completed', driver:'Suresh K.', rating:4 },
  { id:'D008', type:'delivery', from:'Thamel', to:'Patan', vehicle:'Yatri Bike', fare:180, date:'2026-06-13', time:'11:00 AM', status:'completed', driver:'Bikash M.', rating:5 },
  { id:'R040', type:'ride', from:'New Baneshwor', to:'Koteshwor', vehicle:'Yatri Auto', fare:100, date:'2026-06-12', time:'8:45 AM', status:'completed', driver:'Hari B.', rating:4 },
];

const walletTxns = [
  { id:'T001', type:'credit', desc:'Added via eSewa', amount:500, date:'Jun 15, 2026' },
  { id:'T002', type:'debit', desc:'Ride – Yatri Go', amount:250, date:'Jun 15, 2026' },
  { id:'T003', type:'credit', desc:'Cashback – Gold offer', amount:50, date:'Jun 14, 2026' },
  { id:'T004', type:'debit', desc:'Delivery – Yatri Bike', amount:180, date:'Jun 13, 2026' },
];
