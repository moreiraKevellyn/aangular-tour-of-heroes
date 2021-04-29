import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(response => {
        this.heroes = response.heroes.slice(1, 5)
      });
  }

  getTopHeroes(){
    this.heroService.getTopHeroes()
      .subscribe(response => {
        this.heroes = response.heroes.slice(1,5)
      });
  }
}
