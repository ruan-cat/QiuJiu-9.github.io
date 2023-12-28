# particles

<font size=4>这个属性决定了弹幕的粒子效果。          
默认值是一个空数组 [], 意味着这个弹幕没有拖尾效果。   
基础的格式为:   
[particle effect1,particle effect2,particle effect3...]   
每一个particle effect都是一个简单的对象，你可以在这个对象中写各个属性来设计不同的粒子效果。每个粒子效果的默认值为:   </font>

```javascript
{
img:'circle-blue',    //默认的粒子图片为 'circle-blue'
offset:[0,0,180],     //默认的粒子发射点的x偏移是0，y偏移是0，角度偏移为180度。
offsetMin:[0,0,-30],  //粒子的发射角度附加一个-30到30的随机角度。
offsetMax:[0,0,30],   //
existTime:120,        //每个粒子的最大存在时间为120帧。
disappearTime:10,     //每个粒子需要花费10帧来淡出
disappearScale:2,     //粒子淡出时会逐渐变为原来的2倍
opacityMin:0.5,       //粒子的不透明度是一个随机值，范围是0.5到1。
opacityMax:1,         //
scaleXMin:1,          //粒子x缩放率是一个随机值，范围是1到2。
scaleXMax:2,          //
scaleYMin:1,          //粒子y缩放率是一个随机值，范围是1到2。
scaleYMax:2,          //
moveType:['-1*t','0'],//粒子的移动方式为直线且速度为1，这是一个t为参数的参数方程。
intervalTime:2,       //粒子的发射间隔时间为2帧。
bundleNumber:2,       //一次性发射2个粒子。
blendMode:0,          //混合模式是“正常”
synScale:false        //x缩放率和y缩放率不同步，各缩放各的
}
```

<font size=4>你需要自己写每个粒子效果的各个属性。具体的各个属性的含义为：</font>

|   Param Name   |                       Meaning and Note                       |   Example    |
| :------------: | :----------------------------------------------------------: | :----------: |
|      img       |                           粒子图像                           | 'circle-red' |
|     offset     |   粒子的基础偏移，格式为 [x offset,y offset,angle offset]    |   [0,0,0]    |
|   offsetMin    | 粒子的范围偏移的最小值，格式为 [x offset,y offset,angle offset] | [-4,-4,-45]  |
|   offsetMax    | 粒子的范围偏移的最大值，格式为 [x offset,y offset,angle offset] |   [4,4,45]   |
|   existTime    |                        粒子的存在时间                        |     120      |
| disappearTime  |                        粒子的淡出时间                        |      15      |
| disappearScale | 粒子淡出时缩放率，写1时代表不缩放（注意，这里的缩放是相对于粒子实际缩放的倍率） |     1.5      |
|   opacityMin   |                      随机不透明的最小值                      |     0.8      |
|   opacityMax   |                      随机不透明的最大值                      |      1       |
|   scaleXMin    |                      随机x缩放的最小值                       |     0.8      |
|   scaleXMax    |                      随机x缩放的最大值                       |     1.2      |
|   scaleYMin    |                      随机y缩放的最小值                       |     0.8      |
|   scaleYMax    |                      随机y缩放的最大值                       |     1.2      |
|    moveType    | 粒子的移动类型是基础一个以t为参数的参数方程。<br />粒子的坐标系的角度为粒子发射时刻弹幕的移动角度。<br />弹幕的移动角度就是粒子移动坐标系的x正半轴。.<br />基础格式为 [x方向的参数方程,y方向的参数方程].<br />默认值为 ['-1*t','0']. | ['2*t','0']  |
|  intervalTime  | 发射粒子的间隔时间。<br />这里也可以写负数，写负数时弹幕不是定时生成，而是定距离生成，<br />距离为intervalTime的绝对值，单位为像素。 |      2       |
|  bundleNumber  |                 发射粒子时一次性发射多少粒子                 |      1       |
|   blendMode    |                混合模式。<br />写0或1或2或3。                |      0       |
|    synScale    | 是否同步scaleX和scaleY,同步后scaleY的值和scaleX的值相同。写布尔值。 |    false     |
| sheetSpriteSet |      分层精灵表模式。默认值是-1。具体的解释在此页下面。      |      -1      |

<font size=4>完整的属性范例：</font>

particles:[],   
particles:[{img:'circle-red'},{img:'circle-blue'}],   
particles:[{img:'circle-red',offsetMin:[0,0,-60],offsetMax:[0,0,-50]},{img:'circle-red',offsetMin:[0,0,60],offsetMax:[0,0,50]}],   
particles:[{img:'circle-red',moveType:['2\*t','24\*Math.sin(t/3)']}],   

<br /><font size=4>粒子图像img的详细说明：</font>

粒子图像为了考虑效果，有一些特殊的使用方法，**有的使用方法和弹幕图片img的使用方法不同**，请注意。   
首先，粒子图像可以是普通的样子，例如：

![](img/1/dot.png)   
此图片的文件名是dot，会直接显示。   
<br />![](img/1/dot[7].png)   
此图片的文件名是dot[7]，显示时，图片会横向切成7格。在生成粒子时，粒子图片会从这7格内随机选择一格进行显示。   
注意，这不是动画。   
<br />![](img/1/dot[7,4].png)   
此图片的文件名是dot[7,4]，显示时，图片会纵向切成7格。一个粒子被生成后，会选中最左边的第1格，等待4帧后选中第2格，如此循环。   
总之，这就是一个动画。   
<br />![](img/1/dot[5,7,1].png)   
此图片的文件名是dot[5,7,1]，显示时，图片会被横向切成7**行**。在生成粒子时，粒子图片会从这7行内随机选择一行作为图片。   
之后，每行被切成5格，一个粒子被生成后，会选中最左边的第1格，等待1帧后选择第2格，如此循环。   
总之，粒子图片的动画只能横着来排列，纵着排列的切片不是用来做动画。   
这样设计的主要原因是一种粒子只能用一张图，使用粒子系统时，使用的图片越少越好。   
如果有相同大小的粒子图，且一次性需要都显示，就可以将其组合成一张图片。   
这与弹幕图片img的含义不一样，要注意。   
<br />在粒子图片使用dot[7]或dot[5,7,1]这种格式时，可以使用弹幕的sheetSpriteSet属性来控制，具体用法如下：   
假如图片被分成n行：

| sheetSpriteSet  |                             含义                             |
| :-------------: | :----------------------------------------------------------: |
|       -2        | 生成粒子时，若bundleNumber大于1，则粒子会按顺序从上到下选择n行，这样粒子图片的每一行都会在粒子进行发射时，按顺序被选中。 |
|       -1        |               生成粒子时，随机从n行中选一个。                |
| 大于等于0的数字 |                 只显示固定的第n行进行显示。                  |

