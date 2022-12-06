import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import axios from 'axios';

@Component({
	selector: 'dialog-create-service',
	templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class DialogCreateComponent {

    constructor( public _activeModal: NgbActiveModal ) {

    }

    public dismissModal() {
        this._activeModal.dismiss();
    }

    createService() {
        alert("funciona la wea");
    }


}