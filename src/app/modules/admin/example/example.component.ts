import { Component, ViewEncapsulation } from '@angular/core';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from './dialog/dialog.component';
import { DialogService } from './services/dialog.service';

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
    constructor( public dialog: MatDialog,
                 private dialogService: DialogService
              )
    {
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
    }

    openDialog() {
      // this.dialog.open( DialogAnimationsExampleDialog, {
      //   width: '390px',
      //   disableClose: true
      // });

      this.dialogService.openConfirmDialog();

    }

}