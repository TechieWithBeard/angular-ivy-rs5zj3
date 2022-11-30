import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.css'],
})
export class SeachBarComponent implements OnInit {
  constructor(public searchService: SearchService) {}
  inputValue: string = '';
  ngOnInit() {}

  search() {
    this.searchService.seachData(this.inputValue);
  }
}
