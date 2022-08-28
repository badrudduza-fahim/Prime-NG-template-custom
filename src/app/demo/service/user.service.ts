import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModels} from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseUrl = 'http://localhost:3009/'
  constructor(private http: HttpClient) { }

    getAllUsers(): Observable<any> {
      return this.http.get(this.baseUrl + 'user/getUserAll');
    }
}
