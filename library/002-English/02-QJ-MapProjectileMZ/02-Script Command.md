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
The default attributes and their values are bellow:
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
### 2.&emsp;&emsp;QJ.MPMZ.Laser({})

```javascript
QJ.MPMZ.Laser({
  attributeName1:value1,
  attributeName2:value2,
  attributeName3:value3,
})
```

<font size=4>
This command will generate a default laser.   
Laser is a ray emitted from a point(position).   
You can add attributes in {} to change the setting of laser.  
The default attributes and their values are bellow:
</font>

```javascript
{
    rotation:['M'],//The laser faces toward the mouse.
    rotationStatic:true,//The value of rotation will be refreshed drmaticly.
    position:[['P'],['P']],//The laser`s starting point is the same as the player`s position.
    positionStatic:true,//The value of position will be refreshed drmaticly.
    judgeWidth:12,//The laser`s judge width is 12px.
    judgeMode:['T'],//-
    existData:[{t:['Time',180],d:[1,30,2]}],//The laser exist 180 frames at most.Then laser will fade out
                          //and be twice as big as original size for 30 frames.
    length:['S',280],//The length of laser is 280px.
    z:'E',//The projectile is above the map and event and below the pictures.
    img:'WideBeam',//The default image is WideBeam.png in img/projectiles.
    imgStretchMode:'C',//The image of laser will be scaled when the laser becomes longer.
    imgPoint:'LaserCircle',////The default image of the corner of laser is LaserCircle.png in img/projectiles.
    blendMode:0,//The default blendMode is 0 normal.
    tone:[0,0,0,0],//The tone is white.
    opacity:1,//The alpha is 1.
    scaleX:1,//The x scale is 1.
    moveJS:[],//There is no js script to execute when the projectile moves.
    deadJS:null,//There is no js script to execute when the projectile disappears.
    moveCE:[],//There is no commonevent to run when the projectile moves.
    groupName:[],//The projectile does not belong to any group.
    extra:null,//There is no extra data.
}
```

------
### 3.&emsp;&emsp;QJ.MPMZ.deleteProjectile(name)

<font size=4>Delete specific projectile or laser whose attribute 'groupName'(a string array) contains the string 'name'.</font>

------

### 4.&emsp;&emsp;QJ.MPMZ.setDestinationForBid(true/false)

<font size=4>Enable or Forbid the function that the player can move by click the map using mouse left button(MLB).</font>

------

**5.&emsp;&emsp;QJ.MPMZ.Shooter_ArcRange(initialRotation,{},start,end,num,disturbance,minScale,maxScale)**

QJ.MPMZ.Shooter_ArcRange(initialRotation,{},start,end,num)

QJ.MPMZ.Shooter_ArcRange(initialRotation,{},start,end,num,disturbance)

QJ.MPMZ.Shooter_ArcRange(initialRotation,{},start,end,num,disturbance,minScale,maxScale)

Fire multiple bullets in the middle of a specified angle.

initialRotation:the initial rotation of projectile,the same as the attribute initialRotation of QJ.MPMZ.Shoot({}).But you can not add offset value.

{}:the attributes of values.

start/end:Angle. Relative to the starting and ending angle of initialrotation, the projectile curtain is launched within this angle range.

num:Positive integer. The number of bullets fired.

disturbance:Angle. Projectiles are fired on average within the specified angle. This value can set the disturbance angle of each bullet. The default value is 0.

minScale/maxScale:Decimal, scale size. The size of the generated bullet varies randomly within a certain range. The default value is 1.

e.g：

```javascript
QJ.MPMZ.Shooter_ArcRange(["P"],{
    position:[["E",0],["E",0]]
},-30,30,6,10,0.5,1.5);
```

------

### 6.&emsp;&emsp;QJ.MPMZ.itemGiverCharacter(type,itemId,charId,num);

This is a preset method, and there may not be many customization options. You can write your own icon to obtain the function based on the plugin source code.   
The function is used to generate an icon at the location of the player/event, which tracks the player and allows them to obtain the corresponding item upon collision.   
type：type of item, 0/"item" refer to item, 1/"weapon" refer to weapon, 2 or "armor" refer to armor   
itemId：id of item   
charId：event id, -1 refer to player, 0 refer to current evnet.   
num：num of items, 0 by default   
<br />e.g：

```javascript
QJ.MPMZ.itemGiverCharacter(1,5,7,2);//Generate an icon at Event 7, and upon collision with it, players can obtain two weapons numbered 5 (1).

