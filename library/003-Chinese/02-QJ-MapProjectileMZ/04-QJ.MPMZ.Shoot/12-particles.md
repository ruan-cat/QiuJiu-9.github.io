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
bundleNumber:2        //一次性发射2个粒子。
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
| disappearScale |                          粒子淡出时                          |     1.5      |
|   opacityMin   |                      随机不透明的最小值                      |     0.8      |
|   opacityMax   |                      随机不透明的最大值                      |      1       |
|   scaleXMin    |                      随机x缩放的最小值                       |     0.8      |
|   scaleXMax    |                      随机x缩放的最大值                       |     1.2      |
|   scaleYMin    |                      随机y缩放的最小值                       |     0.8      |
|   scaleYMax    |                      随机y缩放的最大值                       |     1.2      |
|    moveType    | 粒子的移动类型是基础一个以t为参数的参数方程。<br />粒子的坐标系的角度为粒子发射时刻弹幕的移动角度。<br />弹幕的移动角度就是粒子移动坐标系的x正半轴。.<br />基础格式为 [x方向的参数方程,y方向的参数方程].<br />默认值为 ['-1*t','0']. |  ['2*t,'0']  |
|  intervalTime  |                      发射粒子的间隔时间                      |      2       |
|  bundleNumber  |                 发射粒子时一次性发射多少粒子                 |      1       |


<font size=4>完整的属性范例:   </font>

particles:[],   
particles:[{img:'circle-red'},{img:'circle-blue'}],   
particles:[{img:'circle-red',offsetMin:[0,0,-60],offsetMax:[0,0,-50]},{img:'circle-red',offsetMin:[0,0,60],offsetMax:[0,0,50]}],   
particles:[{img:'circle-red',moveType:['2\*t','24\*Math.sin(t/3)']}],   
