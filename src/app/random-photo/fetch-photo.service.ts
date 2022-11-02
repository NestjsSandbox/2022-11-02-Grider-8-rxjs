import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


interface UnsplashReply{
    urls: {
      small: string
    }
}


@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  
  constructor(private httpClient: HttpClient) { }

  fetchRandomPhoto(){
    
    const apiUrl = 'https://api.unsplash.com/photos/random';

   return  this.httpClient.get<UnsplashReply>(apiUrl, {
      headers: { 
        Authorization: 'Client-ID -bUwmW5oJ-JbXLfPor62UocEhbeZeQ8rBxyrdM9kqD0'
      }
    }).pipe(
      //pluck('urls', 'small'),
      map(x => x.urls.small )
    );

   //  return 'https://i.imgur.com/bEoiJLl_d.webp?maxwidth=520&shape=thumb&fidelity=high';

  }
}
