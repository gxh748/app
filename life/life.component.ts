import { Component, OnInit,Input,OnChanges,SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,
	AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() item:any="";//item是父级组件的输入字符串 <app-life [item]="name"></app-life>
  @Input() user;//user是父级组件的输入的对象
  index:number=0;
  log(arg):void{
  	console.log(`#${arg}内容,第${this.index}`);
  	this.index++;
  }	
  constructor() { 
  	this.log("constructor");
  }

  ngOnInit() {
  	this.log("ngOnInit");
  }
  ngOnChanges(change:SimpleChanges){
  	console.log("*****************************");
  	console.log("onChanges:",change);
  	console.log("*****************************");
  }

  ngDoCheck(){
  	this.log("DoCheck");
  }

  ngAfterContentInit(){
  	this.log("AfterContentInit");
  }

  ngAfterContentChecked(){
  	this.log("AfterContentchecked");
  }

  ngAfterViewInit(){
  	console.log("child AfterViewInit");
  }

  ngAfterViewChecked(){
  	console.log("child afterViewChecked");
  }

  ngOnDestroy(){
  	this.log("onDestroy");
  }

}
