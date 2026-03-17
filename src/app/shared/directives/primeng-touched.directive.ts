import { Directive, input } from '@angular/core';

/**
 * Bridges Signal Forms' `touched` state to a CSS class on PrimeNG inputs.
 *
 * Signal Forms calls `setInputOnDirectives('invalid', true)` immediately,
 * making PrimeNG add `p-invalid` before the user touches the field.
 * This directive receives `touched` from Signal Forms and adds `sf-touched`
 * to the element, allowing CSS to suppress the invalid style until then.
 *
 * @see styles.css — `.p-inputtext.p-invalid:not(.sf-touched)`
 */
@Directive({
  selector: '[pInputText][formField]',
  host: {
    '[class.sf-touched]': 'touched()',
  },
})
export class PrimengTouchedDirective {
  touched = input<boolean>(false);
}
