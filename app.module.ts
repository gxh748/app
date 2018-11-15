import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FatherRouteComponent } from './father-route/father-route.component';
import { ChildRouteDataComponent } from './child-route-data/child-route-data.component';
import { ChildRouteIdComponent } from './child-route-id/child-route-id.component';
import { ChildRouteWildComponent } from './child-route-wild/child-route-wild.component';

const appRoutes:Routes=[
  { path: 'father-route', component: FatherRouteComponent },
  { path: 'hero/:id',      component: ChildRouteIdComponent },
  {
    path: 'heroes',
    component: ChildRouteDataComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/father-route',
    pathMatch: 'full'
  },
  { path: '**', component: ChildRouteWildComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FatherRouteComponent,
    ChildRouteDataComponent,
    ChildRouteIdComponent,
    ChildRouteWildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
