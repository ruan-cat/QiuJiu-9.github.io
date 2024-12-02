# moveType

<font size=4>This attribute determines the way projectiles move.  
The default value is ['S',4].</font>

|                           Command                            |                           Meaning                            |                             Note                             |         Example          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------: |
|                         ['S',speed]                          |                        Move Straight                         |                              -                               |         ['S',12]         |
|               ['TP',speed,max rotation angle]                |                         Trace Player                         | speed*: the speed of trace.<br />max rotation angle*: max number of degrees of rotation to move at a time. |       ['TP',12,6]        |
|      ['TP',speed,max rotation angle,disturbance angle]       |             Trace Player With <br />Disturbance              | disturbance angle*: random disturbance angle to move at a time. |      ['TP',12,6,12]      |
|           ['TG',Group Id,speed,max rotation angle]           |                      Trace Event Group                       |                  Group Id: event group id.                   |   ['TG','enemy',12,6]    |
|  ['TG',Group Id,speed,max rotation angle,disturbance angle]  |           Trace Event Group <br />With Disturbance           |                              -                               |  ['TG','enemy',12,6,12]  |
| ['QC',launch angle,bounce times,one bounce distance,one bounce time] |                       Quadratic Curve                        | launch angle: launch elevation based on the attribute initialRotation.<br />bounce times: -<br />one bounce distance: px<br />one bounce time: frame |    ['QC',60,3,24,10]     |
|                      ['B',characterId]                       |                      Bound To Character                      | the projectile can be bound to the character.<br />characterId: <br />-1 -> player<br />greater than zero -> eventId<br /> equal to zero -> this event |         ['B',-1]         |
| ['B',characterId,down x offset,down y offset,left x offset,left y offset,<br />right x offset,right y offset,up x offset,up y offset] |             Bound To Character <br />WIth Offset             |                down/left/right/up x/y offset                 | ['B',-1,0,0,0,0,0,0,0,0] |
|                ['C',characterId,radius,speed]                |                    Move Around Character                     | radius*: surround radius (px)<br />speed*: move speed (angle/frame) |     ['C',-1,72,0.02]     |
|          ['C',characterId,radius,speed,trace speed]          |         Move Around Character <br />With Trace Speed         | when the projectile is not on it track, it will gradually  <br />move back to track instead of be bound to it track.<br />trace speed: px |   ['C',-1,72,0.02,12]    |
|          ['F',x-axis expression,y-axis expression]           |                           Function                           | The angle of initialRotation is the direction of x-axis.<br />The expression is a parametric curve and the parameter is time(t).<br /><br />['S',10] equal to ['F','10\*t','0'] |    ['F','10\*t','0']     |
|                     ['D',isSynRotation]                      | The projectile will continuously read the value of the attribute position as the actual coordinate. |                              -                               |       ['D',false]        |
|        ['BL',speed,stepMin,stepMax,widthMin,widthMax]        | broken line<br />Move the projectile along a random line.<br /> | Every time the polyline takes one step in the direction of movement (between stepMin and stepMax, in pixels), it randomly turns in both directions. The distance between the turning point and the direction of movement is between widthMin and widthMax, in pixels. The one degree speed along this line is speed, measured in pixels per frame. |   ['BL',4,12,36,24,48]   |
|           ['BB',projectile index,r,sync rotation]            |   Bind the projectile to its corresponding relative position.   | The projectile will read the position of the projectile index number projectile and its own position attribute for each frame, and add them up to determine the actual position of the projectile.<br/>The effect is that this projectile will be displayed in the relative position of the projectile index projectile.<br/>Projectile index: The number of another projectile.<br/>r: Write true or false, default to true, whether the relative position takes into account the angle of the projectile index bullet screen.<br/>Sync rotation: Write true or false, default to true. When writing true, the projectile will read the angle of the projectile index number and its own initial rotation property for each frame, and add them up as the actual angle of the projectile. |         ['BB',1]         |

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