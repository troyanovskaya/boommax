import { Injectable } from '@angular/core';
import { ContactItem } from '../schemas/ContactItem';
import { ContentItem } from '../schemas/ContentItem';
import { New } from '../schemas/New';

@Injectable({
  providedIn: 'root'
})
export class TextLgService {
  more:string = 'Читати детальніше...';
  more_ukr:string = 'Читати детальніше...';
  more_rus:string = 'Читать подробнее...';
  language:string = 'UKR';
  language_ukr:string = 'UKR';
  language_rus:string = 'RUS';
  email: string = 'bummaks.bumaga@gmail.com';

  catalogName: string = 'Каталог';
  catalogName_ukr: string = 'Каталог';
  catalogName_rus: string = 'Каталог';

  findUs: string = 'Знайдіть нас тут:';
  findUs_ukr: string = 'Знайдіть нас тут:';
  findUs_rus: string = 'Найдите нас тут:';

  address: string[] = ['вул. Херсонське Шосе, 51', 'вул. Маріупольська, 44к.8'];
  address_ukr: string[] = ['вул. Херсонське Шосе, 51', 'вул. Маріупольська, 44к.8'];
  address_rus: string[] = [' ул. Херсонское Шоссе, 51', 'ул. Мариупольская, 44к.8'];

  content:ContentItem[] = [{id:'about', title: 'Про компанію', img: 'assets/img_2.jpg', text:
  [`Буммакс - це компанія, яка вже більше 10 років працює на ринку канцелярських товарів та паперу у місті Миколаїв. Ми пишаємося своїм досвідом роботи з оптовими, роздрібними та корпоративними клієнтами і завжди готові запропонувати якісні товари та високий рівень сервісу. `,
   'Наш асортимент включає широкий вибір канцелярських товарів, паперу, зошитів, папок, ручок, олівців та багато іншого. Ми працюємо лише з перевіреними постачальниками і гарантуємо високу якість всіх наших товарів.',
   'Однією з наших головних переваг є безкоштовна доставка замовлень на суму понад 1500 грн у місті Миколаєві. Ми також пропонуємо можливість самовивозу з нашого магазину, що є зручним варіантом для наших місцевих клієнтів.',
   'Крім великого асортименту продукції та доступних цін, нашім головним пріоритетом є задоволення потреб та очікувань клієнтів. Тому наш персонал складається з професіоналів, які завжди готові надати якісну консультацію та допомогти з вибором товарів.',
   'Ми розуміємо, що зручність та комфорт клієнта - це один з головних аспектів успішної роботи, тому наш персонал завжди дружелюбний та ввічливий. Ми з радістю відповімо на будь-які ваші запитання та допоможемо з вибором найбільш відповідного товару.',
   'Наші співробітники проходять регулярні тренінги, щоб бути в курсі всіх новинок ринку та завжди допомагати клієнтам з розумінням та вмінням. Ми завжди раді бачити вас та зробимо все можливе, щоб ваше побажання було виконано.',
   'Обираючи Буммакс, ви отримуєте не тільки товари високої якості та відмінний сервіс, але й нових друзів та партнерів. Ми завжди раді допомогти та консультувати вас щодо вибору товарів, а також ділитися корисними порадами та ідеями для вашого бізнесу чи дому. Багато наших клієнтів вже стали не просто покупцями, а добрими друзями та постійними партнерами, з якими ми ділимось не тільки товаром, а й позитивною енергією та дружніми стосунками.']},
  {id:'delivery', title: 'Доставка та оплата', img: 'assets/img_1.jpg', text:
  ['Замовляючи товари , ви можете бути впевнені, що ваше замовлення буде доставлено швидко та якісно. Ми пропонуємо безкоштовну доставку по місту Миколаєві при замовленні на суму від 1500 грн.',
   `Наша команда кур'єрів здійснює доставку замовлень щоденно з 10:00 до 17:00 в будні дні (понеділок - п'ятниця). Ми зробимо все можливе, щоб доставити ваше замовлення протягом 1-2 робочих днів з моменту оформлення.`,
  'Ми приймаємо оплату товарів різними зручними способами, щоб зробити процес покупки максимально комфортним для вас.  Ми гарантуємо безпеку та конфіденційність оплати.',
  'Вибираючи нас, ви можете бути впевнені, що отримаєте високоякісний сервіс та комфортні умови покупки. Зробіть замовлення прямо зараз та переконайтеся в цьому самі!']},
  ];

