import { Component, Input } from '@angular/core';
import { User, UserInfo } from './user';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: any;
  users: Array<any> = [];
  companyProfile: String = '';
  twitterProfile: String = '';
  mailLink: String = '';
  whatsappLink: String = '';
  showSpinner: boolean = false;
  crunchbaseProfile: String = '';
  showNoUser: boolean = false;
  showResult: boolean = false;
  usersTyped: UserInfo[] = [];
  displayedColumns: string[] = ['image', 'url'];
  addUserForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(public userService: UserService) {}

  saveUser() {
    if (!this.addUserForm.value.phone) {
      this.whatsappLink = '';
    }
    this.showSpinner = true;
    this.showResult = false;
    this.users = [];
    this.user = this.addUserForm.value;
    let headers = {
      Accept: 'text/plain,application/json, text/json',
      'X-ClientType': 'OwaPeopleHub',
      'X-ClientFeature': 'LivePersonaCard',
      'X-ClientArchitectureVersion': 'v1',
      'X-HostAppPlatform': 'Web',
      'X-LPCVersion': '1.20221113.4.1',
      authorization:
        'Bearer EwA4A92CBAAUf4ol7B29dDSCjZbDaiOfPJRcm/AAAR0IlQaeoBDJmfZrwDTpvo4kTsDSXedkVl8rR7MhieYoG5GEOs/8jatqSgNEMtn9tStXo9bBA7wrSp7NN9zRl2UP6S+PbrykF3XoAha6ISG3yH8+8rTCwLY6nWj3I8sqcOktJDft8uVuOetse9iMOAQEdY+13GAs8MRw5joxwYdn0L++took1nbzO8t2wSKw1NlgkcclMy0jtXJEvx0f6hMDMTUITh/yKIPHfn+MyUMGxDRJEqEoaX1I2rNHqLbjy0FhYaUf4fQaC2rEbLE4HbqvicaDRezkx7tX05Di4nse9eA1EO5GW0+UPOedjPeM07f75+0N5PQKv/sWdSZOoq8DZgAACPThN8CgSpqlCAKi5+OteudlVoUobMESCn1h3vsu30m1XTVWp2t5II14owDU+4rKyFON3sqgPQfTN7Lu62x0WASMO5U/vXIYK50XlxlV4UUMxufNJIfijEq6DHcJbdP1x02L3FjsBhIjkVJ0Kqfp2eTN+mWmQJnLZKsEGbSXKPJhp/gi++xUI3t03ZdRkYERjOaFsHbTDD/E4KiLhdTIPktZJBXEYh/7y6JzdeidTi0Pif6WkyUi65ykMXfgU+E8LYehyFuAnp4iGAJLrm6OVlV0Vw1Ehsizx1YO3WwsHTHdiiMaZTMl5baArDydxeVSVsLgV0kpzbcJ6Y0O0T1CReCQTh/ZJxqocaYdS5xJNnkBBRq77ofXdwA4RtPkZEL8dNj3qxF/cVsiPdpU4WpYW4ZIStqNpX5rKilRKt10c5FUnnLqtFxTJyM3pyt/cg0ISw03mbJK6grfe2u/Nk638mK9C6Joz94evmzhSoWI7C9X6JCWYN/aD/69duAatHpW78On0Xr5dn/PEXWmjf3ICuiwb5vl8k53lYp7oYEEZdpMU0dUGht/qwqeNe1xQNDTskMY/kvm5LyHLvEwdCBzjytS9pHbwa099D6n3SXYjLTs/iAtwyN47WLjMC2Qt/bMO271saN5Nv4WsZ180baKsf+XgDONOUg5znIdSnai/yUZoSt82KAFpruOcgS5vfEaDUo5SgI=',
      'X-HostAppCapabilities': '{\\"isLokiContactDataDisabled\\":false}',
    };
    if (this.user.name.length > 0) {
      this.userService
        .saveUser(headers, this.user.name)
        .subscribe((response: any) => {
          this.showResult = true;
          this.showSpinner = false;
          if (this.addUserForm.value.phone) {
            this.whatsappLink = `https://wa.me/${this.addUserForm.value.phone}`;
          }
          console.log(response);
          if (response.resultTemplate == 'ExactMatch') {
            this.showNoUser = false;
            this.users.push({
              name: response.persons[0].displayName,
              url: response.persons[0].linkedInUrl,
              photo: response.persons[0].photoUrl,
              headline: response.persons[0].headline,
            });

            this.companyProfile = `https://www.whois.com/whois/${response.persons[0].companyName.toLowerCase()}`;
            this.twitterProfile = `https://twitter.com/search?q=${response.persons[0].companyName}`;
            this.mailLink = `mailto:${this.addUserForm.value.name}`;
            this.crunchbaseProfile = `https://www.crunchbase.com/organization/${response.persons[0].companyName.toLowerCase()}`;
          } else {
            this.showNoUser = true;
            this.companyProfile = `https://www.whois.com/whois/${this.addUserForm.value.name
              .split('@')[1]
              .split('.')[0]
              .toLowerCase()}`;
            this.twitterProfile = `https://twitter.com/search?q=${
              this.addUserForm.value.name.split('@')[1].split('.')[0]
            }`;
            this.mailLink = `mailto:${this.addUserForm.value.name}`;
            this.crunchbaseProfile = `https://www.crunchbase.com/organization/${this.addUserForm.value.name
              .split('@')[1]
              .split('.')[0]
              .toLowerCase()}`;
          }
        });
    } else if (this.addUserForm.value.phone) {
      this.showResult = true;
      this.whatsappLink = `https://wa.me/${this.addUserForm.value.phone}`;
      this.showSpinner = false;
    }
    // this.showSpinner = false;
  }
  openLinkedIn(user) {
    window.open(user.url);
  }
  ngOnInit(): void {}
}
