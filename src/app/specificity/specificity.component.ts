import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specificity',
  standalone: true,
  templateUrl: './specificity.component.html',
  styleUrl: './specificity.component.scss'
})
export class SpecificityComponent implements OnInit {
  ngOnInit(): void {
    let firstSheet = document.styleSheets.item(0)?.cssRules;
    console.log(firstSheet?.item(0)); // a CSSStyleRule
    console.log(firstSheet?.item(1)); // a CSSStyleRule
    console.log(firstSheet?.item(0)?.cssText); // a CSSStyleDeclaration object
    console.log(firstSheet?.item(1)?.cssText); // a CSSStyleDeclaration object
    // add console de CSSScopeRule para @scope
    console.log(firstSheet?.item(2)); // a CSSScopeRule
  }
}