# QJ-Core

ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ    
这个插件主要有如下功能
 Ⅰ.便捷指令
 Ⅱ.增加按键
 Ⅲ.动态效果核心
 Ⅳ.SAT算法核心

 ## Ⅰ.便捷指令
 这个插件提供了如下便捷脚本指令：
 下方被包在符号[]中的参数是可选参数.

 1.打开或者关闭独立开关   
QJ.ss(eventId,selfSwitchName,value[,mapId]);   
   eventId: 0代表当前事件.
   selfSwitchName: 'A','B','C' 或者 'D'.
   value: true/1 或者 false/0.
   mapId: 地图编号。不写或者写0时代表当前地图。

##  Ⅱ.增加按键

判断是否按着某个按键: Input.isPressed(keyName)
判断是否按下某个按键: Input.isTriggered(keyName)
判断是否重复按某按键: Input.isRepeated(keyName)
判断是否长按某个按键: Input.isLongPressed(keyName)

  注意:
  1.js不区分左右shift/ctrl/alt按键
  2.最好不要使用 print screen 和 Num Lock.   

键值   |  键码  | 备注

8   ->  backspace     
9   ->  tab     
12  ->  clear      
13  ->  enter     
16  ->  shift     
17  ->  control     
18  ->  alt     
19  ->  pause     
20  ->  caps lock     
27  ->  esc     
32  ->  space     
33  ->  pageup     
34  ->  pagedown     
35  ->  end     
36  ->  home     
37  ->  left     
38  ->  up                 
39  ->  right     
40  ->  down     
44  ->  print screen  ->  invalid     
45  ->  insert     
46  ->  del     
48  ->  num 0     
49  ->  num 1     
50  ->  num 2     
51  ->  num 3     
52  ->  num 4     
53  ->  num 5     
54  ->  num 6     
55  ->  num 7     
56  ->  num 8     
57  ->  num 9     
65  ->  A     
66  ->  B     
67  ->  C     
68  ->  D     
69  ->  E     
70  ->  F     
71  ->  G     
72  ->  H     
73  ->  I     
74  ->  J     
75  ->  K     
76  ->  L     
77  ->  M     
78  ->  N     
79  ->  O     
80  ->  P     
81  ->  Q  ->  page up     
82  ->  R     
83  ->  S     
84  ->  T     
85  ->  U     
86  ->  V     
87  ->  W  ->  page down     
88  ->  X  ->  escape     
89  ->  Y     
90  ->  Z     
91  ->  L Win  ->  prefer not to use     
92  ->  R Win  ->  prefer not to use     
93  ->  select     
96  ->  numpad 0     
97  ->  numpad 1     
98  ->  numpad 2     
99  ->  numpad 3     
100 ->  numpad 4     
101 ->  numpad 5     
102 ->  numpad 6     
103 ->  numpad 7     
104 ->  numpad 8     
105 ->  numpad 9     
106 ->  numpad *     
107 ->  numpad +     
109 ->  numpad -     
110 ->  numpad .     
111 ->  numpad /     
112 ->  F1     
113 ->  F2  ->  used to open FPS window     
114 ->  F3  ->  prefer not to use     
115 ->  F4  ->  prefer not to use     
116 ->  F5  ->  prefer not to use     
117 ->  F6     
118 ->  F7     
119 ->  F8     
120 ->  F9     
121 ->  F10     
122 ->  F11     
123 ->  F12  ->  prefer not to use     
144 ->  num lock  ->  prefer not to use     
145 ->  scroll lock  ->  prefer not to use     
186 ->  ;     
187 ->  =     
188 ->  ,     
189 ->  -     
190 ->  .     
191 ->  /     
192 ->  `     
219 ->  [     
220 ->  \     
221 ->  ]     
222 ->  '     

## Ⅲ.动态效果核心

   我的其他插件可能也有动态效果

##  Ⅳ.SAT算法核心

   我的其他插件需要的SAT算法

## Ⅵ.滤镜核心

   我的其他插件需要的滤镜库。   
   为了保证不与其他插件冲突，我使用了与Tsukimi写的'FilterControllerMZ.js'一样版本的PIXI的滤镜库。
