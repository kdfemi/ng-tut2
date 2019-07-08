import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

 @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  constructor(private renderer:Renderer2, private elementRef:ElementRef) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  }
  @HostListener('mouseenter') mouseover(event:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor='yellow';
  }

  @HostListener('mouseleave') mouseleave(event:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    this.backgroundColor='red';
  }
}
