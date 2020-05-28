import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { User } from 'firebase';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {

  public user:User;
  constructor(public afAuth: AngularFireAuth) { }

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
  getCurrentUser(){
    try{
      return this.afAuth.authState.pipe(first()).toPromise();
    }
    catch(error){
      console.log(error);
    }
  }
}
