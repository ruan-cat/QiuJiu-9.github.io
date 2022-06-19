# light
<font size=4>The attribute detemines the light effect of lighting.   
The lighting effect needs the plugin QJ-Lighting.js.    
The default is null, meaning there is no lighting effect on projectile.</font>   

------

you need to set the attribute in the format below:

```javascript
{
    miniLightId:null,//the mini lighting id in plugin QJ-Lighting
    synRotation:false//if to synchronize the rotation of projectile and lighting.
}
```

------

<font size=4>Other complete examples:   </font>

light:null,   
light:{miniLightId:"test",synRotation:true}
