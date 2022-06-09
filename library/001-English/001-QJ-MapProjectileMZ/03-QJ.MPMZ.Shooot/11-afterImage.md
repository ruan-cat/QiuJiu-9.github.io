# afterImage

<font size=4>This attribute determines the afterImage of the projectile.       
The afterImage means the trailing effect of the projectile.   
The default is null, means that there is no trailing effect for the projectile.   
The base format is:   
[color,opacity,time,width]   or   
[color,opacity,time,width,ifWaitDisappear]   
<br/>The parameters:</font>

|      Name       |                           Meaning                            |                   Note                   |  Example   |
| :-------------: | :----------------------------------------------------------: | :--------------------------------------: | :--------: |
|      color      |                            color                             |             hexadecimal(16)              | ''#00ff00' |
|     opacity     |                           opacity                            |                  0 to 1                  |     1      |
|      time       | the life time of the afterimage<br />(the length of afterimage) |       the frame<br />(1s=60frame)        |     24     |
|      width      |                      the width of image                      |                    px                    |     8      |
| ifWaitDisappear | Whether to wait for the tailing <br />effect to fade out before the <br />projectile disappears completely. | true or false.<br />the default is true. |    true    |

<font size=4>Other complete examples:   </font>

afterImage:null,   
afterImage:['#ff0000',1,24,8],   
afterImage:['#ff0000','0|1~24/0',24,'0|8~24/0'],   
afterImage:['#ff0000','0|1~24/0',24,8],   
afterImage:['0|#ff0000~8/#00ff00~8/#0000ff~8/#ff0000',0.8,24,4],   