# QJ-Core

ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ
 This plugin container the follow function.
 Ⅰ.Simple js script
 Ⅱ.Add Input
 Ⅲ.Dramatic effect core
 Ⅳ.SAT

## Ⅰ.Simple js script

 This plugin offer the easy-to-use js command below:
 The params in code [] are the Optional parameters.

 1.open/close the self switch

   QJ.ss(eventId,selfSwitchName,value[,mapId]);

   eventId: 0 refer to the current eventId.
   selfSwitchName: 'A','B','C' or 'D'.
   value: true/1 or false/0.
   mapId: the map id.Don`t write or write 0 represents the current map.

## Ⅱ.Add Input

  Press    : Input.isPressed(keyName)
  Trigger  : Input.isTriggered(keyName)
  Repeat  : Input.isRepeated(keyName)
  LongPress: Input.isLongPressed(keyName) 

  Note:
  1.The js don`t differentiate the left and right shift/ctrl/alt.
  2.prefer not to use print screen and Num Lock.

 key code | key name | note

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

## Ⅲ.Dramatic effect core
   The function of making dramatic effect can be used in my other plugin.

##  Ⅳ.SAT
   The SAT used in my other plugin.

## Ⅵ.Filter

   The filter effect used in my other plugin.   
   In order to be compatible with other plugins, I choose the PIXI Filter in the version '3.1.0' which is the same as the plugin 'FilterControllerMZ.js' by Tsukimi.
