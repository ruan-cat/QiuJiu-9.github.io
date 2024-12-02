# trailEffect

<font size=4>This attribute determines the special trailing effect of the projectile.           
The default value is an empty array [], which means that this projectile does not have a special trailing effect.   
<br />We need to understand the concept of hOrV before we can comprehend the function of this projectile.    
HOrV (horizontal or vertical) is a property of this feature that determines whether trailing/ghosting occurs horizontally or vertically in the projectile.    
Assuming the projectile image is facing upwards (at an angle of 0):
When the projectile moves upwards, the tail is generated from the rear of the projectile and is a longitudinal tail. At this point, hOrV is false, and this feature is mainly used for the projectile trailing effect.    
When the projectile is translated or rotated left or right, the residual image is generated from the left or right side of the projectile, which is a horizontal residual image. At this point, hOrV is true, and this feature is mainly used for making sword shadows.   
<br />The basic format is:
[trail effect1,trail effect2,trail effect3...]   
Each trail effect is a simple object, and you can write various properties in this object to design different trail effects. The default value for each trailing effect is:  </font>

```javascript
{
img:'circle-blue',//use img/projectiles/circle-blue.png as image of trail effect。
existTime:5,//There are a total of 20 (5+15) frames of trailing. After 5 frames of afterimage, the transparency gradually decreases to 0.
disappearTime:15,
ifProjctileWait:true,//After triggering the disappearance condition of the projectile, wait for all special trailing effects to fade out before the projectile truly disappears.
imgStretchMode:0,//The trailing effect is to stretch the entire trailing image.
hOrV:false,//Longitudinal trailing, used for making bullet remnants.
alpha:1,//The opacity is 1
tint:"#ffffff",//The color tone is white, and white is the original image.
blendMode:0,//Default blendMode.
roundPixels:false,//Do not enable blurry pixels.
aboveProjectile:false//The afterimage is displayed below the projectile image.
}
```

<font size=4>You need to write the various attributes of each particle effect yourself. The specific meanings of each attribute are:</font>

|   Param Name    |                       Meaning and Note                       |                           Example                            |
| :-------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|       img       | Tailored image.<br />You can use images or capture a part of the projectile image as a residual image, which can automate the generation of residual images.<br />When writing a string, it represents using an image.<br />If you want to capture an image, please refer to the instructions at the bottom of this page. | 'trail0'<br />['L',0.5,1,0,0]<br />['L',0,0.9999999,0,0]<br />['L',0.4,0.2,0.3,0]<br />['L',0.5,1,0,0,0.15,0,0,0.05] |
|    existTime    | The existence time of tailing (excluding fading out time), in frames. |                              10                              |
|  disappearTime  |       The fading time of the tail, measured in frames.       |                              30                              |
| ifProjctileWait | After triggering the disappearance condition of the projectile, should we wait for all special trailing effects to fade out before letting the projectile disappear.<br />Write true or false.<br />When this value is set to true, the corresponding fade out time can be written in the projectile disappearance condition to make the tail disappear at the same time as the projectile. |                            false                             |
| imgStretchMode  | How to draw trailing images, write 0 or 1.<br />0 means that the trailing effect will stretch the trailing image.<br />1 represents that the trailing effect is to repeatedly arrange the trailing image. |                              1                               |
|      hOrV       | Decided whether to produce trailing images in the horizontal or vertical direction of the projectile.<br />Write true or false< Please provide a detailed explanation at the top of this page. It is written above because it is quite important. |                       true<br />false                        |
|      alpha      | The maximum opacity of residual images. Write decimals from 0 to 1. |                             0.8                              |
|      tint       |  The color tone of the afterimage. Write hexadecimal color.  |                          "#00ff00"                           |
|    blendMode    |                 blendMode<br />0, 1, 2 or 3                  |                           0<br />1                           |
|   roundPixels   | Whether to enable pixel blurring for residual images.<br />This item only works in RMMZ and is invalid in RMMV.<br />Write true or false. |                             true                             |
| aboveProjectile | Is the afterimage displayed above or below the projectile.<br />Write true or false.<br />When writing true, the afterimage is displayed above the projectile, and when writing false, it is displayed below. |                            false                             |

<br />

