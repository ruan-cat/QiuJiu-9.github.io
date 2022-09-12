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

<font size=4>Other complete examples:   </font>

position:[['P'],['P']],   
position:[['E',10,5],['E',10,0]],   
position:[['M'],['M']],   
position:[['S','$gamePlayer.screenX()'],['S','$gamePlayer.screenY()']],
