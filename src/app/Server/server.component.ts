import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl:"./server.component.html",
  styleUrls:["./server.component.css"]

})
export class ServerComponent{

  serverid: number = 10;
  serverstatus: string = "server is offline";

  allowNewServer = false;

  getServerStatus(){
    return this.serverstatus;
  }

  constructor(){
    setTimeout(() => {

      this.allowNewServer = true;

    }, 3000);
  }

}
