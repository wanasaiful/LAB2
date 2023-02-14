mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuYXNhaWZ1bCIsImEiOiJjbGR3MGtieDUwMnN6M3JuaGhpYzBwNzN4In0.6rML26l6faKftQC9-b7_PQ'; //Add default public map token from your Mapbox account 
const map = new mapboxgl.Map({
    container: 'map', // Add div container ID for your map
    style: 'mapbox://styles/wanasaiful/cle3m9a0j004o01qwe6rfbzmk', // Add link to style URL
    center: [-79.3, 43.7], // starting position [longitude, latitude]
    zoom: 8, // starting zoom
});

map.on('load', () => {
    /*ADDING A SOURCE FROM A GEOJSON FILE*/
    map.addSource('uoft', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    })
    map.addLayer({
        'id': 'uoft-buildings',
        'type': 'circle',
        'source': 'uoft',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });
});

/*ADDING A SOURCE FROM A MAPBOX TILESET - DATA YOU UPLOADED TO MAPBOX STUDIO*/
map.addSource('toronto_worships', { //Your source ID
'type': 'vector',
'url': 'mapbox://styles/wanasaiful/cle368wlr002801lec9iv0ixz' //Your tileset link from mapbox
});

map.addLayer({
'id': 'toronto-ct',
'type': 'circle',
'source': 'toronto_worships', //must match source ID from addSource method
'paint': {
'fill-color': '#888888',
'fill-opacity': 0.4,
'fill-outline-color': 'black'
},
'source-layer': 'places-of-worship-78x3w1' //name of layer. Get this from mapbox tileset page
},
'uoft-buildings' //Drawing order - place below points
);

