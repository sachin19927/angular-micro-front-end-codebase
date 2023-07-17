import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileFeatureRoutingModule } from './profile-feature-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileFeatureRoutingModule
  ]
})
export class ProfileFeatureModule { }
