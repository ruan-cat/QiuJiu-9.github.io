# judgeAccuracyRotation

<font size=4>This attribute refers to the accuracy of the judgment when the bullet rotates, measured in degrees, with one circle being 360 degrees.
Generally speaking, when using the imgRotation attribute to rotate a projectile, this attribute is needed to assist in judgment.    
If the bullet rotates too fast, it may directly pass over the target collision body, and this attribute can specify the angle for determining the collision.    
The default value is 0, which means no judgment accuracy is set.</font>

```javascript
judgeAccuracyRotation:5,
```

<font size=4>For example, when written as above, a collision judgment is performed every 5 degrees of rotation of the bullet.  </font>

