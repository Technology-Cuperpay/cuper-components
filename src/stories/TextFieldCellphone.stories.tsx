import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldCellphone from "../components/atoms/TextFieldCellphone";

export default {
  title: "Atoms/TextFieldCellphone",
  component: TextFieldCellphone,
} as ComponentMeta<typeof TextFieldCellphone>;

const Template: ComponentStory<typeof TextFieldCellphone> = () => <TextFieldCellphone />;

export const Primary = Template.bind({});
Primary.args = {
};