import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBar from "../components/organisms/navBar";

export default {
  title: "Organisms/Navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  register: false,
  authorized: true
};
