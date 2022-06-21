# moveCE

<font size=4>When the projectile is movimg, you may want to run a common event regularly.   

The default is [], means that there is no common event to run regularly.   
The base format is:   
[ce data1,ce data2,ce data3...]   
The ce data is a simple Array, its format is    
[the frames before the circle,the interval time,common event id] or   
[the frames before the circle,the interval time,common event id,sendValue].</font>

<br/>

<font size=4>The complete examples:   </font>

10 frames after the projectile is fired, run the common event  7 every 60 frames.   
moveCE:[[10,60,7]],    
<br/><font size=4>You can execute some special code in the common event.   
you can use follow scrtpt code:</font>   
<br/>

|            JS Code            |                           Meaning                            |
| :---------------------------: | :----------------------------------------------------------: |
|         this.bulletId         |                   get the id of projectile                   |
|        this.sendValue         |                      get the sendValue                       |
|    this.bullet.inheritX()     | get the current projectile real x.<br />you can use the value in new projectile`s position |
|    this.bullet.inheritY()     | get the current projectile real y.<br />you can use the value in new projectile`s position |
| this.bullet.inheritRotation() | get the current projectile real rotation.<br />you can use the value in new projectile`s position |
|       this.bullet.time        |               the existence time of projectile               |