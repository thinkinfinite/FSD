import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { ManageCompanyComponent } from './company/manage-company/manage-company.component';
import { LoginComponent } from './user/login/login.component';
import { ListIpoComponent } from './admin/list-ipo/list-ipo.component';
import { AddIpoDetailComponent } from './admin/add-ipo-detail/add-ipo-detail.component';
import { IpoDetailsComponent } from './user/ipo-details/ipo-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'company',
    children: [
      { path: 'create-company', component: CreateCompanyComponent},
      { path: 'manage-company', component: ManageCompanyComponent},
    ]
  },
  {
    path: 'user',
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'view-ipo', component: IpoDetailsComponent},
      { path: 'compare-charts', component: CompareChartsComponent},
    ]
  },
  {
    path: 'admin',
    children: [
      { path: 'ipo-list', component: ListIpoComponent},
      { path: 'add-ipo', component: AddIpoDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
