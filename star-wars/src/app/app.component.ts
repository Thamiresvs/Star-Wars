import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './people';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Star-Wars';
  peoples: People[];

  constructor(private serv: PeopleService) { }

  ngOnInit() {
    this.inicia();
  }

  inicia(){
    for (let i = 1; i < 9; i++) {
      this.GetAllPeople(i);
    }
  }

  GetAllPeople(page): void{
    this.serv.GetPeople(page)
    .pipe(map(x => ({ results: x.results })))
    .subscribe(
      ok => {
        this.peoples = ok.results;
        console.log(ok);
      },
      error => {
        console.error('Não funcionou' + error);
      }
    );
  }
} 