import { Component, OnInit, Input, EventEmitter, Output,  OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintcreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { 
    console.log("Constructor called")
  }

  ngOnInit() {

  }
 


  onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  this.blueprintcreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
 
  }
}
