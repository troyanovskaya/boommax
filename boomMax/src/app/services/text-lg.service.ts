import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextLgService {
  language:string = 'UKR';
  language_ukr:string = 'UKR';
  language_rus:string = 'RUS';

  catalogName: string = 'Каталог товарів';
  catalogName_ukr: string = 'Каталог товарів';
  catalogName_rus: string = 'Каталог товаров';

  findUs: string = 'Знайдіть нас тут:';
  findUs_ukr: string = 'Знайдіть нас тут:';
  findUs_rus: string = 'Найдите нас тут:';

  content:{id:string, title: string, text: string[]}[] = [{id:'about', title: 'Про компанію', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'delivery', title: 'Умови доставки та оплати', text: ['   sdfghjgytrewedfghf', `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'news', title: 'Новини', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'contacts', title: 'Контакти та адреса', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]}];

  content_ukr:{id:string, title: string, text: string[]}[] = [{id:'about', title: 'Про компанію', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'delivery', title: 'Умови доставки та оплати', text: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium.', `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'news', title: 'Новини', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'contacts', title: 'Контакти та адреса', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]}];

  content_rus:{id:string, title: string, text: string[]}[] = [{id:'about', title: 'Про компанию', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`, `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium.`]},
  {id:'delivery', title: 'Условия доставки и оплаты', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'news', title: 'Новости', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]},
  {id:'contacts', title: 'Контакты и адрес', text: [`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, nobis? Hic tempora aut veniam non sit libero quam rerum magnam eius nisi cupiditate molestias perspiciatis laborum minus ea enim nihil, officiis quibusdam consequatur in. Esse nisi placeat id sed harum, quos neque laboriosam cumque voluptatum dolores iure molestias alias repellat exercitationem ex cupiditate sint reiciendis aliquam sit accusamus ipsum adipisci similique libero odio? Eaque voluptates vitae excepturi sunt. Laudantium repudiandae ipsum eius est eligendi nulla pariatur optio ut magnam alias nesciunt, debitis officiis, voluptatibus voluptatum dolore esse maxime quis corrupti modi aperiam in quae accusantium. Sunt nulla necessitatibus fuga. Molestiae!`]}];

  footerContent:{title:string, content:string[]}[] = [
    {title: 'Контактна інформація', content: ['063-226-22-83', '099-487-39-85']},
    {title: 'Електронна пошта', content: ['bummaks.bumaga@gmail.com']}];
  footerContent_ukr:{title:string, content:string[]}[] = [
    {title: 'Контактна інформація', content: ['063-226-22-83', '099-487-39-85']},
    {title: 'Електронна пошта', content: ['bummaks.bumaga@gmail.com']}];
  footerContent_rus:{title:string, content:string[]}[] = [
    {title: 'Контактная информация', content: ['063-226-22-83', '099-487-39-85']},
    {title: 'Електронная почта', content: ['bummaks.bumaga@gmail.com']}];

  stationaryTitle: string = 'Канцелярські товари';
  stationaryTitle_ukr: string = 'Канцелярські товари';
  stationaryTitle_rus: string = 'Канцелярские товары';

  img:string[] = ['https://media.vogue.co.uk/photos/5d54c5f9ea036300081943ce/master/pass/original',
  'https://chrisbeon.co.uk/wp-content/uploads/2014/04/shutterstock_264955139.jpg',
  'https://www.creativeboom.com/uploads/articles/28/28d3817667e3363f0472b183ca74eaf310649b47_810.jpg',
  'https://cdn.shopify.com/s/files/1/0602/2617/5224/articles/image8_0e5ccd35-70e5-493b-8bec-4d1c6867cad4_1200x1200.png?v=1667261152'
  ]

  changeLg(language:string){
    if (language==='UKR'){
      this.language = this.language_ukr;
      this.content = this.content_ukr;
      this.footerContent = this.footerContent_ukr;
      this.stationaryTitle = this.stationaryTitle_ukr;
      this.catalogName = this.catalogName_ukr;
      this.findUs = this.findUs_ukr;
    } else if (language==='RUS'){
      this.language = this.language_rus;
      this.content = this.content_rus;
      this.footerContent = this.footerContent_rus;
      this.stationaryTitle = this.stationaryTitle_rus;
      this.catalogName = this.catalogName_rus;
      this.findUs = this.findUs_rus;
    }
  }

  constructor() { }
}
