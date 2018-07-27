import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // templateUrl: './footer.component.html',
  templateUrl: '../../views/footer.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        console.log("FOOTER");
  }

}
