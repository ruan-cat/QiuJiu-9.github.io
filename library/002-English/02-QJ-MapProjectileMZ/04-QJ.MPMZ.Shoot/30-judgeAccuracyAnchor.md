# judgeAccuracyAnchor

<font size=4>This attribute refers to the accuracy of determining when the bullet anchor point changes
Generally speaking, when the anchor attribute of a projectile is a dynamic value, this attribute is required.    
If the anchor attribute of the bullet changes too quickly, it may directly pass over the target collision body.    
The default value is 0, which means no judgment accuracy is set.</font>

```javascript
judgeAccuracyAnchor:0.02,
```

<font size=4>For example, when writing like this, the anchor attribute of the bullet is judged every 0.02 changes.
The meaning is to make a judgment every 0.02 when the anchor changes.</font>

