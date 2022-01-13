//所有的方块的公共逻辑 3
var square = function() {
  //方块提示框中的方块数据
  this.data = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  this.dir = 0;

  //方块坐标原点
  this.origin = {
    x: 0,
    y: 0,
  };
};

//检测当前矩阵数据中的方块位置能否下降
square.prototype.canDown = function(isvalue) {
  var test = {};
  //console.log(this.origin.x,this.origin.x + 1);
  //这里要加1的原因是因为 这个方法是在我们还没有执行到加1程序之前调用的
  //所以我们需要手动给它去加1
  test.x = this.origin.x + 1;
  test.y = this.origin.y;
  return isvalue(test, this.data);
};

square.prototype.canLeft = function(isvalue) {
  var test = {};
  test.x = this.origin.x;
  test.y = this.origin.y - 1;
  return isvalue(test, this.data);
};

square.prototype.canRight = function(isvalue) {
  var test = {};
  test.x = this.origin.x;
  test.y = this.origin.y + 1;
  return isvalue(test, this.data);
};

//下落方法 这个方法我们放到原型对象上 因为下落方法是主要的方法
square.prototype.onDown = function() {
  this.origin.x += 1;
};

square.prototype.onLeft = function() {
  this.origin.y -= 1;
};

square.prototype.onRight = function() {
  this.origin.y += 1;
};

//下面是旋转的功能
square.prototype.canRotate = function(isvalue) {
  var testdir = (this.dir + 1) % 4; //因为是在旋转指向前进行的判断 所以我们先加1
  var testrotate = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (var i = 0; i < this.data.length; i++) {
    for (var j = 0; j < this.data[i].length; j++) {
      testrotate[i][j] = this.rotate[testdir][i][j];
    }
  }
  return isvalue(this.origin, testrotate);
};

square.prototype.onrotate = function(num) {
  num = num | 1;
  this.dir = (this.dir + num) % 4; //因为是在旋转指向前进行的判断 所以我们先加1
  for (var i = 0; i < this.data.length; i++) {
    for (var j = 0; j < this.data[i].length; j++) {
      this.data[i][j] = this.rotate[this.dir][i][j];
    }
  }
};
