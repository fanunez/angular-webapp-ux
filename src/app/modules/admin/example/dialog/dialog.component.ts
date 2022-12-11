import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, Validators } from '@angular/forms';

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

    constructor( public _activeModal: NgbActiveModal ) {}

    ngOnInit() {
        //validations
        this.serviceForm = new FormGroup({
            serviceName: new FormControl( null, Validators.required ),
            account: new FormControl( null, Validators.required ),
            inputServiceType: new FormControl( '', Validators.required ),
            billingDate: new FormControl( null, Validators.required ),
            servicePrice: new FormControl( null, Validators.required ),
        })
    }

    public dismissModal() {
        this._activeModal.dismiss();
    }

    onSubmit() {
        this.submitted = true;
        console.log( this.serviceForm );
        // this.submitted = false;
    }


}