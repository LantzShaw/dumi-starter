# Flex 不觉

This is an example of `Flex` component.

### 案例

```tsx
import { Flex } from 'litecase-ui';

export default () => {
  return (
    <>
      <Flex justify="around" className="btn name">
        <Flex.Item>item1</Flex.Item>
        <Flex.Item>item2</Flex.Item>
        <Flex.Item>item3</Flex.Item>
        <Flex.Item>item4</Flex.Item>
        <Flex.Item>item5</Flex.Item>
      </Flex>
    </>
  );
};
```
