import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      { id: "1", text: "Generate UI", date: new Date("12/22/2020 12:33:33") },
      { id: "2", text: "Create Login", date: new Date("12/22/2020 12:33:33") },
      { id: "3", text: "Fix Bug", date: new Date("12/22/2020 12:33:33") },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
