import { Grid } from 'litecase-ui';
import React from 'react';

import './Grid.less';

export default () => {
  return (
    <>
      <Grid gutter={[10, 10]}>
        <Grid.Item span={4}>
          <div className="grid-item">col-1</div>
        </Grid.Item>
        <Grid.Item span={4}>
          <div className="grid-item">col-2</div>
        </Grid.Item>
        <Grid.Item span={4}>
          <div className="grid-item">col-3</div>
        </Grid.Item>
        <Grid.Item span={4}>
          <div className="grid-item">col-4</div>
        </Grid.Item>
        <Grid.Item span={4}>
          <div className="grid-item">col-5</div>
        </Grid.Item>
        <Grid.Item span={4}>
          <div className="grid-item">col-6</div>
        </Grid.Item>

        <Grid.Item span={6}>
          <div className="grid-item">col-6</div>
        </Grid.Item>
        <Grid.Item span={6}>
          <div className="grid-item">col-6</div>
        </Grid.Item>
        <Grid.Item span={6}>
          <div className="grid-item">col-6</div>
        </Grid.Item>
        <Grid.Item span={6}>
          <div className="grid-item">col-6</div>
        </Grid.Item>

        <Grid.Item span={8}>
          <div className="grid-item">col-8</div>
        </Grid.Item>
        <Grid.Item span={8}>
          <div className="grid-item">col-8</div>
        </Grid.Item>
        <Grid.Item span={8}>
          <div className="grid-item">col-8</div>
        </Grid.Item>

        <Grid.Item span={12}>
          <div className="grid-item">col-12</div>
        </Grid.Item>

        <Grid.Item span={12}>
          <div className="grid-item">col-12</div>
        </Grid.Item>

        <Grid.Item span={24}>
          <div className="grid-item">col-24</div>
        </Grid.Item>

        <Grid.Item span={12} order={2}>
          <div className="grid-item">col-12 order 2</div>
        </Grid.Item>

        <Grid.Item span={12}>
          <div className="grid-item">col-12 order 0</div>
        </Grid.Item>
      </Grid>
    </>
  );
};
