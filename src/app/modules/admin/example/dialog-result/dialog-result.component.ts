import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import axios from 'axios';

@Component({
	selector: 'dialog-result-create-service',
	templateUrl: './dialog-result.component.html',
    styleUrls: ['./dialog-result.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class DialogResultComponent {

    constructor( public _activeModal: NgbActiveModal, private modalService: NgbModal ) {}

    ngOnInit() {
    }

    public dismissModal() {
        this._activeModal.dismiss();
    }

    closeResult() {
		window.location.reload();
	}

}