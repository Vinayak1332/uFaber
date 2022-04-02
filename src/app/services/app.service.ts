import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get('api/getData');
  }

  updateUserById(body: any){
  return this.http.put('api/updateUser/:id', body);
  }

  insertUser(body: any){
    return this.http.post('api/insertData', body);
  }

  deleteUserById(id: any){
    return this.http.delete('api/deleteUser/' + id)
  }

}
