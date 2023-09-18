import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TegelModule } from '@scania/tegel-angular';
import { Subject, takeUntil } from 'rxjs';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  templateUrl: './settings-page.component.html',
  imports: [ReactiveFormsModule, CommonModule, TegelModule],
})
export default class SettingsPageComponent implements OnInit, OnDestroy {
  constructor(private userStoreService: UserStoreService) {}
  private onDestroy$: Subject<void> = new Subject<void>();

  userName = '';
  userNameError = false;
  placeOfWork = '';
  placeOfWorkError = false;

  formField: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.minLength(10)),
    placeOfWork: new FormControl('', Validators.required),
  });

  submitForm(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    this.userNameError = this.formField.get('userName')?.value < 1;
    this.placeOfWorkError = this.formField.get('placeOfWork')?.value < 1;

    this.userStoreService.updateUserName(this.formField.get('userName')?.value);
    this.userStoreService.updatePlaceOfWork(this.formField.get('placeOfWork')?.value);
    form.reset();
  }

  ngOnInit() {
    this.userStoreService.userName$.pipe(takeUntil(this.onDestroy$)).subscribe((userName) => {
      this.userName = userName;
    });
    this.userStoreService.placeOfWork$.pipe(takeUntil(this.onDestroy$)).subscribe((placeOfWork) => {
      this.placeOfWork = placeOfWork;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
