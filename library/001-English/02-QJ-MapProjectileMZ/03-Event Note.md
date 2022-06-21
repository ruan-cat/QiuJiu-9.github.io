# Event Note

You can write the text below in event page\`s first note command.

1.set the event`s collision box:   

```
 <BoxType:value>
```

more detail about vlaue can be found in '04-QJ.MPMZ.Shoot' '17-collisionBox'.   
   e.g:   

```
<BoxType:['C',8]>
<BoxType:['R',36,48]>
```

2.set the event\`s collision box\`s offset:   

```
<BoxOffset:x,y>
```

   e.g:   

```
<BoxType:0,0>
<BoxType:12,12>
```

3.add the current to the specific event group:   

```
<Group:groupName>  or  <Group:groupName1,groupName2,groupName3......>
```

   e.g: you set several event 

```
<Group:enemy>
```

then you can use QJ.MPMZ.Shoot({}) to generate a projectile.   
you can set the attribute 'initialRotation' to ['G','enemy'] ,then the projectile can turn toward the closest event in the above events.