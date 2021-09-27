let AnyType: any
let UnkonwType: unknown

AnyType = UnkonwType
UnkonwType = AnyType
// any既所有类型 但不包含never类型
// unkonwn是对any类型相对比相对安全类型, 因为unkonwn类型在为确定推断类型前无法调用 实例化 访问内部属性

// unkown仅仅能赋值给any或其本身类型