import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit, OnDestroy {
  newId:number = 0
  constructor(public textService: TextLgService, private router: Router){}
  ngOnDestroy(): void {}
  ngOnInit(){
    window.scrollTo(0, 0)
  }

}
