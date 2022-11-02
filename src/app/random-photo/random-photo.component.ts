import { Component, Input, OnInit } from '@angular/core';
import { FetchPhotoService } from './fetch-photo.service';

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {

  myPhotoUrl: string = '';
  
  constructor(private fetchPhoto: FetchPhotoService) {
    //this.onClick();
  }

  ngOnInit(): void { 
    this.getPhoto();
   }
  
  onClick(){
    this.getPhoto();
  }

getPhoto(){
  this.fetchPhoto.fetchRandomPhoto().subscribe( (value) => {
    console.log(value);
    this.myPhotoUrl=value;
  });
}

}
