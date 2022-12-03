import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  number_product:any = 1;
  constructor() { }

  ngOnInit(): void {
  }

  count_product(e: Event) {
    const btn_count = (e.target as HTMLElement);
    const minus = (document.querySelector(".minus") as HTMLElement);
    const input:any = document.querySelector('#show_count');

    if (btn_count.className.includes("plus")) {
      this.number_product++;
      input.value = this.number_product;
      minus.classList.remove('color_end');
    } else {
      if (this.number_product < 2) {
        minus.classList.add('color_end');
        return;
      }
      this.number_product--;
      input.value = this.number_product;
    }
  }

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0
  };
}