除此之外也可获取货币：
QJ.MPMZ.itemGiverCharacter(3,iconIndex,charId,num);//Get currency, because currency does not have a number and there is no icon in the default system, so the place where itemId was originally written has been changed to write the icon number.
QJ.MPMZ.itemGiverCharacter(3,97,6,100);//Generate an icon at event 6, with icon number 97, and receive 100 coins upon contact with the player.
```

------

### 7.&emsp;&emsp;QJ.MPMZ.itemGiverXy(type,itemId,x,y,num);

Same as function 6, except generate icons in designated locations. x and y can be written as the values written in [02-position] in [04-QJ.MPMZ.Shoot].   
You can also write numbers to represent the screen coordinates.   
<br />e.g：

```javascript
QJ.MPMZ.itemGiverCharacter(1,5,["Map",13],["Map",7],2);//Generate an icon at the map coordinates (13,7), and players can obtain two weapons numbered 5 (1) by colliding with it.
```

------

**8.&emsp;&emsp;QJ.MPMZ.rangeAtk(position,target,action,collisionBox)**

Generate collision bodies at designated locations, determine collisions with players, events, or bullet comments, and execute commands. And return a list of the event or projectile numbers that were collided with.   
position：The generated location, fill in the value in [02 position] under [04-QJ.MPMZ.Shoot].   
target：To collide with the target, fill in the value of t in [20-existData] under [04-QJ.MPMZ.Shoot]. Specifically, only ['P '] or ['G', Group Id] or ['B ', group name] can be written, representing the player, event, and projectile, respectively.   
action：The action to be executed, fill in the value of a in [20-existData] under [04-QJ.MPMZ.Shoot].   
collisionBox：Collision body, fill in the value in [17-collisionBox] under [04-QJ.MPMZ.Shoot].   
<br />e.g：

```javascript
QJ.MPMZ.rangeAtk([['P'],['P']],['G','"enemy"'],['C',3,1],['C',96]);
//position [['P'],['P']]
//target ['G','"enemy"']
//action ['C',3,1]
//collisionBox ['C',96]
//After executing this command, generate a circular collision object with a radius of 96 at the player's location, determine its collision with an event in the group that has' enemy ', and execute public event 3 if the collision occurs.
//['C',3,1] is same as ['C',3,[1]]

//The command will return a list of collision events/bullet comments, and the number of collision events/bullet comments can be obtained using .length.
//e.g：
//QJ.MPMZ.rangeAtk([['P'],['P']],['G','"enemy"'],['C',3,1],['C',96]).length

//Of course, according to this idea, this command can also be left blank and only determine whether there are enemies/players/projectile in a certain location.
//For example, you can write in the script of the event command 'conditional divergence':
QJ.MPMZ.rangeAtk([['E',0],['E',0]],['G','"enemy"'],[],['C',96]).length!==0
//This command can be used to determine if there are any enemy events within a radius of 96 around the current event.

