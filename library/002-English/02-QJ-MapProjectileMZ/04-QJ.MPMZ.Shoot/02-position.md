# position
<font size=4>This attribute determines the initial screen position of the projectile.   
The unit is px.   
The base fomat is [x,y].   
The x and y can be:</font>

|                           Command                           |     Meaning      |                             Note                             |             Example              |
| :---------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :------------------------------: |
|                  ['P'] or ['P',offset x/y]                  |      player      |     The projectile\`s x/y is the same as player\`s x/y.      |              ['P']               |
|                  ['M'] or ['M',offset x/y]                  |      mouse       |      The projectile\`s x/y is the same as mouse\`s x/y.      |              ['M']               |
|         ['E',event id] or ['E',event id,offset x/y]         |      event       | The projectile\`s x/y is the same as event\`s x/y.<br />Event id 0 refers to the current event. |             ['E',10]             |
| ['B',projectile index] or ['B',projectile index,offset x/y] | projectile index | projectile\`s x/y is the same as projectile\`s x/y.<br />More detail can be seen in (null now). |             ['B',1]              |
|           ['S',script] or ['S',script,offset x/y]           |      script      | The projectile\`s initial position x/y is the result of script. | ['S','$gamePlayer.screenX()+10'] |
|            ['Map',x/y] or ['Map',x/y,offset x/y]            |   map position   | Display a projectile in the center of the left side of a certain map. |            ['Map',13]            |
|    ['F',function,functionArgumentsArray,offset rotation]    |     function     |                  Execute a function as x/y.                  |        ['F',testFun,[],0]        |

<font size=4>Other complete examples:   </font>

position:[['P'],['P']],   
position:[['E',10,5],['E',10,0]],   
position:[['M'],['M']],   
position:[['S','$gamePlayer.screenX()'],['S','$gamePlayer.screenY()']],



------

<font size=5>Abnormal substitution:</font>

The result of attribute x or y may not be certain, for example, when x is written as ['E', 10], there may not be event 10 at all in the field. In order to still display the projectile in the position you want in this situation, you can add an alternative option at the end of x or y.    
**Note that when you want to set a substitute value, you must fill in offset x/y. You can set offset x/y to 0 to make x/y offset free.**    
For example, position can be written as [['E',10,0,['P']], ['E ',10,0,['P']].    
The specific values that may cause abnormal situations are:

|                           Command                           |                             Note                             |
| :---------------------------------------------------------: | :----------------------------------------------------------: |
|         ['E',event id] or ['E',event id,offset x/y]         | An exception occurred when the specified event does not exist. |
| ['B',projectile index] or ['B',projectile index,offset x/y] | An exception will occur when the specified projectile does not exist. |

