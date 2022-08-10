# moveType

<font size=4>This attribute determines the way projectiles move.  
The default value is ['S',4].</font>

|                           Command                            |                   Meaning                    |                             Note                             |         Example          |
| :----------------------------------------------------------: | :------------------------------------------: | :----------------------------------------------------------: | :----------------------: |
|                         ['S',speed]                          |                Move Straight                 |                              -                               |         ['S',12]         |
|               ['TP',speed,max rotation angle]                |                 Trace Player                 | speed*: the speed of trace.<br />max rotation angle*: max number of degrees of rotation to move at a time. |       ['TP',12,6]        |
|      ['TP',speed,max rotation angle,disturbance angle]       |     Trace Player With <br />Disturbance      | disturbance angle*: random disturbance angle to move at a time. |      ['TP',12,6,12]      |
|           ['TG',Group Id,speed,max rotation angle]           |              Trace Event Group               |                  Group Id: event group id.                   |   ['TG','enemy',12,6]    |
|  ['TG',Group Id,speed,max rotation angle,disturbance angle]  |   Trace Event Group <br />With Disturbance   |                              -                               |  ['TG','enemy',12,6,12]  |
| ['QC',launch angle,bounce times,one bounce distance,one bounce time] |               Quadratic Curve                | launch angle: launch elevation based on the attribute initialRotation.<br />bounce times: -<br />one bounce distance: px<br />one bounce time: frame |    ['QC',60,3,24,10]     |
|                      ['B',characterId]                       |              Bound To Character              | the projectile can be bound to the character.<br />characterId: <br />-1 -> player<br />greater than zero -> eventId<br /> equal to zero -> this event |         ['B',-1]         |
| ['B',characterId,down x offset,down y offset,left x offset,left y offset,<br />right x offset,right y offset,up x offset,up y offset] |     Bound To Character <br />WIth Offset     |                down/left/right/up x/y offset                 | ['B',-1,0,0,0,0,0,0,0,0] |
|                ['C',characterId,radius,speed]                |            Move Around Character             | radius*: surround radius (px)<br />speed*: move speed (angle/frame) |     ['C',-1,72,0.02]     |
|          ['C',characterId,radius,speed,trace speed]          | Move Around Character <br />With Trace Speed | when the projectile is not on it track, it will gradually  <br />move back to track instead of be bound to it track.<br />trace speed: px |   ['C',-1,72,0.02,12]    |
|          ['F',x-axis expression,y-axis expression]           |                   Function                   | The angle of initialRotation is the direction of x-axis.<br />The expression is a parametric curve and the parameter is time(t).<br /><br />['S',10] equal to ['F','10\*t','0'] |    ['F','10\*t','0']     |

<font size=4>Other complete examples:   </font>
<br/><br/>moveType:['S',10],   
moveType:['S','0|0~30/10~30/0'],   
moveType:['TP',12,6,12],   
moveType:['TP','6|12~6/6~6|6~6/12',6,12],   
moveType:['TP','6|12~6/6~6|6~6/12',6,'6|2~6|4'],   
moveType:['TG','enemy',12,6,12],   
moveType:['TG','test','6|12~6/6~6|6~6/12',6,12],   
moveType:['TG','helper','6|12~6/6~6|6~6/12',6,'6|2~6|4'],   
moveType:['QC',60,3,24,10],   
moveType:['B',-1],   
moveType:['B',-1,0,12,-12,0,12,0,0,-12],   
moveType:['C',-1,72,0.02],   
moveType:['C',-1,'0|72~60/48~60/72',0.02],   
moveType:['C',-1,72,0.02,12],   
moveType:['F','10\*t','0'],   
moveType:['F','4\*t','36\*Math.cos(t/4)'],   