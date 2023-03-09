import { Component, OnInit } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-lg-panel',
  templateUrl: './lg-panel.component.html',
  styleUrls: ['./lg-panel.component.sass']
})
export class LgPanelComponent implements OnInit {

  constructor(public textService:TextLgService) { }

  ngOnInit(): void {
  }

}
