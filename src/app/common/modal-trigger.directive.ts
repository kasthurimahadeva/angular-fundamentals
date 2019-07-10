import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  private element: HTMLElement;
  @Input('modal-trigger') modalId: string;
  constructor(
    element: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) {
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    this.element.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
