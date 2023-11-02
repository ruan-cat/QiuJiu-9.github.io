# trailEffect

<font size=4>这个属性决定了弹幕的特殊拖尾效果。          
默认值是一个空数组 [], 意味着这个弹幕没有特殊拖尾效果。   
<br />需要先理解hOrV的概念，才能明白此弹幕的功能。   
hOrV（horizontal or vertical）是此功能的一个属性，决定了在弹幕的横向还是纵向产生拖尾/残影。   
假设弹幕图片朝上（角度是0）：   
当弹幕向上移动时，拖尾是从弹幕的后方生成的，是纵向拖尾。此时hOrV是false，该功能主要用于弹幕拖尾效果。   
而弹幕在左右平移或者旋转时，残影是从弹幕的左边或右边生成的，是横向残影。此时hOrV是true，该功能主要用于做剑影。   
<br />基础的格式为:   
[trail effect1,trail effect2,trail effect3...]   
每一个trail effect都是一个简单的对象，你可以在这个对象中写各个属性来设计不同的拖尾效果。每个拖尾效果的【默认值】为:   </font>

```javascript
{
img:'circle-blue',//使用图片img/projectiles/circle-blue.png作为残影图片。
existTime:5,//拖尾总共存在20（5+15）帧。残影出现5帧后，透明度逐渐变为0。
disappearTime:15,
ifProjctileWait:true,//弹幕触发消失条件后，等待全部特殊拖尾效果淡出后弹幕才真正消失。
imgStretchMode:0,//拖尾效果是将一整个拖尾效果进行拉伸。
hOrV:false,//纵向拖尾，用于做子弹残影。
alpha:1,//不透明度是1
tint:"#ffffff",//色调是白色，白色就是原图。
blendMode:0,//默认混合模式。
roundPixels:false,//不启用模糊像素。
aboveProjectile:false//残影显示在弹幕图片的下方。
}
```

<font size=4>你需要自己写每个粒子效果的各个属性。具体的各个属性的含义为：</font>

|   Param Name    |                       Meaning and Note                       |                           Example                            |
| :-------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|       img       | 拖尾图像。<br />可以使用图片，也可以截取弹幕图片的一部分作为残影图片，这样就能让残影自动化生成。<br />写字符串时代表使用图片。<br />若想截取图片，请看此页下方的说明。 | 'trail0'<br />['L',0.5,1,0,0]<br />['L',0,0.9999999,0,0]<br />['L',0.4,0.2,0.3,0]<br />['L',0.5,1,0,0,0.15,0,0,0.05] |
|    existTime    |         拖尾的存在时间（不包括淡出时间），单位是帧。         |                              10                              |
|  disappearTime  |                  拖尾的淡出时间，单位是帧。                  |                              30                              |
| ifProjctileWait | 在弹幕触发消失条件后，是否要等待全部特殊拖尾效果淡出后才让弹幕消失。<br />写true或者false。<br />当此值写true时，可在弹幕消失条件中写对应的淡出时间，使拖尾与弹幕同时消失。 |                            false                             |
| imgStretchMode  | 如何绘制拖尾图像，写0或者1。<br />0代表拖尾效果会将拖尾图像进行拉伸。<br />1代表拖尾效果是不断重复排布拖尾图像。 |                              1                               |
|      hOrV       | 决定了是在弹幕的横向还是纵向产生拖尾/残影。<br />写true或者false。<br />详细说明在此页上方，写到上方是因为比较重要。 |                       true<br />false                        |
|      alpha      |              残影的最大不透明度。写0到1的小数。              |                             0.8                              |
|      tint       |                 残影的色调。写十六进制颜色。                 |                          "#00ff00"                           |
|    blendMode    |             残影的混合模式。<br />写0或1或2或3。             |                           0<br />1                           |
|   roundPixels   | 是否启用残影的像素模糊。<br />此项只在RMMZ中起效，在RMMV中无效。<br />写true或者false。 |                             true                             |
| aboveProjectile | 残影显示在弹幕的上方还是下方。<br />写true或者false。<br />写true时残影显示在弹幕上方，写false时显示在下方。 |                            false                             |

