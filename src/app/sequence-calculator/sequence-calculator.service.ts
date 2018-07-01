import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SequenceNumbers } from './sequence-numbers.model';

@Injectable()
export class SequenceCalculatorService {
    constructor (private http: Http) {
    }

  baseUrl: string = "http://localhost:52244/v1/sequence/";
  sequenceNumbers : SequenceNumbers;

  getSequenceNumbers(numberToGetSequenceFor:number) : Observable<SequenceNumbers> {
    var apiUrl = this.baseUrl + numberToGetSequenceFor;
    
    return this.http.get(apiUrl)
    .map((res:Response) => 
        this.sequenceNumbers =  res.json() as SequenceNumbers);
  }
}
