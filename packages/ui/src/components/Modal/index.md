# Modal

This is an example of `Modal` component.

### Usage

```jsx | pure
import { Modal } from 'litecase-ui';
```

### Example

```tsx
import { useState } from 'react';

import { Button, Modal } from 'litecase-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);

  const clickHandler = () => {
    setVisiable((prevState) => {
      return !prevState;
    });
  };

  const closeHandler = (status) => {
    setVisiable(status);
  };

  return (
    <>
      <Button type="primary" onClick={clickHandler}>
        Open Modal
      </Button>

      <Modal visiable={visiable} onClose={closeHandler}>
        <div>Title</div>
        <div>content</div>
        <footer>
          <Button>取消</Button>
          <Button type="primary">确定</Button>
        </footer>
      </Modal>
    </>
  );
};
```

### API

|  Props   |     Description      |   Type    | Default |
| :------: | :------------------: | :-------: | :-----: |
| visiable | is show notification | `boolean` | `false` |

### Event

| Event Name |   Description   |        Type         | Default |
| :--------: | :-------------: | :-----------------: | :-----: |
|  onClose   | close the modal | `(boolean) => void` |   `-`   |
