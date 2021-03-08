import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  bars = [];
  pixiRenderer = true;
  nativeRenderer = false;
  t0 = performance.now();
  t1 = performance.now();

  constructor(private appService: AppService) {
    this.updateBars();
  }

  updateBars() {
    this.t0 = this.t1;
    this.t1 = performance.now();
    this.appService.updateTimes();
    requestAnimationFrame(() => {
      this.bars = [];
      for (let x = 0; x < 64; x++) {
        this.bars.push(Math.floor(Math.random() * 225));
      }
      this.updateBars();
    });
  }

  toggleRenderer() {
    this.pixiRenderer = !this.pixiRenderer;
    this.nativeRenderer = !this.nativeRenderer;
  }
}
