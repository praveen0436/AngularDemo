import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
    {id:1, name:'Praveen'},
    {id:2, name:'Kalyan'},
    {id:3, name:'Jyoti'},
    {id:4, name:'Akhil'},
    {id:5, name:'Nikhil'},
    {id:6, name:'Kumar'},
    {id:7, name:'Sharma'},
    {id:8, name:'Kavita'},
    {id:9, name:'Nikitha'},
    {id:10, name:'Srija'},
    {id:11, name:'Pushpa'}
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
  
}
