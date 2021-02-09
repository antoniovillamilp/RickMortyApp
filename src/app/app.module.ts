import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// services
import { CharactersService } from './services/characters.service';

// components
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersDetailsComponent } from './components/characters/characters-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharactersDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharactersService,  { provide: 'Window',  useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
