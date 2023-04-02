# length
<font size=4>这个属性决定了激光的长度和反弹情况，默认值是 ['S',280].</font>

|                       Command                       |           Meaning           |                             Note                             |                           Example                            |
| :-------------------------------------------------: | :-------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                    ['S',length]                     |          固定长度           |                     激光的长度是不可变的                     |                          ['S',200]                           |
| [&#39;S&#39;,length,rebound Times,rebound Condtion] |              -              | rebound Condtion:反弹条件的列表.<br />你可以在列表中写:<br />['NP'] 意思是不可通行图块. <br />['R',regionId]或者['R',[regionId1,regionId2...]] 意思是区域. <br />['T',terrainId]或者['T',[terrainId1,terrainId2...]] 意思是地形. <br />['G',groupId]或者['G',[groupId1,groupId2...]]意思是指定事件.<br />['P']是指玩家 | ['S',500,10,[['NP']]] or <br /> ['S',500,10,[['NP'],['R',1]]] |
|            ['D',startX,startY,endX,endY]            | Distance between two point. | 激光的长度是两点之间的长度，两个点的坐标可以写的值同属性position一样。. |              ['D',['E',1],['E',1],['P'],['P']]               |


<font size=4>完整的属性范例:    </font>

length:['S',200],   
length:['D',['E',1],['E',1],['P'],['P']],   
length:['D',['M'],['M'],['P'],['P']],   
