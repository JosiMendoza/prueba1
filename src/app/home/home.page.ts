import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController, IonCard } from '@ionic/angular';
import { TcgDexService } from '../services/tcg-dex.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild('animarH1',{read: ElementRef, static: true})
  animarH1!:ElementRef;
  

  image: string | undefined;

  ngOnInit() {
   
  }

  
  login:any;
  private animation!:Animation;
  constructor(public alertController:AlertController,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private animationController: AnimationController,
              ) {
    
    this.activatedRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.login=this.router.getCurrentNavigation()?.extras?.state?.['loginData'];
        console.log(this.login)
      }
    });
  }
  
  ngAfterViewInit(){
    const animarH1=this.animationController
      .create()
      .addElement(this.animarH1.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, color: 'yellow' },
        { offset: 0.72, color: 'var(--background)' },
        { offset: 1, color: 'purple' },
        { offset: 1, color: 'red' },
     ]);
     this.animation = this.animationController
      .create()
      .duration(4000)
      .iterations(Infinity)
      .addAnimation([animarH1]);

      this.animation.play();
     
  }
  
  irAPerfil() {

    this.router.navigate(['/perfil']);
  }

  irRandomCartas(){
    this.router.navigate(['/cartas']);
  }

  irCamara(){
    this.router.navigate(['/camara']);
  }
  //////

  guardarPartida(){
    console.log(this)
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera 
    });

    this.image = image.dataUrl; 
  }

}


