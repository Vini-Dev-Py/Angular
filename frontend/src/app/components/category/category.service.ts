import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  CategoryUrl = "https://localhost:5501/api/v1/category"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) {  }

  showMessageProducts(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  readCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CategoryUrl)
  }

  readCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.CategoryUrl}/${id}`)
  } 

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.CategoryUrl,
      category
    )
  }

}
