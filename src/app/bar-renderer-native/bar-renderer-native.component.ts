import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { AppService } from "../app.service";

const barHeight = 8;
const canvasHeight = barHeight * 64;
const canvasWidth = 500;

@Component({
  selector: "app-bar-renderer-native",
  templateUrl: "./bar-renderer-native.component.html",
  styleUrls: ["./bar-renderer-native.component.css"],
})
export class BarRendererNativeComponent implements OnInit {
  @Input() set bars(newBars) {
    if (newBars && this.ctx) {
      this.clearStage();
      this.renderBars(newBars);
    }
  }
  ctx: CanvasRenderingContext2D;
  drawingTime
  constructor(private elRef: ElementRef, private appService: AppService) {}

  ngOnInit() {
    this.ctx = this.elRef.nativeElement
      .querySelector("#myCanvas")
      .getContext("2d");
  }

  renderBars(bars) {
    bars.forEach((bar, index) => {
      this.ctx.fillStyle = "#66ccff";
      this.ctx.fillRect(0, barHeight * index, bar, barHeight);
      this.ctx.fillRect(canvasWidth - bar, barHeight * index, bar, barHeight);
    });
    this.drawingTime = this.appService.updateTimes();
  }

  clearStage() {
    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
}
