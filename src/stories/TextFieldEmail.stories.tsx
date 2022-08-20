import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextFieldEmail from "../components/atoms/TextFieldEmail";

export default {
  title: "Atoms/TextFieldEmail",
  component: TextFieldEmail,
} as ComponentMeta<typeof TextFieldEmail>;

const Template: ComponentStory<typeof TextFieldEmail> = () => <TextFieldEmail />;

export const Primary = Template.bind({});
Primary.args = {
};