import {
  Component,
  ElementRef,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import * as PIXI from "pixi.js";
import { AppService } from "../app.service";

const barHeight = 8;
const canvasHeight = barHeight * 64;
const canvasWidth = 500;

@Component({
  selector: "app-bar-renderer",
  templateUrl: "./bar-renderer.component.html",
  styleUrls: ["./bar-renderer.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarRendererComponent {
  drawingTime;

  @Input() set bars(newBars) {
    if (newBars) {
      this.clearStage();
      this.renderBars(newBars);
    }
  }

  private app = new PIXI.Application({
    width: canvasWidth,
    height: canvasHeight,
  });

  constructor(elRef: ElementRef, private appService: AppService) {
    elRef.nativeElement.appendChild(this.app.view);
  }

  renderBars(bars) {
    bars.forEach((bar, index) => {
      let rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x66ccff);
      rectangle.drawRect(0, barHeight * index, bar, barHeight);
      rectangle.endFill();
      this.app.stage.addChild(rectangle);
      rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x66ccff);
      rectangle.drawRect(canvasWidth - bar, barHeight * index, bar, barHeight);
      rectangle.endFill();
      this.app.stage.addChild(rectangle);
    });
    this.drawingTime = this.appService.updateTimes();
  }

  clearStage() {
    for (var i = this.app.stage.children.length - 1; i >= 0; i--) {
      this.app.stage.removeChild(this.app.stage.children[i]);
    }
  }
}
