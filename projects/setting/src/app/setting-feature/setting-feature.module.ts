import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingFeatureRoutingModule } from './setting-feature-routing.module';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingFeatureRoutingModule
  ]
})
export class SettingFeatureModule { }
