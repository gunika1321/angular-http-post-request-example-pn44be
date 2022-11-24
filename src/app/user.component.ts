import { Component, Input } from '@angular/core';
import { User, UserInfo } from './user';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class UserComponent {
  user: User;
  users: User[] = [];

  usersTyped: UserInfo[] = [];

  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(public userService: UserService) {}

  saveUser() {
    this.user = this.addUserForm.value;
    let headers = {
      Accept: 'text/plain,application/json, text/json',
      'X-ClientType': 'OwaPeopleHub',
      'X-ClientFeature': 'LivePersonaCard',
      'X-ClientArchitectureVersion': 'v1',
      'X-HostAppPlatform': 'Web',
      'X-LPCVersion': '1.20221113.4.1',
      authorization:
        'Bearer EwA4A92CBAAUf4ol7B29dDSCjZbDaiOfPJRcm/AAAbzNVsZIexXJeKc5DhAoCyRKLgR+SnBUjMw+5ck7hCeNxI6LKiHkwDw07Gh42egVIiN5/oXMVuOqz2jvz4A5CGcLLcTUhyo9AQhFZrQxFPURNUOSj256UcdWUzFgLp45NPB31gr1BpSz+L7ORPLw5yvQb3spBcYxxPIlokX3ZbWG00Fxf96jE+5ERyh8H/re1Z6l4VMZtNtJ/6sn7b+XkkwUZbqF+Rq7n6bT3d9EFcbyI/e5fm62/iOtDRPrN7ZbRIi38Ms4F6d+QpMOKKxmG0SlrrrtwiWh0CW8JzWQd+gxlW1tc7gYGL25h0r+l82nYBowD4fmUPxFWmRlCThxOHoDZgAACLlcDvWXP3WgCAKgoIbS7ZtbrwMf14xDqS3NmBWg8KBhrYl7vHgZEFgV8nZXzCptkV/Cw8vfrkFxw+O8IFWGbJh/h5zOrjcqlV+73qZCMpX0s5frA4lA4r9l2FKF1+yZigewc6qxRT0F/Ak1CWtYPjSbV9cb/8J8v3sET4inz6VQD9d0jPmJRGZfhdAIW/FvfImblAvYcAPITnti+vXdWJygCIg1wwuPDupNp1WA2GX6sXCaIbZVavIR02XVIgj8y+VXVGZ2+n/fN5kQ2uGToh9twrGoPL0feQQY7PLwlAH1PYEpIHejtPcT0qlV16pdBeil/Gilpi1MMWmzcVW4uQnIj16YbH2MILeX7MJySPtpU+jo50pIydb9sfMGx29Bo/+rGTy7vEllU9ytW3HhljB06kC6crWg9yWGvp7i92wKllp44fUh8+txoyCe4el78woRkqN/FlTmUOmfUVgUgWqoJcxkGhmqIdpAavdu78OKwg9UKlKij9Rgn8+JSe/YjzPMOeN0NLXizHLUHeuE5C+kqaCCSZMRQvb/9hDC8GO6R4ZIExTYafB10oFWzXKcFwVGoXT8y16sqKx1/yi73elpmnXYVV7o5JCe7z3+P8R7bPBisIfUXXiIdICKbbvS3CrPDGh1GTBBH9QRb/nu0pH4uEXJ4iLcnezab+9nWpZIjK8a1e03Szm/HsKKtlFzfzHmSgI=',
      'X-HostAppCapabilities': '{\\"isLokiContactDataDisabled\\":false}',
    };
    this.userService
      .saveUser(headers, this.user.name)
      .subscribe((response: any) => {
        console.log(response);

        this.users.push({ name: response.name, job: response.job });
      });
  }

  saveUserTyped() {
    this.user = this.addUserForm.value;
    this.userService
      .saveUserTyped(this.user)
      .subscribe((response: UserInfo) => {
        console.log(response);

        this.users.push({ name: response.name, job: response.job });
        this.usersTyped.push({
          name: response.name,
          job: response.job,
          id: response.id,
          createdAt: response.createdAt,
        });
      });
  }

  ngOnInit(): void {}
}
