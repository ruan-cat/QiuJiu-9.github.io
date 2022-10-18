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

|        JS Code         |                     Meaning                     |
| :--------------------: | :---------------------------------------------: |
|       this.index       |   获得当前弹幕的编号(注意！这样与moveCE不同)    |
|          this          |    获取当前子弹对象(注意！这样与moveCE不同)     |
|    this.inheritX()     | 获得当前子弹的x坐标，此值可以用于生成新的弹幕。 |
|    this.inheritY()     | 获得当前子弹的y坐标，此值可以用于生成新的弹幕。 |
| this.inheritRotation() | 获得当前子弹的角度，此值可以用于生成新的弹幕。  |
|       this.time        |     获得当前子弹已经存在的时间，单位为帧。      |