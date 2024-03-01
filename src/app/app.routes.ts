import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
        title:'Home | CrickInformer'
    },
    {
        path:'live',
        component:LiveComponent,
        title:'Live Score | CrickInforme'
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:'Point Table | CrickInforme'
    },
    {   
        path:"history",
        component:HistoryComponent,
        title:'Matches History | CrickInforme'
     }
];
