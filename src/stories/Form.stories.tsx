import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "../components/molecules/Form";

export default {
  title: "Molecules/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
