# imgRotation
<font size=4>这个属性决定了弹幕图片的角度。   
弹幕的移动角度和图片的角度不是一回事，他们可以一样也可以不一样。</font>

|             Command             | Meaning |                             Note                             |    Example    |
| :-----------------------------: | :-----: | :----------------------------------------------------------: | :-----------: |
|              ['F']              | follow  |              弹幕图片的角度与弹幕的移动角度相同              |     ['F']     |
|      ['F',rotationOffset]       | follow  |      弹幕图片的角度与弹幕的移动角度相同,且偏移一定角度       |   ['F',-90]   |
| ['R',speed,loadInitialRotation] | rotate  | 弹幕的图片与弹幕移动的方向不同，且弹幕的图片会自动旋转。<br />速度的单位是 度/帧,速度可为动态值。<br />loadInitialRotation：是否在初始时读取一次initialRotation的值作为图片的初始角度。写布尔值。 | ['R',2,false] |
|           ['S',value]           | stable  |  弹幕的图片与弹幕移动的方向不同，且弹幕图片的角度为固定值。  |   ['S',10]    |

<font size=4>完整的属性范例:   </font>

imgRotation:['F'],   
imgRotation:['R',0.5],   
imgRotation:['S',180],   
