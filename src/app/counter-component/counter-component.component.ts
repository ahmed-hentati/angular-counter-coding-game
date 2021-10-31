import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: './counter-component.component.html',
})
export class CounterComponentComponent implements OnInit {
  @Input() message: string;
  @Output() tick: EventEmitter<string> = new EventEmitter<string>();
  interval: number = 0;

  constructor() {}

  ngOnInit() {}

  onKey(event) {
    this.interval = event.target.value;
    console.log(this.interval);
  }

  setIntervalMethod() {
    setInterval(
      () => this.tick.emit('Interval:' + this.interval.toString()),
      this.interval
    );
  }
}
