import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
declare var require:any
const data = require("../appsettings/applicationsetting.json")
const webpackconfig = data.webpackconfig
const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=>import('./shell-feature/shell-feature.module').then(m=>m.ShellFeatureModule)
  },
  {
    path:'jobs',
    loadChildren:()=> loadRemoteModule(webpackconfig.jobs).then((m:any)=>m.JobsFeatureModule)
  },
  {
    path:'profile',
    loadChildren:()=> loadRemoteModule(webpackconfig.profile).then((m:any)=>m.ProfileFeatureModule)
  },
  {
    path:'setting',
    loadChildren:()=> loadRemoteModule(webpackconfig.setting).then((m:any)=>m.SettingFeatureModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
