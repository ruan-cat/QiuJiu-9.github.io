# existData

<font size=4>这个属性是弹幕最重要的属性，他决定了弹幕的消失，碰撞，反弹，穿透，动画，行为。    
默认值是 [  {t:['Time',180],d:[1,30,2]}  ].   
基础的格式为 [class1,class2,class3...]   
'class' 是一个简单的对象，用以设置弹幕的一个功能。</font>

<br/>

<font size=4>你可以为一个class增加如下的属性来设计不同的功能：   
 't' 是一个class中最主要的的一个属性，当这个t的条件被满足时，就会执行下面的一些指令，然后消失。   
'c' 决定了是否启用这个功能。   
'a' 决定了当t的条件被满足时要做什么事情。   
'd' 决定了当条件被满足，弹幕要消失时弹幕图片的动态效果。   
'an' 决定了当条件被满足时，在弹幕身上播放的动画。   
'p' 决定了弹幕此穿透情况  
'rb' 决定了弹幕的反弹情况   
'r'决定了弹幕是否进行范围攻击以及范围攻击的设置  
‘cb’决定了在进行这个判定时使用的特殊的碰撞体积，如果不设置则使用属性collisionBox的值  
<br/>每一个t对应的各个c a d an p rb的值略有差别。</font>

<br/>

