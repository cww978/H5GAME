var GRAVITY = 9.8;
var OBJECTS = [];
var OBJECT_ID = 0;
var physiccsObject = function(){
	this.id = OBJECT_ID;
	this.gravity_flag = true;
	this.elastic = false;
	this.x = 0,
	this.y = 0,
	this.fast_x = 0,
	this.fast_y = 0,
	this.accele_x = 0,
	this.accele_y = 0,
	this.mass = 1
	this.getAllObjects = function(){
		return OBJECTS;
	}
};
var arcObject = function(setting){
	OBJECT_ID++;
	physiccsObject.call(this);
	this.type = 'arc';
	this.r = setting.r;
	this.color = setting.color;
	OBJECTS.push(this);
}
arcObject.prototype = new physiccsObject();
