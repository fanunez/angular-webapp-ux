import { Component, ViewEncapsulation } from '@angular/core';
import axios from 'axios';

export interface PeriodicElement {
    service: string;
    id: number;
    pay: number;
    date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, service: 'Aguas Andinas', pay: 25000, date: '07/12/2022'},
    {id: 2, service: 'Enel', pay: 53200, date: '14/12/2022'},
    {id: 3, service: 'WOM Movil', pay: 15700, date: '03/12/2022'}
];

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls    : ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    displayedColumns: string[] = ['Servicio', 'Identificador', 'Deuda'];
    dataSource = ELEMENT_DATA;

    /**
     * Constructor
     */
    constructor()
    {
    }

    async ngOnInit() {
        this.getAllServices();
    }


    getAllServices() {
        // get all credentials
        // const axiosInstance = axios.create({
        //     headers: {
        //         "Access-Control-Allow-Origin": "*"
        //     }
        // });

        axios.get( 'http://localhost:8080/service/getall' )
            .then( response => {
                console.log( response.data );
            })
            .catch( error => {
                console.log( error );
            })

    }


}
