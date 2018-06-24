import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private readonly tree: Subject<any>;

  ngOnInit() {
    const data = {
      'name': 'A1',
      'children': [
        {
          'name': 'B1',
          'children': [
            {
              'name': 'C1',
              'value': 100
            },
            {
              'name': 'C2',
              'value': 300
            },
            {
              'name': 'C3',
              'value': 200
            }
          ]
        },
        {
          'name': 'B2',
          'value': 200
        }
      ]
    };

    const root = d3.hierarchy(data);
  }

}
