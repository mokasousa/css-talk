import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let firstSheet = document.styleSheets.item(0)?.cssRules;
    console.log(firstSheet?.item(0)); // a CSSStyleRule
    console.log(firstSheet?.item(1)); // a CSSStyleRule
    console.log(firstSheet?.item(0)?.cssText); // a CSSStyleDeclaration object
    console.log(firstSheet?.item(1)?.cssText); // a CSSStyleDeclaration object
  }
}
