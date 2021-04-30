import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RankingService } from 'src/app/service/ranking.service';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/models/ranking';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ranking',
  templateUrl: './editar-ranking.component.html',
  styleUrls: ['./editar-ranking.component.css']
})
export class EditarRankingComponent implements OnInit {
  Ranking: any;
  registerForm: FormGroup;
  submitted = false;

  constructor(    private Router: Router,
    private formBuilder: FormBuilder,
    private rankingService: RankingService) { }

  ngOnInit(): void {

    this.Ranking=this.rankingService.getCodigo();


  }

  onSubmit() {

}

}
