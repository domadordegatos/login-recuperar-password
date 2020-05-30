import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async sendEmailVerification():Promise<void>{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async resetPassword(email:string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){console.log(error);
    }
  }


  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }
  async register(email:string, password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      this.sendEmailVerification();
      return result;
    }
    catch(error){
      console.log(error);
    }
  }
  async logOut(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }
}
