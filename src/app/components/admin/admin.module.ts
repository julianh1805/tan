import { LoadingSpinnerComponent } from './../../globals/loading-spinner/loading-spinner.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { GraphiqueOneComponent } from './graphique-one/graphique-one.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    LoadingSpinnerComponent,
    GraphiqueOneComponent,
  ],
  imports: [
    AdminRoutingModule,
    ChartsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgbDropdownModule
  ],
  exports: [LoadingSpinnerComponent],
  providers: [
    ThemeService
  ],
  entryComponents: [ModalComponent]
})
export class AdminModule { }
