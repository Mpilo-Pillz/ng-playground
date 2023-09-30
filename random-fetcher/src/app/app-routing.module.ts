import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './random-user/random-user.component';
import { AgGridDojoComponent } from './ag-grid-dojo/ag-grid-dojo.component';

const routes: Routes = [
  {
    path: '', component: RandomUserComponent
  },
  {
    path: 'ag-grid',
    component: AgGridDojoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
