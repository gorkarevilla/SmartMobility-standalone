var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

var trips = [{
    "type": "LineString",
    "coordinates": [[-34.55344775, -58.466713], [-34.55344771, -58.466713], [-34.55344775, -58.466713]]
}, {
    "type": "LineString",
    "coordinates": [[47.43465049, 2.93857288], [47.4337546, 2.93834233], [47.43334586, 2.93806076]]
}];

var pointFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [5.02062082, 43.38099298]
    }
};

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 20, attribution: osmAttrib});		

	// start the map in South-East England
	// Eibar: 43.1848,-2.4790
	map.setView(new L.LatLng(43.1848, -2.4790),3);
	map.addLayer(osm);

//	var geojsonLayer = new L.GeoJSON.AJAX("http:smartmobility.gorkarevilla.com/data/lines.geojson");       
//    geojsonLayer.addTo(map);


}

function drawTrips() {
	L.geoJSON(trips, {
    	style: myStyle
	}).addTo(map);
}

function drawPoint() {
	L.geoJSON(pointFeature).addTo(map);
}
