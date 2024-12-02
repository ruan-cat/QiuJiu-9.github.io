# Base Note
1. **The terms of use:**   
    - This plugin is free for commercail and non-commercail use.
2. **The Plugin Require:**
    - QJ-Core.js
4. **How can you use this plugin:**
    - This plugin usually works with the plugins above.
    - You need Javascript knowledge to use this as a stand-alone plugin.
5. **The projectiles image:**   
    - The image files of the projectiles need to be ***PNG*** files.
    - The image files needs to be put in ***img/projectiles***.
    - You can write ***[frames,speed]*** at the end of image\`s name.   
    The image with the mark above will be vertically divided into individual frames.   
    e.g:&emsp;&emsp;&emsp;***yf[8,5]***   
    ![](img/1/yf[8,5].png)
6. **The special dramatic effect:**   
    - The attribute name with * can use special fade effects.
    - You need to set several changing points,then connect them.They will change automatically and cycle.
        - The format of a changing point is ***'duration|target value*** or ***duration/fade target value***.
        - Use ~ to connect the different changing points.   
        - e.g:&emsp;'10|5\~30|20\~20/30'   
        &emsp;The initial value is 5, then it becomes 20 after 10 frames for 30 frames, then it gradually becomes 30 in 30 frames(because of using /).
    - The first change point is the initial value.   
    - The fade target value may also be color as #00FF00.   
      &emsp;e.g:&emsp;'0|#ff0000\~30/#00ff00\~20|#0000ff'   
      &emsp;The initial color is red #ff0000. Then it gradually becomes green #ff0000 in 30 frames.Then it suddenly becomes blue #0000ff for 20 frames.Then it suddenly becomes red #ff0000.Then it cycles.
    - You should use angle.The plugin can convert it to radians automatically.

6.**It is very, very important to pay attention**
The projectile system is relatively complex, and most importantly, it is relatively free to use, with some special effects that cannot be saved in principle.
Therefore, when using this plugin to save or enter a saved map, there must be no bullet comments in the map.   
Otherwise, the file cannot be read normally.
