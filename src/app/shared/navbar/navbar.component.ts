import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user: any;
  constructor(public authSvc: AuthService, private router:Router) { }

  async ngOnInit(){
    console.log('nav');
     this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged = true; 
    }
  }

  async logout(){
    try{
      await this.authSvc.logOut();
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log('error=>',error);
    }
  }
}
