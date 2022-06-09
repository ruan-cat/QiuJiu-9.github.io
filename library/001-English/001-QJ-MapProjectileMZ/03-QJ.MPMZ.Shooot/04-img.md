# img
<font size=4>This attribute determines the image of the projectile.   </font>

|                           Command                            |    Meaning    |                             Note                             |                        Example                        |
| :----------------------------------------------------------: | :-----------: | :----------------------------------------------------------: | :---------------------------------------------------: |
|                      name or ['P',name]                      | image/picture |        use the file in img/projectiles as the image.         |                        'sword'                        |
|                       ['I',icon index]                       |     icon      |                  use the icon as the image.                  |                       ['I',16]                        |
|                      ['C',character id]                      |   character   | use the character image as the image.<br />-1 -> player <br />0->current event<br /> |                       ['C',-1]                        |
|       ['T',text,arrangement mode,text color,text size]       |     text      |       use the text as the image.<br />Up to one line.        |         ['T','It is a text!',0,'#00ff00',18]          |
| ['T',text,arrangement mode,text color,text size,stroke color,stroke thickness,font face] |     text      |             same as follow but more parameters.              | ['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null] |


<font size=4>The parameters of text:</font>


|       Name       |                      Note                      |  Example  |
| :--------------: | :--------------------------------------------: | :-------: |
| arrangement mode |   0 -> Horizontal row<br />1 -> Vertical row   |     0     |
|    text color    |               the color of text.               | '#ff0000' |
|    text size     |               the size of text.                |    16     |
|   stroke color   |           the color of text stroke.            | '#ffff00' |
| stroke thickness |         the thickness of text stroke.          |     2     |
|    font face     | The font face.<br />null -> default font face. |   null    |


<font size=4>Other complete examples:   </font>

img:'bullet',   
img:['P','bullet2'],   
img:['I',12],   
img:['C',0],   
img:['T','It is a text!',0,'#00ff00',18],   
img:['T','It is a text!',0,'#00ff00',18,'#ff0000',2,null],   
