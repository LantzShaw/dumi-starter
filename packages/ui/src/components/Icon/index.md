# Icon

This is an example of `Icon` component.

### Example

```tsx
/**
 * inline: true
 */
// import ConfigProvider from '@/config-provider';
import { Fragment } from 'react';

import { usePrefersColor } from 'dumi';

import './styles/index.less';

import * as Icons from '@litecase-ui/icons';

import { Flex, Space } from 'litecase-ui';

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
};

const baseIocns = Object.keys(Icons).map((icon) => {
  return { name: icon, component: Icons[icon] };
});

export default () => {
  const [
    // 当前生效的主题色，dark or light
    color,
    // 当前的偏好主题色，dark or light or auto
    prefersColor,
    // 设置偏好主题色，如果设置为 auto，则 color 的值会根据系统设置自动改变
    setPrefersColor,
  ] = usePrefersColor();

  const copyHandler = (name: string) => {
    const element = `<${name} />`;

    copyToClipboard(element);

    alert(element);
  };

  const classes =
    prefersColor === 'light' ? 'icon-card--light' : 'icon-card--dark';

  return (
    <>
      <Space gap={[12, 12]} style={{ paddingBottom: '16px' }}>
        {baseIocns.map((item, index) => {
          return (
            <Fragment key={index}>
              <Flex
                className={['icon-card', classes]}
                direction="column"
                justify="around"
                align="center"
                onClick={() => copyHandler(item.name)}
              >
                <Flex.Item>
                  <item.component />
                </Flex.Item>
                <Flex.Item>{item.name}</Flex.Item>
              </Flex>
            </Fragment>
          );
        })}
      </Space>
    </>
  );
};
```

### Usage

```tsx
import {
  PlusCircle,
  PlusCircleDotted,
  PlusCircleFill,
} from '@litecase-ui/icons';

import { Space } from 'litecase-ui';

export default () => {
  return (
    <>
      <Space gap={[0, 12]}>
        <PlusCircle />
        <PlusCircleFill />
        <PlusCircleDotted />
        <PlusCircleDotted />
      </Space>
    </>
  );
};
```

### Rotate Icon

```tsx
/**
 * inline: true
 */
import './styles/index.less';

import { ArrowRepeat, Gear } from '@litecase-ui/icons';
import { Space } from 'litecase-ui';

export default () => {
  const styles = { height: '80px' };

  return (
    <Space className={'icon-container'} gap={[0, 12]}>
      <ArrowRepeat spin={true} />
      <Gear spin={true} />
    </Space>
  );
};
```
