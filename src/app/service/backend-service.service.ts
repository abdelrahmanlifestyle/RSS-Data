import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendServiceService {

  constructor(public http:Http) { 
    
  }

  rssLink:string = "https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss";

  getRssData(){
    // debugger;
    return this.http.get(this.rssLink).map(res=>res.json());
  }
  
}
