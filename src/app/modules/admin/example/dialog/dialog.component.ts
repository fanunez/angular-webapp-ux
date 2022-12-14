import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DialogResultComponent } from '../dialog-result/dialog-result.component';

import axios from 'axios';

@Component({
	selector: 'dialog-create-service',
	templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
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
            billingDate: new FormControl( null, Validators.required ),
            servicePrice: new FormControl( null, Validators.required )
        })
    }

    public dismissModal() {
        this._activeModal.dismiss();
    }

    onSubmit() {
        this.submitted = true;
        console.log( this.serviceForm );

        const currentDate = new Date();
        if( currentDate.getDate() - this.serviceForm.value.billingDate > 0 ) {
            this.serviceForm.value.billingDate = this.serviceForm.value.billingDate + '/12/2022';
        } else {
            this.serviceForm.value.billingDate = this.serviceForm.value.billingDate + '/02/2023';
        }

        const payload = {
            name_service: this.serviceForm.value.serviceName,
            type_service: this.serviceForm.value.inputServiceType,
            billing_date: this.serviceForm.value.billingDate,
            price_service: this.serviceForm.value.servicePrice,
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
        this.submitted = false;
    }

}