
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
    map.dragMap = false;
    map.backgroundColor = "#ffffff";
    map.zoomOnDoubleClick = false;

    map.areasSettings = {
        autoZoom: false,
        selectable: true,
        selectedColor: "#ff8c00", 
        rollOverOutlineColor: "#ff8c00"
    };

    map.zoomControl = {
    	homeButtonEnabled: false, 
    	zoomControlEnabled: false
    }

    map.addListener('clickMapObject', function(event){
      var stateAbbre = event.mapObject.id.split("US-")[1]
      window.location.pathname = 'state/'+ stateAbbre
    })
    map.write("mapdiv");

});