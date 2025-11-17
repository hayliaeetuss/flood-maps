var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RiverHighRiskwithin5m_1 = new ol.format.GeoJSON();
var features_RiverHighRiskwithin5m_1 = format_RiverHighRiskwithin5m_1.readFeatures(json_RiverHighRiskwithin5m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverHighRiskwithin5m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverHighRiskwithin5m_1.addFeatures(features_RiverHighRiskwithin5m_1);
var lyr_RiverHighRiskwithin5m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverHighRiskwithin5m_1, 
                style: style_RiverHighRiskwithin5m_1,
                popuplayertitle: 'River High Risk within 5m',
                interactive: true,
                title: '<img src="styles/legend/RiverHighRiskwithin5m_1.png" /> River High Risk within 5m'
            });
var format_RiverHighRiskwithin10m_2 = new ol.format.GeoJSON();
var features_RiverHighRiskwithin10m_2 = format_RiverHighRiskwithin10m_2.readFeatures(json_RiverHighRiskwithin10m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverHighRiskwithin10m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverHighRiskwithin10m_2.addFeatures(features_RiverHighRiskwithin10m_2);
var lyr_RiverHighRiskwithin10m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverHighRiskwithin10m_2, 
                style: style_RiverHighRiskwithin10m_2,
                popuplayertitle: 'River High Risk within 10m',
                interactive: true,
                title: '<img src="styles/legend/RiverHighRiskwithin10m_2.png" /> River High Risk within 10m'
            });
var format_RiverHighRiskwithin15m_3 = new ol.format.GeoJSON();
var features_RiverHighRiskwithin15m_3 = format_RiverHighRiskwithin15m_3.readFeatures(json_RiverHighRiskwithin15m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverHighRiskwithin15m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverHighRiskwithin15m_3.addFeatures(features_RiverHighRiskwithin15m_3);
var lyr_RiverHighRiskwithin15m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverHighRiskwithin15m_3, 
                style: style_RiverHighRiskwithin15m_3,
                popuplayertitle: 'River High Risk within 15m',
                interactive: true,
                title: '<img src="styles/legend/RiverHighRiskwithin15m_3.png" /> River High Risk within 15m'
            });
var format_RiverLowRiskwithin5m_4 = new ol.format.GeoJSON();
var features_RiverLowRiskwithin5m_4 = format_RiverLowRiskwithin5m_4.readFeatures(json_RiverLowRiskwithin5m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverLowRiskwithin5m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverLowRiskwithin5m_4.addFeatures(features_RiverLowRiskwithin5m_4);
var lyr_RiverLowRiskwithin5m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverLowRiskwithin5m_4, 
                style: style_RiverLowRiskwithin5m_4,
                popuplayertitle: 'River Low Risk within 5m',
                interactive: true,
                title: '<img src="styles/legend/RiverLowRiskwithin5m_4.png" /> River Low Risk within 5m'
            });
var format_RiverLowRiskwithin10m_5 = new ol.format.GeoJSON();
var features_RiverLowRiskwithin10m_5 = format_RiverLowRiskwithin10m_5.readFeatures(json_RiverLowRiskwithin10m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverLowRiskwithin10m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverLowRiskwithin10m_5.addFeatures(features_RiverLowRiskwithin10m_5);
var lyr_RiverLowRiskwithin10m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverLowRiskwithin10m_5, 
                style: style_RiverLowRiskwithin10m_5,
                popuplayertitle: 'River Low Risk within 10m',
                interactive: true,
                title: '<img src="styles/legend/RiverLowRiskwithin10m_5.png" /> River Low Risk within 10m'
            });
var format_RiverLowRiskwithin15m_6 = new ol.format.GeoJSON();
var features_RiverLowRiskwithin15m_6 = format_RiverLowRiskwithin15m_6.readFeatures(json_RiverLowRiskwithin15m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverLowRiskwithin15m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverLowRiskwithin15m_6.addFeatures(features_RiverLowRiskwithin15m_6);
var lyr_RiverLowRiskwithin15m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverLowRiskwithin15m_6, 
                style: style_RiverLowRiskwithin15m_6,
                popuplayertitle: 'River Low Risk within 15m',
                interactive: true,
                title: '<img src="styles/legend/RiverLowRiskwithin15m_6.png" /> River Low Risk within 15m'
            });
