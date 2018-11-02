import { Component ,OnInit,OnChanges,SimpleChanges,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  title = false;
  name:any="";
  user={age:18};
  replaceClass="true";
  isred=true;
  big=true;

  ngOnInit(){}
  ngOnChanges(){
  	//console.log(clickMsg);
  }
}