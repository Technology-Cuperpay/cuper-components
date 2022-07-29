import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Currency } from '../components/atoms/Currency';

export default {
  title: 'Atoms/Currency',
  component: Currency,
} as ComponentMeta<typeof Currency>;

const Template: ComponentStory<typeof Currency> = (args) => <Currency {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  amount: 1000,
  variant: 'h3',
};
