# moveJS

<font size=4>When the projectile is movimg, you may want it to execute some scripts.   

The default is [], means that there is no JS code to execute.   
The base format is:   
[code data1,code data2,code data3...]   
The code data is a simple Array, its format is [the frames before the circle,the interval time,JS code].</font>

<br/>

<font size=4>The complete examples:   </font>

1.output the X coordinate of the projectile every 5 frames.   
moveJS:[[0,5,'console.log(this.x)']],   
2.five frames after the projectile is fired, output the Y coordinate of the projectile every frame  .   
moveJS:[[5,1,'console.log(this.y)']],   
3.create new projectile around the current projectile every 30 frames.   
moveJS:[[0,30,'QJ.MPMZ.Shoot({position:[this.inheritX(),this.inheritY()]}']],   
<br/><font size=4>The following escape characters can be used in the code string:</font>

|        JS Code         |                           Meaning                            |
| :--------------------: | :----------------------------------------------------------: |
|       this.index       | Obtain the current projectile number (note! This is different from moveCE) |
|          this          | Get the current bullet object (note! This is different from moveCE) |
|    this.inheritX()     | Obtain the x-coordinate of the current bullet, which can be used to generate a new projectile. |
|    this.inheritY()     | Obtain the y-coordinate of the current bullet, which can be used to generate a new projectile. |
| this.inheritRotation() | Obtain the angle of the current bullet, which can be used to generate a new projectile. |
|       this.time        | Obtain the time, in frames, that the current bullet has existed. |

<font size=4>In addition to the above, there are also interfaces that can be used in the [06-JS API].   </font>

eg:

this.changeAttribute('img',['I',100])   
this.changeAttribute('scale',[1,0.5])    
this.addMoveData('JS',[0,100,'console.log(this.x)'])    
this.addExistData({t:['Time',30],d:[0,10]})