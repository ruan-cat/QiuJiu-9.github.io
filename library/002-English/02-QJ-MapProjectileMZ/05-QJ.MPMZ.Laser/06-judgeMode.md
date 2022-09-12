# judgeMode
<font size=4>This attribute determines the judge mode of laser.   
The default value is ['T'].</font>

|   Command    | Meaning |                             Note                             | Example  |
| :----------: | :-----: | :----------------------------------------------------------: | :------: |
|    ['T']     |  Touch  | it is only one touch when the laser always touches the target.<br />The second touch is when they separate and touch again. |  ['T']   |
| ['W',frames] |  Wait   | Laser touch detection is carried out every other period of time. | ['W',30] |

<font size=4>Other complete examples:   </font>
judgeMode:['T'],   
judgeMode:['W',30],
