import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
@Input('propCounter') CounterValue:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    let { CounterValue } = changes;
    console.log(CounterValue.currentValue, CounterValue.previousValue);
  }

}
