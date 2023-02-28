import { Component } from '@angular/core';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'boomMax';
  slides = [
    {url: 'https://ciyashop.potenzaglobalsolutions.com/stationery/wp-content/uploads/sites/65/2017/08/blog-img-04.jpg', title: 'img1'},
    {url: 'https://ciyashop.potenzaglobalsolutions.com/stationery/wp-content/uploads/sites/65/2017/08/blog-img-06.jpg', title: 'img2'},
    {url: 'https://www.stationerybazaar.com/images/pzen_slideshow/colorful-stationery-multicolored-background_1623598949.jpg', title: 'img3'},
    {url: 'https://i2.wp.com/www.paperchainweddingstationery.co.uk/wp-content/uploads/2020/08/Greenery-Slider-1200-600-2.png?fit=1200%2C600&ssl=1', title: 'img4'}
  ];
}
