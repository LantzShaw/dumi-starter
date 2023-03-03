# Space

This is an example of `Space` component.

### Usage

```jsx | pure
import { Space } from 'litecase-ui';
```

### Example

```tsx
import { Button, Input, Space } from 'litecase-ui';

export default () => {
  return (
    <>
      <Space gap={[0, 12]} align="center">
        <Button type="primary">Button</Button>
        <Input />
        <div>I'm a div</div>
        <span>I'm a span</span>
      </Space>
    </>
  );
};
```

### API

|   Props   |     Description      |                          Type                           |   Default    |
| :-------: | :------------------: | :-----------------------------------------------------: | :----------: |
| direction |   space direction    |               `horizontal` \| `vertical`                | `horizontal` |
|  justify  | flex justify content |  `start` \| `center` \| `end` \| `around` \| `between`  |   `start`    |
|   align   |   flex align items   | `start` \| `center` \| `end` \| `baseline` \| `stretch` |   `start`    |
|    gap    |       flex gap       |                   `[number, number]`                    |   `[0, 0]`   |
