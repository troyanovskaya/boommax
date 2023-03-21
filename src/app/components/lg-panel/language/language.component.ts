import { Component, OnInit } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.sass']
})
export class LanguageComponent implements OnInit {
  mainLanguage:string = 'UKR'

  constructor(private textService: TextLgService) { }
  changeLanguage(language:string){
    if (language!==this.mainLanguage){
      this.mainLanguage = language;
      this.textService.changeLg(this.mainLanguage)
    }

  }

  ngOnInit(): void {
  }

}
