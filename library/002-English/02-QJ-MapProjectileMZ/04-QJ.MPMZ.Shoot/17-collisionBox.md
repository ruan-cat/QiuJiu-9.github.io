# collisionBox

<font size=4>The collision box of the projectile.  
The default value is ['S',4].</font>

|                  Code                  |                           Meaning                            |
| :------------------------------------: | :----------------------------------------------------------: |
|              ['C',radius]              |         The collision box of projectile is a circle.         |
| ['R',horizontal width,vertical height] |       The collision box of projectile is a rectangle.        |
|                ['auto']                | Automatic collision volume setting, consistent with the size of the image. |

<font size=4>Other complete examples:   </font>

collisionBox:['C',24],   
collisionBox:['R',48,48],   
collisionBox:['R',48,96],
