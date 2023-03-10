import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import { SummaryComponent } from './summary/summary.component';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: SummaryComponent },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: []
})
export class AppRoutingModule { }


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SummaryComponent,
    TransactionCardComponent,
    PieChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
