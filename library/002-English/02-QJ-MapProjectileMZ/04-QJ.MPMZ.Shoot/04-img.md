# img
<font size=4>This attribute determines the image of the projectile.   </font>

|                           Command                            |    Meaning    |                             Note                             |                        Example                        |
| :----------------------------------------------------------: | :-----------: | :----------------------------------------------------------: | :---------------------------------------------------: |
|                      name or ['P',name]                      | image/picture |        use the file in img/projectiles as the image.         |                        'sword'                        |
|                       ['I',icon index]                       |     icon      |                  use the icon as the image.                  |                       ['I',16]                        |
|                      ['C',character id]                      |   character   | use the character image as the image.<br />-1 -> player <br />0->current event<br /> |                       ['C',-1]                        |
|       ['T',text,arrangement mode,text color,text size]       |     text      |       use the text as the image.<br />Up to one line.        |         ['T','It is a text!',0,'#00ff00',18]          |
| ['T',text,arrangement mode,text color,text size,stroke color,stroke thickness,font face] |     text      |             same as follow but more parameters.              | ['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null] |
|                        ['T',textData]                        |     text      | It is also text, but it has expanded a large number of attributes, so it needs to be written in a special format.<br />This is also the internal format of the plugin.<br />The attributes and values are in the table below, and there are also more detailed examples below. |            ['T',{text:"TEST",fontSize:24}]            |
|               ['A',animation id,playing times]               |   animation   | Using the animation itself as a projectile image is exclusive to MZ and specifically refers to playing MZ's Effect animation. It does not support MV or frame animations in MZ.<br />Playing times: The default number of plays is 1, and when written as -1, it means continuous playback. |                        ['A',1]                        |

<font size=4>The parameters of text:</font>


|       Name        |                             Note                             |     Example      |
| :---------------: | :----------------------------------------------------------: | :--------------: |
| arrangement mode  |          0 -> Horizontal row<br />1 -> Vertical row          |        0         |
|    text color     |                      the color of text.                      |    '#ff0000'     |
|     text size     |                      the size of text.                       |        16        |
|   stroke color    |                  the color of text stroke.                   |    '#ffff00'     |
| stroke thickness  |                the thickness of text stroke.                 |        2         |
|     font face     |        The font face.<br />null -> default font face.        |       null       |
|    fontItalic     | Is the text italicized.Write true or false<br/>True to enable italicization, false not to enable it<br/>null ->This option uses the system default value | default is false |
|     fontBold      | Is the text bolded.Write true or false<br/>True to enable bolding, false not to enable it< Br/>null ->This option uses the system default value | default is false |
|       width       | Text width, write numbers.<br />The text actually has its own calculated actual drawing size, but if you want the text to align according to certain rules, you need to set a uniform "canvas" width and height.<br />When writing a specific value for this item, if the text width is greater than this value, it will be compressed.<br />When writing -1, the width of the canvas will be the same as the actual width (automatically adapted) |        -1        |
|      height       |              Same as width, this is the height.              |        -1        |
|     textAlign     | Text alignment method, write integers from 1 to 9.<br />When the width or height is not -1, the alignment of the text needs to be set.<br />The text has 9 alignment options, corresponding to the numerical positions on the keypad<br />7 Upper Left<br />8 Upper Middle<br />9 Upper Right<br/>4 Middle Left<br />5 Center<br />6 Middle Right<br/>1 Lower Left<br />2 Lower Middle<br />3 Lower Right |        5         |
|     lineWidth     | Text underline width, write numbers.<br />Because the underlined line is a strikethrough line in the middle of the text and an underline below the text, there are other possibilities.<br />So I designed a line that can freely set the width, specific position, and color.<br />When writing 0, there is no dash. |        0         |
|     lineColor     | Text underline color, write hexadecimal color.<br /> When writing null, the underlined color is the same as the text color. Draw a line.<br />When writing 0, there is no dash. |       null       |
|     lineRate      | Text underline position, write numbers from 0 to 1.<br />When writing 0.5, it is a middle strikethrough, and when writing 1, it is an underline. |       0.5        |
|     advanced      | Whether to enable a simple hypertext editing language, slightly similar to the usage of dialog boxes.<br/>Write false or true.<br/>When this item is written as true and arrangementMode is written as 0 or 2, the property text can be written with some escape characters.<br/>**Note that gradient colors and text shadows cannot be used when using this attribute**<br/>It should be noted that the default values in the following methods are the values of the corresponding properties of the function.<br/>Including native: \V[n]，\N[n]，\P[n]，\G，\C[n]，\I[n]，\}，\{，\\\\<br/>Expanded:<br/>\\TC[n]: Modify the text color, where n is the hexadecimal color, for example: \\TC[# ff0000]<br/>\\FS[n]: Modify the text size, where n is the font size, for example: \\FS[24]<br/>\\OC[n]: Modify the stroke color, where n is a hexadecimal color, for example: \\OC[# ff0000]<br/>\\OW[n]: Modify the thickness of text strokes, where n is the thickness, for example: \\OW[2]<br/>\\FF[n]: Modify the font of the text, where n is the font name.<br/>\\FI[n]: Set whether the text is italicized. Writing 0 for n means no italicization, and writing 1 means italicization.<br/>\\FB[n]: Set whether the text is bolded. Writing 0 for n means not bolded, and 1 means bolded. |      false       |
|      update       | Whether to redraw the content every frame. Write false or true, default to false.<br />When there is a transition character \\V[n] in the text, the value of variable n may constantly change, and the text needs to be redrawn continuously. In this case, this value needs to be set to true. |      false       |
|  backgroundColor  | Background color. <br />This option defaults to null, meaning no text background color is drawn.<br />When writing hexadecimal colors for this item, the game will draw the background color before drawing the text. |       null       |
| backgroundOpacity | The opacity of the background color is only effective when there is a background color present. |        1         |
|    shadowBlur     | The degree of text shadow. When writing 0, there is no text shadow. |        0         |
|    shadowColor    |                 Text shadow (glowing) color.                 |    " #000000"    |
|   shadowOffsetX   |                    Text shadow x offset.                     |        0         |
|   shadowOffsetY   |                    Text shadow y offset.                     |        0         |

<font size=4>['T',textData] total example： </font>

```javascript
img:['T',{
    text:"test",
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
    lineRate:0.5,
    backgroundColor:null,
    backgroundOpacity:1,
    shadowBlur:0,
    shadowColor:"#000000",
    shadowOffsetX:0,
    shadowOffsetY:0
}]
```

<font size=4>Precautions when displaying text:</font>

When using bullet comments to display text, properties that are not written in the text require a default value, which can be specified in the plugin parameters for their corresponding properties.
If you want to completely cancel the stroke, you need to set the stroke width to 0 and the stroke color to #ffffff00.

<font size=4>Other complete examples:   </font>

img:'bullet',   
img:['P','bullet2'],   
img:['I',12],   
img:['C',0],   
img:['T','It is a text!',0,'#00ff00',18],   
img:['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null],   
