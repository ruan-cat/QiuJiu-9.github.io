# judgeAccuracyScale

<font size=4>This attribute refers to the accuracy of the judgment when scaling bullets
Generally speaking, when the scale attribute of a projectile is a dynamic value, this attribute is required.    
If the scale attribute of the bullet changes too quickly, it may directly pass over the target collision body.    
The default value is 0, which means no judgment accuracy is set.</font>

```javascript
judgeAccuracyScale:0.02,
```

<font size=4>For example, when writing like this, the scale attribute of the bullet is judged every 0.02 changes.
1 represents 100%, 0.02 represents 2%, meaning that a judgment is made every time the scale changes by 0.02 or 2%.</font>

