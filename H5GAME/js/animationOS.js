var Animation = function(layer){
	this.layer = layer;
}
Animation.prototype.Start = function(){//开始绘制根据物体属性改变物体状态
	var LY = this.layer;
	var objects = LY.layer_objects;
	LY.layer_ctx.clearRect(0,0,LY.layer_canvas.width,LY.layer_canvas.height);
	LY.layer_ctx.fillStyle = LY.backgroud_color;
	LY.layer_ctx.fillRect(0,0,LY.layer_canvas.width,LY.layer_canvas.height);
	for(var i = 0;i<objects.length;i++){
		LY.layer_ctx.beginPath();
		animationMove(objects[i],LY.layer_canvas);//移动方法
		LY.layer_ctx.arc(objects[i].x, objects[i].y, objects[i].r, 0, Math.PI * 2, true);
		LY.layer_ctx.fillStyle = objects[i].color;
		LY.layer_ctx.closePath();
		LY.layer_ctx.fill();
	}
}
function animationMove(object,canvas){
	object.x += object.fast_x;
	object.y += object.fast_y;
	if(object.gravity_flag)
		object.fast_y += 0.4;
	if(object.elastic)
		animatioinElastic(object,canvas);
}
function animatioinElastic(object,canvas){//触碰边界的回弹检测
	if(object.x+object.r>canvas.width || object.x < object.r){
		if(object.x < object.r)
			object.x = object.r
		object.fast_x = -object.fast_x;
	}
	if(object.y+object.r>canvas.height || object.y < object.r){
		if(object.y < object.r)
			object.y = object.r//调整位置
		object.fast_y = -object.fast_y;
	}
}