| Attribute Name |                           Command                            |         Meaning         |                             Note                             |                           Example                            |
| :------------: | :----------------------------------------------------------: | :---------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|       t        | 1.与地图碰撞:<br />['R',Region Id]<br />['R',[Region Id1,Region Id2,Region Id3...]]<br />['T',Terrain Id]<br />['T',[Terrain Id1,Terrain I2,Terrain Id3...]]<br />['NP']<br /><br />2.与事件或者玩家碰撞:<br />['G',Group Id]<br />['G',[Group Id1,Group Id2,Group Id3......]]<br />['P']<br /><br />3.弹幕直接消失的条件:<br />['SW',switch Id,true/false]<br />['S',script value,true/false]<br />['Time',exist frames]<br />['BE',projectile index]<br />['AE']<br />['F',function,functionArgumentsArray]<br />['F',function,functionArgumentsArray,returnValue]<br /><br />4.与其他弹幕的碰撞<br />['B',group name]<br />['B',[group name1,group name2,group name3......]] |          type           | 这个属性在每一个class中都必须有.<br /><br />R:与某个区域进行碰撞.<br />T:与地形进行碰撞..<br />NP:与不可通行图块进行碰撞.<br />G:与事件群组中的事件进行碰撞.<br />P:与玩家进行碰撞.<br />SW:当某个开关是开着或者关闭时<br />S:当脚本的值是true或者false时.<br />Time:弹幕的最大存在时间.<br />BE:当指定编号的弹幕不存在时该弹幕也消失.<br />AE:当img属性为['A',animation id]时，此项可在动画播放完成后让弹幕消失。<br />B:与某个弹幕群组(groupName)中的弹幕进行碰撞. <br />F:执行函数function，若返回值与returnValue相同则触发该条件。functionArgumentsArray写传入函数的【参数列表】。returnValue是写返回值，不写的话默认是true。 | t:['R',1],<br />t:['R',[1,2,3]],<br />t:['T',7],<br />t:['T',[7,6]],<br />t:['NP'],<br />t:['G','enemy'],<br />t:['G',['enemy','neutral']],<br />t:['P'],<br />t:['SW',1,true],<br />t:['S','this.time>120',true],<br />t:['Time',300],<br />t:['B','enemy bullet'],<br />t:['B',['enemy bullet','neutral bullet']],<br />t:['F',testFun,[],true], |
|       c        | ['SW',switch Id,true/false]<br />['S',script text]<br />['T',startTime,intervalTime,resetPierceTime]<br />['F',function,functionArgumentsArray]<br />['F',function,functionArgumentsArray,returnValue] |        condition        | 默认值是 null.<br />这个属性决定了这个功能是否被启用。.<br /><br />null:永远启用这个功能<br />SW: 只要当某个开关开着时才启用这个功能.<br />S:只要当脚本的值是true时才启用这个功能.<br />T:从某一刻（startTime单位为帧）开始每隔一段时间（intervalTime单位为帧）执行一次，且在重新执行时是否重置传统数据（resetPierceTime写trye或者false）。<br />F:执行函数function，若返回值与returnValue相同则启用这一条existData。functionArgumentsArray写传入函数的【参数列表】。returnValue是写返回值，不写的话默认是true。 | c:['SW',2,true],<br />c:['S','!$gamePlayer.isJumping()'],<br />t:['F',testFun,[],true], |
|       a        | ['C',CommonEvent Id,send value]<br/>['SW',switch Id,true/false]<br/>['SS',selfSwitch name,true/false]<br/>['E']<br/>['EP',Page Id,send value]<br/>['S',script text]<br/>['F',function]<br/>['F',function,functionArgumentsArray] |         action          | 默认值是 null.<br />在t中的调节被打成时执行的行动<br />C:执行一个公共事件.<br />SW:打开或者关闭某个开关.<br />SS:打开或者关闭事件的独立开关.(只适用于t 为 G时)<br />E:暂时消除打到的事件(只适用于t 为 G时)<br />EP:执行被打到的事件的某个事件页(只适用于t 为 G时)<br />S:执行脚本<br />F:执行函数，functionArgumentsArray写传入函数的【参数列表】，还有一些需要注意的事项请查看本页最下面。 | a:['C',5],<br />a:['SW',2,true],<br />a:['SS','A',true],<br />a:['E'],<br />a:['EP',2],<br />a:['S','console.log("active")'],<br />a:['F',console.log,["active"]] |
|       d        |               [0,frames]<br/>[1,frames,scale]                | projectile image effect | 默认值是 null.<br /><br />null:没有图片效果.<br />[0,frames]:弹幕会逐渐淡出<br />[1,frames,scale]:弹幕在淡出时会同时逐渐缩放.<br /><br />图片效果无法在弹幕穿透或者反弹时使用. |          d:null,<br />d:[0,30],<br />d:[1,30,1.5],           |
|       an       |                         animation id                         |       animations        |          默认值是 0.<br /><br />0:不播放动画<br />           |                      an:0,<br />an:10,                       |
|       p        | [pierce times,if play 'an' when pierce ,if run 'a' when pierce]<br /><br />高级用法：<br />[pierceTimes,playAnWhenPierce,runAWhenPierce,inJS,outJS] |         pierce          | 默认值是 null.<br />null:该弹幕不穿透.<br />(只适用于t 为 G或者P 时)<br /><br /> pierce times：穿透次数，写-1时无限穿透<br />playAnWhenPierce：穿透时是否播放动画<br />runAWhenPierce：穿透时是否执行a<br /><br />高级用法：<br />inJS：写字符串或函数，在刚穿透目标时执行的指令。<br />outJS：写字符串或函数，在目标穿透出时执行的指令。<br />inJS和outJS写字符串时，可以使用target获取碰撞到的玩家或事件或弹幕。<br />inJS和outJS写函数时，函数的第一个参数即为碰撞到的玩家或事件或弹幕。 | p:null,<br />p:[1,true,true],<br />p:[-1,true,true],<br />p:[5,false,true],<br />p:[3,false,true], |
|       rb       | [rebound times,if play 'an' when rebound,if run 'a' when rebound,run 'a' after rebound or before] |         rebound         | 默认值是 null.<br />(只适用于t 为 R或者T或者NP 时)<br /><br />rebound times：反弹次数，写-1时无限反弹<br />if play 'an' when rebound ：反弹时是否播放动画<br />if run 'a' when rebound ：反弹时是否执行a<br />run 'a' after rebound or before：写false时在反弹判定结束后执行'a'和‘an'，写true时在反弹前执行。默认为true。 | rb:null,<br />rb:[1,true,true],<br />rb:[-1,true,true],<br />rb:[5,false,true],<br />rb:[3,false,true], |
|       r        |            [rangeData1,rangeData2,rangeData3...]             |          range          | 默认值为 null.<br />这个值是为了让您设置范围攻击属性。<br />基础的格式是一个对象。<br />你需要在这个对象中设置如下属性.<br />各个属性的值与上方对应的属性名相同。<br /><br />.t:攻击的目标.只能写['P']或者['G',groupName].<br />a:行动.<br />cb:范围攻击的碰撞体积,与17-collisionBox中的相同. | r:[{t:['P'],a:['SW',1,true]},{t:['G','enemy'],a:['SW',2,true]}] |
|       cb       |                    与属性collisionBox相同                    |      collisionBox       | 默认值为null，即不进行特殊设置，使用属性collisionBox。需要注意的是这里不能使用['auto']。 |                         cb:['C',24]                          |

