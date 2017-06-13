import { Component } from '@angular/core';
import { COMMON_NAMES } from './common-names';
import { Mentionable } from '../mention/mentionable';

interface ComplexMentionable extends Mentionable {
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  simpleItems: Mentionable[] = COMMON_NAMES.map(name => {
    return {text: name};
  });

  complexItems: ComplexMentionable[] = COMMON_NAMES.map(name => {
    return {text: name, username: name.toLowerCase()};
  });

  formatComplex = (item: ComplexMentionable) => {
    return `[${item.username}]`;
  }
}
