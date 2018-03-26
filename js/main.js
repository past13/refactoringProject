console.log("main")

var canvas = document.createElement('canvas');
canvas.id="canvasTest";

// const canvas1 = document.getElementById("canvasTest");

console.log(canvas)


const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();
   
function bindEventListeners() {
	window.onresize = resizeCanvas;
	resizeCanvas();		
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';
	
	canvas.width  = canvas.offsetWidth;

	canvas.height = canvas.offsetHeight;
    
    sceneManager.onWindowResize();
}

function render() {
	requestAnimationFrame(render);	
    sceneManager.update();
}

