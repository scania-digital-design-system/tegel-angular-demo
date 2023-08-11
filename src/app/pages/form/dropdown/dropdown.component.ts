import {CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild, OnInit, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
import norwayData from '../../../../assets/norwegianTows.json';
import swedenData from '../../../../assets/swedishTowns.json';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Subject, takeUntil} from 'rxjs'

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownDirective, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownComponent implements OnInit, OnDestroy {
  nowegianTowns = norwayData
  swedishTowns = swedenData
  @ViewChild('norwayDropdown', { static: true }) norwayDropdown!: ElementRef<HTMLTdsDropdownElement>;
  @ViewChild('swedenDropdown', { static: true }) swedenDropdown!: ElementRef<HTMLTdsDropdownElement>;
  @Input() dropdownGroup: FormGroup;
  private onDestroy$: Subject<void> = new Subject<void>()

  ngOnInit(): void {
    this.dropdownGroup.get('country')?.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(e => {
        if (e === 'sweden') {
          this.dropdownGroup.get('norwegianTown')?.disable()
          this.dropdownGroup.get('swedishTown')?.enable()
          this.norwayDropdown.nativeElement.reset().then(_ => {})
        }
        if (e === 'norway') {
          this.dropdownGroup.get('swedishTown')?.disable()
          this.dropdownGroup.get('norwegianTown')?.enable()
          this.swedenDropdown.nativeElement.reset().then(_ => {})
        }
      })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }
}
