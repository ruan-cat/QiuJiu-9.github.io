# rotationAdd
<font size=4>This attribute allows the laser to have additional angles</font>

|            Command             | Meaning |                             Note                             | Example  |
| :----------------------------: | :-----: | :----------------------------------------------------------: | :------: |
| [&#39;F&#39;,rotationValueAdd] | follow  | The angle of the laser increases by a value based on rotation (rotationValueAdd *, degrees) | ['F',90] |
|          ['R',speed]           | rotate  | The angle of the laser rotates at this speed based on rotation (speed *, degrees per frame) | ['R',2]  |

<font size=4>eg:</font>

rotationAdd:['F',10],   
rotationAdd:['R',1],   
