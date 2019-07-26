import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) {}

    getAll(){
    return this._http.get('/api/pets')

 }

    getOne(id){
      return this._http.get(`/api/pets/${id}`)

    }

    create(prod){
      return this._http.post('/api/pets', prod)

    }

    
    update(id, prod){

      return this._http.post(`/api/pets/${id}`, prod )

    }

    delete(id){

      return this._http.delete(`/api/pets/${id}`)

    }

    addLike(id, likes){

      return this._http.put(`/api/pets/${id}/like`, likes)

    }



}





