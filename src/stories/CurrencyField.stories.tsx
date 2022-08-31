import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CurrencyField from "../components/atoms/CurrencyField";

export default {
  title: "Atoms/CurrencyField",
  component: CurrencyField,
} as ComponentMeta<typeof CurrencyField>;

const Template: ComponentStory<typeof CurrencyField> = (args) => <CurrencyField {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Monto de la compra",
  
};