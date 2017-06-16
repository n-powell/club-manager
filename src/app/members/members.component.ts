import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  players: Player[] = [
    new Player("Fanendo Adi","Foreward", true,9,120000,5,26,6.4,185,"Nigeria","Loan purchase option exercised and signed as a Designated Player from FC Copenhagen on June 23, 2014.","@FANENDO"),
    new Player("Fanendo Adi","Foreward", true,9,120000,5,26,6.4,185,"Nigeria","Loan purchase option exercised and signed as a Designated Player from FC Copenhagen on June 23, 2014.","@FANENDO"),
    new Player("Fanendo Adi","Foreward", true,9,120000,5,26,6.4,185,"Nigeria","Loan purchase option exercised and signed as a Designated Player from FC Copenhagen on June 23, 2014.","@FANENDO")
  ];

  goToDetailPage(clickedPlayer: Player) {
  this.router.navigate(['players', clickedPlayer.name]);
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
