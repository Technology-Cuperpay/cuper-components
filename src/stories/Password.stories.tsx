import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Password from '../components/atoms/Password';

export default {
  title: 'Atoms/Password',
  component: Password,
} as ComponentMeta<typeof Password>;

const Template: ComponentStory<typeof Password> = (args) => <Password {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  security: ' /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/'
};
