import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SplashScreen from "../components/organisms/splash-screen";

export default {
  title: "Organisms/SplashScreen",
  component: SplashScreen,
} as ComponentMeta<typeof SplashScreen>;

const Template: ComponentStory<typeof SplashScreen> = (args) => <SplashScreen {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  title: "¡Gracias por completar tu registro!",
  subtitle: "Estamos procesando tu Información"
};
