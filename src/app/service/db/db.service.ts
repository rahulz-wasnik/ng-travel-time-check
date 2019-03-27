import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const massTransit = {
      'date': '25/09/2015',
      'organisations': [
        {
          'organisation': 'Sydney Buses',
          'busData': [
            {
              'busId': '42612',
              'routeVariant': '891 2 1',
              'deviationFromTimetable': -1
            },
            {
              'busId': '29016',
              'routeVariant': '400 1 1',
              'deviationFromTimetable': 0
            },
            {
              'busId': '90467',
              'routeVariant': '393 1 1',
              'deviationFromTimetable': 1
            },
            {
              'busId': '88836',
              'routeVariant': 'M20 1 0',
              'deviationFromTimetable': 1
            },
            {
              'busId': '79367',
              'routeVariant': 'L21 2 1',
              'deviationFromTimetable': 100
            }
          ]
        },
        {
          'organisation': 'Westbus',
          'busData': [
            {
              'busId': '94811',
              'routeVariant': '664 2 1',
              'deviationFromTimetable': 0
            },
            {
              'busId': '62788',
              'routeVariant': '888 1 2',
              'deviationFromTimetable': 100
            },
            {
              'busId': '14221',
              'routeVariant': '834 1 1',
              'deviationFromTimetable': 1
            }
          ]
        }
      ]
    };
    return { massTransit };
  }
}
