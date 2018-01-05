import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) { }

  ngOnInit() {
  }

}