<font size=4>每一个class的默认值:   
{c:null,a:null,d:null,an:0,p:null,rb:null,r:null,cb:null},   
class举例:   
1.弹幕移动120帧，然后在30帧内淡出   
{t:['Time',120],d:[0,30]},   
2.弹幕与事件群组中的事件碰撞，碰撞到目标时就消除那个目标   
{t:['G','enemy'],a:['E']},   
3.弹幕与不可通行图块进行碰撞，碰撞后反弹   
{t:['NP'],rb:[20,false,false]},    
4.当玩家不进行跳跃时，弹幕可以与玩家碰撞。当弹幕碰撞到玩家时，弹幕逐渐淡出且变大，并且执行10号动画。   
{t:['P'],c:['S','!$gamePlayer.isJumping()'],an:10,d:[1,10,2]}</font>

<br/>

<font size=4>完整的属性范例:   </font>

<br/>

existData:[{t:['Time',120],d:[0,30]},    {t:['G','enemy'],a:['E']},    {t:['NP'],rb:[20,false,false]}],   
existData:[{t:['Time',10],d:[1,30,2]},    {t:['P'],a:['CE',1],d:[1,30,2]},    {t:['NP'],d:[1,30,2]}],

```javascript
[
    {//弹幕再被发射后最多存在10帧，然后在30帧内淡出。
        t:['Time',10],
        d:[1,30,2]
    },
    {//弹幕可以与玩家进行碰撞，弹幕碰撞到玩家后执行1号公共事件并且淡出。
        t:['P'],
        a:['CE',1],
        d:[1,30,2]
    },
    {//弹幕可以与不可通行图块碰撞，碰撞后淡出且1执行范围攻击。
        t:['NP'],
        d:[1,30,2],
        r:[{t:['P'],a:['CE',1]}]
    }
]
```





附录：在a（action）中，部分设置中可以用的转义字符，以及特殊的功能如下：<br />

['C',CommonEvent Id,send value]

|            JS Code            |                           Meaning                            |
| :---------------------------: | :----------------------------------------------------------: |
|        this.eventId()         | 子弹判定中的事件编号。<br />若判定中的是玩家，则该值为-1。<br />若判定中的是其他弹幕，则该值为0。 |
|         this.targetId         | 子弹判定中的事件编号。<br />若判定中的是玩家，则该值为-1。<br />若判定中的是其他弹幕，则该值为那个弹幕的编号。 |
|         this.bulletId         |                      获得当前弹幕的编号                      |
|          this.bullet          |                       获取当前子弹对象                       |
|        this.sendValue         | 获得传入的特殊值<br />例如a:['C',2,5]那么执行公共事件2时this.sendValue获取的就是5<br />再例如a:['C',1,[5,3]]那么在公共事件1中使用this.sendValue获取的就是[5,3] |
|    this.bullet.inheritX()     |       获得当前子弹的x坐标，此值可以用于生成新的弹幕。        |
|    this.bullet.inheritY()     |       获得当前子弹的y坐标，此值可以用于生成新的弹幕。        |
| this.bullet.inheritRotation() |        获得当前子弹的角度，此值可以用于生成新的弹幕。        |
|       this.bullet.time        |            获得当前子弹已经存在的时间，单位为帧。            |
|         this.ifPierce         |                在执行此公共事件时弹幕是否穿透                |
|        this.ifRebound         |                在执行此公共事件时弹幕是否反弹                |

<br /> ['EP',Page Id,send value]

