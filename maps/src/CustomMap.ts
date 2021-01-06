//Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMaps: google.maps.Map;

  constructor(divId: string){
    this.googleMaps = new google.maps.Map(document.querySelector(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }});
  }

  addMarker(mappable: Mappable):void{
    new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}