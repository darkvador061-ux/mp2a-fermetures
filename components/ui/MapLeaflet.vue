<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mapEl = ref(null)
let mapInstance = null

onMounted(() => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  document.head.appendChild(link)

  const script = document.createElement('script')
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
  script.onload = () => {
    const L = window.L

    mapInstance = L.map(mapEl.value, {
      center: [43.72, 7.15],
      zoom: 10,
      scrollWheelZoom: false,
      zoomControl: true
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(mapInstance)

    const markerIcon = L.divIcon({
      html: '<div class="mp2a-pin"></div>',
      className: '',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -14]
    })

    L.marker([43.693, 7.106], { icon: markerIcon })
      .addTo(mapInstance)
      .bindPopup(
        '<div class="mp2a-popup"><strong>MP2A Fermetures</strong><br>La Colle-sur-Loup — 06480</div>',
        { className: 'mp2a-popup-wrap' }
      )
      .openPopup()

    L.circle([43.693, 7.106], {
      radius: 60000,
      color: '#E30613',
      fillColor: '#E30613',
      fillOpacity: 0.07,
      weight: 2,
      dashArray: '8, 5'
    }).addTo(mapInstance)
  }
  document.head.appendChild(script)
})

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
})
</script>

<template>
  <div ref="mapEl" class="mp2a-map"></div>
</template>

<style>
.mp2a-map {
  width: 100%;
  height: 420px;
  background: #1a1a1a;
}

.mp2a-pin {
  width: 20px;
  height: 20px;
  background: #E30613;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(227, 6, 19, 0.6);
}

.mp2a-popup-wrap .leaflet-popup-content-wrapper {
  background: #0A0A0A;
  color: #fff;
  border-radius: 0;
  border-left: 3px solid #E30613;
  box-shadow: none;
}

.mp2a-popup-wrap .leaflet-popup-tip {
  background: #0A0A0A;
}

.mp2a-popup-wrap .leaflet-popup-content {
  margin: 10px 14px;
  font-size: 13px;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .mp2a-map {
    height: 480px;
  }
}
</style>
