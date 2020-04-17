import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>()
@Output() blueprintCreated =  new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }
  newServerName="";
  newServercontent="";
  onAddServer(){
    this.serverCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServercontent});
  }
  onAddBluePrint(){
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServercontent})
  }
  ngOnInit(): void {
  }

}
