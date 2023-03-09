import { Component, OnInit } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.sass']
})
export class ContentListComponent implements OnInit{


  constructor(public textService: TextLgService){}
  ngOnInit(): void {
  }

}
