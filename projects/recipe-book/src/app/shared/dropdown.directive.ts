import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // *Closing the dropdown from button only
  // @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  // *


  // *Closing the Dropdown From Anywhere
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}  
  // *
}
