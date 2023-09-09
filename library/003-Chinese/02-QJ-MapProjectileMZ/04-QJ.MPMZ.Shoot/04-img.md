# img
<font size=4>这个属性决定了弹幕的图片   </font>

|                           Command                            |  Meaning  |                             Note                             |                        Example                        |
| :----------------------------------------------------------: | :-------: | :----------------------------------------------------------: | :---------------------------------------------------: |
|                      name or ['P',name]                      |   image   |                           使用图片                           |                        'sword'                        |
|                       ['I',icon index]                       |   icon    |                     使用图标作为弹幕图片                     |                       ['I',16]                        |
|                      ['C',character id]                      | character | 使用某个角色当前的行走图作为弹幕的图片.<br />-1 -> 玩家<br />0->当前事件t<br /> |                       ['C',-1]                        |
|        ['T',text,arrangementMode,textColor,fontSize]         |   text    |             使用文字作为弹幕图片<br />最多写一行             |         ['T','It is a text!',0,'#00ff00',18]          |
| ['T',text,arrangementMode,textColor,fontSize,outlineColor,outlineWidth,fontFace] |   text    |                 和上面的一样只不过多一些属性                 | ['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null] |
|                        ['T',textData]                        |   text    | 也是文字，但扩展了大量属性，所以需要写成特殊的格式。<br />这也是插件的内部格式。<br />属性和值在下方的表格中，下方也有更详细的范例。 |            ['T',{text:"TEST",fontSize:24}]            |
|               ['A',animation id,playing times]               | animation | 将动画本身作为弹幕的图像<br />此项为MZ专属，专指播放MZ的Effect动画，不支持MV，以及MZ中的帧动画。<br />playing times：播放次数，默认为1，写-1时为不断播放。 |                        ['A',1]                        |

<font size=4>文字作为图片时各个属性的含义：:</font>


|     属性名      |                          可以写的值                          |                 默认值                 |   例子    |
| :-------------: | :----------------------------------------------------------: | :------------------------------------: | :-------: |
| arrangementMode |               0 -> 横向排布<br />1 -> 纵向排布               |                   0                    |     0     |
|    textColor    |   文本颜色，写十六进制颜色<br />null -> 此项使用系统默认值   |  系统默认值<br />一般默认为'#ffffff'   | '#ff0000' |
|    fontSize     |       文本大小，写数字<br />null -> 此项使用系统默认值       |      系统默认值<br />一般默认为16      |    24     |
|  outlineColor   | 文本的描边颜色，写十六进制颜色<br />null -> 此项使用系统默认值 |               系统默认值               | '#ffff00' |
|  outlineWidth   |    文本的描边厚度，写数字<br />null -> 此项使用系统默认值    |      系统默认值<br />一般默认为3       |     2     |
|    fontFace     | 文字的字体系列名称，写字体系列字符串<br />null -> 此项使用系统默认值 | 系统默认值<br />一般默认为"sans-serif" |   null    |
|   fontItalic    | 文字是否斜体，写true或者false<br />true是启用文字斜体，false是不启用。<br />null -> 此项使用系统默认值 |    系统默认值<br />一般默认为false     |   true    |
|    fontBold     | 文字是否加粗，写true或者false<br />true是启用文字加粗，false是不启用。<br />null -> 此项使用系统默认值 |    系统默认值<br />一般默认为false     |   true    |
|      width      | 文本宽度，写数字。<br />文本实际上有自己计算出的实际绘制大小，但想让文本根据某些规律对齐，那就需要设定统一的“画布”的宽高。<br />此项写具体值时，文本宽度若大于这个值将被压缩。<br />此项写-1时，画布的宽度将与实际宽度相同（自动适应。）<br /> |                   -1                   |    400    |
|     height      |                     同width，这是高度。                      |                   -1                   |    48     |
|    textAlign    | 文本对齐方式，写1到9的整数。<br />当width或Height不是-1时，文本需要设定对齐方式。<br />文本有9个对齐方式，对应小键盘的数字位置。<br />7左上，8中上，9右上<br />4左中，5中心，6右中<br />1左下，2中下，3右下 |                   5                    |     5     |
|    lineWidth    | 文本划线宽度，写数字。<br />因为划线在文字中间是删除线，在文字下方是下划线，还有其他的可能。<br />所以我设计了可以自由设定宽度，具体位置，颜色的划线。<br />写0时无划线。 |                   0                    |     3     |
|    lineColor    | 文本划线颜色，写十六进制颜色。<br />写null时划线颜色与文本颜色相同。 |                  null                  | '#00ff00' |
|    lineRate     | 文本划线位置，写0到1的数字。<br />写0.5时是中间删除线，写1时是下划线。 |                  0.5                   |   0.95    |

<font size=4>['T',textData]的整体例子： </font>

```javascript
img:['T',{
    text:"测试文本",
    arrangementMode:0,
    textColor:"#ffcb00",
    fontSize:24,
    outlineColor:"#000000",
    outlineWidth:2,
    fontFace:null,
    fontItalic:false,
    fontBold:false,
    width:-1,
    height:-1,
    textAlign:5,
    lineWidth:0,
    lineColor:null,
    lineRate:0.5
}]
```

<font size=4>显示文本时的注意事项：</font>

在使用弹幕显示文本时，文本未写的属性需要一个默认值，在插件参数中可指定其对应属性的默认值。   
若想完全取消描边，需要将描边宽度设定为0，且将描边颜色设定为#ffffff00。

<font size=4>完整的属性范例:   </font>

img:'bullet',   
img:['P','bullet2'],   
img:['I',12],   
img:['C',0],   
img:['T','It is a text!',0,'#00ff00',18],   
img:['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null],   
