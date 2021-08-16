import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'learn-angular';
  name = new FormControl();

  profileForm = new FormGroup({
    firstN: new FormControl(),
    lastN: new FormControl(),
    address : new FormGroup({
      city : new FormControl(),
      street : new FormControl()
    })
  });
  constructor(){
    this.name.valueChanges.subscribe(change =>
       console.log('change is' , change));
  }

  onSubmit(){
    console.log(this.profileForm.value);
  }
  updateValue(){
    this.profileForm.patchValue({
      firstN: "moaaz",
      lastN: "mohsen",
    })
  }
}
