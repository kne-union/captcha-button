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