var format_RiverMediumRiskwithin5m_7 = new ol.format.GeoJSON();
var features_RiverMediumRiskwithin5m_7 = format_RiverMediumRiskwithin5m_7.readFeatures(json_RiverMediumRiskwithin5m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverMediumRiskwithin5m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverMediumRiskwithin5m_7.addFeatures(features_RiverMediumRiskwithin5m_7);
var lyr_RiverMediumRiskwithin5m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverMediumRiskwithin5m_7, 
                style: style_RiverMediumRiskwithin5m_7,
                popuplayertitle: 'River Medium Risk within 5m',
                interactive: true,
                title: '<img src="styles/legend/RiverMediumRiskwithin5m_7.png" /> River Medium Risk within 5m'
            });
var format_RiverMediumRiskwithin10m_8 = new ol.format.GeoJSON();
var features_RiverMediumRiskwithin10m_8 = format_RiverMediumRiskwithin10m_8.readFeatures(json_RiverMediumRiskwithin10m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverMediumRiskwithin10m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverMediumRiskwithin10m_8.addFeatures(features_RiverMediumRiskwithin10m_8);
var lyr_RiverMediumRiskwithin10m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverMediumRiskwithin10m_8, 
                style: style_RiverMediumRiskwithin10m_8,
                popuplayertitle: 'River Medium Risk within 10m',
                interactive: true,
                title: '<img src="styles/legend/RiverMediumRiskwithin10m_8.png" /> River Medium Risk within 10m'
            });
var format_RiverMediumRiskwithin15m_9 = new ol.format.GeoJSON();
var features_RiverMediumRiskwithin15m_9 = format_RiverMediumRiskwithin15m_9.readFeatures(json_RiverMediumRiskwithin15m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverMediumRiskwithin15m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverMediumRiskwithin15m_9.addFeatures(features_RiverMediumRiskwithin15m_9);
var lyr_RiverMediumRiskwithin15m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverMediumRiskwithin15m_9, 
                style: style_RiverMediumRiskwithin15m_9,
                popuplayertitle: 'River Medium Risk within 15m',
                interactive: true,
                title: '<img src="styles/legend/RiverMediumRiskwithin15m_9.png" /> River Medium Risk within 15m'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RiverHighRiskwithin5m_1.setVisible(true);lyr_RiverHighRiskwithin10m_2.setVisible(true);lyr_RiverHighRiskwithin15m_3.setVisible(true);lyr_RiverLowRiskwithin5m_4.setVisible(true);lyr_RiverLowRiskwithin10m_5.setVisible(true);lyr_RiverLowRiskwithin15m_6.setVisible(true);lyr_RiverMediumRiskwithin5m_7.setVisible(true);lyr_RiverMediumRiskwithin10m_8.setVisible(true);lyr_RiverMediumRiskwithin15m_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RiverHighRiskwithin5m_1,lyr_RiverHighRiskwithin10m_2,lyr_RiverHighRiskwithin15m_3,lyr_RiverLowRiskwithin5m_4,lyr_RiverLowRiskwithin10m_5,lyr_RiverLowRiskwithin15m_6,lyr_RiverMediumRiskwithin5m_7,lyr_RiverMediumRiskwithin10m_8,lyr_RiverMediumRiskwithin15m_9];
lyr_RiverHighRiskwithin5m_1.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverHighRiskwithin10m_2.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverHighRiskwithin15m_3.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverLowRiskwithin5m_4.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverLowRiskwithin10m_5.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverLowRiskwithin15m_6.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverMediumRiskwithin5m_7.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverMediumRiskwithin10m_8.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverMediumRiskwithin15m_9.set('fieldAliases', {'Postcode': 'Postcode', 'Descriptio': 'Descriptio', 'Grid Refer': 'Grid Refer', 'X (easting': 'X (easting', 'Y (northin': 'Y (northin', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RiverHighRiskwithin5m_1.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverHighRiskwithin10m_2.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverHighRiskwithin15m_3.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverLowRiskwithin5m_4.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverLowRiskwithin10m_5.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverLowRiskwithin15m_6.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverMediumRiskwithin5m_7.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverMediumRiskwithin10m_8.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverMediumRiskwithin15m_9.set('fieldImages', {'Postcode': '', 'Descriptio': '', 'Grid Refer': '', 'X (easting': '', 'Y (northin': '', 'Latitude': '', 'Longitude': '', });
lyr_RiverHighRiskwithin5m_1.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverHighRiskwithin10m_2.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverHighRiskwithin15m_3.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverLowRiskwithin5m_4.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverLowRiskwithin10m_5.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverLowRiskwithin15m_6.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverMediumRiskwithin5m_7.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverMediumRiskwithin10m_8.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverMediumRiskwithin15m_9.set('fieldLabels', {'Postcode': 'no label', 'Descriptio': 'no label', 'Grid Refer': 'no label', 'X (easting': 'no label', 'Y (northin': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RiverMediumRiskwithin15m_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});