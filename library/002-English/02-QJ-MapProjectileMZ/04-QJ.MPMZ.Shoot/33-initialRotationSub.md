# initialRotationSub
<font size=4>The result of the initial rotation attribute may not be certain, for example, when the initial rotation is written as ['G','enemy'], there may be no corresponding event in the field, so the game cannot aim at enemies. To prevent abnormal orientation of the projectile in this situation, this value is set. If the situation shown in the table below occurs during the calculation of initial rotation, the calculation result of initial rotation will take the value of initial rotation sub as a substitute.    
Simply put, you can set the initial Rotation to ['G','enemy'] and the initial Rotation Sub to ['PD']. This way, when there is no corresponding event in the field, bullets will be fired in the same direction as the player, rather than in an unknown direction.    
The value of this property defaults to null, indicating no substitution.    
The value that can be written for this attribute is the same as the initial rotation, but try not to write it again as there may still be values that cannot determine the specific value.</font>

|                           Command                            |                             Note                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|       ['E',event id] or ['E',event id,offset rotation]       | When the specified event does not exist, the orientation will be abnormal. |
|      ['ED',event id] or ['ED',event id,offset rotation]      | When the specified event does not exist, the orientation will be abnormal. |
|       ['G',group id] or ['G',group id,offset rotation]       | When none of the specified events exist, the orientation will be abnormal. |
| ['B',projectile index] or ['B',projectile index,offset rotation] | An exception will occur when the specified projectile does not exist. |
| ['BT',projectile index] or ['BT',projectile index,offset rotation] | An exception will occur when the specified projectile does not exist. |
