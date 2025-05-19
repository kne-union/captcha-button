| 属性          | 类型       | 必填 | 默认值   | 说明                    |
|-------------|----------|----|-------|-----------------------|
| duration    | number   | 是  | -     | 倒计时持续时间(秒)            |
| onClick     | function | 否  | -     | 点击回调函数，可返回Promise     |
| targetField | string   | 否  | -     | 关联的表单字段名              |
| disabled    | boolean  | 否  | false | 手动控制禁用状态              |
| ...props    | object   | 否  | -     | 其他传递给LoadingButton的属性 |