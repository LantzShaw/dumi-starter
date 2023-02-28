# Button

This is an example component.

### Demo

<!-- <code src="./demo/Button.tsx" description="demo 描述">demo 标题</code> -->
<!--
```tsx |  pure
import { Button } from 'litecase-ui';

export default () => <Button />;
``` -->

```tsx
import { Button } from 'litecase-ui';

export default () => {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Button type="primary" rounded>
        rounded
      </Button>
    </>
  );
};
```
