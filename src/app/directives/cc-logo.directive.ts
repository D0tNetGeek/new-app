import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

enum CardType { 
  VISA = 'visa', 
  MASTERCARD = 'mastercard', 
  AMERICAN_EXPRESS = 'americanexpress', 
  UNKNOWN = 'unknown'
}

@Directive({
  selector: '[ccLogo]'
})
export class CreditCardImageDirective  implements OnChanges{

  constructor() { }
 
  //@input is a decorator used for a parent component to child component communication
  //we cant access component properties outside component
  @Input() cardNumber!: string;

  //the @HostBinding() function decorator allows you to set the properties of the host element from the directive class.
  @HostBinding('src') imageSource! : string;

  // Lifecycle hook implemented here to update imageSource whenever     
  // the card number changes
  ngOnChanges(): void {
    this.imageSource = '../../../assets/card-types/' + this.getCardTypeFromNumber() + '.png';
  }

  getCardTypeFromNumber(): CardType{
    if(this.cardNumber){
      if(this.cardNumber.startsWith('35'))
      return CardType.AMERICAN_EXPRESS;
      else if(this.cardNumber.startsWith('45'))
      return CardType.VISA;
      else if(this.cardNumber.startsWith('55'))
      return CardType.MASTERCARD;
    }
    return CardType.UNKNOWN;
  }
}
