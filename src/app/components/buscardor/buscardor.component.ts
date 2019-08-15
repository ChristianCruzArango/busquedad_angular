import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html',
  styles: []
})
export class BuscardorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;
  @Input() index:number;

  constructor(private activatedRouter:ActivatedRoute,private servicio:HeroesService,private router:Router) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this.servicio.buscarHeores(params['termino']);
    });
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',this.index]);
  }

}
