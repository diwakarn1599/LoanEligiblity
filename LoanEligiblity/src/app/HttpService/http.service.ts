import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  post(url:string, data :any=null)
  {
    console.log(data,"post");
     return this.http.post(url,data);
  }

  put(url:string,data:any=null,isHeaderRequired:any=false,headers:any=null)
  {
    console.log("httpservice",url,data);
    console.log(url,data+"value");
    return this.http.put(url,data,isHeaderRequired && headers)
  }
  get(url:string,data:any=null,isHeaderRequired:any=false,headers:any=false)
  {
    console.log("httpservice",url,data);
    console.log(url,data+"value");
    return this.http.get(url,headers);
  }
  delete(url:string,data:any=null,isHeaderRequired:any=false,headers:any=false)
  {
    console.log("httpservice",url);
    console.log(url+"value");
    return this.http.delete(url,isHeaderRequired && headers)
  }
}
