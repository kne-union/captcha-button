
# captcha-button


### 描述

验证码按钮组件，主要用于处理需要倒计时功能的验证码发送场景


### 安装

```shell
npm i --save @kne/captcha-button
```


### 概述

Captcha Button 是一个基于 React 的验证码按钮组件，主要用于处理需要倒计时功能的验证码发送场景。组件内置了倒计时逻辑和状态管理，可轻松集成到表单验证流程中。

### 核心功能

1. **倒计时功能**：点击后显示倒计时（如"60s后重试"）
2. **状态禁用**：在倒计时期间和验证未通过时禁用按钮
3. **异步操作支持**：支持异步点击事件处理
4. **自定义配置**：可配置倒计时时长和验证状态

### 技术特性

- 使用 React Hooks 管理状态
- 采用 ECMAScript 6+ 语法
- 支持通过 props 进行自定义配置

### 注意事项

1. 需要配合表单验证库`@kne/react-form`使用
2. onClick 回调返回 `false` 将阻止倒计时启动
3. 确保 duration 设置为合理的正整数

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _CaptchaButton(@kne/current-lib_captcha-button)[import * as _CaptchaButton from "@kne/captcha-button"],(@kne/react-form-antd/dist/index.css),antd(antd),_ReactFormAntd(@kne/react-form-antd)

```jsx
const { default: CaptchaButton } = _CaptchaButton;
const { default: Form, Input } = _ReactFormAntd;
const { Flex } = antd;

const BaseExample = () => {
  return (
    <Form>
      <Flex gap={8}>
        <Input name="email" label="邮箱" rule="REQ EMAIL" realtime />
        <CaptchaButton target={{ name: 'email' }}>发送</CaptchaButton>
      </Flex>
    </Form>
  );
};

render(<BaseExample />);

```


### API

| 属性          | 类型       | 必填 | 默认值   | 说明                    |
|-------------|----------|----|-------|-----------------------|
| duration    | number   | 是  | -     | 倒计时持续时间(秒)            |
| onClick     | function | 否  | -     | 点击回调函数，可返回Promise     |
| targetField | string   | 否  | -     | 关联的表单字段名              |
| disabled    | boolean  | 否  | false | 手动控制禁用状态              |
| ...props    | object   | 否  | -     | 其他传递给LoadingButton的属性 |
