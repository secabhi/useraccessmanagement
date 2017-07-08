import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { ActionComponent } from './action/action.component';
import { ResourcesComponent } from './resources/resources.component';
import { RolesComponent } from './roles/roles.component';
import { SignupComponent } from './signup/signup.component';

import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityboardComponent } from './activityboard/activityboard.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'activity', component: ActivityboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'actions', component: ActionComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'resources', component: ResourcesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActionComponent,
    ResourcesComponent,
    RolesComponent,
    SignupComponent,
    NavbarComponent,
    ActivityboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