//Advanced usage: If you want to modify the anchor point, scale, and angle of the collision body, you can write it as follows:
QJ.MPMZ.rangeAtk(position,target,action,collisionBox,{
    scaleX:1,
    scaleY:1,
    anchorX:0.5,
    anchorY:0.5,
    rotationImg:0
})
//e.g:
QJ.MPMZ.rangeAtk([['P'],['P']],['G','"enemy"'],['C',3,1],['R',96,96],{rotationImg:45});
//When written this way, the collision body is a 96X96 square and rotated 45 degrees.
```



------

### 9.&emsp;&emsp;$gameMap.getGroupEventListQJ(groupName)

获取当前地图内某个群组下的事件编号列表。返回一个数组，里面有对应事件群组内事件的编号。

```javascript
$gameMap.getGroupEventListQJ('test')//Get a list of event numbers with groupName as test.
//If you have some knowledge of JavaScript, you can use $gameMap.event(event id) to obtain event objects.
//After obtaining the event object, you can batch set some effects for the events.
//eg:
let eventIndexList = $gameMap.getGroupEventListQJ('test');//Get a list of event numbers where group is test
let tempPointer = $gameMap;//Temporarily recording the global variable $gameMap can increase performance slightly.
for (let id of eventIndexList) {
    QJ.MPMZ.Shoot({
        img:"love",scale:2,moveType:['S',0],existData:[],
        position:[['E',id],['E',id]],initialRotation:0
    });
}
//Generate a projectile at the location of all events in the test group.
```

------

### 10.&emsp;&emsp;$gameMap.getGroupBulletListQJ(groupName)

获取当前地图内某个群组下的弹幕编号列表。返回一个数组，里面有对应弹幕群组内弹幕的编号。

```javascript
$gameMap.getGroupBulletListQJ('player bullet')//Get a list of projectile with the groupName being player bullet (or containing).
//If you have some knowledge of JavaScript, you can use $gameMap.bulletQJ (bullet number) to obtain bullet objects.
//After obtaining the projectile object, you can use the methods in [06-JS Interface Description] to achieve some effects. For example, batch modifying projectile attributes, batch adding projectile existData, etc.
//eg：
let bulletIndexList = $gameMap.getGroupBulletListQJ('player bullet');//Get a list of bullet screen numbers with 'player bullet' in groupName
let tempPointer = $gameMap;//Temporarily recording the global variable $gameMap can increase performance slightly.
let bullet;
for (let id of bulletIndexList) {
    bullet = tempPointer.bulletQJ(id);//Obtain the projectile object based on the projectile number
    bullet.addTimelineEffect('F',[0,10]);//Add effects to the projectile according to the instructions in the 06-JS interface manual.
}
//The purpose of the above script is to make all bullet comments with "player bullet" in groupName blink once (bullet. addTimelineEffect ('F ', [0,10])).
```

------

### 11.&emsp;&emsp;$gameMap.steupCEQJ(commonEventId,userId)

Execute a public event (with the number commonEventId), and the 'this event' number of the public event is userId.

```javascript
//eg:
$gameMap.steupCEQJ(1,1);//Execute public event 1, and set the 'current event' (obtained using this. _ceventId and this. character (0) in the public event) to be event 1.

//Of course, you can input some numerical values.
$gameMap.steupCEQJ(commonEventId,userId,directSetData,extraData);
//Among them, directSetData is an object, and the keys and values within the object will be directly assigned to the event page object. You don't need to write it, but if you write it, it must be written as {}.
//Among them, extraData can be any value, and the extraData property of the event page will be this value. You can choose not to write.

//eg:
$gameMap.steupCEQJ(1,1,{a:7,b:9,c:"tv"},"tv2");
//After executing this instruction, in public event 1, you can:
//Use this.a to obtain 7
//Using this.b can obtain 9
//Using this.c can obtain tv
//Using this.extraData can obtain tv2
```

------

### 12.&emsp;&emsp;$gameMap.event(eventId).steupCEQJ(pageIndex)

Execute the event page index of the eventId. When the corresponding event disappears, the corresponding event page also terminates execution.

```javascript
//eg:
$gameMap.event(1).steupCEQJ(2);//Execute event page 2 of event 1

//Of course, you can input some numerical values, and the specific usage is as follows. The meanings of directSetData and extraData are the same as those in Article 11 above.
$gameMap.event(eventId).steupCEQJ(pageIndex,directSetData,extraData)
```

------



