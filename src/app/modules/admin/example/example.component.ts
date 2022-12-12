import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { DialogCreateComponent } from './dialog/dialog.component';
import { DialogResultComponent } from './dialog-result/dialog-result.component';
import { DialogWrongResultComponent } from './dialog-wrong/dialog-wrong.component';

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
    balance= 0;

    public stopEditingModal: NgbModalRef;

    /**
     * Constructor
     */
    constructor( private modalService: NgbModal ) {
    }

    async ngOnInit() {
        await this.getAllServices();
        await this.getBalance();
    }


    async getAllServices() {
        await axios.get( 'http://localhost:8080/service/get-all-formatted' )
            .then( response => {
              this.dataSource = response.data;
              console.log( this.dataSource );
            })
            .catch( error => {
                console.log( error );
            })
    }

    async getBalance() {
      await axios.get( 'http://localhost:8080/balance/getall' )
        .then( response => {
          this.balance = response.data[0].balance;
        })
        .catch( error => {
          console.log( error );
        })
    }

    open( name: string, pay: string ) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name_service = name;
      modalRef.componentInstance.price_service = pay;
      modalRef.componentInstance.balance = this.balance;
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
  @Input() balance;

  showPayBill = false;
  showPayLoader = true;

	constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

  payBill() {

    if( this.balance - this.price_service > 0 ) {
      const payload = {
        id: "1",
        balance: this.balance - this.price_service
      }
  
      axios.put( 'http://localhost:8080/balance/update', payload )
        .then( (response) => {
          console.log( response );
          const modalConfig: NgbModalOptions = {
            windowClass: 'info-modal-sm',
            ariaLabelledBy: 'info-modal',
            centered: true
          };
          this.modalService.open( DialogResultComponent, modalConfig );
        })
        .catch( error => {
          console.log( error );
        });
        
      } else {
        
        const modalConfig: NgbModalOptions = {
          windowClass: 'info-modal-sm',
          ariaLabelledBy: 'info-modal',
          centered: true
        };
        this.modalService.open( DialogWrongResultComponent, modalConfig );


    }

    this.activeModal.close();

  }

}