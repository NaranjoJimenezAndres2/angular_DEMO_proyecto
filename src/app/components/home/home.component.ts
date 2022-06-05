import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userIp: string = "";
  flag = '';
  hh = '';
  mm = '';
  ss = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadUserInfo();
    setInterval(() => {
      this.clockTimer();
    }
      , 1000);
  }

  loadUserInfo() {
    this.flag='';
    this.httpClient.get('https://jsonip.com/').subscribe(
      (data: any) => {
        this.userIp = data.ip;
        console.log(this.userIp);
        //find out info about the user from the ip
        this.httpClient.get('http://ip-api.com/json/').subscribe(
          (data: any) => {
            console.log(data);
            this.flag = 'assets/img/flags/' + data.countryCode.toLowerCase() + '.svg';
            console.log(this.flag);
          }
        )
      })
  }


  clockTimer() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    if (h < 10) {
      this.hh = '0' + h;
    }
    else {
      this.hh = h.toString();
    }

    if (m < 10) {
      this.mm = '0' + m;
    }
    else {
      this.mm = m.toString();
    }

    if (s < 10) {
      this.ss = '0' + s;
    }
    else {
      this.ss = s.toString();
    }
  }



}

