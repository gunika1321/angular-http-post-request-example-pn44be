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
        'Bearer EwA4A92CBAAUf4ol7B29dDSCjZbDaiOfPJRcm/AAAR0IlQaeoBDJmfZrwDTpvo4kTsDSXedkVl8rR7MhieYoG5GEOs/8jatqSgNEMtn9tStXo9bBA7wrSp7NN9zRl2UP6S+PbrykF3XoAha6ISG3yH8+8rTCwLY6nWj3I8sqcOktJDft8uVuOetse9iMOAQEdY+13GAs8MRw5joxwYdn0L++took1nbzO8t2wSKw1NlgkcclMy0jtXJEvx0f6hMDMTUITh/yKIPHfn+MyUMGxDRJEqEoaX1I2rNHqLbjy0FhYaUf4fQaC2rEbLE4HbqvicaDRezkx7tX05Di4nse9eA1EO5GW0+UPOedjPeM07f75+0N5PQKv/sWdSZOoq8DZgAACPThN8CgSpqlCAKi5+OteudlVoUobMESCn1h3vsu30m1XTVWp2t5II14owDU+4rKyFON3sqgPQfTN7Lu62x0WASMO5U/vXIYK50XlxlV4UUMxufNJIfijEq6DHcJbdP1x02L3FjsBhIjkVJ0Kqfp2eTN+mWmQJnLZKsEGbSXKPJhp/gi++xUI3t03ZdRkYERjOaFsHbTDD/E4KiLhdTIPktZJBXEYh/7y6JzdeidTi0Pif6WkyUi65ykMXfgU+E8LYehyFuAnp4iGAJLrm6OVlV0Vw1Ehsizx1YO3WwsHTHdiiMaZTMl5baArDydxeVSVsLgV0kpzbcJ6Y0O0T1CReCQTh/ZJxqocaYdS5xJNnkBBRq77ofXdwA4RtPkZEL8dNj3qxF/cVsiPdpU4WpYW4ZIStqNpX5rKilRKt10c5FUnnLqtFxTJyM3pyt/cg0ISw03mbJK6grfe2u/Nk638mK9C6Joz94evmzhSoWI7C9X6JCWYN/aD/69duAatHpW78On0Xr5dn/PEXWmjf3ICuiwb5vl8k53lYp7oYEEZdpMU0dUGht/qwqeNe1xQNDTskMY/kvm5LyHLvEwdCBzjytS9pHbwa099D6n3SXYjLTs/iAtwyN47WLjMC2Qt/bMO271saN5Nv4WsZ180baKsf+XgDONOUg5znIdSnai/yUZoSt82KAFpruOcgS5vfEaDUo5SgI=',
      'Content-Type': 'text/plain',
    });
    const url = `https://nam.loki.delve.office.com/api/v1/linkedin/profiles/full?Smtp=${val}&ConvertGetPost=true`;
    return this.http.post<any>(url, user, { headers: headers });
  }

  public saveUserTyped(user: User): Observable<UserInfo> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<UserInfo>(url, user);
  }

  public searchTwitter(company: String) {
    return this.http.get(`https://twitter.com/search?q=${company}`);
  }
}
