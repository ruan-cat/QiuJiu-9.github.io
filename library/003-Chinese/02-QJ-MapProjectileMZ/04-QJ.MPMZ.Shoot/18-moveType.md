# moveType

<font size=4>这个属性决定了弹幕的移动方式。   
默认值为 ['S',4].</font>

|                           Command                            |                           Meaning                            |                             Note                             |                Example                |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------: |
|                         ['S',speed]                          |                           直线移动                           |                              -                               |               ['S',12]                |
|               ['TP',speed,max rotation angle]                |                           追逐玩家                           | speed*: 追踪的速度.<br />max rotation angle*: 一次移动的最大角度改变量. |              ['TP',12,6]              |
|  [&#39;TP&#39;,speed,max rotation angle,disturbance angle]   |                  追逐玩家并且有一定的扰动值                  |        disturbance angle*: 追踪时角度改变量的扰动值.         |            ['TP',12,6,12]             |
|           ['TG',Group Id,speed,max rotation angle]           |             追逐事件群组中距离当前弹幕最近的弹幕             |                   Group Id: 事件群组编号.                    |          ['TG','enemy',12,6]          |
|  ['TG',Group Id,speed,max rotation angle,disturbance angle]  |     追逐事件群组中距离当前弹幕最近的弹幕且有一定的扰动值     |                              -                               |        ['TG','enemy',12,6,12]         |
| ['QC',launch angle,bounce times,one bounce distance,one bounce time] |                       抛物线，多次弹跳                       | launch angle: 在属性initialRotation的基础上发射的抛射角<br />bounce times: 弹跳次数<br />one bounce distance: 一次弹跳的距离，单位为像素<br />one bounce time: 一次弹跳的时间，单位为帧 |           ['QC',60,3,24,10]           |
|                      ['B',characterId]                       |                    固定在事件或者玩家身上                    | characterId: <br />-1 -> 玩家<br />greater than zero -> 事件id<br /> equal to zero -> 当前事件 |               ['B',-1]                |
| ['B',characterId,down x offset,down y offset,left x offset,left y offset,<br />right x offset,right y offset,up x offset,up y offset] | 固定在事件或者玩家身上，<br />且当玩家或者事件的朝向不同时，弹幕有不同的偏移。 |              分别为朝下朝左朝右朝上的x或者y偏移              |       ['B',-1,0,0,0,0,0,0,0,0]        |
|                ['C',characterId,radius,speed]                |            让弹幕围绕玩家移动<br />（圆形或椭圆）            | radius\*: 旋转的半径，写数字，单位是像素。<br />radius也可以写[半径1,半径2]，此时围绕形状为椭圆，椭圆有两个半径。<br />speed\*: 旋转速度，单位为 度每帧 | ['C',-1,72,1]<br />['C',-1,[16,56],2] |
|          ['C',characterId,radius,speed,trace speed]          |                              -                               | 当弹幕脱离轨道时弹幕会追逐角色。<br />trace speed的单位是像素每帧 |          ['C',-1,72,0.02,12]          |
|          ['F',x-axis expression,y-axis expression]           |                           参数方程                           | 使用以t为参数的参数方程作为弹幕的移动类型。弹幕的初始角度即为x正半轴。<br /><br /><br />['S',10] 等同于 ['F','10\*t','0'] |           ['F','10\*t','0']           |
|                     ['D',isSynRotation]                      |         弹幕会不断读取属性position的值作为实际坐标。         |            isSynRotation：是否也同步读取角度值。             |              ['D',false]              |
|        ['BL',speed,stepMin,stepMax,widthMin,widthMax]        | BL就是broken line，折线。<br />让弹幕沿着随机的折线移动。<br /> | 折线每沿移动方向行走一步（stepMin到stepMax之间，单位是像素），就随机向两方转折一下，转折点距移动方向的距离介于widthMin和widthMax之间，单位是像素。沿着这条折线的一度速度是speed，单位是像素每帧。 |         ['BL',4,12,36,24,48]          |
|           ['BB',projectile index,r,sync rotation]            |              使该弹幕绑定在对应弹幕的相对位置。              | 弹幕会每帧读取projectile index号弹幕的位置和自己的position属性，并将他们加起来作为弹幕实际的位置。<br />效果就是此弹幕会显示在projectile index号弹幕的相对位置。<br />projectile index：另一个弹幕的编号。<br />r：写true或false，默认为true，相对位置是否考虑projectile index号弹幕的角度。<br />sync rotation：写true或false，默认为true，写true时，弹幕会每帧读取projectile index号弹幕的角度和自己的initialRotation属性，并将他们加起来作为弹幕实际的角度。 |               ['BB',1]                |

<font size=4>完整的属性范例:   </font>
<br/><br/>moveType:['S',10],   
moveType:['S','0|0~30/10~30/0'],   
moveType:['TP',12,6,12],   
moveType:['TP','6|12~6/6~6|6~6/12',6,12],   
moveType:['TP','6|12~6/6~6|6~6/12',6,'6|2~6|4'],   
moveType:['TG','enemy',12,6,12],   
moveType:['TG','test','6|12~6/6~6|6~6/12',6,12],   
moveType:['TG','helper','6|12~6/6~6|6~6/12',6,'6|2~6|4'],   
moveType:['QC',60,3,24,10],   
moveType:['B',-1],   
moveType:['B',-1,0,12,-12,0,12,0,0,-12],   
moveType:['C',-1,72,0.02],   
moveType:['C',-1,'0|72~60/48~60/72',0.02],   
moveType:['C',-1,72,0.02,12],   
moveType:['F','10\*t','0'],   
moveType:['F','4\*t','36\*Math.cos(t/4)'],   