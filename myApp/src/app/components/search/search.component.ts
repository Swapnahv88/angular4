import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    
  }

  viewMode = 'tab1';

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      originCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      numberOfPassengers: ['', Validators.required],
      priseRange: ['']
  })
  }

  // convenience getter for easy access to form fields
  get originCity() {  return this.searchForm.get("originCity")}
  get destinationCity() { return this.searchForm.get("destinationCity")}
  get departureDate() { return this.searchForm.get("departureDate")}
  get numberOfPassengers() { return this.searchForm.get("numberOfPassengers")}
  get priseRange() { return this.searchForm.get("priseRange")}

  onSubmit(){
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
  }
    alert('Hi');
  }
}
