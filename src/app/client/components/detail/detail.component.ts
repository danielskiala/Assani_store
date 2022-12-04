import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  number_product:any = 1;
  toCart:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  count_product(e: Event) {
    const btn_count = (e.target as HTMLElement);
    const minus = (document.querySelector(".minus") as HTMLElement);
    const input = (document.querySelector('#show_count') as HTMLInputElement);

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

  addToCart(){
    const modalCart = (document.querySelector('.detail_modal_cart') as HTMLElement);
    const modalCartContent = (document.querySelector('.modal_cart_content') as HTMLElement);
    modalCart.classList.add('active');
    modalCartContent.classList.add('active')
    this.toCart = true;
  }

  closeModalCart(){
    const modalCart = (document.querySelector('.detail_modal_cart') as HTMLElement);
    const modalCartContent = (document.querySelector('.modal_cart_content') as HTMLElement);

    modalCart.classList.remove('active');
    modalCartContent.classList.remove('active')
    this.toCart = false;
  }

  stopPropagation(e:Event){
    e.stopPropagation();
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
