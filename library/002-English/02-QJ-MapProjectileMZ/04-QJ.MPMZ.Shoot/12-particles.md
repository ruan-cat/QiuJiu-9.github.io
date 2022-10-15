# particles

<font size=4>This attribute determines the particle effect of the projectile.          
The default is [], means that there is no particle effect.   
The base format is:   
[particle effect1,particle effect2,particle effect3...]   
The particle effect is a simple Class, it detemine the particles`s emtting and moving data.   
the default is:   </font>

```javascript
{
img:'circle-blue',    //the default image of particle is 'circle-blue'
offset:[0,0,180],     //Particles are emitted in the opposite direction at the origin of the projcetile3
offsetMin:[0,0,-30],  //The angle of emission is random between -30 and 30.
offsetMax:[0,0,30],   //
existTime:120,        //the particle can exist 120 frames(2 second).
disappearTime:10,     //the partilce spends 10 frames to fade out.
disappearScale:2,     //the particel can scale 2 times when it fade out.
opacityMin:0.5,       //the initial opacity is random between 0.5 and 1.
opacityMax:1,         //
scaleXMin:1,          //the initial scale x is random between 1 and 2.
scaleXMax:2,          //
scaleYMin:1,          //the initial scale y is random between 1 and 2.
scaleYMax:2,          //
moveType:['-1*t','0'],//the particle moves straight.(Parametric equation,the param is t)
intervalTime:2,       //the interval time of particle`s emtting is 2 frames
bundleNumber:2,       //2 particles are emitted at one time
synScale:false        //not to syn the scale x and scale y
}
```

<font size=4>You need to set the attribute that changes in class.   
The meaning of each param:</font>

|   Param Name   |                       Meaning and Note                       |   Example    |
| :------------: | :----------------------------------------------------------: | :----------: |
|      img       |                           img name                           | 'circle-red' |
|     offset     | the emission offset of particles relative to bullet Center.<br />the format is [x offset,y offset,angle offset] |   [0,0,0]    |
|   offsetMin    | the min random emission offset of particles on the basis of .param 'offset'.<br />the format is [x offset,y offset,angle offset] | [-4,-4,-45]  |
|   offsetMax    | the max random emission offset of particles on the basis of .param 'offset'.<br />the format is [x offset,y offset,angle offset] |   [4,4,45]   |
|   existTime    |             the particle`s max exist time(frame)             |     120      |
| disappearTime  |       how may frames  the partilce spends to fade out        |      15      |
| disappearScale | how big the particles will fade when the partilce fades out  |     1.5      |
|   opacityMin   |                the min random initial opacity                |     0.8      |
|   opacityMax   |                the max random initial opacity                |      1       |
|   scaleXMin    |                the min random initial scale x                |     0.8      |
|   scaleXMax    |                the maxrandom initial scale x                 |     1.2      |
|   scaleYMin    |                the min random initial scale y                |     0.8      |
|   scaleYMax    |                the maxrandom initial scale y                 |     1.2      |
|    moveType    | the move type which is calculated according to the Parametric equation.<br />The coordinate system of the equation is determined by the state of the projectile.<br />The moving direction of the projectile is the positive half axis of X.<br />the format is [Equation in X direction,Equation in Y direction].<br />the default is ['-1*t','0']. |  ['2*t,'0']  |
|  intervalTime  | the interval time of particle`s emtting.<br />Negative numbers can also be written here. <br />When writing negative numbers, the pop-up screen is not generated at a fixed time, but at a fixed distance.<br/>The distance is the absolute value of intervalTime, and the unit is pixel. |      2       |
|  bundleNumber  |          how many particles are emitted at one time          |      1       |
|    synScale    |                if syn the scale x and scale y                |    false     |


<font size=4>Other complete examples:   </font>

particles:[],   
particles:[{img:'circle-red'},{img:'circle-blue'}],   
particles:[{img:'circle-red',offsetMin:[0,0,-60],offsetMax:[0,0,-50]},{img:'circle-red',offsetMin:[0,0,60],offsetMax:[0,0,50]}],   
particles:[{img:'circle-red',moveType:['2\*t','24\*Math.sin(t/3)']}],   

Particles may be difficult to understand.   
You can contact me to help you.   
You need to pay me when you need me to design many contents.
