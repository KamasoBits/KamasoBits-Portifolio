import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactDetails = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  constructor(private http: HttpClient) { }

  sendContact(){
    this.http.post('', this.contactDetails,{responseType:'text'}).subscribe({
      next:(res: any) => alert(res),
      error:(error: { error: string; }) => alert('Failde to Send:' +error.error)
    })
  }
}
