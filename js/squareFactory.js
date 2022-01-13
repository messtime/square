//工厂 用于生成不同的方块
//所有的方块的公共逻辑 3
var square1 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
};
square1.prototype = square.prototype; //打通原型链

var square2 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
};
square2.prototype = square.prototype;

var square3 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [0, 2, 0, 0],
      [2, 2, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
};
square3.prototype = square.prototype;

var square4 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
};
square4.prototype = square.prototype;

var square5 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [0, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [2, 2, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 0, 0, 0],
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
};
square5.prototype = square.prototype;

var square6 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [0, 2, 0, 0],
      [0, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 2, 2, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
  ];
};
square6.prototype = square.prototype;

var square7 = function() {
  //这样写 当我们实例化square1的时候 square中this引用的成员将会添加到square1上
  square.call(this);
  //四个不同的旋转方向 默认是0 也就是第一个
  this.rotate = [
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 2, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
    ],
    [
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 2, 0, 0],
      [2, 2, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
    ],
  ];
};
square7.prototype = square.prototype;

var squareFactory = function() {};
squareFactory.prototype.make = function(index, dir) {
  var s;
  index += 1;
  switch (index) {
    case 1:
      s = new square1();
      break;
    case 2:
      s = new square2();
      break;
    case 3:
      s = new square3();
      break;
    case 4:
      s = new square4();
      break;
    case 5:
      s = new square5();
      break;
    case 6:
      s = new square6();
      break;
    case 7:
      s = new square7();
      break;
    default:
      break;
  }
  //因为一来square中的data矩阵默认全是0 所以我们需要给它一个旋转方向
  //让它有一个形状
  console.log(index, s);
  s.origin.x = 0;
  s.origin.y = 3;
  s.onrotate(dir);
  return s;
};
