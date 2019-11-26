import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'lightblue';
    @Input() highlightColor: string = 'lightgreen';
    @HostBinding('style.backgroundColor') backgroundColor: string = 'lightblue';

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
        this.backgroundColor = this.defaultColor;
    }
    
    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen');
        // this.backgroundColor = 'lightgreen';
        this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightyellow');
        // this.backgroundColor = 'lightyellow';
        this.backgroundColor = this.defaultColor;
    }
}