import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  /*se coloca el decorador Input para indicar que se enviara propiedades desde fuera del componente */
  @Input() heroe:any = {};
  @Input() index:number;

  /*este decorador se utiliza cuando se envia parametros del hijo al padre */
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    /*se inicializa el evento personalizado */
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);

    /*esto se utiliza cuando se envia un propiedad al componente padre */
    // this.heroeSeleccionado.emit(this.index);
  }

}
