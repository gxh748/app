import { Component ,OnChanges,SimpleChanges,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges ,AfterViewInit,AfterViewChecked{
  title = 'Tour of Heroes';
  name:any="";
  user={age:18};
  ngOnChanges(change:SimpleChanges){
  	console.log("##########################");
  	console.log("父组件 onchange",change);
  	console.log("##########################");
  }

  ngAfterViewInit(){
  	console.log("father AfterViewInit");
  }

  ngAfterViewChecked(){
  	console.log("father AfterViewChecked");
  }

}