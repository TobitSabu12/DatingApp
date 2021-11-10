import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import{map} from 'rxjs/operators'
import { User } from '../_models/user';

//service is singleton; stay intialised until app is disposed
@Injectable({
  providedIn: 'root'
})
export class AccountService {
   baseurl ='https://localhost:5001/api/';
   private currentUserSource = new ReplaySubject<User>(1) //buffer the values 
   currentUser$ =  this.currentUserSource.asObservable();
  constructor(private http:HttpClient) { }
  //Login
  login(model:any){
    return this.http.post(this.baseurl + 'account/login',model).pipe(
      map((response)=>{
        const user =response as User;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )}
    //Register
register(model: any){
  return this.http.post(this.baseurl +'account/register',model).pipe(
    map((response) => {
      const user =response as User;
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    })
  )

}
    setCurrentUser(user : User){
      this.currentUserSource.next(user)

    }
    logout(){
      localStorage.removeItem('user');
      this.currentUserSource.next(null);
    }
  
}
