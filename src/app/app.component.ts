import { Component } from '@angular/core';
import { NgForm,FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  // title = 'learn-angular';
  // name = new FormControl();

  // profileForm = new FormGroup({
  //   firstN: new FormControl(),
  //   lastN: new FormControl(),
  //   address : new FormGroup({
  //     city : new FormControl(),
  //     street : new FormControl()
  //   })
  // });

  // constructor(){
  //   this.name.valueChanges.subscribe(change =>
  //      console.log('change is' , change));
  // }
  // onSubmit(){
  //   console.log(this.profileForm.value);
  // }
  // updateValue(){
  //   this.profileForm.patchValue({
  //     firstN: "moaaz",
  //     lastN: "mohsen",
  //   })
  // }

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({

      firstN: [
        '', 
        [Validators.required,
        Validators.minLength(3)]],
      lastN: ['',
        [Validators.required,
         Validators.max(5)
      ]],
      email: 
         ['',
         [Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.com$')
        ]],
      address : this.fb.group({
        city : '',
        street : ''
      })
    });
  }

  onSubmit(){
    console.log(this.profileForm.value);
    // console.log(this.profileForm.get('firstN'));
    this.profileForm.patchValue({
      firstN: "",
      lastN: "",
      address : ({
        city : '',
        street : ''
      })
    });
    // this.email?.disabled();
  }

  // get firstN(){
  //   return this.profileForm.get('firstN');
  // }
  
  updateValue(){
    this.profileForm.patchValue({
      firstN: "moaaz",
      lastN: "mohsen",
      
    })
  }

}
