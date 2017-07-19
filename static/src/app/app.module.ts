import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { ActionComponent } from './action/action.component';
import { ResourcesComponent } from './resources/resources.component';
import { RolesComponent } from './roles/roles.component';
import { SignupComponent } from './signup/signup.component';

import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityboardComponent } from './activityboard/activityboard.component';
import { GroupedmappingComponent } from './groupedmapping/groupedmapping.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'activity', component: ActivityboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'actions', component: ActionComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'resources', component: ResourcesComponent }
]

@NgModule({
  exports: [
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,

  ]
})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActionComponent,
    ResourcesComponent,
    RolesComponent,
    SignupComponent,
    NavbarComponent,
    ActivityboardComponent,
    GroupedmappingComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
