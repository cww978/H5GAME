var LAYER_BUMBER = 0;
var LAYER = [];
var gameMap = function(){
	this.layer = LAYER;
}
var Layer = function(){
}
Layer.prototype.creatLayer = function(setting){
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
	debugger
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
	LAYER.push({
		map_name:name,
		map_canvas:map,
		map_ctx:ctx
	});
	document.body.appendChild(map);
	LAYER_BUMBER +=1;
	return true;
}
gameMap.prototype.addLayer = function(setting){
	var layer = new Layer();
	layer.creatLayer(setting);
	return layer;
}
