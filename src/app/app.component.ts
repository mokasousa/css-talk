import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { SpecificityComponent } from './specificity/specificity.component';
import { SassAtRulesComponent } from './sass-at-rules/sass-at-rules.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpecificityComponent, SassAtRulesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
