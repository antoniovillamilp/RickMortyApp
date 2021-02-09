import { Component, /*injects*/ Inject,NgModuleRef,/*events*/ OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  //#region Properties
  dataList : any[];
  showDetails: boolean;
  showCharacterList : boolean;
  selectedId : number;
  //#endregion Properties

  /**
   * 
   * @description Initialize a new instance with default values
   * @param {CharactersService} crudService . Characters service to manipulate data transaction from API
   * @param {Window} $window . Injectable object global 'window' javascript variable
   */
  constructor(private crudService: CharactersService, @Inject('Window') private $window: Window){ 

    this.dataList    = [];
    this.showDetails = false;
    this.showCharacterList = true;
  }

  //#region methods

  /**
   * @description Get all characters from API as list and sets this data list into dataList property
   */
  initialize() : void{
    try  {

      // call method service
      this.crudService.getAll().then( response => {
        let dataResponse = response.results;

        if (dataResponse.length > 0)
          this.dataList = dataResponse;
      });
    }
    catch(exception){
      console.log('Characters.initialize => ', exception.message);
      alert('Error on intialize this component');
    }
  }
  //#endregion methods

  //#region  events

  /**
   *
   * @description Initialiaze all HTML componentes or data on loading this component with page.
   */
  ngOnInit():  void{
     this.initialize();
  }

  /**
   * 
   * @description thrown event button show details click
   * @param {Event} event thrown event
   * @param {Object} sender. HTML origin on fire event
   */
  aShowDetail_Click(event, sender, binding){
   
    try {
      this.showCharacterList = !this.showCharacterList;

      if(typeof binding === 'number')
      { 
          this.selectedId  = Number(binding);
          this.showDetails = !this.showDetails;
      }
      else
        throw {message: 'Current data is not a number(doesn\'t contains number format).' }
      
    }
    catch(exception){
      console.log('Characters.aShowDetail_Click => ', exception.message);
      alert('Error: Havae a problem on show details');
    }
  }

  aOption_Click(event, sender){
    this.showDetails       = !this.showDetails;
    this.showCharacterList = !this.showCharacterList;
  }
  //#endregion events

}
