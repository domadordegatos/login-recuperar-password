import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [AuthService]
})
export class ForgotPasswordComponent implements OnInit {

  userEmail = new FormControl('');


  constructor(private authSvc:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  async onReset(){
    try{
      const email = this.userEmail.value;
      //console.log('reset');
      this.authSvc.resetPassword(email);
      window.alert('por favor revisa tu correo');
      this.route.navigate[('/login')];
    }
    catch(error){console.log(error);
    }
    
  }


}
