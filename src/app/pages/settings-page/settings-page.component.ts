import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ReactiveFormsModule,CommonModule],
})
export default class SettingsPageComponent implements OnInit {
  constructor(private userStoreService: UserStoreService) {}

  userName = '';
  userNameError = false;
  placeOfWork = '';
  placeOfWorkError = false;

 
  
  formField: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.minLength(10)),
    placeOfWork: new FormControl('', Validators.required),
  });


  ngOnInit() {
    this.userStoreService.userName$.subscribe((userName) => {
      this.userName = userName;
    });

    this.userStoreService.placeOfWork$.subscribe((placeOfWork) => {
      this.placeOfWork = placeOfWork;
    });
  }


  submitForm(event: SubmitEvent){
    event.preventDefault()
    const form = event.target as HTMLFormElement

    this.userNameError = this.formField.get('userName')?.value < 1
    this.placeOfWorkError = this.formField.get('placeOfWork')?.value < 1
    
    if(!this.userNameError && !this.placeOfWorkError){
      this.userStoreService.updateUserName(this.formField.get('userName')?.value)
      this.userStoreService.updatePlaceOfWork(this.formField.get('placeOfWork')?.value)
      form.reset()
    }
  }
}
