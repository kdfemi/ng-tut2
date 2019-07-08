import { Component, OnInit, 
  Input, ViewChild, 
  ElementRef, OnChanges, 
  SimpleChanges, AfterViewInit, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input() element:{name:string, content:string, type:string};
 @ViewChild('heading') header: ElementRef;
  constructor() { }
  @ContentChild('something') cont:ElementRef

  ngOnInit() {
    console.log("text: ",this.header.nativeElement.textContent)
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes); 
  }
  ngDoCheck(){
    console.log("ngDoCheck called")
  }
  ngAfterViewInit(){
    console.log("text: ",this.header.nativeElement.textContent)
  }

  ngAfterContentInit(){
    console.log(this.cont.nativeElement)
  }
}
