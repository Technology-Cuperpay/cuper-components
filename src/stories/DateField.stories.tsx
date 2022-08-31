import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DateField from "../components/atoms/DateField";

export default {
  title: "Atoms/DateField",
  component: DateField,
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => <DateField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: "",
};