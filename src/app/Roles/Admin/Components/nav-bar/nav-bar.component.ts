import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  @ViewChild('tog', { static: true })tog!: ElementRef;
  expander:boolean=false;

  navTog(){
    this.tog.nativeElement.setAttribute('aria-expanded',false)
    // this.tog.nativeElement.setAttribute('data-bs-toggle','collapse')


  }

}
