import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

 

  ngOnInit() {
  }
  
  login:any;
  constructor(public alertController:AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,) {
//recibo el parametro enviado desde la page Login
  this.activatedRoute.queryParams.subscribe(params =>{
  if(this.router.getCurrentNavigation()?.extras.state){
  this.login=this.router.getCurrentNavigation()?.extras?.state?.['loginData'];
  console.log(this.login)
    }
   });
  }
}
