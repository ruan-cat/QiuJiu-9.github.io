# JS API

## API of Projectiles：

<font size=4>If you have a certain level of knowledge of JavaScript, you can use some advanced interfaces.    
In places such as moveJS and deadJS, the following statements can be written to perform more advanced functions</font>

|              JS Code               |                           Meaning                            |
| :--------------------------------: | :----------------------------------------------------------: |
|  this.changeAttribute(name,value)  | Change the attribute of the current bullet, where name is the attribute name and value is the corresponding value.<br />The attributes that are currently fully compatible with 'name' are：<br />moveType，hue，light，img，imgRotation，<br />afterImage，scale，opacity，anchor，z |
|    this.addMoveData(name,value)    | Add moveCE, moveJS, or moveF to the current projectile.<br />Write 'CE', 'JS', or' F 'as' name', which respectively represent adding moveCE, moveJS, or moveF. |
|      this.addExistData(value)      |             Add existData to the current bullet.             |
|      this.addTimeline(value)       | Add a timeline (in the [32-timeline]) to the current bullet, and write an effect data in the [32-timeline] as value. |
| this.addTimelineEffect(type,value) | Execute some special effects, specifically some effects from the [32-timeline]<br/>Type can be written as 'R','B','S', or 'F', while value can be written as the value corresponding to the type in [32-timeline]<br/> It should be noted that addTimeline (value) is different from this one.<br />The former involves adding a timeline and waiting for the specified time in that timeline to arrive before executing.<br />But the latter directly executes the corresponding effect once, without waiting. |
|      this.setDead(existData)       | Directly make the current projectile disappear. Among them, existData refers to the ability to write an existData to set animations such as disappearing bullet comments.<br />Please refer to the example below for details. |

<font size=4>eg:</font>

```javascript
this.changeAttribute("img","bullet");//Change image
this.changeAttribute("scale",[3,2]);//Change the zoom of the projectile

this.addMoveData("F",[0,10,ExampleFun]);//Add moveF to the current projectile.

this.addExistData({t:['P'],a:['C',10]});//Add existData to the current projectile.

this.addTimeline(['F',0,30,[0,10]]);//Let the projectile start flashing, flashing every 30 frames. The opacity of the projectile changes from 1 to 0 within 10 frames, and then from 0 to 1 within the next 10 frames.

this.addTimelineEffect('S',[0,48,30]);//Make the projectile immediately bounce up (0 degrees) by 48 pixels within 60 (30*2) frames.

this.setDead({t:['Time',0],d:[0,30]});//Make the projectile disappear and fade out within 30 frames.
```
