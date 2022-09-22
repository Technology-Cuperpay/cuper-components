import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TermsModal from "../components/molecules/TermsModal";

export default {
  title: "Molecules/TermsModal",
  component: TermsModal,
} as ComponentMeta<typeof TermsModal>;

const Template: ComponentStory<typeof TermsModal> = (args) => <TermsModal/>;

export const Primary = Template.bind({});
Primary.args = {
};
