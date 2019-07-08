import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles:[`
    .online{
      background-color: green;
    }
    .offline{
      background-color: red;
    }
    .background{
      color: white; 
    }
  `]
})
export class HomeComponent implements OnInit {

  click : boolean = false;
  clicks =[];
  clicknum =1;
  text:string;
  name:string[];
  names = ['femi','toyosi', 'muyiwa', 'oyinda'];
  num:number;
  btnclick = false;
  status:string;
  constructor() {
    this.text ="Hello";
    this.num = 0;
    this.status = Math.random() > 0.5? 'online' : 'offline';
    this.name = ['femi','toyosi', 'muyiwa', 'oyinda'];
 
  }
  ngOnInit() {
  }

  log(event){
    console.log(event);
    this.text = event.target.value;
  }
  logs(event){
    console.log(event);
  }
  doThis(){
    this.btnclick =true;
    this.text = 'femi'+ this.num;
    this.num = this.num+1;
  }
  getColor(){
    return this.status === 'online'? 'green' : 'red';
  }

  onClick(event){
    if(this.click == false){
      this.click = true;
      console.log('was false');
    }else {
      this.click =false;
      console.log('was true');
    }
     this.clicks.push(event.target.type);
     this.clicknum = this.clicknum+1;
  }
}
