import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'cacharacters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  //#region properties
  selectedCharacter : any;
  @Input() selectedCharacterId : number;
  //#endregion properties

  /**
   * 
   * @description Initialize a new instance with default values
   * @param crudService . Characters service to manipulate data transaction from API
   */
  constructor(private crudService: CharactersService) { 

    this.selectedCharacter   = {
      name : '',
      image: '',
      species: '',
      gender: '',
      origin: { name: '', url: '' },
      status: ''
    };
    this.selectedCharacterId = 0;
  }

  //#region  methods

   /**
   * @description Get all characters from API as list and sets this data list into dataList property
   */
  initialize(): void{

    try  {
        this.crudService.get(this.selectedCharacterId).then( response => {

          this.selectedCharacter = JSON.parse(JSON.stringify(response));

          console.log("Selected => ", this.selectedCharacter);
        });
    }
    catch(exception){
      console.log('CharactersDetails.initialize => ', exception.message);
      alert('Error on intialize this component');
    }
  }
  //#endregion methods

  //#region events

  /**
   *
   * @description Initialiaze all HTML componentes or data on loading this component with page.
   */
  ngOnInit(): void {

    this.initialize();
  }
  //#endregion events

}