|            JS Code            |                           Meaning                            |
| :---------------------------: | :----------------------------------------------------------: |
|        this.eventId()         |                   执行该事件页的事件的编号                   |
|         this.bulletId         |                      获得当前弹幕的编号                      |
|          this.bullet          |                       获取当前子弹对象                       |
|        this.sendValue         | 获得传入的特殊值<br />例如a:['EP',1,5]那么在目标事件的1号事件页中this.sendValue获取的就是5<br />再例如a:['EP',2,[5,3]]那么在目标事件的2号事件页中使用this.sendValue获取的就是[5,3] |
|    this.bullet.inheritX()     |       获得当前子弹的x坐标，此值可以用于生成新的弹幕。        |
|    this.bullet.inheritY()     |       获得当前子弹的y坐标，此值可以用于生成新的弹幕。        |
| this.bullet.inheritRotation() |        获得当前子弹的角度，此值可以用于生成新的弹幕。        |
|       this.bullet.time        |            获得当前子弹已经存在的时间，单位为帧。            |
|         this.ifPierce         |                在执行此公共事件时弹幕是否穿透                |
|        this.ifRebound         |                在执行此公共事件时弹幕是否反弹                |

<br />['S',script text]<br />

|        JS Code         |                        Meaning                        |
| :--------------------: | :---------------------------------------------------: |
|         target         | 判定到的目标对象，可能是事件或者玩家（$gamePlayer）。 |
|      bulletTarget      |      判定到的是其他弹幕时，这个值1是其他子弹对象      |
|       this.index       |                  获得当前弹幕的编号                   |
|          this          |                   获取当前子弹对象                    |
|       actionData       |           获取['S',script text]这个初始数据           |
|    this.inheritX()     |    获得当前子弹的x坐标，此值可以用于生成新的弹幕。    |
|    this.inheritY()     |    获得当前子弹的y坐标，此值可以用于生成新的弹幕。    |
| this.inheritRotation() |    获得当前子弹的角度，此值可以用于生成新的弹幕。     |
|       this.time        |        获得当前子弹已经存在的时间，单位为帧。         |
|        ifPierce        |            在执行此公共事件时弹幕是否穿透             |
|       ifRebound        |            在执行此公共事件时弹幕是否反弹             |

<br />['F',function,functionArgumentsArray]<br />

<font size=4>注意！使用此功能后该弹幕无法被存入存档，请在存档前清除弹幕。   
在执行的函数中，函数的前几个参数就是functionArgumentsArray中设定值。   
在最后一个参数之后，还会传入一个特别的参数，里面记录了该次碰撞的详细数据，您可以使用这个数据做一些高级的效果。</font>

```javascript
//例如在某个弹幕中写
//['F',testFunc,[1,"typeA"]]
//那么函数testFunc可以这样写：
testFunc = function(atkValue,atkType,args) {
    
}
//其中atkValue就会是1
//atkType就会是"typeA"
//args将会是一个对象，写['F',testFunc,[1,"typeA"]]时args的值及其含义为：
{
    actionData:['F',testFunc,[1,"typeA"]],//actionData就是此action的值
    target:null,//若此条existData的t是'P'，那么target就是玩家$gamePalyer；若此条existData的t是'G'，那么target就是碰到的事件对象。否则是null。
    bulletTarget:null,//若此条existData的t是'B'，那么bulletTarget就是碰撞到的弹幕对象。
        //可以在上方的函数testFunc中使用args.bulletTarget.setDead();让其消失，或进行其他处理。
    ifPierce:false,//此值为false或true，代表此次碰撞时是否是穿透。是穿透意味该条existData还可再进行更多的穿透，而不是直接消失。
    ifRebound:false//此值为false或true，代表此次碰撞时是否是反弹。是穿透意味该条existData还可再进行更多的反弹，而不是直接消失。
}
//更详细的例子：
existData:[{t:['B','testBullet',a:['F',testFunc]]}]
//对应的函数testFunc：(上面这条)['F',testFunc]没设置参数，故而下面的函数testFunc只有一个默认的args。
testFunc = function(args) {
    if (args.bulletTarget) {//与弹幕碰撞，且碰撞到的弹幕存在
        args.bulletTarget.setDead({t:['Time',0],d:[0,30]});//使弹幕消失，且让其在30帧内淡出。
        //可以在此写更多【06-JS接口说明】中的接口。
    }
}
```

