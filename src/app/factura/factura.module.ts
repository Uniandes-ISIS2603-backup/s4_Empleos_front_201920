import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { AppRoutingModule} from '../app-routing/app-routing.module';



import { FacturaService } from './factura.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    NgxPermissionsModule
  ],
  declarations: [FacturaListComponent,FacturaDetailComponent,FacturaCreateComponent],
  providers: [FacturaService],
  exports: [FacturaListComponent]

})
export class FacturaModule { }