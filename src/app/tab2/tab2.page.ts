import { Component, OnInit } from '@angular/core';
//import { DbService } from '../services/db.service';
import { ImgService } from '../services/img.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleSitioPage } from '../modal-detalle-sitio/modal-detalle-sitio.page';
import { AlertController } from '@ionic/angular';
import { FirebaseDbService } from '../services/firebase-db.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sitios: any = [];

  constructor(
    //private db: DbService,
    public img: ImgService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public dbFirebase: FirebaseDbService
  ) { }

  /*ionViewWillEnter() {
    this.getSitios();
  }*/

  ionViewDidEnter() {
    this.getSitios();
  }

  getSitios() {
    /* Local db
    this.db.getSitios().then((res) => {
      if (res) {
        console.log(res);
        this.sitios = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < res.length; i++) {
          res[i].preview = this.img.getImage(res[i].foto);
          this.sitios.push(res[i]);
        }
      }
    });
    */

    this.dbFirebase.getSitios().subscribe(res => {
      this.sitios = [];
      res.forEach(data => {
        const sitio: any = data.payload.doc.data();
        sitio.id = data.payload.doc.id;
        sitio.preview = this.img.getImage(sitio.foto);
        this.sitios.push(sitio);
      });
    });

  }

  muestraSitio(item, i) {
    this.modalCtrl.create({
      component: ModalDetalleSitioPage,
      componentProps: { sitio: item, ind: i }
    }).then((modal) => {
      modal.onDidDismiss().then(() => {
        // se ejecuta al cerrar
        this.getSitios();
      });

      modal.present();

    });
  }

  async borrarSitio(id) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este sitio?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Si',
          handler: () => {
            /* db Local
            this.db.borraSitio(ind).then(() => {
              this.getSitios();
            });
            */
            this.dbFirebase.borrarSitio(id);

          }
        }
      ]
    });
    await alert.present();
  }


}
