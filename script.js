mapboxgl.accessToken = 'pk.eyJ1Ijoid2FuYXNhaWZ1bCIsImEiOiJjbGR3MGtieDUwMnN6M3JuaGhpYzBwNzN4In0.6rML26l6faKftQC9-b7_PQ'; //Add default public map token from your Mapbox account 
const map = new mapboxgl.Map({
    container: 'map', // Add div container ID for your map
    style: 'mapbox://styles/wanasaiful/cle3m9a0j004o01qwe6rfbzmk', // Add link to style URL
    center: [-79.347, 43.6510], // starting position [longitude, latitude]
    zoom: 11, // starting zoom
});

/*ADDING SOURCE FROM A GEOJSON FILE. I WAS NOT ABLE TO UPLOAD FROM GITHUB OR MAPBOX TILESET.*/
map.on('load', () => {
    map.addSource('torontomovies', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "University of Toronto"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.3952226454677,
                43.661657753111996
                        ],
                        "type": "Point"}},
                 {
                     "type": "Feature",
                     "properties": {
                            "name": "Casa Loma"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.40936176256574,
                            43.67806041746152
                                ],
                                "type": "Point"}},
                                {
                    "type": "Feature",
                    "properties": {
                        "name": "Union Station"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.38066571627058,
                43.64530660449944
                        ],
                        "type": "Point"}},
                 {
                     "type": "Feature",
                     "properties": {
                            "name": "Elgin and Winter Garden Theatre"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.3790037037066,
                43.653058391765484
                                ],
                                "type": "Point"}},
                {
                     "type": "Feature",
                     "properties": {
                            "name": "City Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.38406747486903,
                                43.65342826123975
                                ],
                                "type": "Point"}},
                                {
                    "type": "Feature",
                    "properties": {
                        "name": "Yonge-Dundas Square"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.3804362399624,
                43.65598093426948
                        ],
                        "type": "Point"}},
                 {
                     "type": "Feature",
                     "properties": {
                            "name": "Reference Library"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.38685816931142,
                43.67174613469504
                                ],
                                "type": "Point"}},                         


            ]
        }
    })
    map.addLayer({
        'id': 'movie-buildings',
        'type': 'circle',
        'source': 'torontomovies',
        'paint': {
            'circle-radius': 6,
            'circle-color': 'blue'
        }
    });
    });
    


    