  content_ukr:ContentItem[] = [{id:'about', title: 'Про компанію', img: 'assets/img_1.jpg', text:
  [`Буммакс - це компанія, яка вже більше 10 років працює на ринку канцелярських товарів та паперу у місті Миколаїв. Ми пишаємося своїм досвідом роботи з оптовими, роздрібними та корпоративними клієнтами і завжди готові запропонувати якісні товари та високий рівень сервісу. `,
   'Наш асортимент включає широкий вибір канцелярських товарів, паперу, зошитів, папок, ручок, олівців та багато іншого. Ми працюємо лише з перевіреними постачальниками і гарантуємо високу якість всіх наших товарів.',
   'Однією з наших головних переваг є безкоштовна доставка замовлень на суму понад 1500 грн у місті Миколаєві. Ми також пропонуємо можливість самовивозу з нашого магазину, що є зручним варіантом для наших місцевих клієнтів.',
   'Крім великого асортименту продукції та доступних цін, нашім головним пріоритетом є задоволення потреб та очікувань клієнтів. Тому наш персонал складається з професіоналів, які завжди готові надати якісну консультацію та допомогти з вибором товарів.',
   'Ми розуміємо, що зручність та комфорт клієнта - це один з головних аспектів успішної роботи, тому наш персонал завжди дружелюбний та ввічливий. Ми з радістю відповімо на будь-які ваші запитання та допоможемо з вибором найбільш відповідного товару.',
   'Наші співробітники проходять регулярні тренінги, щоб бути в курсі всіх новинок ринку та завжди допомагати клієнтам з розумінням та вмінням. Ми завжди раді бачити вас та зробимо все можливе, щоб ваше побажання було виконано.',
   'Обираючи Буммакс, ви отримуєте не тільки товари високої якості та відмінний сервіс, але й нових друзів та партнерів. Ми завжди раді допомогти та консультувати вас щодо вибору товарів, а також ділитися корисними порадами та ідеями для вашого бізнесу чи дому. Багато наших клієнтів вже стали не просто покупцями, а добрими друзями та постійними партнерами, з якими ми ділимось не тільки товаром, а й позитивною енергією та дружніми стосунками.']},
   {id:'delivery', title: 'Доставка та оплата', img: 'assets/img_2.jpg', text:
   ['Замовляючи товари , ви можете бути впевнені, що ваше замовлення буде доставлено швидко та якісно. Ми пропонуємо безкоштовну доставку по місту Миколаєві при замовленні на суму від 1500 грн.',
    `Наша команда кур'єрів здійснює доставку замовлень щоденно з 10:00 до 17:00 в будні дні (понеділок - п'ятниця). Ми зробимо все можливе, щоб доставити ваше замовлення протягом 1-2 робочих днів з моменту оформлення.`,
   'Ми приймаємо оплату товарів різними зручними способами, щоб зробити процес покупки максимально комфортним для вас.  Ми гарантуємо безпеку та конфіденційність оплати.',
   'Вибираючи нас, ви можете бути впевнені, що отримаєте високоякісний сервіс та комфортні умови покупки. Зробіть замовлення прямо зараз та переконайтеся в цьому самі!']},

  ];
  content_rus:ContentItem[] = [{id:'about', title: 'Про компанию', img: 'assets/img_1.jpg', text:
  ['Буммакс – это компания, которая уже более 10 лет работает на рынке канцелярских товаров и бумаги в городе Николаев. Мы гордимся своим опытом работы с оптовыми, розничными и корпоративными клиентами, и всегда готовы предложить качественные товары и высокий уровень сервиса.',
   'Наш ассортимент включает широкий выбор канцелярских товаров, бумаги, тетрадей, папок, ручек, карандашей и многое другое. Мы работаем только с проверенными поставщиками и гарантируем высокое качество всех товаров.',
   'Одним из наших главных преимуществ является бесплатная доставка заказов на сумму более 1500 грн в Николаеве. Мы также предлагаем возможность вывоза из нашего магазина, что является удобным вариантом для наших местных клиентов.',
  'Помимо большого ассортимента продукции и доступных цен нашим главным приоритетом является удовлетворение потребностей и ожиданий клиентов. Поэтому наш персонал состоит из профессионалов, всегда готовых предоставить качественную консультацию и помочь с выбором товаров.',
  'Мы понимаем, что удобство и комфорт клиента – это один из главных аспектов успешной работы, поэтому наш персонал всегда дружелюбен и вежлив. Мы с радостью ответим на любые вопросы и поможем с выбором наиболее подходящего товара.',
  'Наши сотрудники проходят регулярные тренинги, чтобы быть в курсе всех новинок рынка и всегда помогать клиентам с пониманием и умением. Мы всегда рады видеть вас и сделаем все возможное, чтобы ваше пожелание было выполнено.',
  'Выбирая Буммакс, вы получаете не только товары высокого качества и отличный сервис, но и новых друзей и партнеров. Мы всегда рады помочь и консультировать вас по выбору товаров, а также делиться полезными советами и идеями для вашего бизнеса или дома. Многие наши клиенты уже стали не просто покупателями, а хорошими друзьями и постоянными партнерами, с которыми мы делимся не только товаром, но и положительной энергией и дружескими отношениями.']},
  {id:'delivery', title: 'Доставка и оплата', img: 'assets/img_2.jpg', text:
  ['Заказывая товары, вы можете быть уверены, что ваш заказ будет доставлен быстро и качественно. Мы предлагаем бесплатную доставку по городу при заказе на сумму от 1500 грн.',
  'Наша команда курьеров осуществляет доставку заказов ежедневно с 10:00 до 17:00 в будние дни (понедельник – пятница). Мы сделаем все возможное, чтобы доставить заказ в течение 1-2 рабочих дней с момента оформления.',
  'Мы принимаем оплату товаров разными удобными способами, чтобы сделать процесс покупки максимально комфортным для вас. Мы гарантируем безопасность и конфиденциальность оплаты.',
  'Выбирая нас, вы можете быть уверены, что получите высококачественный сервис и удобные условия покупки. Сделайте заказ прямо сейчас и убедитесь в этом сами!']}];

