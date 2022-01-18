// // Create the application helper and add its render target to the page
// let app = new PIXI.Application({ width: 640, height: 360 });
// document.body.appendChild(app.view);

// // Magically load the PNG asynchronously
// let sprite = PIXI.Sprite.from("./images/tuition.png");
// app.stage.addChild(sprite);

// // Add a ticker callback to move the sprite back and forth
// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   elapsed += delta;
//   sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });

// -------------------

// // Create the application helper and add its render target to the page
// let app = new PIXI.Application({ width: 640, height: 360 });
// document.body.appendChild(app.view);

// // Create window frame
// let frame = new PIXI.Graphics();
// frame.beginFill(0x666666);
// frame.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });
// frame.drawRect(0, 0, 208, 208);
// frame.position.set(320 - 100, 180 - 100);
// app.stage.addChild(frame);

// // Create a graphics object to define our mask
// let mask = new PIXI.Graphics();
// // Add the rectangular area to show
// mask.beginFill(0xffffff);
// mask.drawRect(0, 0, 200, 200);
// mask.endFill();

// // Add container that will hold our masked content
// let maskContainer = new PIXI.Container();
// // Set the mask to use our graphics object from above
// maskContainer.mask = mask;
// // Add the mask as a child, so that the mask is positioned relative to its parent
// maskContainer.addChild(mask);
// // Offset by the window's frame width
// maskContainer.position.set(4, 4);
// // And add the container to the window!
// frame.addChild(maskContainer);

// // Create contents for the masked container
// let text = new PIXI.Text(
//   "This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n" +
//     "You can put anything in the container and it will be masked!",
//   {
//     fontSize: 24,
//     fill: 0x1010ff,
//     wordWrap: true,
//     wordWrapWidth: 180,
//   }
// );
// text.x = 10;
// maskContainer.addChild(text);

// // Add a ticker callback to scroll the text up and down
// let elapsed = 0.0;
// app.ticker.add((delta) => {
//   // Update the text's y coordinate to scroll it
//   elapsed += delta;
//   text.y = 10 + -100.0 + Math.cos(elapsed / 50.0) * 100.0;
// });

// -------------------

const app = new PIXI.Application({ antialias: true });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill(0xde3249);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();

// Rectangle + line style 1
graphics.lineStyle(2, 0xfeeb77, 1);
graphics.beginFill(0x650a5a);
graphics.drawRect(200, 50, 100, 100);
graphics.endFill();

// Rectangle + line style 2
graphics.lineStyle(10, 0xffbd01, 1);
graphics.beginFill(0xc34288);
graphics.drawRect(350, 50, 100, 100);
graphics.endFill();

// Rectangle 2
graphics.lineStyle(2, 0xffffff, 1);
graphics.beginFill(0xaa4f08);
graphics.drawRect(530, 50, 140, 100);
graphics.endFill();

// Circle
graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
graphics.beginFill(0xde3249, 1);
graphics.drawCircle(100, 250, 50);
graphics.endFill();

// Circle + line style 1
graphics.lineStyle(2, 0xfeeb77, 1);
graphics.beginFill(0x650a5a, 1);
graphics.drawCircle(250, 250, 50);
graphics.endFill();

// Circle + line style 2
graphics.lineStyle(10, 0xffbd01, 1);
graphics.beginFill(0xc34288, 1);
graphics.drawCircle(400, 250, 50);
graphics.endFill();

// Ellipse + line style 2
graphics.lineStyle(2, 0xffffff, 1);
graphics.beginFill(0xaa4f08, 1);
graphics.drawEllipse(600, 250, 80, 50);
graphics.endFill();

// draw a shape
graphics.beginFill(0xff3300);
graphics.lineStyle(4, 0xffd900, 1);
graphics.moveTo(50, 350);
graphics.lineTo(250, 350);
graphics.lineTo(100, 400);
graphics.lineTo(50, 350);
graphics.closePath();
graphics.endFill();

// draw a rounded rectangle
graphics.lineStyle(2, 0xff00ff, 1);
graphics.beginFill(0x650a5a, 0.25);
graphics.drawRoundedRect(50, 440, 100, 100, 16);
graphics.endFill();

// draw star
graphics.lineStyle(2, 0xffffff);
graphics.beginFill(0x35cc5a, 1);
// graphics.drawStar(360, 370, 5, 50);
graphics.endFill();

// draw star 2
graphics.lineStyle(2, 0xffffff);
graphics.beginFill(0xffcc5a, 1);
// graphics.drawStar(280, 510, 7, 50);
graphics.endFill();

// draw star 3
graphics.lineStyle(4, 0xffffff);
graphics.beginFill(0x55335a, 1);
// graphics.drawStar(470, 450, 4, 50);
graphics.endFill();

// draw polygon
const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

graphics.lineStyle(0);
graphics.beginFill(0x3500fa, 1);
graphics.drawPolygon(path);
graphics.endFill();

app.stage.addChild(graphics);
