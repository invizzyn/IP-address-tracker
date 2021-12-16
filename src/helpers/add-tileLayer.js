import L from 'leaflet';

export function addTileLayer (map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW52aXp6eW4iLCJhIjoiY2t4OHE1dWdiMDd5ejJwcWxpcjgybjM3NSJ9.qib0iZj5n5FWIH83QzQgzw', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="#">Alexandr Khigniy</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
}