import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SortBySalaryPipe } from '../salary.pipe';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [PlayerService]
})
export class MembersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterBySortBySalaryPipe: 'allPlayers';

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  };

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  onChange(optionFromMenu) {
  this.filterBySortBySalaryPipe = optionFromMenu;
  }

}
