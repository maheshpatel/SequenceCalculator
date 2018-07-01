import { Component, OnInit } from '@angular/core';
import { SequenceCalculatorService } from './sequence-calculator.service';
import { SequenceNumbers } from './sequence-numbers.model';

@Component({
  selector: 'app-sequence-calculator',
  templateUrl: './sequence-calculator.component.html',
  styleUrls: ['./sequence-calculator.component.css']
})
export class SequenceCalculatorComponent implements OnInit {
  sequenceNumbers: SequenceNumbers;
  isValid: boolean;
  errorMessage: string;

  constructor(private sequenceCalculatorService: SequenceCalculatorService) {
  }

  ngOnInit() {
  }

  btnSubmitClick(sequenceNumber: number) {
    this.isValid = this.validateSequenceNumber(sequenceNumber);
    if (this.isValid) {
      this.sequenceCalculatorService.getSequenceNumbers(sequenceNumber).subscribe(data =>
        this.populateSequenceNumbers(data));
    }
    else {
        this.errorMessage = "Please check the value you have entered. You can enter positive numbers only.";
    }
  }

  populateSequenceNumbers(sequenceResponse: SequenceNumbers): SequenceNumbers {
    this.sequenceNumbers = new SequenceNumbers();
    this.sequenceNumbers.allNumbersUptoGivenNumber = sequenceResponse.allNumbersUptoGivenNumber;
    this.sequenceNumbers.evenNumbersUptoGivenNumber = sequenceResponse.evenNumbersUptoGivenNumber;
    this.sequenceNumbers.fizzBuzzSequenceNumbersUptoGivenNumber = sequenceResponse.fizzBuzzSequenceNumbersUptoGivenNumber;
    this.sequenceNumbers.oddNumbersUptoGivenNumber = sequenceResponse.oddNumbersUptoGivenNumber;
    return this.sequenceNumbers;
  }

  validateSequenceNumber(numberToValidate): boolean {
    var regExpression = new RegExp('^(0|[1-9][0-9]*)$');
    if (regExpression.test(numberToValidate)) {
      this.errorMessage = "";
      return true;
    }
    this.sequenceNumbers = null;
    return false;
  }
}