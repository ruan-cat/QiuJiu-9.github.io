# position
<font size=4>这个属性决定了弹幕的初始位置单位是像素。   
基础的格式是： [x,y].   
其中的x和y可分别写：（offset x/y的意思的偏移值，每个值最后一项均可写偏移值）</font>

|                           Command                           |     Meaning      |                     Note                      | Example  |
| :---------------------------------------------------------: | :--------------: | :-------------------------------------------: | :------: |
|                  ['P'] or ['P',offset x/y]                  |      player      |     获取玩家的屏幕坐标作为子弹的屏幕x/y。     |  ['P']   |
|                  ['M'] or ['M',offset x/y]                  |      mouse       |     获取鼠标的屏幕坐标作为子弹的屏幕x/y。     |  ['M']   |
|         ['E',event id] or ['E',event id,offset x/y]         |      event       |     获取某事件的屏幕坐标作为子弹的屏幕x/y     | ['E',10] |
| ['B',projectile index] or ['B',projectile index,offset x/y] | projectile index | 获取其他子弹的屏幕坐标作为当前子弹的屏幕x/y。 | ['B',1]  |
|           ['S',script] or ['S',script,offset x/y]           |      script      |          用脚本的值作为弹幕的坐标。           |['S','$gamePlayer.screenX()+10']|
| ['Map',x/y] or ['Map',x/y,offset x/y] | map position | 在某个地图左边的中心显示弹幕。 |['Map',13]|
| ['F',function,functionArgumentsArray,offset rotation] | function | 执行某个函数作为x/y。 |['F',testFun,[],0]|

<font size=5>完整的属性范例:   </font>

position:[['P'],['P']],   
position:[['E',10,5],['E',10,0]],   
position:[['M'],['M']],   
position:[['S','$gamePlayer.screenX()'],['S','$gamePlayer.screenY()']],   
position:[['Map',13],['Map',10]],//在地图的x=13，y=10处显示弹幕。

------

<font size=5>异常替代：</font>

<font size=4>属性x或y的结果可能无法肯定，例如当x写['E',10]时，场内可能根本没有10号事件。为了在这种情况下仍让弹幕显示在您想要的位置上，则您可以在x或y的最后再加一项作为替代项。   
**注意，您要设置替代值时，必须填写offset x/y，可以将offset x/y设置为0以让x/y无偏移。**   
例如，position可以写[['E',10,0,['P']],['E',10,0,['P']]]。   
具体可能出现异常情况的值有：</font>

|                           Command                           |              Note              |
| :---------------------------------------------------------: | :----------------------------: |
|         ['E',event id] or ['E',event id,offset x/y]         |  指定的事件不存在时出现异常。  |
| ['B',projectile index] or ['B',projectile index,offset x/y] | 指定的弹幕不存在时将出现异常。 |

