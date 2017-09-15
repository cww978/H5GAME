var Animation = function(layer){
	this.layer = layer;
}
Animation.prototype.Start = function(){
	var LY = this.layer;
	var objects = LY.layer_objects;
	LY.layer_ctx.clearRect(0,0,LY.layer_canvas.width,LY.layer_canvas.height);
	LY.layer_ctx.fillStyle = LY.backgroud_color;
	LY.layer_ctx.fillRect(0,0,LY.layer_canvas.width,LY.layer_canvas.height);
	for(var i = 0;i<objects.length;i++){
		LY.layer_ctx.beginPath();
		animationMove(objects[i]);//移动方法
		LY.layer_ctx.arc(objects[i].x, objects[i].y, objects[i].r, 0, Math.PI * 2, true);
		LY.layer_ctx.fillStyle = objects[i].color;
		LY.layer_ctx.closePath();
		LY.layer_ctx.fill();
	}
}
function animationMove(object){

	object.x += object.fast_x;
	object.y += object.fast_y;
}

