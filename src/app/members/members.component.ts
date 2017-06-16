import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [PlayerService]
})
export class MembersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  goToDetailPage(clickedPlayer: Player) {
  this.router.navigate(['players', clickedPlayer.name]);
  };

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

}
