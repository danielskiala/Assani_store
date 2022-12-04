import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    const sideNav = (document.querySelector('.side_nav') as HTMLElement);
    const sideContent = (document.querySelector('.side_content') as HTMLElement)
    sideNav.classList.add('active');
    sideContent.classList.add('active');
  }

  closeModal(){
    const sideNav = (document.querySelector('.side_nav') as HTMLElement);
    const sideContent = (document.querySelector('.side_content') as HTMLElement)
    sideNav.classList.remove('active');
    sideContent.classList.remove('active');
  }

  stop(e:Event){
    e.stopPropagation();
  }

}
