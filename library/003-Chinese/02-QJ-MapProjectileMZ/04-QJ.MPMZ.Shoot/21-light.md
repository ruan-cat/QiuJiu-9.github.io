# light
<font size=4>这个属性决定了弹幕绑定的灯光。   
此功能的启用需要QJ-Lighting.js（MV版本）或者QJ-Lighting.js（MZ版本）的支持。   
默认值为null，代表此弹幕不绑定灯光。</font>   

------

若要设置灯光的话需要按如下格式来写：

```javascript
{
    miniLightId:null,//写QJ-lighting.js中迷你灯光（mini lightening）的编号。
    synRotation:false//是否同步灯光角度与弹幕的角度，角度就是朝向。
}
```

------

<font size=4>完整的属性范例:   </font>

light:null,   
light:{miniLightId:"test",synRotation:true}
