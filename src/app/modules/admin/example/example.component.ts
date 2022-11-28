import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls    : ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit
{
    displayedColumns: string[] = ['Servicio', 'Identificador', 'Deuda'];
    dataSource = [];

    /**
     * Constructor
     */
    constructor()
    {
    }

    async ngOnInit() {
        await this.getAllServices();
        console.log( this.dataSource );
        
    }


    async getAllServices() {

        await axios.get( 'http://localhost:8080/service/get-all-formatted' )
            .then( response => {
                this.dataSource = response.data;
                
                // for( let i = 0; i < response.data.length; i++ ) {
                    
                //     const requiredPayload = {
                //         name_service: response.data[i].name_service,
                //         id: response.data[i].id,
                //         price_service: response.data[i].price_service,
                //         date: response.data[i].date
                //     }

                //     this.dataSource.push( requiredPayload );
                    
                // }

            })
            .catch( error => {
                console.log( error );
            })

    }


}
