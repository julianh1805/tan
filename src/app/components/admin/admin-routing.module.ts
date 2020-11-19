import { GraphiqueOneComponent } from './graphique-one/graphique-one.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }, {
        path: 'previsions',
        component: GraphiqueOneComponent,
      }, {
        path: 'utilisateurs/gestion',
        component: UsersComponent,
      }
      , {
        path: 'utilisateurs/ajouter',
        component: UsersComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
