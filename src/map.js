
var dataProvider = {
    mapVar: AmCharts.maps.usaLow,
    getAreasFromMap:true
};

var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();

    map.dataProvider = dataProvider;
    map.balloon.color = "#000000";
    map.dragMap = false;
    map.backgroundColor = "#ffffff";

    map.areasSettings = {
        autoZoom: false,
        selectedColor: "#CC0000"
    };

    map.zoomControl = {
    	homeButtonEnabled: false, 
    	zoomControlEnabled: false
    }

    map.write("mapdiv");

});