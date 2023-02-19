import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Grid, Cell } from './Grid';

export default {
  title: 'VictorLam/Grid',
  component: Grid,
  argTypes: {}
} as Meta<typeof Grid>;


const Template: Story<typeof Grid> = (args) => <Grid/>;

export const Normal = Template.bind({});

