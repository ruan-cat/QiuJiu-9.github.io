# initialRotation
<font size=4>这个属性决定了子弹的初始朝向，单位为角度而不是弧度。</font>

|                      Command                       |     Meaning      |                             Note                             |             Example              |
| :------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :------------------------------: |
|  [&#39;PD&#39;] or [&#39;PD&#39;,offset rotation]  | player direction |               弹幕的初始朝向与玩家的朝向相同。               |              ['PD']              |
|           ['P'] or ['P',offset rotation]           |  toward player   |               弹幕初始时会朝着玩家所在的地方。               |              ['P']               |
|           ['M'] or ['M',offset rotation]           |   toward mouse   |                    弹幕初始时会朝着鼠标。                    |              ['M']               |
|  ['E',event id] or ['E',event id,offset rotation]  |   toward event   | 弹幕初始时会朝着某个事件所在的地方。<br />event id写0时代表当前事件。 |             ['E',1]              |
| ['ED',event id] or ['ED',event id,offset rotation] | event direction  |             弹幕的初始朝向与某个事件的朝向相同。             |             ['ED',0]             |
|  ['G',group id] or ['G',group id,offset rotation]  |   event group    |        这个弹幕会朝向某个事件组中距离它最近的事件。.         |          ['G','enemy']           |
|    ['S',script] or ['S',script,offset rotation]    |      script      |                   弹幕的朝向为脚本的值。.                    | ['S','$gameVariables.value(10)'] |

<font size=4>完整的属性范例:   </font>

initialRotation:['P',-10],   
initialRotation:['P',10],   
initialRotation:['G',enemy],   
initialRotation:['M'],   
