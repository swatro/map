window.onload = function () {
	var state = new Vue({
	  el: '#state',
	  data: {
	  	name: "North Dakota",
	    images: [
	      { path: '../images/ND/IMG_9844.JPG' },
	      { path: '../images/ND/IMG_9877.JPG' }
	    ]
	  }
	});
}

