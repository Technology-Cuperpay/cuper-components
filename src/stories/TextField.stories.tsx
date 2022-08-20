import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldText from "../components/atoms/TextField";

export default {
  title: "Atoms/TextField",
  component: TextFieldText,
} as ComponentMeta<typeof TextFieldText>;

const Template: ComponentStory<typeof TextFieldText> = (args) => <TextFieldText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Nombre",
  variant: "outlined",
};