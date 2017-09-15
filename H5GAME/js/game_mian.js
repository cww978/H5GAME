var LAYER_BUMBER = 0;
var LAYER = [];
var gameMap = function(){
	this.layer = LAYER;
}
var Layer = function(name,map,ctx,color){
	this.layer_objects = [];
	this.layer_name = name;
	this.layer_canvas = map;
	this.layer_ctx = ctx;
	this.backgroud_color = color;
}
Layer.prototype.addObject = function(obj){
	this.layer_objects.push(obj);
}
Layer.prototype.LayerDraw = function(){
	var animation = new Animation(this);//绑定动画
	animation.Start();
}
gameMap.prototype.creatLayer = function(setting){
	var map = document.createElement('canvas');
	setting.name = setting.name || 'layer'+LAYER_BUMBER;
	map.classList.add(setting.name);
	try{
		window.innerWidth;
	}catch(e){
		alert('请更换谷歌浏览器')
		return false;
	}
	setting.width = setting.width || window.innerWidth;
	setting.heigth = setting.heigth || window.innerHeight;
	map.width = setting.width;
	map.height = setting.height;
	map.style.position = 'absolute';
	if(setting.layer != undefined && !isNaN(setting.layer)){
		map.style.zIndex = setting.layer;
	}
	else{
		console.log('Object.layer is not number')
		return false;
	}
	var ctx = map.getContext('2d');
	setting.color = setting.color || 'aquamarine';
	ctx.fillStyle = setting.color;
	ctx.fillRect(0,0,map.width,map.height);
	var smlayer = new Layer(setting.name,map,ctx,setting.color);
	LAYER.push(smlayer);
	document.body.appendChild(map);
	LAYER_BUMBER +=1;
	return smlayer;
}

