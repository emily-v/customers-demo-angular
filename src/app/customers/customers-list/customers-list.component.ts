import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  //styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  // @Input can go on EITHER get or set
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: any[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';
  
  constructor(private sorterService: SorterService) { }

  ngOnInit() {
    // this.filteredCustomers = [
    //   { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    //   { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //   { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //   { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    // ];
  }
  // this would be useful for monitoring multiple changes - would have to import SimpleChanges
  // ngOnChanges(changes: SimpleChanges) {}

  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
        this.calculateOrders();
    } else {
        this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
