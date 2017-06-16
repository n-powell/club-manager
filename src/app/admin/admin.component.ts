import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }


  submitForm(name: string, position: string, starting: string, number: number, salary: number, goals: number, age: number, height: number, weight: number, from: string, about: string, twitter: string) {
    let newPlayer: Player = new Player(name, position, starting, number, salary, goals, age, height, weight, from, about, twitter);

    this.playerService.addPlayer(newPlayer);
  }
}
