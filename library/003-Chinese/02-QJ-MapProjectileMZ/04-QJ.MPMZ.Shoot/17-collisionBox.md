# collisionBox

<font size=4>弹幕的碰撞体积。   
默认值为 ['C',8].</font>

|                  Code                  |              Meaning               |
| :------------------------------------: | :--------------------------------: |
|              ['C',radius]              |         碰撞体积为一个圆形         |
| ['R',horizontal width,vertical height] |         碰撞体积为一个矩形         |
|                ['auto']                | 碰撞体积自动设置，与图片的大小一致 |

<font size=4>完整的属性范例:   </font>

collisionBox:['C',24],   
collisionBox:['R',48,48],   
collisionBox:['R',48,96],
