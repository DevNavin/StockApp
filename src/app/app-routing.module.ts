import { stockListComponent } from './stock-list/stock-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentimentComponent } from './sentiment/sentiment.component';
import { TrackStockComponent } from './track-stock/track-stock.component';
const Routes: Routes = [
  {path:'stock-list', component: stockListComponent}
];
const routes: Routes =[
  {
    path: '', 
    component: TrackStockComponent 
  },
  {
    path: 'sentiment/:id', 
    component: SentimentComponent 
  }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
