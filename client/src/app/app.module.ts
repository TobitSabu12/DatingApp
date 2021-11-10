import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

//everey angular application must have one module.
@NgModule({  // tells its a module
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailsComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent  //declares components available in our application
  ],
  imports: [
    BrowserModule, //setup browser for displaying 
    AppRoutingModule, /// used for routing
    HttpClientModule, // setting up http request
    BrowserAnimationsModule, // adding bootstrap
    FormsModule,// specifying forms
    SharedModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent] // bootstarps any components when the application loads
})
export class AppModule { }
/**An NgModule describes how the application parts fit together.
 *  Every application has at least one Angular module, the root module,
 *  which must be present for bootstrapping the application on launch. 
 * By convention and by default, this NgModule is named AppModule. */

/**The bootstrapping process sets up the execution environment, 
 * digs the root AppComponent out of the module's bootstrap array,
 *  creates an instance of the component and inserts it within the
 *  element tag identified by the component's selector. */