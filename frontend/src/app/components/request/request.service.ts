import { Requests } from './request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  RequestsUrl = "http://127.0.0.1:8000/requests/requests/"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    showMessageProducts(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    creteRequests(request: Requests): Observable<Requests> {
      return this.http.post<Requests>(
        this.RequestsUrl,
        request
      )
    }

    readRequests(): Observable<Requests[]> {
      return this.http.get<Requests[]>(this.RequestsUrl)
    }
}
