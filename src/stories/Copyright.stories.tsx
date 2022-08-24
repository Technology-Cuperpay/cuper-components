import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Copyright from "../components/organisms/Copyright";

export default {
  title: "Organisms/Copyright",
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = (args) => <Copyright/>;

export const Primary = Template.bind({});
Primary.args = {
};
