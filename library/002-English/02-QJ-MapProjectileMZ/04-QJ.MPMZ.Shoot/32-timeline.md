# timeline
This attribute can be used to design some special effects on the timeline.    
The basic format for this attribute is:   
[effect data1,effect data2,effect data3......]   
<br />The basic format for each effect data is:   
[type,before start time,loop time,value,loop times]   
<br />Among them, type is a character representing different effects, such as changing the angle of the projectile movement, scaling the projectile, and making the projectile vibrate. Each effect data represents a complete effect, which starts from the "before start time" frame after the projectile is generated and is executed every "loop time" frame.    

Before start time: Write a number greater than or equal to 0. The default is 0, which means that the effect is executed once when the projectile is first generated, and then the loop begins.    

Loop time: Write a number greater than or equal to 0, default is 5, representing that the effect is executed every 5 frames. When writing 0, it means that the effect is executed once per frame. Writing -1 means executing only once without looping.    
Loop times: The number of loops, default to -1, represents an infinite number of loops and can be left blank. When the loop time is written as -1, this term (i.e. loop times, note that time is time, times is frequency, and the latter has an extra s) will also be forcibly set to 0, meaning it will only be executed once and will not loop again after execution (i.e. the meaning of that 0). When this item is written as 0, it means it does not loop.    

Value: Write the value according to the type and value correspondence table in the following table. Multiple values can be set in a loop to allow for more variation.    
Write it as {time1: value1, time2: value2, time3: value3...}.    
Execute the effect once at time1/time2/time3... within each loop according to value1/value2/value3. It should be noted that if the loop time is not -1, then the value of time here is from 0 to loop time-1, excluding loop time. For example, when you write ['R', 0,8, {8:3}], time loops from 0 to 7 (8-1=7) and never reaches 8, so this writing is invalid.


| type | meaning |                             note                             |                  value                  |                          value note                          |                          example                          |
| :--: | :-----: | :----------------------------------------------------------: | :-------------------------------------: | :----------------------------------------------------------: | :-------------------------------------------------------: |
| 'R'  | rotate  | Rotate the movement angle of the projectile at a certain point.<br />This rotation is different from the rotation in imgRotation. imgRotation only changes the angle of the projectile image, while this rotation changes the movement angle of the projectile. When moveType is a certain value (such as QC, B, F, D, etc.), this rotation is invalid. |                 number                  |   Write the angle value of rotation, in degrees per frame.   | ['R',0,0,1]<br /> ['R',15,5,-2]<br /> ['R',0,8,{0:4,3:4}] |
| 'B'  | breathe | Breathing effect, which involves scaling the projectile to a certain size and then scaling it back to its original size. |       [Scaling size, time spent]        | Scaling size refers to the ratio relative to the current projectile size, with 1 representing the original size.<br />The time spent refers to the time it takes for the projectile to scale back to a certain size, because the projectile still needs to scale back, so the total time for this effect to take effect is actually twice this value. |                    ['B',0,60,[0.5,15]]                    |
| ‘S’  |  shake  | Vibration causes the projectile to move in one direction for a certain distance before returning.<br />Attention! This value does not change the actual position of the projectile judgment (determining collision, reading projectile position), only the display effect. | [Direction angle, distance, time spent] | Direction angle: The direction of vibration, measured in degrees, written as a number from 0 to 360. When written as -1, it represents a random angle from 0 to 360. When written as -2, it represents vibration towards the current movement direction of the projectile. When written as -3, it represents vibration towards the current image angle of the projectile.<br />Distance: The amplitude of vibration, measured in pixels.<br />Time spent: The time it takes to vibrate to the maximum distance, and in reality, it takes to vibrate back after one vibration, so the total time for this effect to take effect is actually twice this value. |                   ['S',0,60,[-1,24,15]]                   |
| 'F'  | flicker |         Blink, become transparent, and then restore.         |       [Opacity size, time spent]        | The opacity size refers to the ratio of opacity relative to the current projectile, with 1 representing the original opacity.<br />The time spent refers to the time it takes for the projectile to fade out to a certain opacity, because the projectile still needs to be restored, so the total time for this effect to take effect is actually twice this value. |                     ['F',0,60,[0,15]]                     |

<font size=4>eg:</font>

```javascript
timeline:[['R',0,0,1]],//When there is only one effect, the outermost [] can also be cancelled, for example, it can be written as timeline: ['Rotate',0,0,1],
//The effect of this is to make the projectile self generate (first 0) and rotate 1 (last 1) degree per frame (second 0).
timeline:[['R',15,5,-2]],//The effect of this is to rotate the projectile by -2 degrees every 5 frames after generating 15 frames.
timeline:[['R',30,-1,90]],//The effect of this is to rotate the projectile 90 degrees after generating 30 frames, and then there are no other effects. Not looping is because the loop time here is -1, which means not looping.
timeline:[['R',0,8,{0:7,3:-7}]],//The effect of this is to make the projectile self generate, repeating some effects every 8 frames. Specifically, the 0th (8 * 0+0) frame is rotated by 7 degrees, and the 3rd (8 * 0+3) frame is rotated by -7 degrees.
//Rotate frame 8 (8 * 1+0) by 7 degrees, frame 11 (8 * 1+3) by -7 degrees, frame 16 (8 * 2+0) by 7 degrees, frame 19 (8 * 2+3) by -7 degrees Continuously cycling.
    
timeline:[['R',9,-1,10],['R',18,-1,-10]],//The effect of this is to rotate the projectile by 10 degrees at frame 9 and by -10 degrees at frame 18.
timeline:[['R',0,-1,{9:10,18:-10}]],//The effect of this item is the same as that of the previous item, which is written separately for easy understanding.
timeline:[['R',9,-1,{0:10,9:-10}]],//The effect of this item is the same as that of the previous item, which is written separately for easy understanding.
    
timeline:[['B',0,60,[0.5,15]]],//Scale the projectile every 60 frames, reducing it to half its original size within 15 frames, and then restoring it to its original size within the next 15 frames.
timeline:[['B',7,60,{0:[0.8,10],20:[0.6,10],40:[0.4,10]}]],//After the projectile is generated:
//Scale to 80% of the original from frame 7 (7+0+10 * 0) to frame 17 (7+0+10 * 1), and restore from frame 17 (7+0+10 * 1) to frame 27 (7+0+10 * 2).
//Scale to 60% from frame 27 (7+20+10 * 0) to frame 37 (7+20+10 * 1), and restore from frame 37 (7+20+10 * 1) to frame 47 (7+20+10 * 2).
//Scale to 60% from frame 47 (7+40+10 * 0) to frame 57 (7+40+10 * 1), and restore from frame 57 (7+40+10 * 1) to frame 67 (7+40+10 * 2).
//Next, the loop begins.
//Scale to 80% of the original from frame 67 (7+0+10 * 0) to frame 77 (7+0+10 * 1), and restore from frame 77 (7+0+10 * 1) to frame 87 (7+0+10 * 2).
//Scale to 60% from frame 87 (7+20+10 * 0) to frame 97 (7+20+10 * 1), and restore from frame 97 (7+20+10 * 1) to frame 107 (7+20+10 * 2).
//Scale to 60% from frame 107 (7+40+10 * 0) to frame 117 (7+40+10 * 1), and restore from frame 117 (7+40+10 * 1) to frame 127 (7+40+10 * 2).
//Afterwards, there is also a continuous cycle. Starting from frame 7, repeat every 60 frames.
    
//The usage of B, S and F is similar, so I donot write more examples of B, S and F.
```

