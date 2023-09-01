import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from '@components/accordion/accordion.component';
import { BadgeComponent } from 'src/app/components/badge/badge.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { BlockComponent } from 'src/app/components/block/block.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { CardComponent } from 'src/app/components/card/card.component';
import TextareaComponent from 'src/app/components/textarea/textarea.component';
import TextFieldComponent from '@components/text-field/text-field.component';
import PopoverCanvasComponent from '@components/popover-canvas/popover-canvas.component';
import ModalComponent from 'src/app/components/modal/modal.component';
import DatetimeComponent from '@components/datetime/datetime.component';
import RadioButtonComponent from 'src/app/components/radio-button/radio-button.component';
import { DividerComponent } from '@components/divider/divider.component';
import ToastComponent from '@components/toast/toast.component';
import TooltipComponent from '@components/tooltip/tooltip.component';
import PopoverMenuComponent from '@components/popover-menu/popover-menu.component';
import SpinnerComponent from 'src/app/components/spinner/spinner.component';
import MessageComponent from 'src/app/components/message/message.component';
import { ToggleComponent } from '@components/toggle/toggle.component';
import { BreadcrumbsComponent } from '@components/breadcrumbs/breadcrumbs.component';
import ChipsComponent from '@components/chips/chips.component';
import { DropdownComponent } from '@components/dropdown/dropdown.component';
import { LinkComponent } from '@components/link/link.component';
import StepperComponent from '@components/stepper/stepper.component';
import { StepperExampleComponent } from '@components/stepper-example/stepper-example.component';
import { TabsComponent } from '@components/tabs/tabs.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  standalone: true,
  imports: [
    AccordionComponent,
    BadgeComponent,
    BannerComponent,
    ButtonComponent,
    BlockComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    CardComponent,
    DatetimeComponent,
    DividerComponent,
    TextFieldComponent,
    PopoverCanvasComponent,
    PopoverMenuComponent,
    TextareaComponent,
    ToastComponent,
    TooltipComponent,
    RadioButtonComponent,
    FormsModule,
    ModalComponent,
    SpinnerComponent,
    MessageComponent,
    ToggleComponent,
    BreadcrumbsComponent,
    ChipsComponent,
    DropdownComponent,
    LinkComponent,
    StepperComponent,
    StepperExampleComponent,
    TabsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class ComponentsComponent {}
