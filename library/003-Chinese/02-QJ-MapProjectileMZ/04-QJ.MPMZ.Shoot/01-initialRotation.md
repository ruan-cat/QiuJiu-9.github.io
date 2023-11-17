# initialRotation
<font size=4>这个属性决定了子弹的初始朝向，单位为角度而不是弧度。</font>

|                           Command                            |     Meaning      |                             Note                             |             Example              |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :------------------------------: |
|       [&#39;PD&#39;] or [&#39;PD&#39;,offset rotation]       | player direction |               弹幕的初始朝向与玩家的朝向相同。               |              ['PD']              |
|                ['P'] or ['P',offset rotation]                |  toward player   |               弹幕初始时会朝着玩家所在的地方。               |              ['P']               |
|                ['M'] or ['M',offset rotation]                |   toward mouse   |                    弹幕初始时会朝着鼠标。                    |              ['M']               |
|       ['E',event id] or ['E',event id,offset rotation]       |   toward event   | 弹幕初始时会朝着某个事件所在的地方。<br />event id写0时代表当前事件。 |             ['E',1]              |
|      ['ED',event id] or ['ED',event id,offset rotation]      | event direction  |             弹幕的初始朝向与某个事件的朝向相同。             |             ['ED',0]             |
|       ['G',group id] or ['G',group id,offset rotation]       |   event group    |        这个弹幕会朝向某个事件组中距离它最近的事件。.         |          ['G','enemy']           |
|         ['S',script] or ['S',script,offset rotation]         |      script      |                    弹幕的朝向为脚本的值。                    | ['S','$gameVariables.value(10)'] |
|      ['PO',position] or ['PO',position,offset rotation]      |     position     |   弹幕朝向某个位置，其中的position与属性中的position一样。   |     ['PO',[['B',1],['B',1]]]     |
| ['B',projectile index] or ['B',projectile index,offset rotation] |      bullet      |                     与某弹幕的朝向相同。                     |             ['B',6]              |
| ['BT',projectile index] or ['BT',projectile index,offset rotation] |  bullet target   | 朝向某个弹幕，['BT',1]相当于<br />['PO',[['B',1,0],['B',1,0]]] |             ['BT',1]             |
|    ['F',function,functionArgumentsArray,offset rotation]     |     function     |                    执行某个函数作为角度值                    |       ['F',testFun,[],10]        |



<font size=5>完整的属性范例:   </font>

initialRotation:['P',-10],   
initialRotation:['P',10],   
initialRotation:['G',enemy],   
initialRotation:['M'],      

------

<font size=5>异常替代：</font>

<font size=4>属性initialRotation的结果可能无法肯定，例如当initialRotation写['G','enemy']时，场内可能根本没有对应的事件，所以游戏无法瞄准敌人。为了在这种情况下仍让弹幕的朝向变为您想要的值，您可以在initialRotation的值的最后再添加一项以设置initialRotation异常时的替代值。   
**注意，您要设置替代值时，必须填写offset rotation，可以将offset rotation设置为0以让朝向值无偏移。**   
简单来讲，您可以将initialRotation设置为['G','enemy',0,['PD']]，这样在场内没对应事件（没有标签是'enemy'的事件，或者说没有事件属于事件组'enemy'）时，子弹将采用['PD']作为实际的朝向，子弹将与玩家同向射出，而不是向未知的方向射出。   
注意，此功能可以无限嵌套，但不建议嵌套太深，例如['G','enemy',0,['G','boss',0,['PD']]]就是嵌套了三次。   
具体可能出现异常情况的值，以及可以写异常替代值的参数有有：</font>

|                           Command                            |                 Note                 |
| :----------------------------------------------------------: | :----------------------------------: |
|       ['E',event id] or ['E',event id,offset rotation]       |    指定的事件不存在时朝向将异常。    |
|      ['ED',event id] or ['ED',event id,offset rotation]      |    指定的事件不存在时朝向将异常。    |
|       ['G',group id] or ['G',group id,offset rotation]       | 指定的事件一个都不存在时朝向将异常。 |
| ['B',projectile index] or ['B',projectile index,offset rotation] |      指定的弹幕不存在时将异常。      |
| ['BT',projectile index] or ['BT',projectile index,offset rotation] |      指定的弹幕不存在时将异常。      |

