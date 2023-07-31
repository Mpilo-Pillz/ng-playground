import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
interface RandomUserResponse {
  results: {picture: { medium: string, large: string, thumbnail: string}}[]
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) { 
  }

  getPhoto() {
    // https://unsplash.com/documentation
    return this.http.get<RandomUserResponse>('https://randomuser.me/api/')
  }

  
}
