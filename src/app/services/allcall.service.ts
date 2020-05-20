import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donate } from 'app/models/donate';
const baseUrl = 'http://localhost:8000/api/donate/'
@Injectable({
  providedIn: 'root'
})
export class AllCallService {

  constructor(private http: HttpClient) { }
  addDonate(donate: Donate){
    console.log('In service : ', donate)
    return this.http.post(baseUrl, 
      donate,{observe : 'response'})

  }
}
