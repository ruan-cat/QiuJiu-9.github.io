# judgeAccuracyMove

<font size=4>This attribute refers to the accuracy of determining non passable areas, events, players, other bullet comments, etc. when bullets move, measured in pixels.    
If the bullet speed is too fast, it may directly pass over the target collision body, and this attribute can specify the distance to determine the collision.    
The default value is 0, where 0 represents no setting of judgment accuracy and 0 represents collision judgment of bullets only after movement.</font>

```javascript
judgeAccuracyMove:12,
```

<font size=4>For example, when writing like this, a collision judgment is performed every 12 pixels the bullet moves.
Previously, the judgeAccuracy attribute determined the accuracy of movement determination, but now due to the expansion of other accuracy issues, it has been changed to judgeAccuracyMove.
However, considering compatibility issues, judgeAccuracy can still be used, and in this case, judgeAccuracy has the same effect as judgeAccuracyMove.</font>
