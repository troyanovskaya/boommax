import { Component } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent {
  constructor(public textService: TextLgService){}
}
