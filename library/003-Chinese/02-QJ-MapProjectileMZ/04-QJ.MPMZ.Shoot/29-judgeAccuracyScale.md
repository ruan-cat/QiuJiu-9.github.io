# judgeAccuracyScale

<font size=4>这个属性是指子弹缩放时的判定精度   
一般来说弹幕的scale属性是动态值时需要这个属性。   
若子弹scale属性变化过快，可能直接越过目标碰撞体。   
默认值是 0，0代表不设定判定精度。</font>

```javascript
judgeAccuracyScale:0.02,
```

<font size=4>比如像上面这样写时，子弹的scale属性每变化0.02时进行一次判定。   
1代表100%，0.02代表2%，意思就是scale每变化0.02或者说2%时进行一次判定。</font>

