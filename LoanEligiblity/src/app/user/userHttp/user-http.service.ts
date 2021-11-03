import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/HttpService/http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpService:HttpService) { }
  RegisterDetails(data:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/User/Register`,data);
  }
  Login(data:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/User/Login`,data);
  }
}
