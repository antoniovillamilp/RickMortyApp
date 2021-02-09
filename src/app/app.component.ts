import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'RickMortyApp';
  $    : any;
  
  constructor(){
  }

  //#region methods

  //#endregion methods

  //#region  events

  /**
   *
   * @description Initialiaze all HTML componentes or data on loading this component with page.
   */
  ngOnInit(){
     
  }
  //#endregion events
}
