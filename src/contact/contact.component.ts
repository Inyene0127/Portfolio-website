import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormGroup


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  form: any;

  constructor(){
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    })}

  get name(){
    return this.form.get('name');
  }

  get email(){
    return this.form.get('email');
  }
  
  get message(){
    return this.form.get('message');
  }
  ngOnInit(): void {
      
  }
}