  news: New = {id:'news', newName:'Новини', articles: [{id:1, title: 'Відкриття магазину', text:
  ['Магазин канцтоварів "Клякса" відновлює свою роботу!',
  'Після того, як магазин "Клякса" зачинив свої двері 24 лютого 2022 року, мешканці нашого міста залишилися без свого улюбленого магазину. Однак, ми раді повідомити, що "Клякса" готується відчинити свої двері знову!',
  `Наш магазин працюватиме за попереднім графіком, з понеділка до п'ятниці, з 9:00 до 17:00 У магазині ви знайдете широкий вибір канцелярських товарів високої якості: від олівців та ручок до паперу та дощок.`,
  `Ми дбаємо про здоров'я та безпеку наших клієнтів та персоналу, тому в нашому магазині діють усі необхідні запобіжні заходи. Ми стежимо за чистотою та санітарними умовами у приміщенні, а також регулярно проводимо дезінфекцію.`,
  'Крім того, ми також пропонуємо зручний онлайн-магазин для тих, хто вважає за краще купувати канцелярські товари з дому. Замовлення можна оформляти на нашому сайті цілодобово.',
  'Ми чекаємо на вас у магазині "Клякса", щоб надати вам широкий вибір якісних канцелярських товарів та допомогти вам втілити в життя ваші творчі ідеї!'],
  links:[],
  img: 'assets/img_3.jpg'}],
  }
  // {linkName:'Каталог товарів можна переглянути тут', url:'#'}

 news_rus: New = {id:'news', newName:'Новости', articles: [{id:1, title: 'Открытие магазина', text:
 ['Магазин канцтоваров "Клякса" возобновляет свою работу!',
 'После того, как магазин "Клякса" закрыл свои двери 24 февраля 2022 года, жители нашего города остались без своего любимого магазина. Однако, мы рады сообщить, что "Клякса" готовится открыть свои двери снова!',
 'Наш магазин будет работать по прежнему графику, с понедельника по пятницу, с 9:00 до 17:00 В магазине вы найдете широкий выбор канцелярских товаров высокого качества: от карандашей и ручек до бумаги и досок.',
 'Мы заботимся о здоровье и безопасности наших клиентов и персонала, поэтому в нашем магазине действуют все необходимые меры предосторожности. Мы следим за чистотой и санитарными условиями в помещении, а также регулярно проводим дезинфекцию.',
 'Кроме того, мы также предлагаем удобный онлайн-магазин для тех, кто предпочитает покупать канцелярские товары из дома. Заказы можно оформлять на нашем сайте круглосуточно.',
 'Мы ждем вас в магазине "Клякса", чтобы предоставить вам широкий выбор качественных канцелярских товаров и помочь вам воплотить в жизнь ваши творческие идеи!'],
 links:[],
 img: 'assets/img_3.jpg'}],
}
news_ukr: New = {id:'news', newName:'Новини', articles: [{id:1, title: 'Відкриття магазину', text:
['Магазин канцтоварів "Клякса" відновлює свою роботу!',
'Після того, як магазин "Клякса" зачинив свої двері 24 лютого 2022 року, мешканці нашого міста залишилися без свого улюбленого магазину. Однак, ми раді повідомити, що "Клякса" готується відчинити свої двері знову!',
`Наш магазин працюватиме за попереднім графіком, з понеділка до п'ятниці, з 9:00 до 17:00 У магазині ви знайдете широкий вибір канцелярських товарів високої якості: від олівців та ручок до паперу та дощок.`,
`Ми дбаємо про здоров'я та безпеку наших клієнтів та персоналу, тому в нашому магазині діють усі необхідні запобіжні заходи. Ми стежимо за чистотою та санітарними умовами у приміщенні, а також регулярно проводимо дезінфекцію.`,
'Крім того, ми також пропонуємо зручний онлайн-магазин для тих, хто вважає за краще купувати канцелярські товари з дому. Замовлення можна оформляти на нашому сайті цілодобово.',
'Ми чекаємо на вас у магазині "Клякса", щоб надати вам широкий вибір якісних канцелярських товарів та допомогти вам втілити в життя ваші творчі ідеї!'],
links:[],
img: 'assets/img_3.jpg'}],
}

