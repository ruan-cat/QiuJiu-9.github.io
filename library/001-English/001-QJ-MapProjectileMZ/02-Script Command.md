# Script Commands:
### 1.&emsp;&emsp;QJ.MPMZ.Shoot({})

```javascript
QJ.MPMZ.Shoot({
  attributeName1:value1,
  attributeName2:value2,
  attributeName3:value3,
})
```

<font size=4>
This command will generate a default projectile.   
You can add attributes in {} to change the setting of projectiles.  
The default attributes and their value are bellow:
</font>

```javascript
{
initialRotation:['PD'],//The initial rotation is the player`s direction.
position:[['P'],['P']],//The initial position is the same as player.
z:'E',//The projectile is above the map and event and below the pictures.
img:'LaserCircle',//The default image is LaserCircle.png in img/projectiles.
imgRotation:['F'],//The rotation of projectile image is the same as the move rotation of the projectile.
blendMode:0,//The default blendMode is 0 normal.
tone:[0,0,0,0],//The tone is white.
opacity:1,//The alpha is 1.
scale:[1,1],//The x scale and y scale is 1.
anchor:[0.5,0.5],//The anchor of projectile is (0.5,0.5).
afterImage:null,//There is no afterImage before the projectile.
particles:[],//There is no particles effect.
moveJS:[],//There is no js script to execute when the projectile moves.
deadJS:null,//There is no js script to execute when the projectile disappears.
moveCE:[],//There is no commonevent to run when the projectile moves.
groupName:[],//The projectile does not belong to any group.
reBoundTimes:0,//The projectile do not rebound.
collisionBox:['C',8],//The collision box of the projectile is the circle with the radius is 8.
moveType:['S',4],//The projectile move straight at the speed of 4.
extra:null,//There is no extra data.
existData:[
  {t:['T',180],d:[1,30,2]}//The projectile exist 180 frames at most.Then projectile will fade out
                          //and be twice as big as original size for 30 frames.
],
}
```

***
### 2.bbb
