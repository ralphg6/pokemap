import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddPage} from './pages/add/add';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  map: any;
  constructor(public navCtrl: NavController) {
    this.map = null;
  }
  ngOnInit(){
    this.loadMap();
  }
  loadMap(){
    let options = {timeout: 10000, enableHighAccuracy: true};

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 19,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

            let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter()
            });

            //marker.setIcon("assets/images/ash.png")

            google.maps.event.addListener(this.map, 'click', function(event) {
                this.placeMarker(event.latLng);
            });

        },

        (error) => {
            console.log(error);
        }, options

    );
  }
  add(){
    alert('teste');
  }
}
