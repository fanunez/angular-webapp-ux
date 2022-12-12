import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DialogResultComponent } from '../dialog-result/dialog-result.component';

import axios from 'axios';

@Component({
	selector: 'dialog-create-service',
	templateUrl: './dialog.component.html',
    encapsulation: ViewEncapsulation.None
})

export class DialogCreateComponent {

    serviceForm : FormGroup;
    submitted = false;

    constructor( public _activeModal: NgbActiveModal, private modalService: NgbModal ) {}

    ngOnInit() {
        //validations
        this.serviceForm = new FormGroup({
            serviceName: new FormControl( null, Validators.required ),
            inputBankType: new FormControl( '', Validators.required ),
            account: new FormControl( null, Validators.required ),
            inputServiceType: new FormControl( '', Validators.required ),
            billingDate: new FormControl( '', Validators.required ),
            servicePrice: new FormControl( null, Validators.required ),
        })
    }

    public dismissModal() {
        this._activeModal.dismiss();
    }

    onSubmit( data ) {
        this.submitted = true;
        console.log( this.serviceForm );
        // this.submitted = false;

        const payload = {
            name_service: data.serviceName,
            type_service: data.inputServiceType,
            billing_date: data.billingDate+'/01/2023',
            price_service: data.servicePrice,
            user_account: null,
            service_account: {
                type_account: 2,
                number_account: "1535",
                bank_account: "BancoEstado",
                balance: 180000
            }
        }

        axios.post( 'http://localhost:8080/service/create', payload )
            .then( (response) => {
                console.log( response );
                this._activeModal.dismiss();

            })
            .catch( (error) => {
                console.log( error );
                
            })

        const modalConfig: NgbModalOptions = {
            windowClass: 'info-modal-sm',
            ariaLabelledBy: 'info-modal',
            centered: true
          };
          
        this.modalService.open( DialogResultComponent, modalConfig );

        this._activeModal.close();

    }

}