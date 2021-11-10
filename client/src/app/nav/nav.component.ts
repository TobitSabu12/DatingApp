import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

/**angular provide 2 way binding
 *   1-> bind properties in componenta nd update in template
 * or
 *  2-> get data from and update the componets 
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any ={ }
 

  constructor(public accountService : AccountService ,private router: Router ,private toaster : ToastrService) 
   {

    }

  ngOnInit(): void {
   
  }
  login(){
    this.accountService.login(this.model).subscribe(response =>
      {
        this.router.navigateByUrl('/members')
        
      });
   
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    
  }
 

}
