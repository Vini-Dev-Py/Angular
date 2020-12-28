import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-crud',
  templateUrl: './customers-crud.component.html',
  styleUrls: ['./customers-crud.component.css']
})
export class CustomersCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navgateToCustomersCreate(): void {
    this.router.navigate(['/customers/create'])
  }

}
