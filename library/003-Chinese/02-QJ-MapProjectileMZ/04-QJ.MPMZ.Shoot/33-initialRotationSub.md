# initialRotationSub
<font size=4>属性initialRotation的结果可能无法肯定，例如当initialRotation写['G','enemy']时，场内可能根本没有对应的事件，所以游戏无法瞄准敌人。为了防止这种情况下弹幕朝向异常，故而设定此值。当计算initialRotation时若有如下表所示情况发生时，则initialRotation的计算结果将取initialRotationSub的值作为替代。   
简单来讲，您可以将initialRotation设置为['G','enemy']，将initialRotationSub设置为['PD']，这样在场内没对应事件时，子弹将与玩家同向射出，而不是向未知的方向射出。   
此属性的值默认为null，代表不替代。   
此属性可写的值与initialRotation相同，但尽量不要再写仍旧可能出现无法决定具体值的值。</font>

|                           Command                            |                 Note                 |
| :----------------------------------------------------------: | :----------------------------------: |
|       ['E',event id] or ['E',event id,offset rotation]       |    指定的事件不存在时朝向将异常。    |
|      ['ED',event id] or ['ED',event id,offset rotation]      |    指定的事件不存在时朝向将异常。    |
|       ['G',group id] or ['G',group id,offset rotation]       | 指定的事件一个都不存在时朝向将异常。 |
| ['B',projectile index] or ['B',projectile index,offset rotation] |      指定的弹幕不存在时将异常。      |
| ['BT',projectile index] or ['BT',projectile index,offset rotation] |      指定的弹幕不存在时将异常。      |
