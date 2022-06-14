# position
<font size=4>这个属性决定了弹幕的初始位置单位是像素。   
基础的格式是： [x,y].   
其中的x和y可分别写:</font>

|                           Command                           |     Meaning      |                     Note                      | Example  |
| :---------------------------------------------------------: | :--------------: | :-------------------------------------------: | :------: |
|                  ['P'] or ['P',offset x/y]                  |      player      |     获取玩家的屏幕坐标作为子弹的屏幕x/y。     |  ['P']   |
|                  ['M'] or ['M',offset x/y]                  |      mouse       |     获取鼠标的屏幕坐标作为子弹的屏幕x/y。     |  ['M']   |
|         ['E',event id] or ['E',event id,offset x/y]         |      event       |     获取某事件的屏幕坐标作为子弹的屏幕x/y     | ['E',10] |
| ['B',projectile index] or ['B',projectile index,offset x/y] | projectile index | 获取其他子弹的屏幕坐标作为当前子弹的屏幕x/y。 | ['B',1]  |
|           ['S',script] or ['S',script,offset x/y]           |      script      |          用脚本的值作为弹幕的坐标。           |['S','$gamePlayer.screenX()+10']|

<font size=4>完整的属性范例:   </font>

position:[['P'],['P']],   
position:[['E',10,5],['E',10,0]],   
position:[['M'],['M']],   
position:[['S','$gamePlayer.screenX()'],['S','$gamePlayer.screenY()']],
