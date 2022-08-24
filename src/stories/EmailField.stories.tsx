import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmailField from "../components/atoms/EmailField";

export default {
  title: "Atoms/EmailField",
  component: EmailField,
} as ComponentMeta<typeof EmailField>;

const Template: ComponentStory<typeof EmailField> = (args) => <EmailField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: ''
};