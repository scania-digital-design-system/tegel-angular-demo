import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import BreadcrumbsComponent from '../../navigation/breadcrumbs/breadcrumbs.component';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  standalone: true,
  imports: [CommonModule, TegelModule],
})
export default class ChipsComponent {
  submittedData: string;
  data = {
    topic: {
      name: 'topic',
      title: 'Which topic are you interested in?',
      required: true,
      preselected: 'topic5',
      fields: [
        { name: 'Qwik', id: 'topic1', disabled: false },
        { name: 'Svelte', id: 'topic2', disabled: false },
        { name: 'Solid', id: 'topic3', disabled: false },
        { name: 'React', id: 'topic4', disabled: false },
        { name: 'Remix', id: 'topic5', disabled: false },
        { name: 'Angular', id: 'topic6', disabled: false },
        { name: 'Vue', id: 'topic7', disabled: false },
        { name: 'Ember', id: 'topic8', disabled: false },
        { name: 'Meteor', id: 'topic9', disabled: false },
        { name: 'Backbone', id: 'topic10', disabled: false },
        { name: 'Knockout', id: 'topic11', disabled: false },
        { name: 'Polymer', id: 'topic12', disabled: false },
        { name: 'Aurelia', id: 'topic13', disabled: false },
      ],
    },
    size: {
      name: 'size',
      title: 'What is your preferred size?',
      required: true,
      preselected: null,
      fields: [
        { name: 'xxs', id: 'size1', disabled: false },
        { name: 'xs', id: 'size2', disabled: false },
        { name: 'sm', id: 'size3', disabled: false },
        { name: 'md', id: 'size4', disabled: false },
        { name: 'lg', id: 'size5', disabled: false },
        { name: 'xl', id: 'size6', disabled: false },
        { name: 'xxl', id: 'size7', disabled: false },
        { name: '2xl', id: 'size8', disabled: false },
        { name: '3xl', id: 'size9', disabled: false },
        { name: '4xl', id: 'size10', disabled: false },
      ],
    },
  };

  handleTdsChange(event: any) {
    console.log(event);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const formEl = event.target as HTMLFormElement;
    const elements = formEl.elements;

    const checkboxNodeList = (elements as any)['topic'];
    const checkedBoxes = Array.from(checkboxNodeList).filter((checkbox: any) => checkbox.checked);
    const topics = checkedBoxes.map((checkbox: any) => checkbox.value);

    this.submittedData = JSON.stringify(
      {
        topics,
        size: (elements as any).size.value,
      },
      null,
      2,
    );
  }
}
