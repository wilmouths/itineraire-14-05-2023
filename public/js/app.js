const map = L.map('map', {
  zoomControl: true,
})
  .setView([48.26619724828841, 6.226727942999709], 16)
  .fitWorld();

L.Marker.prototype.options.icon = L.icon({
  iconUrl: './public/images/marker.png',
  iconSize: [48, 48],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap - Itinéraire 14 mars 2023',
}).addTo(map);

map.locate({ setView: true, maxZoom: 19 });

map.on('locationfound', (e) => {
  L.marker(e.latlng).addTo(map).bindPopup('Vous êtes ici !').openPopup();

  L.circle(e.latlng, radius).addTo(map);
});

map.on('locationerror', (e) => alert(e.message));

L.Routing.control({
  language: 'fr',
  waypoints: [
    L.latLng(48.36988137622209, 6.281687573090697), // Départ
    L.latLng(48.36947664925723, 6.278164423743479),
    L.latLng(48.39374062064607, 6.255377385770867),
    L.latLng(48.39647347251039, 6.247447030269167),
    L.latLng(48.39284742939592, 6.238956029448343),
    L.latLng(48.38717415533664, 6.201260014394026),
    L.latLng(48.385976348685546, 6.194107908938677),
    L.latLng(48.389409360644805, 6.180668197652677),
    L.latLng(48.38977024921782, 6.169543124573141),
    L.latLng(48.37496373151129, 6.1866576649688065),
    L.latLng(48.357870096439484, 6.192055763322194),
    L.latLng(48.35016451329191, 6.162753003754588),
    L.latLng(48.34609725599003, 6.145766592930577),
    L.latLng(48.34709465286004, 6.142174303898613),
    L.latLng(48.343612029481925, 6.138519347939246),
    L.latLng(48.35506698820322, 6.085321495041046),
    L.latLng(48.35576004737021, 6.084397154181037),
    L.latLng(48.35057437005007, 6.064367502178231),
    L.latLng(48.33149098307528, 6.058265756202207),
    L.latLng(48.33599167729807, 6.096222028430786),
    L.latLng(48.323170957250056, 6.117396575266405),
    L.latLng(48.31511334583169, 6.126242620557561),
    L.latLng(48.30803712733447, 6.133523368921545),
    L.latLng(48.302627282856584, 6.136916180032205), // Arrêt midi
    L.latLng(48.30054272384281, 6.142185851844843),
    L.latLng(48.2867029332858, 6.170184494703661),
    L.latLng(48.29399140452149, 6.1825143032410335),
    L.latLng(48.2824701323164, 6.196319965373769),
    L.latLng(48.28148547255378, 6.196087132068702),
    L.latLng(48.26230018387833, 6.174657206432823),
    L.latLng(48.25067341040792, 6.202767770387851),
    L.latLng(48.26619724828841, 6.226727942999709),
    L.latLng(48.2484235046683, 6.235274049307925),
    L.latLng(48.253086287788015, 6.245925606748323),
    L.latLng(48.26798627308136, 6.267553644567657),
    L.latLng(48.25345719135081, 6.28262810367304),
    L.latLng(48.256366352923386, 6.305077572781573),
    L.latLng(48.26307240623759, 6.3103194255506665),
    L.latLng(48.301623466413986, 6.311451678547517),
    L.latLng(48.30360238769696, 6.250530156262943),
    L.latLng(48.34123330466802, 6.27891976354811),
    L.latLng(48.34743411570743, 6.277442613503667),
    L.latLng(48.362408131698984, 6.263619364627047),
    L.latLng(48.36988137622209, 6.281687573090697), // Arrivée
  ],
  routeWhileDragging: false,
  createMarker: function (i, waypoint, n) {
    if (i === 0 || i === (n - 1)) {
      return L.marker(waypoint.latLng, {
        draggable: false,
        bounceOnAdd: true,
        bounceOnAddOptions: {
          duration: 1000,
          height: 800,
          function() {
            (bindPopup(myPopup).openOn(map))
          },
        },
        icon: L.icon({
          iconUrl: './public/images/start_flag.png',
          iconSize: [32, 32],
        }),
      });
    }
    if (i === 23) {
      return L.marker(waypoint.latLng, {
        draggable: false,
        bounceOnAdd: true,
        bounceOnAddOptions: {
          duration: 1000,
          height: 800,
          function() {
            (bindPopup(myPopup).openOn(map))
          },
        },
        icon: L.icon({
          iconUrl: './public/images/eating_icon.png',
          iconSize: [32, 32],
        }),
      });
    }

    return L.marker(waypoint.latLng, {
      draggable: false,
      bounceOnAdd: true,
      bounceOnAddOptions: {
        duration: 1000,
        height: 800,
        function() {
          (bindPopup(myPopup).openOn(map))
        },
      },
      icon: L.icon({
        iconUrl: './public/images/point.png',
        iconSize: [32, 32],
      }),
    });;
  }
}).addTo(map);

$(document).ready(function() {
  $('.tooltipped').tooltip();
  $('#locate-me').on('click', (e) => {
    e.preventDefault();

    map.locate({ setView: true, maxZoom: 19 });
  })
});
