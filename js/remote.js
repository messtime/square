//对方游戏区域
//这个js主要为对方的操作意识
var Remote = function() {
  //游戏对象
  var game;
  //开始 决定方块类型 和旋转方向
  var start = function(type, dir) {
    //获取游戏中两个界面的dom元素
    var dom = {
      gameDiv: document.querySelector('#remote_game'),
      nextDiv: document.querySelector('#remote_next'),
      timeDiv: document.querySelector('#remote_time'),
      scoreDiv: document.querySelector('#remote_score'),
      local_tip: document.querySelector('#remote_tip'),
    };
    //实例化Game;
    game = new Game();
    //并将dom传入到Game的初始化方法中
    game.init(dom, type, dir);
  };

  //绑定事件
  var bindEvents = function() {
    document.querySelector('#left').onclick = function() {
      game.left();
    };
    document.querySelector('#right').onclick = function() {
      game.right();
    };
    document.querySelector('#down').onclick = function() {
      game.down();
    };
    document.querySelector('#rotate').onclick = function() {
      game.up();
    };
    document.querySelector('#fall').onclick = function() {
      game.fall();
    };
    document.querySelector('#fixed').onclick = function() {
      game.fixed();
    };
    document.querySelector('#performNext').onclick = function() {
      game.performNext(2, 2);
    };
    document.querySelector('#checkClear').onclick = function() {
      game.checkclear();
    };
    document.querySelector('#gameover').onclick = function() {
      game.gameover();
    };
    document.querySelector('#settime').onclick = function() {
      game.setTime(20);
    };
    document.querySelector('#addscore').onclick = function() {
      game.addscore(3);
    };
    document.querySelector('#gamestate').onclick = function() {
      game.gameState(true);
    };
    document.querySelector('#addTaiLines').onclick = function() {
      game.addTaiLines([[1, 0, 0, 1, 0, 1, 0, 1, 1, 1]]);
    };
  };

  //导出方法
  this.start = start;
  this.bindEvents = bindEvents;
};