  allPhones: string[] = ['(0512) 70-94-64',
  '(0512) 58-55-85',
  '(0512) 70-95-85',
  '(067) 512-33-08']

  contacts:ContactItem = {id:'contacts', title: 'Контакти', content: [
    {name: 'Телефони для замовлень', text: this.allPhones},
    {name: 'Режим роботи', text: ['Пн-Пт 9.00-17.00', 'Сб, Нд Вихідний']},
    {name: 'Наша адреса', text: ['вул. Херсонське Шосе, 51, Україна, Миколаїв', 'вул. Маріупольська, 44к.8, Україна, Миколаїв']},
    {name: 'Електронна адреса', text: [this.email]}
  ]}
  contacts_ukr:ContactItem = {id:'contacts', title: 'Контакти', content: [
    {name: 'Телефони для замовлень', text: this.allPhones},
    {name: 'Режим роботи', text: ['Пн-Пт 9.00-17.00', 'Сб, Нд Вихідний']},
    {name: 'Наша адреса', text: ['вул. Херсонське Шосе, 51, Україна, Миколаїв', 'вул. Маріупольська, 44к.8, Україна, Миколаїв']}
  ]}
  contacts_rus:ContactItem = {id:'contacts', title: 'Контакты', content: [
    {name: 'Телефоны для заказов', text: this.allPhones},
    {name: 'Режим работы', text: ['Пн-Пт 9.00-17.00', 'Сб, Вс Выходной']},
    {name: 'Наш адрес', text: ['ул. Херсонское Шоссе, 51, Украина, Николаев', 'ул. Мариупольская, 44к.8, Украина, Николаев']}
  ]}

  footerContent:{title:string, content:string[]}[] = [
    {title: 'Контактна інформація', content: ['(067) 512-33-08', '(0512) 70-95-85']},
    {title: 'Адреса', content:this.address},
    {title: 'Час роботи', content: ['Пн-Пт 9.00-17.00', 'Сб, Нд Вихідний']}];
  footerContent_ukr:{title:string, content:string[]}[] = [
    {title: 'Контактна інформація', content: ['(067) 512-33-08', '(0512) 70-95-85']},
    {title: 'Адреса', content:this.address_ukr},
    {title: 'Час роботи', content: ['Пн-Пт 9.00-17.00', 'Сб, Нд Вихідний']}];
  footerContent_rus:{title:string, content:string[]}[] = [
    {title: 'Контактная информация', content: ['(067) 512-33-08', '(0512) 70-95-85']},
    {title: 'Адрес', content:this.address_rus},
    {title: 'Время работы', content: ['Пн-Пт 9.00-17.00', 'Сб, Вс Выходной']}];

  stationaryTitle: string = 'Канцелярські товари для дому та офісу';
  stationaryTitle_ukr: string = 'Канцелярські товари для дому та офісу ';
  stationaryTitle_rus: string = 'Канцелярские товары для дома и офиса';

  twoPhones: string[] = ['(067) 512-33-08', '(0512) 70-95-85'];



  changeLg(language:string){
    if (language==='UKR'){
      this.language = this.language_ukr;
      this.content = this.content_ukr;
      this.footerContent = this.footerContent_ukr;
      this.stationaryTitle = this.stationaryTitle_ukr;
      this.catalogName = this.catalogName_ukr;
      this.findUs = this.findUs_ukr;
      this.address = this.address_ukr;
      this.news = this.news_ukr;
      this.more = this.more_ukr;
    } else if (language==='RUS'){
      this.language = this.language_rus;
      this.content = this.content_rus;
      this.footerContent = this.footerContent_rus;
      this.stationaryTitle = this.stationaryTitle_rus;
      this.catalogName = this.catalogName_rus;
      this.findUs = this.findUs_rus;
      this.address = this.address_rus;
      this.news = this.news_rus;
      this.more = this.more_rus;
    }
  }

  constructor() { }
}
