# initialRotation
<font size=4>This attribute determines the initial rotation of the projectile.   
The unit is angle, not radian.</font>

|                      Command                       |     Meaning      |                             Note                             |             Example              |
| :------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :------------------------------: |
|          ['PD'] or ['PD',offset rotation]          | player direction | The projectile\`s initial rotation is the same as player\`s direction. |              ['PD']              |
|           ['P'] or ['P',offset rotation]           |  toward player   |          The projectile initially faces the player.          |              ['P']               |
|           ['M'] or ['M',offset rotation]           |   toward mouse   |       The projectile initially faces the mouse cursor.       |              ['M']               |
|  ['E',event id] or ['E',event id,offset rotation]  |   toward event   | The projectile initially faces the designated event.<br />Event id 0 refers to the current event. |             ['E',1]              |
| ['ED',event id] or ['ED',event id,offset rotation] | event direction  | The projectile\`s initial rotation is the same as event\`s direction. |             ['ED',0]             |
|  ['G',group id] or ['G',group id,offset rotation]  |   event group    | The projectile initially faces the event in the designated group <br />closest to the projectile. |          ['G','enemy']           |
|    ['S',script] or ['S',script,offset rotation]    |      script      | The projectile\`s initial rotation is the result of script.  | ['S','$gameVariables.value(10)'] |

<font size=4>Other complete examples:   </font>

initialRotation:['P',-10],   
initialRotation:['P',10],   
initialRotation:['G',enemy],   
initialRotation:['M'],   
