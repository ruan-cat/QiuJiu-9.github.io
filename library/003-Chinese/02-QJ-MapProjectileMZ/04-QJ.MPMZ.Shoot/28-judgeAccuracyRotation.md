# judgeAccuracyRotation

<font size=4>这个属性是指子弹旋转时的判定精度，单位是度，一圈是360度。   
一般来说弹幕使用imgRotation属性来旋转时需要该属性来协助判定。   
若子弹旋转速度过快，可能直接越过目标碰撞体，此属性可指定判定碰撞的角度。   
默认值是 0，0代表不设定判定精度。</font>

```javascript
judgeAccuracyRotation:5,
```

<font size=4>比如像上面这样写时，子弹每旋转5度都进行一次碰撞判定。   </font>

