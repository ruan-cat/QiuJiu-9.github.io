# judgeAccuracyMove

<font size=4>这个属性是指子弹移动时判定与不可通行处，事件，玩家，其他弹幕等时的判定精度，单位是像素。   
若子弹速度过快，可能直接越过目标碰撞体，此属性可指定判定碰撞的距离。   
默认值是 0，0代表不设定判定精度，0代表子弹只在移动后进行碰撞判定。</font>

```javascript
judgeAccuracyMove:12,
```

<font size=4>比如像上面这样写时，子弹每移动12像素都进行一次碰撞判定。   
以前是judgeAccuracy属性决定移动判定精度，现在因为扩充了其他精度问题，故而改成了judgeAccuracyMove。   
但考虑兼容问题，仍旧可以使用judgeAccuracy，此时judgeAccuracy与judgeAccuracyMove效果相同。</font>
