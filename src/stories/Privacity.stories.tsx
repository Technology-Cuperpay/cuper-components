import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Privacity from "../components/organisms/Privacity";

export default {
  title: "Organisms/Privacity",
  component: Privacity,
} as ComponentMeta<typeof Privacity>;

const Template: ComponentStory<typeof Privacity> = (args) => <Privacity/>;

export const Primary = Template.bind({});
Primary.args = {
};
