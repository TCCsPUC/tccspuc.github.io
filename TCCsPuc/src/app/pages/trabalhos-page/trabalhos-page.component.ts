import { Component, OnInit } from '@angular/core';
import { TrabalhoService } from '../../services/trabalho.service';

@Component({
  selector: 'app-trabalhos-page',
  templateUrl: './trabalhos-page.component.html',
  styleUrls: ['./trabalhos-page.component.css']
})
export class TrabalhosPageComponent implements OnInit {

  public trabalhos;

  constructor(private trabalhoService: TrabalhoService) { }

  ngOnInit(): void {
    this.trabalhos =  this.trabalhoService.Get();
  }
}
