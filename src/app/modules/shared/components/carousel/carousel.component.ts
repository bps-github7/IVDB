import { Component, ElementRef, OnInit } from '@angular/core';
import { Game } from 'src/app/models/content/Game';

export interface Breakpoints {
  [key: number]: {
    slidesPerView: number,
    gap: number
  }
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  dom: HTMLElement | null = null;
  slidesWrapper: HTMLElement | null = null;
  carouselElement: HTMLElement | null = null;
  nextBtn: HTMLElement | null = null;
  prevBtn: HTMLElement | null = null;

  wRef: number | null = null;
  slidesPerView: number = 4;
  spaceBetween: number = 40;
  currentSlideWidth: number = 100;
  index: number = 0;


  breakpoints: Breakpoints = {
    480: { slidesPerView: 1, gap: 5 },
    768: { slidesPerView: 2, gap: 10 },
    1024: { slidesPerView: 3, gap: 15 },
    1200: { slidesPerView: 4, gap: 15 }
  };

  images: Game[] = [
    {
      uid : '0',
      title: 'Danger of Guardian',
      imageUrl: 'assets/images/1.jpg',
    },
    {
      uid: '1',
      title: 'The Sliver of the Shards',
      imageUrl: 'assets/images/2.jpg',
    },
    {
      uid: '2',
      title: 'Next Tales',
      imageUrl: 'assets/images/3.jpg',
    },
    {
      uid: '3',
      title: 'Theft in the Dreams',
      imageUrl: 'assets/images/4.jpg',
    },
    {
      uid: '4',
      title: 'Snow of Hustler',
      imageUrl: 'assets/images/5.jpg',
    },
    {
      uid: '5',
      title: 'Living Man',
      imageUrl: 'assets/images/6.jpg',
    },
    {
      uid: '6',
      title: 'The Voyagers of the Prince',
      imageUrl: 'assets/images/7.jpg',
    },
    {
      uid: '7',
      title: 'The Diamond Lord',
      imageUrl: 'assets/images/8.jpg',
    },
    {
      uid: '8',
      title: 'Kiss in the Rainbow',
      imageUrl: 'assets/images/9.jpg',
    }
  ]


  constructor(private elementRef: ElementRef) {}

  
  ngOnInit(): void {
    this.dom = this.elementRef.nativeElement;
    this.carouselElement = this.dom.querySelector('#carouselElement');
    this.slidesWrapper = this.dom.querySelector('#sliderWrapper');
    this.nextBtn = this.dom.querySelector('#nextBtn');
    this.prevBtn = this.dom.querySelector('#prevBtn');
    this.wRef = this.carouselElement.clientWidth;

    this.breakpointCheck(this.wRef, this.breakpoints)
  }


  onChangeBreakpoint() {
    this.wRef = this.carouselElement.clientWidth
    this.breakpointCheck(this.wRef, this.breakpoints)
  }


  breakpointCheck(currentWidth: number, breakpointsObj) {
    const onBreakpoint = Object.keys(breakpointsObj).find(w => currentWidth < +w);

    this.slidesPerView = onBreakpoint ? breakpointsObj[onBreakpoint].slidesPerView : 4
    this.spaceBetween = onBreakpoint ? breakpointsObj[onBreakpoint].gap : 15

    this.configSlider()
    this.getWidth()

    if (this.index > this.images.length - this.slidesPerView) {
      this.index = this.images.length - this.slidesPerView
      this.slidesWrapper.style.transform = `translateX(-${this.index * this.currentSlideWidth}px)`
    } else {
      this.slidesWrapper.style.transform = `translateX(-${this.index * this.currentSlideWidth}px)`
    }

    if (this.index == this.images.length - this.slidesPerView) {
      this.nextBtn.setAttribute('disabled','disabled');
    } else {
      this.nextBtn.removeAttribute('disabled');
    }

    if (this.index == 0) {
      this.prevBtn.setAttribute('disabled','disabled');
    } else {
      this.prevBtn.removeAttribute('disabled');
    }
  }


  configSlider() {
    this.slidesWrapper.style.width = (this.images.length * (this.wRef / this.slidesPerView)) + 'px'
  }

  getWidth() {
    this.currentSlideWidth = this.wRef / this.slidesPerView
    return this.currentSlideWidth - this.spaceBetween
  }


  onPrev() {
    this.nextBtn.removeAttribute('disabled');

    if (this.index > 0) {
      this.index--;

      this.nextBtn.removeAttribute('disabled');

      if (this.index == 0) {
        this.prevBtn.setAttribute('disabled','disabled');
      }
      
      this.slidesWrapper.style.transform = `translateX(-${this.index * this.currentSlideWidth}px)`
    }
  }


  onNext() {
    this.prevBtn.removeAttribute('disabled');

    if (this.index < this.images.length - this.slidesPerView) {

      this.index++;

      if (this.index == this.images.length - this.slidesPerView) {
        this.nextBtn.setAttribute('disabled','disabled');
      }
      
      this.slidesWrapper.style.transform = `translateX(-${this.index * this.currentSlideWidth}px)`
    }
  }

}
