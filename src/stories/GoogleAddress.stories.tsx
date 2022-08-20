import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputGoogleAddress from '../components/molecules/InputGoogleAddress';

export default {
  title: 'Molecules/GoogleAddress',
  component: InputGoogleAddress,
} as ComponentMeta<typeof InputGoogleAddress>;

const Template: ComponentStory<typeof InputGoogleAddress> = (args) => <InputGoogleAddress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dispatchAutoComplete: 'Coyuca 1829, san felipe de jesus',
};
