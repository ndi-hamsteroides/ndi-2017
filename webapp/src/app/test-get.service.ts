import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Infos} from "./infos";

@Injectable()
export class TestGetService {

  private getUrl = 'http://217.182.92.213:8000/notes/5a29b165553bbc2da03ae04a';

  constructor(private http: HttpClient) { }

  getInfos (): Observable<Infos> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get<Infos>(this.getUrl,{headers: headers})
  }



}
