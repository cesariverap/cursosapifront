import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  textSearch = "";

  searchCourses(){
    this.search.emit(this.textSearch);
  }
}
