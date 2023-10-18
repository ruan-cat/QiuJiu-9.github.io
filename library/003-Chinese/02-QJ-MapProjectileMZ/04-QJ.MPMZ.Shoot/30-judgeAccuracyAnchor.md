# judgeAccuracyAnchor

<font size=4>这个属性是指子弹锚点改变时的判定精度   
一般来说弹幕的anchor属性是动态值时需要这个属性。   
若子弹anchor属性变化过快，可能直接越过目标碰撞体。   
默认值是 0，0代表不设定判定精度。</font>

```javascript
judgeAccuracyAnchor:0.02,
```

<font size=4>比如像上面这样写时，子弹的anchor属性每变化0.02时进行一次判定。   
意思就是anchor每变化0.02时进行一次判定。</font>

