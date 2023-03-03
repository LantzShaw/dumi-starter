# Button

This is an example of `Button` component.

### Usage

```jsx | pure
import { Button } from 'litecase-ui';
```

<!-- <code src="./demo/Button.tsx" inline="true" description="demo 描述">demo 标题</code> -->

### Type

<!--
```tsx |  pure
import { Button } from 'litecase-ui';

export default () => <Button />;
``` -->

```tsx
import { Button, Flex } from 'litecase-ui';

export default () => {
  return (
    <>
      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default">Default</Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary">Primary</Button>
        </Flex.Item>

        <Flex.Item>
          <Button type="secondary">Secondary</Button>
        </Flex.Item>

        <Flex.Item>
          <Button type="info">Information</Button>
        </Flex.Item>

        <Flex.Item>
          <Button type="success">Success</Button>
        </Flex.Item>

        <Flex.Item>
          <Button type="warning">Warning</Button>
        </Flex.Item>

        <Flex.Item>
          <Button type="danger">Danger</Button>
        </Flex.Item>
      </Flex>

      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" rounded>
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" rounded>
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" rounded>
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" rounded>
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" rounded>
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" rounded>
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" rounded>
            Danger
          </Button>
        </Flex.Item>
      </Flex>

      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" rounded disabled>
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" rounded disabled>
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" rounded disabled>
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" rounded disabled>
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" rounded disabled>
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" rounded disabled>
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" rounded disabled>
            Danger
          </Button>
        </Flex.Item>
      </Flex>

      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" disabled>
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" disabled>
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" disabled>
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" disabled>
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" disabled>
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" disabled>
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" disabled>
            Danger
          </Button>
        </Flex.Item>
      </Flex>
    </>
  );
};
```

### Size

```tsx
import { Button, Flex } from 'litecase-ui';

export default () => {
  return (
    <>
      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" size="mini">
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" size="mini">
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" size="mini">
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" size="mini">
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" size="mini">
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" size="mini">
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" size="mini">
            Danger
          </Button>
        </Flex.Item>
      </Flex>

      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" size="small">
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" size="small">
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" size="small">
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" size="small">
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" size="small">
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" size="small">
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" size="small">
            Danger
          </Button>
        </Flex.Item>
      </Flex>

      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" size="medium">
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" size="medium">
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" size="medium">
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" size="medium">
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" size="medium">
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" size="medium">
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" size="medium">
            Danger
          </Button>
        </Flex.Item>
      </Flex>

      <Flex justify="start" align="center" direction="row" gutter={[6, 12]}>
        <Flex.Item>
          <Button type="default" size="large">
            Default
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="primary" size="large">
            Primary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="secondary" size="large">
            Secondary
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="info" size="large">
            Information
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="success" size="large">
            Success
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="warning" size="large">
            Warning
          </Button>
        </Flex.Item>
        <Flex.Item>
          <Button type="danger" size="large">
            Danger
          </Button>
        </Flex.Item>
      </Flex>
    </>
  );
};
```

### API

|   Props   |     Description      |                                    Type                                    |  Default  |
| :-------: | :------------------: | :------------------------------------------------------------------------: | :-------: |
|   type    |     button types     | `default \| primary  \| secondary \| info \| success \| warning \| danger` | `default` |
|   size    |     button size      |                     `mini \| small \| medium \| large`                     | `medium`  |
|  rounded  |    rounded button    |                                 `boolean`                                  |  `false`  |
| disabled  |  disable the button  |                                 `boolean`                                  |  `false`  |
|   style   | button iniline style |                              `CSSProperties`                               |     -     |
| className |  button class name   |                              `ReactNodeClass`                              |     -     |

### Event

| Event Name |    Description     |             Type              | Default |
| :--------: | :----------------: | :---------------------------: | :-----: |
|  onClick   | button click event | `(event: MouseEvent) => void` |    -    |
