import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextLgService {
  language:string = 'UKR'
  contentWord: string = 'Зміст';
  content:{id:string, title: string, text: string}[] = [{id:'about', title: 'Про компанію', text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`},
  {id:'delivery', title: 'Умови доставки та оплати', text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`},
  {id:'partners', title: 'Наші партнери', text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`},
  {id:'contacts', title: 'Контакти', text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`}
]
  getContentWord(){
    return this.contentWord;
  }
  getContent(){
    return this.content;
  }

  constructor() { }
}
