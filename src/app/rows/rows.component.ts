import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss'],
})
export class RowsComponent {
  userForm: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  addItem() {
    this.listData.push(this.userForm.value);
    if (this.userForm.valid) {
      this.userForm.reset();
    }
    console.log(this.userForm);
    console.log(this.userForm.value);
    console.log(this.listData);
  }

  resetForm() {
    this.userForm.reset();
  }

  removeItem(element: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == element) this.listData.splice(index, 1);
    });
  }
}
