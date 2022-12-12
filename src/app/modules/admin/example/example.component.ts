import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { DialogCreateComponent } from './dialog/dialog.component';
import { DialogResultComponent } from './dialog-result/dialog-result.component';

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

    public stopEditingModal: NgbModalRef;

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

    open( name: string, pay: string ) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name_service = name;
      modalRef.componentInstance.price_service = pay;
    }

    openNewServiceModal() {
      const modalConfig: NgbModalOptions = {
        windowClass: 'info-modal-sm',
        ariaLabelledBy: 'info-modal',
        centered: true
      };

      this.modalService.open( DialogCreateComponent, modalConfig );


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

	constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

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
    
    const modalConfig: NgbModalOptions = {
      windowClass: 'info-modal-sm',
      ariaLabelledBy: 'info-modal',
      centered: true
    };
      
    this.modalService.open( DialogResultComponent, modalConfig );
    

    this.activeModal.close();

  }

}