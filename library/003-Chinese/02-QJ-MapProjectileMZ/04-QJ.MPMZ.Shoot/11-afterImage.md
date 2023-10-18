# afterImage

<font size=4>这个属性决定了弹幕的拖尾效果。   

基础格式为:   
[color,opacity,time,width]   或者   
[color,opacity,time,width,ifWaitDisappear]   
<br/>各个属性的含义为：</font>

|      Name       |                           Meaning                            |               Note                |            Example            |
| :-------------: | :----------------------------------------------------------: | :-------------------------------: | :---------------------------: |
|      color      | 写十六进制颜色，例如''#00ff00"。<br />也可使用图片，格式为['P',图片路径] |           16进制的颜色            | ''#00ff00'<br />['P','trail'] |
|     opacity     |                           不透明度                           |               0到1                |               1               |
|      time       |                      拖尾效果的存在时间                      |               帧数                |              24               |
|      width      |                        拖尾效果的宽度                        |               像素                |               8               |
| ifWaitDisappear |               当子弹消失时是否等待拖尾效果淡出               | 写true或者false<br />默认值是true |             true              |

<font size=4>完整的属性范例:   </font>

afterImage:null,   
afterImage:['#ff0000',1,24,8],   
afterImage:['#ff0000','0|1~24/0',24,'0|8~24/0'],   
afterImage:['#ff0000','0|1~24/0',24,8],   
afterImage:['0|#ff0000~8/#00ff00~8/#0000ff~8/#ff0000',0.8,24,4],   
