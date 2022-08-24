import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldCurrency from "../components/atoms/TextFieldCurrency";

export default {
  title: "Atoms/TextFieldCurrency",
  component: TextFieldCurrency,
} as ComponentMeta<typeof TextFieldCurrency>;

const Template: ComponentStory<typeof TextFieldCurrency> = (args) => <TextFieldCurrency {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Monto de la compra",
  onChange(event) {
      console.log('hola')
  },
};