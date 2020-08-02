import { Injectable } from "@angular/core";
import { Log } from "../models/Log";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: "1", text: "Generate UI", date: new Date("12/22/2020 12:33:33") },
      { id: "2", text: "Create Login", date: new Date("12/22/2020 12:33:33") },
      { id: "3", text: "Fix Bug", date: new Date("12/22/2020 12:33:33") },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
