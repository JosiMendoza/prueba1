import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  picture:any;
  constructor() { }

  ngOnInit() {
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality:100,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    this.picture = image.dataUrl
  }
}
