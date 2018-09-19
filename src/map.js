
var dataProvider = {
    mapVar: AmCharts.maps.usaLow,
    getAreasFromMap: true, 
    areas : [
      {
        id: "US-OK",
        selectable: false
      }, 
      {
      	id: "US-KS",
        selectable: false
      },
	  {
      	id: "US-NE",
        selectable: false
      }
    ]
};

var map;
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.dataProvider = dataProvider;
    map.balloon.color = "#000000";
    map.dragMap = false;
    map.backgroundColor = "#ffffff";
    map.zoomOnDoubleClick = false;

    map.areasSettings = {
        autoZoom: false,
        selectedColor: "#CC0000",
        selectable: true
    };

    map.zoomControl = {
    	homeButtonEnabled: false, 
    	zoomControlEnabled: false
    }

    map.addListener('clickMapObject', function(event){
    	console.log("event")
    })
    map.write("mapdiv");

});