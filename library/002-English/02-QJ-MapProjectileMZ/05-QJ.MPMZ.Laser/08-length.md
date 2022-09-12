# length
<font size=4>This attribute determines the length of the projectile.    

The default is ['S',280].
</font>

|                   Command                   |           Meaning           |                             Note                             |                           Example                            |
| :-----------------------------------------: | :-------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                ['S',length]                 |       Constant Length       |              the length of laser is changeless.              |                          ['S',200]                           |
|         ['S',length,rebound Times]          |              -              | the lasr can rebound when there are type 'R', 'T' or <br />'NP' in attribute existData. |                         ['S',500,-1]                         |
| ['S',length,rebound Times,rebound Condtion] |              -              | rebound Condtion:the list of conditions that <br />laser can collied and rebound.<br />you can write:<br />['NP'] meaning no-pass-tile.<br />['R',regionId] or ['R',[regionId1,regionId2...]] meaning region.<br />['T',terrainId] or ['T',[terrainId1,terrainId2...]] meaning terrain. | ['S',500,10,[['NP']]] or <br />['S',500,10,[['NP'],['R',1]]] |
|        ['D',startX,startY,endX,endY]        | Distance between two point. | the length of laser is distance between two point.<br />the startX/startY/endX/endY is the same as attribute 'position'. |              ['D',['E',1],['E',1],['P'],['P']]               |


<font size=4>Other complete examples:    </font>

length:['S',200],   
length:['D',['E',1],['E',1],['P'],['P']],   
length:['D',['M'],['M'],['P'],['P']],   
