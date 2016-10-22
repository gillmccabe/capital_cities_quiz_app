var Map = function(container, coords, zoom) {
  
  this.googleMap = new google.maps.Map(container, {  
    center: coords, 
    zoom: zoom,
    disableDefaultUI: true
    
  });


  this.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  }

}