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
      this.renderBars(newBars);
    }
  }

  leftBarGraphics = [];
  rightBarGraphics = [];

  private app = new PIXI.Application({
    width: canvasWidth,
    height: canvasHeight,
  });

  constructor(elRef: ElementRef, private appService: AppService) {
    elRef.nativeElement.appendChild(this.app.view);
    for (let x = 0; x < 64; x++) {
      let rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x66ccff);
      rectangle.drawRect(0, barHeight * x, 1, barHeight);
      rectangle.endFill();
      this.app.stage.addChild(rectangle);
      this.leftBarGraphics.push(rectangle);

      rectangle = new PIXI.Graphics();
      rectangle.beginFill(0x66ccff);
      rectangle.drawRect(0, barHeight * x, 1, barHeight);
      rectangle.endFill();
      this.app.stage.addChild(rectangle);
      this.rightBarGraphics.push(rectangle);
    }
  }

  renderBars(bars) {
    bars.forEach((bar, index) => {
      this.leftBarGraphics[index].width = bar;
      this.rightBarGraphics[index].width = bar;
      this.rightBarGraphics[index].x = canvasWidth - bar;
    });
    this.drawingTime = this.appService.updateTimes();
  }
}
