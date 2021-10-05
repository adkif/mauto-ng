import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  err = null;
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this.auth.register(this.user.email, this.user.password).subscribe((res) => {
      if (res.status === 400 || res.status === 403) {
        this.err = res.message;
      } else {
        console.log(res);
        this.router.navigate(['/login']);
      }
    });
  }
}
