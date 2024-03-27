import Button from "../components/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: "primary",
    btnText: "Click me",
    onClick: () => alert("button clicked"),
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    btnText: "Click me",
    onClick: () => alert("button clicked"),
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    btnText: "Click me",
    onClick: () => alert("button clicked"),
  },
};
