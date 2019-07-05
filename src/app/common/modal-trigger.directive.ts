import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{

  private element: HTMLElement;
  constructor(
    element: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    this.element.addEventListener('click', e => {
      this.$('#simple-modal').modal({})
    });
  }

}
