import { Component, OnInit } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  content?:{id:string, title:string, text: string}[];
  constructor(private textService: TextLgService){}
  ngOnInit(): void {
    this.content = this.textService.getContent();
  }
}
