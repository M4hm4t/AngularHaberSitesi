import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent },// Ana Sayfa
  { path: 'Teknoloji', component: TechnewsComponent }, //Teknoloji
  { path: 'Ekonomi', component: BusinessnewsComponent },// Ekonomi
  { path: 'Magazin', component: EntertainmentComponent },//Magazin
  { path: 'Sağlık', component: HealthnewsComponent },//Sağlık
  { path: 'Spor', component: SportsnewsComponent },//Spor
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
