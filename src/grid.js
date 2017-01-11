function Grid(width, height) {
	this._arr = new Array(width * height);
	this._width = width;
	this._height = height;
}

Grid.prototype.get = function(x, y) {
	return this._arr[y * this._width + x];
};

Grid.prototype.set = function(x, y, value) {
	this._arr[y * this._width + x] = value;
};

Grid.prototype.getRow = function(y) {
	return this._arr.slice(y, (y + 1) * this._width);
};

Grid.prototype.getCol = function(x) {
	var col = [];
	for (var i = x; i < this._arr.length; i += this._width) {
		col.push(this._arr[i]);
	}
	return col;
};

Grid.prototype.fillRow = function(y, value) {
	for (var x = 0; x < this._width; x++) {
		this.set(x, y, value);
	}
};

Grid.prototype.fillCol = function(x, value) {
	for (var y = 0; y < this._height; y++) {
		this.set(x, y, value);
	}
};

Grid.prototype.log = function() {
	for (var i = 0; i < this._arr.length; i += this._width) {
		var row = this._arr.slice(i, (i + 1) * this._width).join(',');
		console.log(row);
	}
};