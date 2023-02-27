import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.sass']
})
export class LanguageComponent implements OnInit {
  mainLanguage:string = 'ukr'

  constructor() { }
  changeLanguage(language:string){
    if (language!==this.mainLanguage){
      this.mainLanguage = language;
    }

  }

  ngOnInit(): void {
  }

}
