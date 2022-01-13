//我的游戏区域 1
var local = function() {
  // 先声明游戏对象
  var game;

  //定义定时器时间间隔
  var INTERVAL = 500;

  //定义定时器
  var time = null;

  //计算时间
  var timeCount = 0;
  var times = 0;

  //定义一个start开始方法
  this.start = function() {
    //获取游戏中两个界面的dom元素
    var dom = {
      gameDiv: document.querySelector('#local_game'),
      nextDiv: document.querySelector('#local_next'),
      timeDiv: document.querySelector('#local_time'),
      scoreDiv: document.querySelector('#local_score'),
      local_tip: document.querySelector('#local_tip'),
    };
    //实例化Game;
    game = new Game();
    //并将dom传入到Game的初始化方法中
    game.init(dom, generateType(), generateDir());
    //产生初始方块
    game.performNext(generateType(), generateDir());
    bindKeyEvent();
    //游戏开始时定义一个定时器 让方块自动下移
    time = setInterval(move, INTERVAL);
  };

  function move() {
    //时间计数
    timeFunc();

    if (!game.down()) {
      game.fixed();
      //判断是否消行
      game.checkclear();

      //判断是否结束游戏
      if (game.gameover()) {
        stop();
        game.gameState(false);
      } else {
        //当当前方块已经落到底部后 我们便产生下一个方块
        game.performNext(generateType(), generateDir());
      }
    }
  }

  var timeFunc = function() {
    //计算秒数 因为每过500毫秒会调用一次
    timeCount += 1;
    if (timeCount == 2) {
      timeCount = 0;
      times += 1;
      //设置显示时间
      game.setTime(times);
    }

    if (times % 5 == 0) {
      // game.addTaiLines(generrateBottomLine(1));
    }
  };

  //随机生成干扰行
  /**
   *
   * @param {*} linenum 生成干扰行的行数
   */
  var generrateBottomLine = function(linenum) {
    //定义一个二维数组
    var lines = [];
    for (var i = 0; i < linenum; i++) {
      //二维数组中的一维数组
      var line = [];
      for (var j = 0; j < 10; j++) {
        //随机生成0-2的数
        line.push(Math.ceil(Math.random() * 2) - 1);
      }
      lines.push(line);
    }
    return lines;
  };

  //产生一个随机数 代表着方块的种类
  function generateType() {
    //产生0-6的整数
    return Math.ceil(Math.random() * 7) - 1;
  }

  //产生一个随机数 代表方块旋转的方向
  function generateDir() {
    //产生0-6的整数
    return Math.ceil(Math.random() * 4) - 1;
  }

  //游戏结束
  function stop() {
    if (time) {
      clearInterval(time);
      time = null;
    }
    document.onkeydown = null;
  }

  //声明键盘事件
  var bindKeyEvent = function() {
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 38: //up
          game.up();
          break;
        case 39: //right
          game.right();
          break;
        case 40: //down
          game.down();
          break;
        case 37: //left
          game.left();
          break;
        case 32: //space
          game.fall();
          break;
      }
    };
  };
};
