import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { ApiService } from '../services/api.service';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data = null;

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public geolocation: Geolocation, private api: ApiService) {}

  
  ngOnInit() {
    this.loadMap();
  }


  //CARGAR EL MAPA TIENE DOS PARTES 
  loadMap() {
    console.log(1);
    this.api.list().subscribe(r=>{
      console.log(r)
    
    })
    
    //OBTENEMOS LAS COORDENADAS DESDE EL TELEFONO.
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(19.1795388, -98.3982165);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      
      //CUANDO TENEMOS LAS COORDENADAS SIMPLEMENTE NECESITAMOS PASAR AL MAPA DE GOOGLE TODOS LOS PARAMETROS.
      /*this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map, this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        this.lat = this.map.center.lat()
        this.long = this.map.center.lng()
      });*/
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
