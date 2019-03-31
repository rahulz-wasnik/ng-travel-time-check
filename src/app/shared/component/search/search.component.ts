import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const states = ['Hurstville', 'Carlton', 'Kogarah', 'Rockdale', 'Banksia', 'Wolli Creek',
  'Tempe', 'Sydnem', 'Central', 'Townhall', 'Martin place', 'Kings cross'];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() modifySearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  onModifySearch(): void {
    this.modifySearch.emit();
  }

}
