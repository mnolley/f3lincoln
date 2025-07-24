// Basic example script
document.addEventListener('DOMContentLoaded', () => {
  console.log('F3 Lincoln website loaded.');
  initMap();
  initFilter();
});

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const map = L.map(mapEl).setView([40.8136, -96.7026], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const locations = [
    { coords: [40.8136, -96.7026], name: 'Woods Park' },
    { coords: [40.789, -96.7665], name: 'Pioneers Park' },
    { coords: [40.8007, -96.6853], name: 'Antelope Park' },
    { coords: [40.7909, -96.6441], name: 'Holmes Lake Park' },
    { coords: [40.8231, -96.6631], name: 'University Place' }
  ];

  locations.forEach(loc => {
    L.marker(loc.coords).addTo(map).bindPopup(loc.name);
  });
}

function initFilter() {
  const input = document.getElementById('location-filter');
  const table = document.getElementById('location-table');
  if (!input || !table) return;

  input.addEventListener('keyup', () => {
    const query = input.value.toLowerCase();
    table.querySelectorAll('tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
  });
}
