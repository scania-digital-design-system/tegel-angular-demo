import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import norwayData from '../../../../assets/norwegianTows.json';
import swedenData from '../../../../assets/swedishTowns.json';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit, OnDestroy {
  nowegianTowns = norwayData;
  swedishTowns = swedenData;
  @ViewChild('norwayDropdown', { static: true })
  norwayDropdown!: HTMLTdsDropdownElement;
  @ViewChild('swedenDropdown', { static: true })
  swedenDropdown!: HTMLTdsDropdownElement;
  @Input() dropdownGroup: FormGroup;
  private onDestroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.dropdownGroup
      .get('country')
      ?.valueChanges.pipe(takeUntil(this.onDestroy$))
      .subscribe((countryValue) => {
        if (countryValue === 'sweden') {
          this.dropdownGroup.get('norwegianTown')?.disable();
          this.dropdownGroup.get('swedishTown')?.enable();
          this.norwayDropdown.reset().then((_) => {});
        }
        if (countryValue === 'norway') {
          this.dropdownGroup.get('swedishTown')?.disable();
          this.dropdownGroup.get('norwegianTown')?.enable();
          this.swedenDropdown.reset().then((_) => {});
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
