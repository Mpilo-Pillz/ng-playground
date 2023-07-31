import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoUrl: string = "";

  constructor(private photosService: PhotosService) {
    this.fetchPhoto()
  }

  onClick() {
    console.log("Click");
    
    this.fetchPhoto()
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      console.log("User", response.results[0].picture);
      this.photoUrl = response.results[0].picture.large
    })
  }

  ngOnInit() {
    
  }
}
