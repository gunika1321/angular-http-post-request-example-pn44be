import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User, UserInfo } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public saveUser(user: any, val: any): Observable<any> {
    const url = `https://nam.loki.delve.office.com/api/v1/linkedin/profiles/full?PersonaDisplayName=${val}&ExternalPageInstance=&UserLocale=en-US&OlsPersonaId=AQQkADAwATMwMAItMTBiOS1jYTNlLTAwAi0wMAoAEAANWIdZ9zbPSItgH3CRcyMY&ContactId=RgAAAABUV5RrKcgzQYv1ijif6IkmBwBHhytiE4RMRKxZGvaB14O1AAQ65e-IAABHhytiE4RMRKxZGvaB14O1AAQ65ftJAAAA0&AadObjectId=&Smtp=${val}&UserPrincipalName=&PersonaType=User&RootCorrelationId=e7ae042a-e0ab-4c5c-800c-b9ab0ff8e309&CorrelationId=e7ae042a-e0ab-4c5c-800c-b9ab0ff8e309&ClientCorrelationId=13ed8d50-954e-4a36-a73c-d792ab7cc4e5&ConvertGetPost=true`;
    return this.http.post<any>(url, user);
  }

  public saveUserTyped(user: User): Observable<UserInfo> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<UserInfo>(url, user);
  }
}
