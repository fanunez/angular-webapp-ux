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

    closeResult = '';

    constructor( public _activeModal: NgbActiveModal, private modalService: NgbModal ) {}

    ngOnInit() {
    }

    public dismissModal() {
        this._activeModal.dismiss();
    }

    open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}