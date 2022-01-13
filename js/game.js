//核心逻辑 2
var Game = function() {
  //这两个div为游戏中的两个最大的容器盒子 dom元素
  var gameDiv;
  var nextDiv;
  var timeDiv;
  var scoreDiv;
  var local_tipDiv;
  //游戏界面框中的方块坐标
  var gameData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  //装载所有的div的容器 数组
  //next中的div
  var nextDivs = [];
  //游戏框中的div
  var gameDivs = [];

  //定义两个方块
  //当前方块
  var cur;
  //下一个方块
  var next;

  //渲染游戏框中的div
  /**
   *
   * @param {*} container 最大容器 也就是这个div要被添加到容器
   * @param {*} data div的矩阵数据
   * @param {*} divs 用于装载所有的div
   */
  var initDiv = function(container, data, divs) {
    for (var i = 0; i < data.length; i++) {
      var DIV = [];
      for (var j = 0; j < data[i].length; j++) {
        var div = document.createElement('div');
        div.classList.add('none');
        div.style.top = i * 20 + 'px';
        div.style.left = j * 20 + 'px';
        container.appendChild(div);
        DIV.push(div);
      }
      divs.push(DIV);
    }
  };

  //刷新游戏界面的div 和提示下一个的div
  /**
   *
   * @param {*} data div的矩阵数据
   * @param {*} divs 装载div的容器
   */
  var refresh = function(data, divs) {
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].length; j++) {
        if (data[i][j] == 0) {
          divs[i][j].className = 'none';
        } else if (data[i][j] == 1) {
          divs[i][j].className = 'done';
        } else if (data[i][j] == 2) {
          divs[i][j].className = 'current';
        }
      }
    }
  };

  //初始化方法
  var init = function(doms, type, dir) {
    gameDiv = doms.gameDiv; //游戏区域的大div
    nextDiv = doms.nextDiv; //提示区域的大div
    timeDiv = doms.timeDiv; //显示时间的div
    scoreDiv = doms.scoreDiv; //显示分数的dom
    local_tipDiv = doms.local_tip; //显示游戏状态

    //这里返回的是七种方块的其中一种 这些方块都继承square对象的成员
    next = squareFactory.prototype.make(type, dir);

    initDiv(gameDiv, gameData, gameDivs);
    initDiv(nextDiv, next.data, nextDivs);
    refresh(next.data, nextDivs);
    //console.log(gameData)
  };

  //下移
  this.down = function() {
    //这里是将isValue方法传入到canDown中 里canDown中判断下落的点是否合法
    if (cur.canDown(isValue)) {
      //移动组合方块之前先清除数据 在重新添加
      clearGameData();
      //这里x加一 那么组合方块的初始下标位置变化加一 如从第十行开始 那么变化变成
      //第十一行
      cur.onDown(); //这里x轴控制的上下 y控制的是左右
      setData();
      refresh(gameData, gameDivs);
      //console.log(gameData);
      return true;
    } else {
      return false;
    }
    //这里我们需要注意 若next提示框中的组合方块四周都有空位时 我们就算不清除
    //它也能正常移动 这是因为后来方块会替换现有的空位 而现有的空位便会
    //向下移动
    //0 1 1 0
    //0 0 0 0
    //例如 我们若向右加一的话 那么它便会变成这样
    //0 0 1 1 这是因为它本来前面有个空位 所以加1后 后来的空位便会替换
    //原本1的位置 而原本1的位置由于加1了 所以也会整体向右移动
  };

  //左
  this.left = function() {
    if (cur.canLeft(isValue)) {
      clearGameData();
      cur.onLeft();
      setData();
      refresh(gameData, gameDivs);
      //console.log(gameData)
    }
  };

  //右
  this.right = function() {
    if (cur.canRight(isValue)) {
      clearGameData();
      cur.onRight();
      setData();
      refresh(gameData, gameDivs);
      //console.log(gameData)
    }
  };

  //上
  this.up = function() {
    if (cur.canRotate(isValue)) {
      cur.onrotate();
      setData();
      refresh(gameData, gameDivs);
    }
  };

  //直接坠落
  //在内部调用自己用this引用的方法时 也要加上this
  this.fall = function() {
    while (this.down());
  };

  //清除方块
  var clearGameData = function() {
    for (var i = 0; i < cur.data.length; i++) {
      for (var j = 0; j < cur.data[i].length; j++) {
        if (check(cur.origin, i, j))
          gameData[cur.origin.x + i][cur.origin.y + j] = 0;
      }
    }
  };
  //用于设置当前组合方块的位置变化
  var setData = function() {
    //外循环四次
    for (var i = 0; i < cur.data.length; i++) {
      //内循环四次
      for (var j = 0; j < cur.data[i].length; j++) {
        //将 square中的data矩阵的值赋给插入到gameData矩阵中的指定位置
        //例如 这里x为10 那么一级数组的开始位置下标就是 10+0
        //二级数组中的开始下标就是5+0
        //也就是data[10+0][5+0]
        //第二次就是 data[10+1][5+1] 以此类推
        //这里注意一级数组控制的是上下 二级数组控制的是左右
        //也就是说 x轴是上下 y轴是左右
        if (check(cur.origin, i, j))
          gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
      }
    }
  };

  //底部增加行
  this.addTaiLines = function(lines) {
    //lines为底部增加的行 例如line为2
    //将所有的方块往上移动两行
    // i=0;i<20 - 2;i++
    // gamedata[0] = gamedata[0+2] 例如从0开始 第一行就变成了第三行
    // gamedata[1] = gamedata[1+2] 第二行就变成了第四行
    // gamedata[2] = gamedata[2+2] 第三行就变成了第五行
    /**
     * 0 0 0 0 0 0 0 0 0 0
     * 2 2 2 2 2 2 2 2 2 2
     * 2 2 2 2 2 2 2 2 2 2
     * 2 2 2 2 2 2 2 2 2 2
     */
    for (var i = 0; i < gameData.length - lines.length; i++) {
      gameData[i] = gameData[i + lines.length];
    }
    //再把所有底部增加的内容显示出来
    //i=0 i<2 i++
    //gamedata[20-2+0](18) = lines[0]
    //gamedata[20-2+1](19) = lines[1]
    for (var i = 0; i < lines.length; i++) {
      gameData[gameData.length - lines.length + i] = lines[i];
    }
    cur.origin.x -= lines.length;
    if (cur.origin.x < 0) {
      cur.origin.x = 0;
    }
    refresh(gameData, gameDivs);
  };

  //设置时间显示
  this.setTime = function(times) {
    timeDiv.innerText = '--' + times + 's';
  };

  this.gameState = function(win) {
    if (win) {
      local_tipDiv.innerText = '你赢了';
    } else {
      local_tipDiv.innerText = '你输了';
    }
  };

  //产生下一个方块
  this.performNext = function(type, dir) {
    //首先先将下一个方块赋值给当前操作的方块
    cur = next;
    //然后重新设置当前游戏区域的方块
    setData();
    //在显示提示下一个方块
    next = squareFactory.prototype.make(type, dir);
    //然后刷新游戏区和提示区
    refresh(gameData, gameDivs);
    refresh(next.data, nextDivs);
  };

  //消行
  var Fraction = 0;
  this.checkclear = function() {
    Fraction = 0;
    //从最后一行开始 判断是否全部为1 若为1 则表示那一行以及全部铺满
    //否则clear为false 并跳出当前循环 例如第一次 若19行没有铺满 则跳出循环
    for (var i = gameData.length - 1; i >= 0; i -= 1) {
      var clear = true;
      for (var j = 0; j < gameData[0].length; j += 1) {
        //gamedata[19][0]!=1
        //or
        //gamedata[19][1]!=1 ....
        if (gameData[i][j] != 1) {
          clear = false;
          break;
        }
      }
      //若clear为true 说明这一行全部铺满
      if (clear) {
        Fraction += 1;
        //例如 m=19;m>0;m--
        for (var m = i; m > 0; m--) {
          //n=0;n<10;n++ 注 gamedata为20 其中每一个数组的长度为10
          for (var n = 0; n < gameData[0].length; n++) {
            //例如 外循环第一次
            //gamendata[19][0] = gamedata[19-1][0];
            //gamendata[19][1] = gamedata[19-1][1]; ....
            // 外循环第二次
            //gamendata[18][0] = gamedata[18-1][0];
            //gamendata[18][1] = gamedata[18-1][1]; ....
            gameData[m][n] = gameData[m - 1][n];
            //将上一行的内容移动到下一行
          }
        }
        //n=0;n<10;n++
        for (var n = 0; n < gameData[0].length; n++) {
          //gamedata[0][0] = 0
          //gamedata[0][1] = 0
          //gamedata[0][2] = 0 ....
          gameData[0][n] = 0;
        }
        //i++的作用是让最下面一行被清除后 比如 19行铺满 我们便将18行往下移动一个行
        //然后在重新判断当前移动后的18行(也就是19行)是否铺满
        //因为每次循环完成后 i都会-1 如果底层没有铺满我们便正常循环 如果底层铺满
        //我们便重头开始检测
        console.log('当前i', i);
        i++;
      }
    }
    addscore(Fraction);
  };

  var score = 0;
  var addscore = function(scoreCount) {
    switch (scoreCount) {
      case 1:
        score += 10;
        break;
      case 2:
        score += 30;
        break;
      case 3:
        score += 50;
        break;
      case 4:
        score += 100;
        break;
    }
    scoreDiv.innerText = '--' + score;
  };

  //游戏结束
  this.gameover = function() {
    var over = false;
    for (var i = 0; i < gameData[0].length; i++) {
      if (gameData[1][i] == 1) {
        //若第二行以及有落下的方块 那么游戏便结束
        over = true;
      }
    }
    return over;
  };

  /**
   *
   * @param {*} pos 等于当前方块的x 和 y的原点
   * @param {*} x 等于当前方块的上下位置的变化值
   * @param {*} y 左右位置的变化值
   */
  //判断当前是否可以移动
  var check = function(pos, x, y) {
    if (pos.x + x < 0) {
      return false;
    } else if (pos.x + x >= gameData.length) {
      return false;
    } else if (pos.y + y < 0) {
      return false;
    } else if (pos.y + y >= gameData[0].length) {
      return false;
    }
    //这里是判断如果我们落下的这个位置已经有一个方块的话 那也不合法
    //若这个方块已经落下 我们便判定它的矩阵数据为1
    else if (gameData[pos.x + x][pos.y + y] == 1) {
      return false;
    } else {
      return true;
    }
  };
  /*
   10 + 0 > length ?
   10 + 1 > length ?
  0 0 1 0 0 5 + 1 > length ?
  1 0 1 0 0
  2 0 1 1 0
  3 0 0 0 0
   0 1 2 3
  */

  //让当前方块变得不可移动
  this.fixed = function() {
    for (var i = 0; i < cur.data.length; i++) {
      //0 1 2 3
      for (var j = 0; j < cur.data[0].length; j++) {
        //0 1 2 3
        if (check(cur.origin, i, j)) {
          //若当前方块的值是 2 也就是说还处于操作状态的话
          //我们便将它赋值为 1 因为2等于操作中的方块 1等于以及落下的方块
          //而以及落下的方块是不可以移动 这个判断是写在check方法中的
          if (gameData[cur.origin.x + i][cur.origin.y + j] == 2) {
            gameData[cur.origin.x + i][cur.origin.y + j] = 1;
          }
        }
      }
    }
    refresh(gameData, gameDivs);
  };

  //检测当前next中的矩阵数据是否合法
  /**
   *
   * @param {*} pos 当前方块的原点
   * @param {*} nextdata next中方块矩阵
   */
  var isValue = function(pos, nextdata) {
    for (var i = 0; i < nextdata.length; i++) {
      for (var j = 0; j < nextdata[0].length; j++) {
        //判断当前next的矩阵数据中的每一个位置是否等于0
        //若不等于0则判断当前的点是否还能继续下降
        if (nextdata[i][j] !== 0) {
          //若不能 则直接返回false
          if (!check(pos, i, j)) return false;
        }
      }
    }
    //若都没有问题则返回true
    return true;
  };

  //将这个init导出 因为这里这个init是一个私有的方法
  this.init = init;
  this.addscore = addscore;
};
