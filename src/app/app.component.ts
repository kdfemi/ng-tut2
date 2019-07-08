import { Component, Output, Input, ViewEncapsulation } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
  // viewProviders:[HomeComponent]
})
export class AppComponent {
 serverElements = [{name:'test', content:'this is a test', type:'server'}];
  title = 'firstangular';
    onServerAdd(server:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    });
  }

  onBlueprintAdd(blueprint:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.serverName,
      content: blueprint.serverContent
    });
  }
}
