import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CurpField from "../components/atoms/CurpField";

export default {
  title: "Atoms/CurpField",
  component: CurpField,
} as ComponentMeta<typeof CurpField>;

const Template: ComponentStory<typeof CurpField> = (args) => <CurpField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};