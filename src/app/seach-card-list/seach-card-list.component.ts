import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-seach-card-list',
  templateUrl: './seach-card-list.component.html',
  styleUrls: ['./seach-card-list.component.css'],
})
export class SeachCardListComponent implements OnInit {
  constructor(public searchService: SearchService) {}
  MainList:string[]=['hello', 'welcome', 'new', 'data'];
  SearchList: string[] = [];
  ngOnInit() {
    this.SearchList=[...this.MainList]
    this.searchService.subject.subscribe((e) => {
      console.log(e);
      this.SearchList= this.MainList.filter(r=>r.includes(e))
    });
  }
}
