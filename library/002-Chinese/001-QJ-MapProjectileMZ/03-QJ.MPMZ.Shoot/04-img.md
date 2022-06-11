# img
<font size=4>这个属性决定了弹幕的图片   </font>

|                           Command                            |  Meaning  |                             Note                             |                        Example                        |
| :----------------------------------------------------------: | :-------: | :----------------------------------------------------------: | :---------------------------------------------------: |
|                      name or ['P',name]                      |   image   |                           使用图片                           |                        'sword'                        |
|                       ['I',icon index]                       |   icon    |                     使用图标作为弹幕图片                     |                       ['I',16]                        |
|                      ['C',character id]                      | character | 使用某个角色当前的行走图作为弹幕的图片.<br />-1 -> 玩家<br />0->当前事件t<br /> |                       ['C',-1]                        |
|       ['T',text,arrangement mode,text color,text size]       |   text    |             使用文字作为弹幕图片<br />最多写一行             |         ['T','It is a text!',0,'#00ff00',18]          |
| ['T',text,arrangement mode,text color,text size,stroke color,stroke thickness,font face] |   text    |                 和上面的一样只不过多一些属性                 | ['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null] |

<font size=4>文字作为图片时各个属性的含义：:</font>


|       Name       |                   Note                   |  Example  |
| :--------------: | :--------------------------------------: | :-------: |
| arrangement mode |     0 -> 横向排布<br />1 -> 纵向排布     |     0     |
|    text color    |                 文本颜色                 | '#ff0000' |
|    text size     |                 文本大小                 |    16     |
|   stroke color   |              文本的描边颜色              | '#ffff00' |
| stroke thickness |              文本的描边厚度              |     2     |
|    font face     | 文字的字体系列名称<br />null -> 默认字体 |   null    |

<font size=4>完整的属性范例:   </font>

img:'bullet',   
img:['P','bullet2'],   
img:['I',12],   
img:['C',0],   
img:['T','It is a text!',0,'#00ff00',18],   
img:['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null],   
