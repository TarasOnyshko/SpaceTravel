import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-calculate-form',
  templateUrl: './calculate-form.component.html',
  styleUrls: ['./calculate-form.component.css']
})
export class CalculateFormComponent implements OnInit {
  exvel: any;
  inmass: any;
  finmass: any;
  changevel: any;

  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cdn.omnicalculator.com/sdk.js';
    //s.src = 'functions.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

  calculate(){
    this.changevel = this.exvel * Math.log(this.inmass/this.finmass);   
  }


}
