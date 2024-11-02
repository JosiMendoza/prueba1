import { Component, OnInit } from '@angular/core';
import { TcgDexService } from '../services/tcg-dex.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.page.html',
  styleUrls: ['./cartas.page.scss'],
})
export class CartasPage implements OnInit {

  constructor(private tcgDexService: TcgDexService,public alertController:AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  irAPerfil() {

    this.router.navigate(['/perfil']);
  }
}
