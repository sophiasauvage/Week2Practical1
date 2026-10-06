import { checkCanvasSize, simulateMousePosition,
        getShapes, TestResults, advanceToFrame, TestRectangle, canvasStatus, checkBackgroundIsCalledInDraw } from "https://cdn.jsdelivr.net/gh/Supportive-IDE/p5js-testing-demo@latest/p5jsTestingLibrary.js";

/**
 * A hacky solution to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) {
        clearInterval(loadTimer);
        runTests(canvases[0]);
    }
}

async function shapeTests() {
    const expectedRect00 = new TestRectangle(0, 0, 0, 0);
    const expectedRectMoveRight = new TestRectangle(0, 0, 325, 200);
    // On load
    simulateMousePosition(0, 0);

    for (const e of canvasStatus.errors) {
        TestResults.addFail(`In frame ${frameCount}, ${e}`);
    }
    await advanceToFrame(1);
    let actualShapes = getShapes();
    if (actualShapes.length !== 1) {
        TestResults.addFail(`When the sketch starts, there should be one rectangle. Your sketch has ${actualShapes.length} rectangles.`);
    } else {
        if (expectedRect00.isEqualTo(actualShapes[0], true)) {
            TestResults.addPass("When the mouse is at 0, 0, there is one rectangle at position 0, 0 with a width of 0 and a height of 0");
        } else {
            TestResults.addFail(`When the mouse is at 0, 0, there should be one rectangle at position 0, 0 with a width of 0 and a height of 0. Your sketch contains one ${actualShapes[0].type} at position ${actualShapes[0].x}, ${actualShapes[0].y} with a width of ${actualShapes[0].w} and a height of ${actualShapes[0].h}`);
        }
    }
    // move mouse
    simulateMousePosition(325, 200);
    await advanceToFrame(3);
    for (const e of canvasStatus.errors) {
        TestResults.addFail(`In frame ${frameCount}, ${e}`);
    }
    actualShapes = getShapes();
    if (actualShapes.length !== 1) {
        if (actualShapes.length === 0) {
            TestResults.addFail(`After 3 frames, there should be one rectangle. Your sketch has 0 rectangles. Make sure you are calling <code>rect()</code> <em>after</em> calling <code>background()</code> in <code>draw()</code>.`);
        } else {
            TestResults.addFail(`After 3 frames, there should be one rectangle. Your sketch has ${actualShapes.length} rectangles. You may be calling <code>background()</code> in the wrong place.`);
        }
    } else {
        if (expectedRectMoveRight.isEqualTo(actualShapes[0], true)) {
            TestResults.addPass("When the mouse is at 325, 200, there is one rectangle at position 0, 0 with a width of 325 and a height of 200");
        } else {
            TestResults.addFail(`When the mouse is at 325, 200, there should be one rectangle at position 0, 0 with a width of 325 and a height of 200. Your sketch contains one ${actualShapes[0].type} at position ${actualShapes[0].x}, ${actualShapes[0].y} with a width of ${actualShapes[0].w} and a height of ${actualShapes[0].h}`);
        }
    }
}

async function runTests(canvas) {
    canvas.style.pointerEvents = "none";
    const resultsDiv = document.getElementById("results");
    checkCanvasSize(600, 600);
    checkBackgroundIsCalledInDraw();
    await shapeTests();
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);
