import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl:"./server.component.html",
  styleUrls:["./server.component.css"]

})
export class ServerComponent{

  serverid: number = 10;
  serverstatus: string = "server is offline";
  serverName ='test server';

  serverCreated = false;

  allowNewServer = false;

  serverCreationStatus: string = "No server is created yet!!";

  getServerStatus(){
    return this.serverstatus;
  }

  constructor(){
    setTimeout(() => {

      this.allowNewServer = true;

    }, 3000);
  }

  onServerCreation(){
    this.serverCreated = true;
    // this.serverCreationStatus = "New server is created!, Server Name is : "+ this.serverName;
  }

  onServerUpdate(output : Event){

    this.serverName =(<HTMLInputElement>output.target).value;


  }



}
