import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldCellphone from "../components/atoms/CellphoneField";

export default {
  title: "Atoms/TextFieldCellphone",
  component: TextFieldCellphone,
} as ComponentMeta<typeof TextFieldCellphone>;

const Template: ComponentStory<typeof TextFieldCellphone> = (args) => <TextFieldCellphone {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  value: '5523325141',
  helperText: '',
};