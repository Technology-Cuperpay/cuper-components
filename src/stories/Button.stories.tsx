import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonMain from "../components/atoms/ButtonMain";

export default {
  title: "Atoms/ButtonMain",
  component: ButtonMain,
} as ComponentMeta<typeof ButtonMain>;

const Template: ComponentStory<typeof ButtonMain> = (args) => <ButtonMain {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Soy un botón primario",
  loading: false,
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Soy un botón secundario",
  variant: "outlined",
  color: "primary",
  loading: false,
  disabled: false
};