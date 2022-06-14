# existData

<font size=4>This is the most important attribute, it detemines the projectile`s disappear. action, collision, rebound and animation.   
The default is [  {t:['Time',180],d:[1,30,2]}  ].   
The base format is [class1,class2,class3...]   
'class' is a simple class that has some attribute to detemine one specific function of projectile.</font>

<br/>

<font size=4>You can add attirbutes below  to a 'class' to make a complete new function to the projectile.   
The 't' means what the new function is. when the 't' is met, the projectile disappears.   
The 'c' means when the new function can be enable.   
The 'a' means what to do extraly when the new function is actived (when the projectile disappears).   
The 'd' means which special gradient effect on projectile\`s image needed to be played when the projectile disappears.   
The 'an' means which animation in current MZ project\`s database will be played on projectile when the projectile disappears.   
The 'p' means the setting about pierce when the projectile collieds with something then disappears.   
The 'rb' means the rebound times when the projectile collied with something.   
<br/>The attributes of different types of classes are slightly different.</font>

<br/>

| Attribute Name |                           Command                            |         Meaning         |                             Note                             |                           Example                            |
| :------------: | :----------------------------------------------------------: | :---------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|       t        | 1.collied with map tile:<br />['R',Region Id]<br />['R',[Region Id1,Region Id2,Region Id3...]]<br />['T',Terrain Id]<br />['T',[Terrain Id1,Terrain I2,Terrain Id3...]]<br />['NP']<br /><br />2.collied with events or player:<br />['G',Group Id]<br />['G',[Group Id1,Group Id2,Group Id3......]]<br />['P']<br /><br />3.conditions for direct disappearance:<br />['SW',switch Id,true/false]<br />['S',script value,true/false]<br />['Time',exist frames]<br /><br />4.collied with other projectile:<br />['B',group name]<br />['B',[group name1,group name2,group name3......]] |          type           | This attribute must be present in every class.<br />This attribute determines the added function of this class for projectiles.<br /><br />R:collied with region.<br />T:collied with terrain.<br />NP:collied with no-pass tile.<br />G:collied with event in event group.<br />P:collied with player.<br />SW:when the switch is true/false.<br />S:when the value of script is true/false.<br />Time:the existence time of projectle.<br />B:collied with other projectiles which have special 'groupName'. <br /> | t:['R',1],<br />t:['R',[1,2,3]],<br />t:['T',7],<br />t:['T',[7,6]],<br />t:['NP'],<br />t:['G','enemy'],<br />t:['G',['enemy','neutral']],<br />t:['P'],<br />t:['SW',1,true],<br />t:['S','this.time>120',true],<br />t:['Time',300],<br />t:['B','enemy bullet'],<br />t:['B',['enemy bullet','neutral bullet']], |
|       c        |      ['SW',switch Id,true/false]<br />['S',script text]      |        condition        | The default is null.<br />This attribute determines if the function is enable.<br /><br />null:no condition,this function is forever enable.<br />SW: only when the switch is true or false, the action can be enabled.<br />S:only when the value of script is true, the action can be enabled. |  c:['SW',2,true],<br />c:['S','!$gamePlayer.isJumping()'],   |
|       a        | ['C',CommonEvent Id,send value1,send value2,send value3...]<br/>['SW',switch Id,true/false]<br/>['SS',selfSwitch name,true/false]<br/>['E']<br/>['EP',Page Id,send value1,send value2,send value3...]<br />['S',script text] |         action          | The default is null.<br /><br />C:run a common event.<br />SW:switch the switch on or off.<br />SS:switch the target event\`s self switch on or off.(only type 'G')<br />E:erase the target event.(only type 'G')<br />EP:run the event page of target  event additionally.(only type 'G')<br />S:execute the script. | a:['C',5],<br />a:['SW',2,true],<br />a:['SS','A',true],<br />a:['E'],<br />a:['EP',2],<br />a:['S','console.log("active")'], |
|       d        |               [0,frames]<br/>[1,frames,scale]                | projectile image effect | The default is null.<br /><br />null:no image effect.<br />[0,frames]:the projectile image will fade out.<br />[1,frames,scale]:the projectile image will fade out and scale.<br /><br />image effect. can\`t be run when rebound or pierce. |          d:null,<br />d:[0,30],<br />d:[1,30,1.5],           |
|       an       |                         animation id                         |       animations        |  The default is 0.<br /><br />0:no animation to play.<br />  |                      an:0,<br />an:10,                       |
|       p        | [pierce times,if play 'an' when pierce ,if run 'a' when pierce] |         pierce          | The default is null.<br />null:no pierce effect.<br />(only type 'G' or 'P')<br /><br />when the projectile collieds with player or events<br /> in event group, if the projectile can pierce them.<br />when the projectile pierces them, if to play 'an' and if to run 'a'.<br /><br />pierce times:-1 means the projectile can pierce forever. | p:null,<br />p:[1,true,true],<br />p:[-1,true,true],<br />p:[5,false,true],<br />p:[3,false,true], |
|       rb       | [rebound times,if play 'an' when rebound,if run 'a' when rebound] |         rebound         | The default is null.<br />(only type ‘R' or 'T' or 'NP')<br /><br />when the projectile collieds with region or terrain or <br />no-pass tile, if the projectile can rebound instead of disappear directly.<br /><br />rebound times:-1 means the projectile can rebound forever. | rb:null,<br />rb:[1,true,true],<br />rb:[-1,true,true],<br />rb:[5,false,true],<br />rb:[3,false,true], |

<font size=4>Class default(no type because the type must be set so no default value):   
{c:null,a:null,d:null,an:0,p:null,rb:null},   
Class Example:   
1.the projectile moves for 120 frames then fades out in 30 frames:   
{t:['Time',120],d:[0,30]},   
2.the projectile collieds with events in event group 'enemy' then the target event will be erased:   
{t:['G','enemy'],a:['E']},   
3.the projectile collieds with no-pass tile and rebound:   
{t:['NP'],rb:[20,false,false]},   
4.the projectile collieds with player when the player is not jumping    
then the projectile plays the animation 10, fades out in 10 frames and scales 2 times:   
{t:['P'],c:['S','!$gamePlayer.isJumping()'],an:10,d:[1,10,2]}</font>

<br/>

<font size=4>Other complete examples:   </font>

<br/>

existData:[{t:['Time',120],d:[0,30]},    {t:['G','enemy'],a:['E']},    {t:['NP'],rb:[20,false,false]}],   
existData:[{t:['Time',10],d:[1,30,2]},    {t:['P'],a:['CE',1],d:[1,30,2]},    {t:['NP'],d:[1,30,2]}],

```javascript
[
    {//the projectile fades out 10 frames after it is shot.
        t:['Time',10],
        d:[1,30,2]
    },
    {//the projectile can collied with player and when it collieds with player, the common event 1 will be run one times.
        t:['P'],
        a:['CE',1],
        d:[1,30,2]
    },
    {//the projectile can collied with no-pass tile.when it collieds,it will fade out.
        t:['NP'],
        d:[1,30,2]
    }
]
```

