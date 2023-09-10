# moveJS

<font size=4>这个属性可以让子弹在移动的同时执行一些js代码。   
默认值是 [], 意味着没有js代码执行。.   
基础的格式为:   
[code data1,code data2,code data3...]   
每一个code data的基础格式都为 [开始循环前的等待时间,循环执行代码的时间,代码字符串].</font>

<br/>

<font size=4>完整的属性范例:   </font>

1.每5帧输出一次当前弹幕的x坐标  
moveJS:[[0,5,'console.log(this.x)']],   
2.在弹幕发射5帧后，每1帧输出一次当前弹幕的y坐标.   
moveJS:[[5,1,'console.log(this.y)']],   
3.每30帧便在该弹幕所在处生成新的弹幕.   
moveJS:[[0,30,'QJ.MPMZ.Shoot({position:[this.inheritX(),this.inheritY()]}']],   
<br/><br/>

在代码字符串中可以使用如下转义字符：

|             JS Code              |                           Meaning                            |
| :------------------------------: | :----------------------------------------------------------: |
|            this.index            |          获得当前弹幕的编号(注意！这样与moveCE不同)          |
|               this               |           获取当前子弹对象(注意！这样与moveCE不同)           |
|         this.inheritX()          |       获得当前子弹的x坐标，此值可以用于生成新的弹幕。        |
|         this.inheritY()          |       获得当前子弹的y坐标，此值可以用于生成新的弹幕。        |
|      this.inheritRotation()      |        获得当前子弹的角度，此值可以用于生成新的弹幕。        |
|            this.time             |            获得当前子弹已经存在的时间，单位为帧。            |
| this.changeAttribute(name,value) | 改变当前子弹的属性，name是属性名，value是对应的值。<br />name当前已经完全兼容的属性有：<br />moveType，hue，light，img，imgRotation，<br />afterImage，scale，opacity，anchor |
|   this.addMoveData(name,value)   | 为当前弹幕增加moveCE,moveJS或moveF。<br />name写“CE”,"JS"或者"F"，分别代表增加moveCE,moveJS或moveF。<br />value写对应的code data。 |
|     this.addExistData(value)     |       为当前子弹增加existData。<br />value写对应的值。       |

<font size=4>特殊举例： </font>

this.changeAttribute('img',['I',100])   
this.changeAttribute('scale',[1,0.5])    
this.addMoveData('JS',[0,100,'console.log(this.x)'])    
this.addExistData({t:['Time',30],d:[0,10]})