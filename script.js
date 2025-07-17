// Inisialisasi peta
var map = L.map('map').setView([-6.8886, 109.6759], 14); // Tengah kota Pekalongan

// Tambahkan tile dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Data lokasi
var locations = [
  {
    name: "PLN UP3 Pekalongan",
    coords: [-6.884476651720468, 109.67159014000373],
    address: "Jl. Manggis No.2, Sampangan, Kec. Pekalongan Tim., Kota Pekalongan, Jawa Tengah 51126",
    description: "PLN UP3 Pekalongan merupakan Unit Pelaksana Pelayanan Pelanggan PLN yang membawahi wilayah Kota Pekalongan, Kabupaten Pekalongan, Kabupaten Batang, dan area sekitarnya.",
    image1: "img/berita_20240405091436.jpeg",
    image2: "img/unnamed.jpg"
  },
  {
    name: "Kost Rama Pekalongan",
    coords: [-6.89957387270546, 109.68184397116413],
    address: "4M2J+3QP, Jl. Budi Bakti Jl. Budi Bakti Gg. 4, Noyontaan, Kec. Pekalongan Tim., Kota Pekalongan, Jawa Tengah 51129",
    description: "Kost Rama adalah tempat indekos di wilayah Pekalongan Timur yang menyediakan kamar berukuran 4×4 meter, dilengkapi dengan kamar mandi dalam, kasur, lemari, dan kipas angin",
    image1: "img/unnamed (2).jpg",
    image2: "img/Screenshot 2025-07-17 091251.png"
  },
  {
    name: "Ramayana Pekalongan",
    coords: [-6.901268883189495, 109.68226281070358],
    address: "Jl. Dr. Setiabudi No.Kel, Noyontaan, Kec. Pekalongan Tim., Kota Pekalongan, Jawa Tengah 51129",
    description: "Ramayana Pekalongan adalah pusat perbelanjaan yang menyediakan berbagai kebutuhan fashion, aksesoris, dan perlengkapan rumah tangga, terletak di pusat Kota Pekalongan.",
    image1: "img/unnamed (1).jpg",
    image2: "img/2019-04-02.jpg"
  },
  {
    name: "-",
    coords: [  ],
    address: "-",
    description: "-",
    image1: "-",
    image2: "-"
  }
];

// Tambahkan marker
locations.forEach(loc => {
  var popupContent = `
    <strong>${loc.name}</strong><br/>
    ${loc.address}<br/>
    <em>${loc.description}</em><br/>
    <img src="${loc.image1}" width="150"/><br/>
    <img src="${loc.image2}" width="150"/>
  `;

  L.marker(loc.coords).addTo(map).bindPopup(popupContent);
});
