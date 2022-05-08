import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadComponent } from './pages/bad/bad.component';
import { GoodComponent } from './pages/good/good.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'bad', component: BadComponent },
  { path: 'good', component: GoodComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
