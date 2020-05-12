import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { ManageCompanyComponent } from './company/manage-company/manage-company.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { LoginComponent } from './user/login/login.component';
import { IpoDetailsComponent } from './user/ipo-details/ipo-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { UploadDataComponent } from './admin/upload-data/upload-data.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { ListIpoComponent } from './admin/list-ipo/list-ipo.component';
import { AddIpoDetailComponent } from './admin/add-ipo-detail/add-ipo-detail.component';
import { HeaderComponent } from './user/header/header.component';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartDialogComponent } from './user/chart-dialog/chart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    ManageCompanyComponent,
    SubHeaderComponent,
    LoginComponent,
    IpoDetailsComponent,
    CompareChartsComponent,
    ListStockExchangeComponent,
    AddStockExchangeComponent,
    UploadDataComponent,
    UpdateProfileComponent,
    ListIpoComponent,
    AddIpoDetailComponent,
    HeaderComponent,
    ChartDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgChartjsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgChartjsModule.registerPlugin()
  ],
  providers: [],
  entryComponents: [ChartDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
