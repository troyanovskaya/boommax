import { Component, OnInit } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.sass']
})
export class ContentListComponent implements OnInit{
  contentWord?:string;
  content?:{id:string, title: string, text: string}[];

  constructor(private textService: TextLgService){}
  ngOnInit(): void {
    this.contentWord = this.textService.getContentWord();
    this.content = this.textService.getContent();
  }

}
