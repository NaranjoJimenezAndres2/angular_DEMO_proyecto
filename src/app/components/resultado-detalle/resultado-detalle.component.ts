import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PruebaService } from 'src/app/services/prueba.service';
import { Carrera } from 'src/app/models/carreras';
import { url } from 'inspector';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado-detalle',
  templateUrl: './resultado-detalle.component.html',
  styleUrls: ['./resultado-detalle.component.css']
})
export class ResultadoDetalleComponent implements OnInit {
  race: string | null;
  driverId: string | null;
  year: string | null;
  carreraResultado: Carrera[] =[]

  loading=false;

  fotoVer: any;
  fotoHam: any;
  fotoNor: any;
  fotoLec: any;
  fotoSai: any;
  fotoRic: any;
  fotoGas: any;
  fotoStr: any;
  fotoOco: any;
  fotoAlo: any;
  fotoPer: any;
  fotoTsu: any;
  fotoRai: any;
  fotoGio: any;
  fotoVet: any;
  fotoMsc: any;
  fotoMaz: any;
  fotoBot: any;
  fotoRus: any;
  fotoLat: any;
  else: any;

  
  constructor(private pruebaService: PruebaService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
    )
     {
       this.race = this.aRouter.snapshot.paramMap.get('circuitName'),
       this.driverId = this.aRouter.snapshot.paramMap.get('driverId'),
       this.year = this.aRouter.snapshot.paramMap.get('year'),

       this.fotoVer = sanitizer.bypassSecurityTrustStyle('url(https://img.redbull.com/images/c_fill,g_auto,w_1680,h_1100/q_auto,f_auto/redbullcom/2022/3/23/rz5zlnruxjvzl1shiubi/max-verstappen-rbr-2019-red-bull-racing-team-logo-1.jpg)')
       this.fotoHam = sanitizer.bypassSecurityTrustStyle('url(https://piks-eldesmarqueporta.netdna-ssl.com/bin/2020/08/29/hamilton_homenajea_a_chadwick_boseman__001.jpg)')
       this.fotoNor = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/lando-norris-mclaren-f1-team-mcl35m-mercedes-engine-celebrate-on-the-picture-id1393512607?s=2048x2048)')
       this.fotoLec = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/pole-position-qualifier-charles-leclerc-of-monaco-and-ferrari-is-picture-id1395968414?s=2048x2048)')
       this.fotoSai = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/carlos-sainz-jr-esp-team-scuderia-ferrari-being-interviewed-before-picture-id1390144171?s=2048x2048)')
       this.fotoRic = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/daniel-ricciardo-of-team-mclaren-during-practice-ahead-of-the-f1-of-picture-id1390429299?s=2048x2048)')
       this.fotoGas = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/pierre-gasly-of-france-and-scuderia-alphatauri-prepares-to-drive-in-picture-id1392961921?s=2048x2048)')
       this.fotoStr = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/lance-stroll-of-canada-driving-the-aston-martin-amr22-mercedes-during-picture-id1372382132?s=2048x2048)')
       this.fotoOco = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/esteban-ocon-of-france-and-alpine-f1-waves-to-the-crowd-on-the-of-picture-id1390573590?s=2048x2048)')
       this.fotoAlo = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/alpines-spanish-driver-fernando-alonso-received-his-3rdplace-trophy-picture-id1236712261?s=2048x2048)')
       this.fotoPer = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/sergio-perez-of-mexico-and-oracle-red-bull-racing-looks-on-in-the-picture-id1396156374?s=2048x2048)')
       this.fotoTsu = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/yuki-tsunoda-of-japan-and-scuderia-alphatauri-signs-autographs-for-picture-id1395932678?s=2048x2048')
       this.fotoRai = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/kimi-raikkonen-of-finland-and-alfa-romeo-racing-talks-in-the-drivers-picture-id1352742321?s=2048x2048')
       this.fotoGio = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/alfa-romeos-italian-driver-antonio-giovinazzi-gives-a-press-ahead-of-picture-id1237122368?s=2048x2048')
       this.fotoVet = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/sebastian-vettel-of-germany-and-aston-martin-f1-team-talks-in-the-picture-id1395759166?s=2048x2048')
       this.fotoMsc = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/mick-schumacher-of-germany-and-haas-f1-talks-in-the-drivers-press-picture-id1395753726?s=2048x2048')
       this.fotoMaz = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/nikita-mazepin-uralkali-haas-f1-team-during-the-formula-1-winter-at-picture-id1238738146?s=2048x2048')
       this.fotoBot = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/valtteri-bottas-of-finland-and-mercedes-gp-takes-a-seat-on-the-grid-picture-id1358565243?s=2048x2048')
       this.fotoRus = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/george-russell-of-great-britain-and-williams-looks-on-from-the-grid-picture-id1342804600?s=2048x2048')
       this.fotoLat = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/nicholas-latifi-of-canada-and-williams-crashes-in-qualifying-during-picture-id1390596416?s=2048x2048')
       this.else = sanitizer.bypassSecurityTrustStyle('url(https://media.gettyimages.com/photos/lando-norris-of-great-britain-driving-the-mclaren-f1-team-mcl35m-up-picture-id1358223983?s=2048x2048')

      }
      

  ngOnInit(): void {
    this.fakeloading();
    //this.getResultadoDetalle()
  }

  getResultadoDetalle(){
    if (this.year != null && this.race != null && this.driverId != null) {
      this.pruebaService.getResultadoDetalle(this.year, this.race,this.driverId).subscribe(
      res=> {
        console.log(res)
        this.loading = false;
        this.carreraResultado = res;
        //console.log(this.carreraResultado)
      },
      err => console.error(err)
    );
  }  

}

fakeloading(){
  this.loading = true;
  this.getResultadoDetalle()
  /*setTimeout(() => {
    this.loading = false;
    }, 2000);*/
}


  getBackGround(code: string){
    if (code == 'VER') {
      return this.fotoVer
    }
    else if (code == 'HAM') {
      return this.fotoHam
    }
    else if (code == 'NOR') {
      return this.fotoNor
    }
    else if (code == 'LEC') {
      return this.fotoLec
    }
    else if (code == 'SAI') {
      return this.fotoSai
    }
    else if (code == 'RIC') {
      return this.fotoRic
    }
    else if (code == 'GAS') {
      return this.fotoGas
    }
    else if (code == 'STR') {
      return this.fotoStr
    }
    else if (code == 'OCO') {
      return this.fotoOco
    }
    else if (code == 'ALO') {
      return this.fotoAlo
    }
    else if (code == 'PER') {
      return this.fotoPer
    }
    else if (code == 'TSU') {
      return this.fotoTsu
    }
    else if (code == 'RAI') {
      return this.fotoRai
    }
    else if (code == 'GIO') {
      return this.fotoGio
    }
    else if (code == 'VET') {
      return this.fotoVet
    }
    else if (code == 'MSC') {
      return this.fotoMsc
    }
    else if (code == 'MAZ') {
      return this.fotoMaz
    }
    else if (code == 'BOT') {
      return this.fotoBot
    }
    else if (code == 'RUS') {
      return this.fotoRus
    }
    else if (code == 'LAT') {
      return this.fotoLat
    }
    else {
      return this.else
    }

  }
}
