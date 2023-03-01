# record

```sh
TS 中的感叹号，称作『非空断言』操作符，Non-null assertion operator
中文理解：

x! 将从 x 值对应的类型集合中排除 null 和 undefined 的类型。比如 x 可能是 string | undefind，则 x! 类型缩窄为 string。
在类型检测器没法正确推断类型情况下，告知编译器此值不可能为空值（null 或 undefined）

# 链接：https://juejin.cn/post/7076293418988601375
```
