import { Observable } from 'rxjs';
import { Component  } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [AuthService],
})
export class SendEmailComponent {
 public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) { }

  onSendEmail():void{
    //console.log("send email");
    this.authSvc.sendEmailVerification();
  }
}
