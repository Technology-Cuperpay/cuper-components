import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "../components/molecules/progressBar";

export default {
  title: "Molecules/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  activeStep:1
};
