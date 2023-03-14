import { Component } from '@angular/core';
import { TextLgService } from 'src/app/services/text-lg.service';

@Component({
  selector: 'app-map-block',
  templateUrl: './map-block.component.html',
  styleUrls: ['./map-block.component.sass']
})
export class MapBlockComponent {
  pickedAddressI:number = 0;
  links: string[] = ['https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.292571022017!2d32.050276915608016!3d46.955941379146815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5cbaebcad2751%3A0x2d52147f6b1d50b8!2z0KXQtdGA0YHQvtC90YHQutC-0LUg0YguLCA1MSwg0J3QuNC60L7Qu9Cw0LXQsiwg0J3QuNC60L7Qu9Cw0LXQstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNTQwMDA!5e0!3m2!1sru!2snl!4v1678745063550!5m2!1sru!2snl',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.815865340357!2d31.989043015804437!3d46.96530774004921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5c96406a197b1%3A0xca8680826394f952!2z0YPQuy4g0JzQvtGB0LrQvtCy0YHQutCw0Y8sIDQ0LCDQndC40LrQvtC70LDQtdCyLCDQndC40LrQvtC70LDQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCA1NDAwMA!5e0!3m2!1sru!2snl!4v1678745189019!5m2!1sru!2snl']
  constructor(public textService: TextLgService){}
  changeAddress(index: number){
    this.pickedAddressI = index;
    console.log(this.links[this.pickedAddressI])
    console.log(index);
    console.log(this.pickedAddressI);
  }

}
