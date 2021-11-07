import { Injectable } from '@angular/core';
import { HttpService } from '../../HttpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private httpService:HttpService) { }

  LoanForm(data:any)
  {
    console.log("homeService",data);
    return this.httpService.post(`${environment.baseUrl}/api/Form/AddToForm`,data);
  }
  GetLoanDetails(uid:any)
  {
    return this.httpService.get(`${environment.baseUrl}/api/Form/FormDetails?userId=${uid}`);
  }
  GetPropertyDetails(uid:any,formid:any)
  {
    let params = new HttpParams().set('userId',uid).set('formId',formid);
    return this.httpService.get(`${environment.baseUrl}/api/Form/propertyDetails?userId=${uid}&formId=${formid}`);
  }
}
