import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Schedule } from 'src/app/model/schedule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  get(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(environment.api);
  }
}
