import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private httpService:HttpService) { }

  LoanForm(data:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/User/Register`,data);
  }

}
