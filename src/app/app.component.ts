import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; 

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface Persona {
  id: number;
  cliente: string;
  proyecto: string;
  fecha: Date;
  monto: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'credito-hipotecario';
  personaSelected : Persona = { id: 0, cliente: '', proyecto: '', fecha: new Date(), monto: 0 };
  personas : Persona[]= [
    { id: 1, cliente: 'CLIENTE 1', proyecto: 'Proyecto 1', fecha: new Date(), monto: 100},
    { id: 2, cliente: 'CLIENTE 2', proyecto: 'Proyecto 2', fecha: new Date(), monto: 200 },
    { id: 3, cliente: 'CLIENTE 3', proyecto: 'Proyecto 3', fecha: new Date(), monto: 300 },
    { id: 4, cliente: 'CLIENTE 4', proyecto: 'Proyecto 4', fecha: new Date(), monto: 400 },
    { id: 5, cliente: 'CLIENTE 5', proyecto: 'Proyecto 5', fecha: new Date(), monto: 500 },
    { id: 6, cliente: 'CLIENTE 6', proyecto: 'Proyecto 6', fecha: new Date(), monto: 600 },
  ];
  constructor(private primengConfig: PrimeNGConfig) { } 
  ngOnInit() { 
    this.primengConfig.ripple = true; 
} 

  BasicShow: boolean = false; 
  
  showDialog() { 
      this.BasicShow = true; 
  }

  personaDetalle(personaDetalle : Persona){
    console.log(personaDetalle);
    this.personaSelected = personaDetalle;
    this.showDialog();
  }
  submit(f:Persona){}
  
}
