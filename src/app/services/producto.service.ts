import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = 'http://localhost:8080/api/productos'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+'/listar');
  } 
}
