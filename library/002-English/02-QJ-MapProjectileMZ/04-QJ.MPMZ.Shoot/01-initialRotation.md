# initialRotation
<font size=4>This attribute determines the initial rotation of the projectile.   
The unit is angle, not radian.</font>

|                           Command                            |     Meaning      |                             Note                             |             Example              |
| :----------------------------------------------------------: | :--------------: | :----------------------------------------------------------: | :------------------------------: |
|               ['PD'] or ['PD',offset rotation]               | player direction | The projectile\`s initial rotation is the same as player\`s direction. |              ['PD']              |
|                ['P'] or ['P',offset rotation]                |  toward player   |          The projectile initially faces the player.          |              ['P']               |
|                ['M'] or ['M',offset rotation]                |   toward mouse   |       The projectile initially faces the mouse cursor.       |              ['M']               |
|       ['E',event id] or ['E',event id,offset rotation]       |   toward event   | The projectile initially faces the designated event.<br />Event id 0 refers to the current event. |             ['E',1]              |
|      ['ED',event id] or ['ED',event id,offset rotation]      | event direction  | The projectile\`s initial rotation is the same as event\`s direction. |             ['ED',0]             |
|       ['G',group id] or ['G',group id,offset rotation]       |   event group    | The projectile initially faces the event in the designated group <br />closest to the projectile. |          ['G','enemy']           |
|         ['S',script] or ['S',script,offset rotation]         |      script      | The projectile\`s initial rotation is the result of script.  | ['S','$gameVariables.value(10)'] |
|      ['PO',position] or ['PO',position,offset rotation]      |     position     | The projectile faces a certain position, where the position is the same as the position in the attribute. |     ['PO',[['B',1],['B',1]]]     |
| ['B',projectile index] or ['B',projectile index,offset rotation] |      bullet      |            Same orientation as a certain projectile.            |             ['B',6]              |
| ['BT',projectile index] or ['BT',projectile index,offset rotation] |  bullet target   | Facing a certain projectile, ['BT ', 1] is equivalent to<br/>['PO', [['B ', 1,0], ['B', 1,0]] |             ['BT',1]             |
|    ['F',function,functionArgumentsArray,offset rotation]     |     function     |             Execute a function as an angle value             |       ['F',testFun,[],10]        |

<font size=4>Other complete examples:   </font>

initialRotation:['P',-10],   
initialRotation:['P',10],   
initialRotation:['G',enemy],   
initialRotation:['M'],   

------

<font size=5>Abnormal substitution:</font>

<font size=4>The result of the initial rotation attribute may not be certain, for example, when the initial rotation is written as ['g','ene'], there may be no corresponding event in the field, so the game cannot aim at enemies. To keep the orientation of the projectile at the desired value in this situation, you can add an alternative value at the end of the initial rotation value to set when the initial rotation is abnormal.    
**Note that when you want to set an alternative value, you must fill in offset rotation. You can set offset rotation to 0 to ensure that the orientation value is not offset.**   
Simply put, you can set the initial Rotation to ['G','enemy', 0, ['PD']], so that when there is no corresponding event in the field (no event labeled as' enemy ', or no event belonging to the event group 'enemy'), the bullet will use ['PD'] as the actual orientation, and the bullet will be fired in the same direction as the player, rather than in an unknown direction.    
Note that this feature can be nested infinitely, but it is not recommended to nest too deeply. For example, ['g',' ene ', 0, ['g', 'bosses', 0, ['PD']] are nested three times.    
The specific values that may cause abnormal situations, as well as the parameters that can be used to write abnormal substitute values, are:</font>

|                           Command                            |                             Note                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|       ['E',event id] or ['E',event id,offset rotation]       | When the specified event does not exist, the orientation will be abnormal. |
|      ['ED',event id] or ['ED',event id,offset rotation]      | When the specified event does not exist, the orientation will be abnormal. |
|       ['G',group id] or ['G',group id,offset rotation]       | When none of the specified events exist, the orientation will be abnormal. |
| ['B',projectile index] or ['B',projectile index,offset rotation] | An exception will occur when the specified projectile does not exist. |
| ['BT',projectile index] or ['BT',projectile index,offset rotation] | An exception will occur when the specified projectile does not exist. |

