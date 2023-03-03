# Flex

This is an example of `Flex` component.

### Usage

```jsx | pure
import { Flex } from 'litecase-ui';
```

### Example

```tsx
import { Flex } from 'litecase-ui';

export default () => {
  return (
    <>
      <Flex justify="around">
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

### API

|   Props   |     Description      |                          Type                           | Default  |
| :-------: | :------------------: | :-----------------------------------------------------: | :------: |
| direction |    flex direction    | `row` \| `row-reverse` \| `column` \| `column-reverse`  | `column` |
|  justify  | flex justify content |  `start` \| `center` \| `end` \| `around` \| `between`  | `start`  |
|   align   |   flex align items   | `start` \| `center` \| `end` \| `baseline` \| `stretch` | `start`  |
|  gutter   |       flex gap       |             `number` \| `[number, number]`              | `[0, 0]` |
