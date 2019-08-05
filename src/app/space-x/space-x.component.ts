import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/space-x.service';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent implements OnInit {
  public spaceXInfos: Object;

  constructor(
    private _spaceXService: SpaceXService
  ) { }

  ngOnInit() {
    this._getSpaceXInfos();
  }

  private async _getSpaceXInfos() {
    this._spaceXService.getSpaceXInfos().subscribe(res => {
      this.spaceXInfos = res;
      console.log('res', res);
    });
  }
}

// #2 Adott komponens legenerálása. A service behúzása konstrukorba. Végpont kezelése egy metódusban.
// A metódus meghívása (ha bejövő adatról van szó, legtöbbször az ngOnInit()-ben)
// Az elmentett adatok innentől kezelhetőek, kiírathatóak HTML oldalon