<br />

------

<font size=5>属性img截取图片时的写法说明：</font>   
<font size=4>['L',横向截取起始值,截取的宽度值,纵向截取的起始值,截取的高度值]   
或   
['L',横向截取起始值,截取的宽度值,纵向截取的起始值,截取的高度值,下方清除的长度值,左边清除的长度值,右边清除的长度值,上方清除的长度值]   
 <br />
img这样写时，拖尾会截取原弹幕图片的一部分作为图片，这样可自动生成残影。   
此项若不好理解，可直接使用此页下方是范例值。   
<br />具体的截取方式是以原弹幕图片的左上角为原点，从x=横向截取起始值，y=纵向截取的起始值的点开始，截取一个矩形，宽度是“截取的宽度值”，高度是“截取的高度值”。   
截取后的图片的大小就是上面矩形的大小，残影绘制时以这个为标准进行绘制。   
但截取后的图片中可能还存在一些不需要显示的部分，此时需要再清除一部分图片（但不改变图片大小）。   
例如，弹幕是剑时为了保证残影图和剑的效果好，需要让残影图的高度和剑图片的高度相同，但残影的图片在截取后，还留有剑柄，我们可能不需要让剑柄部分（在剑的图片的下方）也显示出残影，此时我们将值“下方清除的长度值”设置为一个合适的值，例如写0.15（清除截取后图片下方15%的区域的像素）。   
<br />其中的八个值写0或正整数时，单位是像素；
写0到0.9999999的小数时，指比例。   
比例在运算时会自动乘以弹幕图片大小的对应宽高以得到实际的像素值。   
后四个值不写时默认为0。</font>

<br />

------

<font size=5>其他说明：</font>   
<font size=4>此属性trailEffect（hOrV是false时）和属性afterImage有相似之处，根据实际情况使用不同的效果。   
另外，trailEffect是用GPU进行绘制的，afterImage是用CPU进行绘制的，性能方面无需在乎差别。</font>

<br />

------

<font size=5>范例：</font>   

```javascript
/*
范例1：纵向，尾部拖尾

弹幕的各个属性的推荐值:
anchor:[0.5,0.95],
imgRotation:['F',0],

trailEffect中属性详解：
img:['L',0,0.999999,0.4,0.2,0,0,0,0]
    写0.999999不写1是因为，写1时代表1像素，而写0.999999时代表整个弹幕图片宽度的99.9999%，系统自动取整后就是整个弹幕图片的宽度。
    故而“横向截取起始值”设置为0,“截取的宽度值”设置为1就代表整个弹幕图片的宽度。
    整体的意思就是截取原弹幕图片中间一块作为残影图片。
imgStretchMode:1
    不断重复排布截取的图片
hOrV:false
    纵向拖尾
*/
QJ.MPMZ.Shoot({
    moveType:['TP',8,3],initialRotation:['P'],position:[['E',0],['E',0]],existData:[],img:"sword-big",anchor:[0.5,0.95],
    trailEffect:[{
        img:['L',0,0.999999,0.4,0.2,0,0,0,0],
        existTime:0,
        disappearTime:30,
        imgStretchMode:1,
        hOrV:false
    }]
});





/*
范例2：横向，剑挥舞时的残影

弹幕的各个属性的推荐值:
anchor:[0.5,0.95],
imgRotation:['R',2],

img:['L',0.5,1,0,0.999999,0,0,0,0]
    整体的意思就是截取原弹幕图片中间一条竖线作为残影图。
imgStretchMode:1
    不断重复排布截取的图片
hOrV:true
    横向残影
*/
QJ.MPMZ.Shoot({
    moveType:['D',false],initialRotation:0,position:[['M'],['M']],existData:[],img:"sword-big",anchor:[0.5,0.95],
    imgRotation:['R',3],
    trailEffect:[{
        img:['L',0.5,1,0,0.999999,0,0,0,0],
        existTime:0,
        disappearTime:20,
        imgStretchMode:1,
        hOrV:true
    }]
});
```
