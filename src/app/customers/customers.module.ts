import { CommonModule } from '@angular/common'; // only import BrowserModule in parent module
// import CommonModule in child modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CustomersRoutingModule
  ],
  providers: [],
  exports: [ CustomersComponent ] // will be changing this later
})

export class CustomersModule { }