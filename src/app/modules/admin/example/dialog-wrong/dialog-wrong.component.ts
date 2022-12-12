import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'dialog-wrong-create-service',
	templateUrl: './dialog-wrong.component.html',
    styleUrls: ['./dialog-wrong.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class DialogWrongResultComponent {

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