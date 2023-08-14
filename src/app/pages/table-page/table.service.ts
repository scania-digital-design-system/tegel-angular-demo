import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import {TableData} from './table-data'

@Injectable()
export class TableService {
  data = [
    {"truck":"L-series","driver":"Sonya Bruce","country":"Argentina","mileage":253987},
    {"truck":"P-series","driver":"Guerra Bowman","country":"Finland","mileage":885252},
    {"truck":"G-series","driver":"Ferrell Wallace","country":"Austria","mileage":7856},
    {"truck":"R-series","driver":"Cox Burris","country":"Italy","mileage":456654},
    {"truck":"S-series","driver":"Montgomery Cervantes","country":"Poland","mileage":65650},
    {"truck":"L-series","driver":"Sheryl Nielsen","country":"Bulgaria","mileage":85225},
    {"truck":"G-series","driver":"Benton Gomez","country":"Slovakia","mileage":80957}
  ]

  getTruckData(): Observable<TableData[]> {
    return of(this.data.map(d => d))
  }
}
