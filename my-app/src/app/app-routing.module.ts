import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GetallComponent }   from './getall/getall.component';
import { NotFoundComponent }   from './404/404.component';
import { AcceptComponent }   from './accept/accept.component';
import { AcceptingComponent }   from './accepting/accepting.component';
import { Page3Component }   from './page3/page3.component';
const routes: Routes = [


  { path: '', redirectTo: '/getall', pathMatch: 'full' },
  { path: 'getall', component: GetallComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'accept', component: AcceptComponent },
  { path: 'accepting', component: AcceptingComponent },
  { path: 'page3', component: Page3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
