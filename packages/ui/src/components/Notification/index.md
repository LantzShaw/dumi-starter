# Notification

This is an example of `Notification` component.

### Usage

```jsx | pure
import { Notification } from 'litecase-ui';
```

### Example

```tsx
import { useState } from 'react';

import { Button, Notification } from 'litecase-ui';

export default () => {
  const [visiable, setVisiable] = useState(false);

  const clickHandler = () => {
    setVisiable((prevState) => {
      return !prevState;
    });
  };

  const closeHandler = (show) => {
    setVisiable(show);
  };

  return (
    <>
      <Button type="primary" onClick={clickHandler} rounded>
        Toggle Notification
      </Button>

      <Notification visiable={visiable} onClose={closeHandler}>
        bottomRight
      </Notification>
    </>
  );
};
```

### API

|  Props   |         Description          |                                                                  Type                                                                  |    Default    |
| :------: | :--------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :-----------: |
| visiable |     is show notification     |                                                               `boolean`                                                                |    `false`    |
| position | the position of notification | `bottomLeft` \| `bottomRight` \| `topLeft` \| `topRight` \| `middle` \| `middleLeft` \| `middleRight` \| `middleTop` \| `middleBottom` | `bottomRight` |

### Event

| Event Name |      Description       |        Type         | Default |
| :--------: | :--------------------: | :-----------------: | :-----: |
|  onClose   | close the notification | `(boolean) => void` |   `-`   |
