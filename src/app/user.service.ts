import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
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
    let headers = new HttpHeaders({
      Authorization:
        'Bearer EwBwA8l6BAAUkj1NuJYtTVha+Mogk+HEiPbQo04AAf+Tv9VYUSn4e2EP/TXKvJEMh+btA3QHF7Y0QLEq87BpRvzEtmoNrYJLmYq464S41ZqRtYsQzMbdQ5XGZc6ewaspgjPMo/OFe+mNPXbYpIC0c0Ix4RuSqIfYEQgB1TCetyLZUm2A4e8gIsw0zewGW3VKW2rGARCIBgyEJIP/ijXpyQOpfjTZ5omvYf9LhZTM+rOyzdEzm1DVa2HNHRVLvVuwrDfg+FJbHpbhO1MiY4cyShFK9O47OoZe/kCKRPNXkXnVYBCsGZNUq9ByAnUIVgYNkCN92zEYZ1moe2Ggd/8XNXRt7V8JvtFkQcx3eheplRu0XMqpQB7mKUkFZz9GqEMDZgAACPIkVAAmhc3+QAIQGdaUplCSK/TKQ4BfWfRR7U4Gsq4Zhzrby1pCmRqVgPx3J1JrnYuqhzJLa940vQjtVZVZETkTysB1hOy9MkWPWsVRBKrkja4LDGSCTdQXYJLJWc35gx+11ChBZtx+rgE06jQ0dbv1dXgxPSNO4Dfc3DSn6mgGAkh4YhcCl779bwh2Nlx5LKPP1mhGpY/QvkGGnAuZxDCBemPhWgKiQNXGc+vn8McStJzbviA0vbLPI1im033gPWnVtygb9OA7CPqjyL7BeVMEvPmWoOl7axz390hzcm35ohC5fagsM9xQM2d75rZmKRgeZv8UaV38PNFFv8mjaXS2gucqJWYdh/9lTLlnP/v163Kq5Cv212QeDpRoEUuHfE5REBwHwGXnhcmRNSRyAFEzcp4PZkL3kd+mem/jCKCTb6cYgx6Q91dJQvOG5skkSL+bDBaAGwJr/s/hSHh62usN6fe89E5ERcbivT0WhDO4rwnpvtF5h5Lkcb3q4P1WY962iAJ2Jc/N2DPJTtLqUQ0LTBrIiZE5Zx72K8a3wCMlnM43LwwYbLJ1WAKpQoMM90TIJZm7yBGOgfVvFAO3b5q8L5oo8+ucEKZyKqrjvubjKN9BaB394X7WfFuFxV5DbzGiPSwMyHrxZjyLC5em0YMiZpUmPoJKD05ef7Zm+eVtMqnxdCaBnyFUiIFZrcJyYP2VNvZ3pTYmkS9Lgp8Xr4jXCDBq0bRXPl6e2UCWV5k6gG3vDv8UpJZ0jRNQujjQeU6HIM/anl4sFviHAg==',
      'Content-Type': 'text/plain',
    });
    const url = `https://nam.loki.delve.office.com/api/v1/linkedin/profiles/full?Smtp=${val}&ConvertGetPost=true`;
    return this.http.post<any>(url, user, { headers: headers });
  }

  public saveUserTyped(user: User): Observable<UserInfo> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<UserInfo>(url, user);
  }

  public searchTwitter(company:String){
    return this.http.get(`https://twitter.com/search?q=${company}`)
  }
}
