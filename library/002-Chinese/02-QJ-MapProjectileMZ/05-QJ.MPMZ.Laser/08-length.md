# length
<font size=4>这个属性决定了激光的长度和反弹情况，默认值是 ['S',280].</font>
<br/>

|                       Command                       |           Meaning           |                             Note                             |                Example                 |
| :-------------------------------------------------: | :-------------------------: | :----------------------------------------------------------: | :------------------------------------: |
|                    ['S',length]                     |          固定长度           |                     激光的长度是不可变的                     |               ['S',200]                |
|             ['S',length,rebound Times]              |              -              | 当激光的existData属性中有t为R T 或者NP 的class时，该激光可以反弹。 |              ['S',500,-1]              |
| [&#39;S&#39;,length,rebound Times,rebound Condtion] |              -              |                       增加反弹的条件。                       | ['S',500,10,'$gameSwitches.value(10)'] |
|            ['D',startX,startY,endX,endY]            | Distance between two point. | 激光的长度是两点之间的长度，两个点的坐标可以写的值同属性position一样。. |   ['D',['E',1],['E',1],['P'],['P']]    |

<br/>
<font size=4>完整的属性范例:    </font>

length:['S',200],   
length:['D',['E',1],['E',1],['P'],['P']],   
length:['D',['M'],['M'],['P'],['P']],   
