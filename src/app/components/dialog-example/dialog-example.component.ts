import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})


export class DialogExampleComponent implements OnInit {

 

  matcher = new MyErrorStateMatcher();



  myform: FormGroup;
  constructor(private fb: FormBuilder,
    ) { }

    public showPassword: boolean = false;
  public togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

 

  ngOnInit(): void {

    
    this.myform = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        
    });

    
  

}
}
