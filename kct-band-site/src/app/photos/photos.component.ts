import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PICS } from '../all-pictures';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  pics = PICS;
  selectedPic: Pic;
  constructor() { }

  ngOnInit() {

  }

  onSelect(pic: Pic) : void {
    this.selectedPic = pic;
  }

}
