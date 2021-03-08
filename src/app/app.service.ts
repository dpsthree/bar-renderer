import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppService {
  drawTime0 = performance.now();
  drawTime1 = performance.now();

  updateTimes(){
      this.drawTime0 = this.drawTime1;
      this.drawTime1 = performance.now();
      return this.drawTime1 - this.drawTime0;
  }
}
