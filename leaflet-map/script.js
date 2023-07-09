let map = L.map('map').setView([20.6, 6.8], 3);

//http://maps.stamen.com/#terrain/12/37.7706/-122.3782
const basemap_layers = {
    terrain: L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    osm: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
}

basemap_layers.terrain.addTo(map);
basemap_layers.osm.addTo(map);

L.control.layers(basemap_layers).addTo(map);

//////// Add f1tracks
///https://leafletjs.com/examples/geojson/
///https://axios-http.com/
///Live Server

const f1tracks = axios('../leaflet-map/f1-locations.geojson').then(resp => {
    console.log(resp);
    L.geoJSON(resp.data, {
        style: { color: "#ff0000" }
    }).addTo(map);
});