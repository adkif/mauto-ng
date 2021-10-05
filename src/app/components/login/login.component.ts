import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  returnUrl!: string;
  err = null;
  constructor(private auth: AuthService, private route: ActivatedRoute,
    private router: Router,) {
      console.log(this.auth.getTokenSubject.value);

      if (this.auth.getTokenSubject.value) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.auth
      .login(this.user.email, this.user.password)
      .pipe(first())
      .subscribe((res) => {
        if(res.status === 400 || res.status === 403 ){
          this.err = res.message;
        }else{
          console.log(res);
          this.router.navigate([this.returnUrl]);
        }
      }
      );
  }
}