------

<font size=5>Instructions for writing attribute img when capturing images:</font>   
<font size=4>   
['L ', starting value for horizontal truncation, width value for truncation, starting value for vertical truncation, height value for truncation]   
Or   
['L ', starting value for horizontal truncation, width value for truncation, starting value for vertical truncation, height value for truncation, length value cleared below, length value cleared on the left, length value cleared on the right, length value cleared above]
 <br />
When writing img in this way, the tail will capture a part of the original projectile image as the image, which can automatically generate afterimages.    
If this item is difficult to understand, you can directly use the example values at the bottom of this page.    
The specific cropping method is to take the upper left corner of the original projectile image as the origin, starting from the point where x=the starting value for horizontal cropping and y=the starting value for vertical cropping, and cropping a rectangle with a width of "cropped width value" and a height of "cropped height value".    
The size of the cropped image is the size of the rectangle above, which is used as the standard for drawing residual images.    
But there may still be some parts in the captured image that do not need to be displayed, so it is necessary to clear another part of the image (without changing its size).    
For example, in order to ensure good effects of the residual image and the sword during the projectile, it is necessary to make the height of the residual image the same as that of the sword image. However, after the residual image is captured, there is still a sword hilt left, so we may not need to display the residual image on the hilt part (below the sword image). At this time, we set the value "length value cleared below" to a suitable value, such as writing 0.15 (clearing 15% of the pixels below the captured image).    
When eight values are written as 0 or positive integers, the unit is pixels;
When writing decimals from 0 to 0.9999999, it refers to the proportion.    
The proportion will be automatically multiplied by the corresponding width and height of the projectile image size during calculation to obtain the actual pixel value.    
When the last four values are not written, they default to 0.</font>

<br />

------

<font size=5>Other instructions:</font>   
<font size=4>This attribute trailEffect (when hOrV is false) has similarities with the attribute afterImage, and different effects should be used according to the actual situation.    
In addition, trailEffect is drawn using GPU, while afterImage is drawn using CPU, so there is no need to worry about the performance difference.</font>

<br />

------

<font size=5>eg:</font>   

```javascript
/*
Example 1: Longitudinal, tail trailing

Recommended values for various attributes of projectile:
anchor:[0.5,0.95],
imgRotation:['F',0],

Detailed explanation of attributes in trailEffect:

img:['L',0,0.999999,0.4,0.2,0,0,0,0]
Writing 0.999999 instead of 1 is because when writing 1, it represents 1 pixel, while when writing 0.999999, it represents 99.9999% of the width of the entire projectile image. The system automatically round it up to the width of the entire projectile image.
Therefore, setting the "starting value for horizontal clipping" to 0 and the "width value for clipping" to 1 represents the width of the entire projectile image.
The overall meaning is to capture the middle part of the original projectile image as a residual image.

imgStretchMode:1
Continuously repeating the arrangement of captured images

hOrV:false
Longitudinal trailing
*/
QJ.MPMZ.Shoot({
    moveType:['TP',8,3],initialRotation:['P'],position:[['E',0],['E',0]],existData:[],img:"sword-big",anchor:[0.5,0.95],
    trailEffect:[{
        img:['L',0,0.999999,0.4,0.2,0,0,0,0],
        existTime:0,
        disappearTime:30,
        imgStretchMode:1,
        hOrV:false
    }]
});





/*
Example 2: Horizontal, residual image when wielding the sword

Recommended values for various attributes of projectile:
anchor:[0.5,0.95],
imgRotation:['R',2],

img:['L',0.5,1,0,0.999999,0,0,0,0]
The overall meaning is to capture a vertical line in the middle of the original projectile image as a residual image.

imgStretchMode:1
Continuously repeating the arrangement of captured images

hOrV:true
Horizontal residual image
*/
QJ.MPMZ.Shoot({
    moveType:['D',false],initialRotation:0,position:[['M'],['M']],existData:[],img:"sword-big",anchor:[0.5,0.95],
    imgRotation:['R',3],
    trailEffect:[{
        img:['L',0.5,1,0,0.999999,0,0,0,0],
        existTime:0,
        disappearTime:20,
        imgStretchMode:1,
        hOrV:true
    }]
});
```

