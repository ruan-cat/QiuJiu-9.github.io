# imgRotation
<font size=4>This attribute determines the image rotation of the projectile.   
The rotation of projectile\`s moving and image is different.   </font>

|             Command             | Meaning |                             Note                             |    Example    |
| :-----------------------------: | :-----: | :----------------------------------------------------------: | :-----------: |
|              ['F']              | follow  | The rotation of image is the same as the rotation of moving. |     ['F']     |
| ['R',speed,loadInitialRotation] | rotate  | The image can rotate auto.The unit is angle/frame.<br />loadInitialRotation:if load the value of attribute initialRotation as the initial vlaue of img\`s rotation. | ['R',2,false] |
|           ['S',value]           | stable  |    The rotation of image is stationary.The unit is angle.    |   ['S',10]    |

<font size=4>Other complete examples:   </font>

imgRotation:['F'],   
imgRotation:['R',0.5],   
imgRotation:['S',180],   
