import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {CuentaDeCobro} from './cuenta-de-cobro';
import {CuentaDeCobroDetail} from '../cuenta-de-cobro/cuenta-de-cobro-detail';
import {environment} from '../../environments/environment';
const API_URL = "http://localhost:8080/s4_empleos-api/api/";
const cuentas = '/cuentas';



/**
* The service provider for everything related to books
*/
@Injectable()
export class CuentaDeCobroService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}


    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getCuentaDeCobro(): Observable<CuentaDeCobro[]> {
        return this.http.get<CuentaDeCobro[]>(API_URL + cuentas);
    }

    /**
    * Creates a new book
    * @param cuentaDeCobro The new book
    * @returns The book with its new id if it was created, false if it wasn't
    */
    createBook(cuentaDeCobro): Observable<CuentaDeCobroDetail> {
        return this.http.post<CuentaDeCobroDetail>(API_URL + cuentas, cuentaDeCobro);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getCuentasDeCobroDetail(cuentaDeCobroId): Observable<CuentaDeCobroDetail> {
        return this.http.get<CuentaDeCobroDetail>(API_URL + cuentas + '/' + cuentaDeCobroId);
    }

   

    /**
        * Updates a new book
        * @param cuentaDeCobro The updated book
        * @returns The updated book
        */
    updateCuentaDeCobro(cuentaDeCobro): Observable<CuentaDeCobroDetail> {
        return this.http.put<CuentaDeCobroDetail>(API_URL +cuentas + '/' + cuentaDeCobro.id, cuentaDeCobro);
    }
    
    /**
    * Deletes a book
    * @param cuentaId The book's id
    * @returns True if the book was deleted, false otherwise
    */
    deleteCuentaDeCobro(cuentaId): Observable<CuentaDeCobroDetail> {
        return this.http.delete<CuentaDeCobroDetail>(API_URL + cuentas + '/' + cuentaId);
    }


}
