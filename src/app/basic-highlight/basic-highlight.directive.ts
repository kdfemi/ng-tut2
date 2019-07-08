import { Directive, ElementRef, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {


  constructor(private elementRef:ElementRef) { 
  
    console.log(elementRef.nativeElement.style.backgroundColor='green');
  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='green'
  }

}
