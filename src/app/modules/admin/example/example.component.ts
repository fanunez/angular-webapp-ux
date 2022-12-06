import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import axios from 'axios';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls    : ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    displayedColumns: string[] = ['Servicio', 'Identificador', 'Deuda', 'Pagar'];
    dataSource = [];

    /**
     * Constructor
     */
    constructor( private modalService: NgbModal ) {
    }

    async ngOnInit() {
        await this.getAllServices();
    }


    async getAllServices() {
        await axios.get( 'http://localhost:8080/service/get-all-formatted' )
            .then( response => {
              this.dataSource = response.data;
            })
            .catch( error => {
                console.log( error );
            })
    }


    payingToday() {
    }


    open( name: string, pay: string ) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name_service = name;
      modalRef.componentInstance.price_service = pay;
    }


    openNewServiceModal() {
      this.modalService.open(NgbdModalCreateService);
    }


}

@Component({
	selector: 'ngbd-modal-content',
	template: `
  <div class="modal-header">
    <h4 class="modal-title">Confirmación de pago</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
    <p> ¿Estás seguro de querer pagar la cuenta de <b>{{ name_service }}</b>? </p>
    <p> Total por pagar: <b> $ {{ price_service }}</b> </p>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-success" (click)="payBill()">Quiero pagar</button>
    <button type="button" class="btn btn-danger" (click)="activeModal.close('Close click')">Cerrar</button>
  </div>
	`,
})

export class NgbdModalContent {
	@Input() name_service;
  @Input() price_service;

  showPayBill = false;
  showPayLoader = true;

	constructor(public activeModal: NgbActiveModal) {}

  payBill() {
    const payload = {
        "rut": "12.345.678-9",
        "name": "Luciano",
        "email": "mail@mail.com",
        "password": "1234",
        "accounts": [
          {
            "_id": "029nw0eixwxlask",
            "type_account": 1,
            "number_account": "1357",
            "bank_account": "Banco de Crédito e Inversiones",
            "balance": 250000
          },
          {
            "_id": "oi2nc027d",
            "type_account": 1,
            "number_account": "1234",
            "bank_account": "Banco de Chile",
            "balance": 500000
          }
        ],
        "services": [
          {
            "_id": "uqi3g87d",
            "name_service": "Aguas Andinas",
            "type_service": "Agua Potable",
            "billing_date": 24,
            "price_service": 50000,
            "user_account": {
              "_id": "029nw0eixwxlask",
              "type_account": 1,
              "number_account": "1357",
              "bank_account": "Banco de Crédito e Inversiones",
              "balance": 300000
            },
            "service_account": {
              "_id": "09e3nxew9com",
              "type_account": 2,
              "number_account": "5678",
              "bank_account": "Banco Estado",
              "balance": 700000
            }
          }
        ],
        "vouchers": [
          {
            "_id": "ID_Voucher",
            "amount": 50000,
            "transaction_date": "2022/11/24",
            "account_source": "1357",
            "account_destination": "5678"
          }
        ]
    }
    axios.put( 'http://localhost:8080/pay/automatic', payload )
      .then( (response) => {
        console.log( response )
      })
      .catch( error => console.log( error ));
    
    this.activeModal.close();

  }

}


@Component({
	selector: 'ngbd-modal-create-service',
	template: `
  <div class="modal-header">
    <h4 class="modal-title">Agregar un nuevo servicio</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">

    <form>
      <!-- Name service -->
      <div class="form-group row">
        <label for="inputEmail3" class="row col-form-label">Nombre del servicio</label>
        <div class="row">
          <!-- <input type="text" class="form-control" id="inputEmail3" [(ngModel)]="favoriteColor"> -->
          <input type="text" class="form-control" id="inputEmail3">
        </div>
      </div>
      <!-- Service type -->
      <div class="form-group row">
        <label for="inputEmail3" class="row col-form-label">Tipo de servicio</label>
        <div class="row">
          <input type="text" class="form-control" id="inputEmail3">
        </div>
      </div>
      <!-- Billing date -->
      <div class="form-group row">
        <label for="inputEmail3" class="row col-form-label">Día de cobro</label>
        <div class="row">
          <input type="number" class="form-control" id="inputEmail3">
        </div>
      </div>
      <!-- Price service -->
      <div class="form-group row">
        <label for="inputEmail3" class="row col-form-label">Precio del servicio</label>
        <div class="row">
          <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>
    </form>

  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-success" (click)="createService()">Agregar servicio</button>
    <button type="button" class="btn btn-danger" (click)="activeModal.close('Close click')">Cancelar</button>
  </div>
	`,
})

export class NgbdModalCreateService {

  favoriteColor = '';

	constructor(public activeModal: NgbActiveModal) {}

  createService() {

    console.log( )

    // const payload = {
    //   name_service: 'name',
    //   type_service: '',
    //   billing_date: '',
    //   price_service: '',
    //   user_account: '',
    //   service_account: ''
    // }

    // axios.post( 'http://localhost:8080/service/create', payload )
    //   .then( response => {
    //     console.log( response.data );
    //   })
    //   .catch( error => {
    //     console.log( error );
    //   })
  }

}

