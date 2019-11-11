import { Component, OnInit } from '@angular/core';
import{CuentaDeCobro} from '../cuenta-de-cobro';
import { CuentaDeCobroDetail } from '../cuenta-de-cobro-detail';
import { CuentaDeCobroService } from '../cuenta-de-cobro.service';
@Component({
  selector: 'app-cuenta-de-cobro-list',
  templateUrl: './cuenta-de-cobro-list.component.html',
  styleUrls: ['./cuenta-de-cobro-list.component.css']
})
export class CuentaDeCobroListComponent implements OnInit {
/**
* The list of editorials which belong to the BookStore
 */ cuentas: CuentaDeCobro[];

 

  selectedDetail: CuentaDeCobroDetail;

  constructor(private cuentaDeCobroService: CuentaDeCobroService) { }

  getCuentaDeCobro(id:number): void {
    this.cuentaDeCobroService.getCuentasDeCobroDetail(id).subscribe(cuenta => {
      this.selectedDetail = cuenta;
    });
  }
  getCuentasDeCobro(): void {
    this.cuentaDeCobroService.getCuentasDeCobro().subscribe(cuentas => 
    {
      if(cuentas.length > 0) {
        this.cuentas = cuentas;
      }
    });
  }

  ngOnInit() {
    this.getCuentasDeCobro();
  }

  onSelected(id: number) {
    this.getCuentaDeCobro(id);
  }

}