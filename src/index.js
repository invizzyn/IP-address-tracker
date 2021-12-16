import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {validateIp, addTileLayer, getAddress, addOffset} from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const markerIcon = L.icon({
    iconUrl : icon,
    iconSize : [30, 40],
})

const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById('location');
const timezone = document.getElementById('timezone');
const ispInfo = document.getElementById('isp');
const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center : [51.505, -0.09],
    zoom : 13,
    zoomControl : false
});
addTileLayer(map);
L.marker([51.505, -0.09], {icon : markerIcon}).addTo(map);

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData () {
    if (validateIp(ipInput.value)) {
     getAddress(ipInput.value)
        .then(setInfo)
    } else {
        alert ('Incorrect Ip address')
    }
};
function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

function setInfo (mapData) {
    console.log(mapData);
    let {ip, isp, location} = mapData;
    ipInfo.innerHTML = `${ip}`;
    locationInfo.innerHTML = `${location.city}  ${location.region}`;
    ispInfo.innerHTML = `${isp}`;
    timezone.innerHTML = `${location.timezone}`;
    map.setView ([`${location.lat}`, `${location.lng}`]);
    L.marker([`${location.lat}`, `${location.lng}`], {icon : markerIcon}).addTo(map);
    if (matchMedia("(max-width: 1023px)").matches) {
        addOffset(map);
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    getAddress('8.8.8.8').then(setInfo)
})