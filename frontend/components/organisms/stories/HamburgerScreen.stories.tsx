import { Meta, StoryObj } from '@storybook/react';

import HamburgerScreen from '../HamburgerScreen';

const meta: Meta = {
  title: 'Components/Organisms/HamburgerScreen',
  component: HamburgerScreen,
  tags: ['autodocs'],
};

export default meta;

type HamburgerScreen = StoryObj<typeof HamburgerScreen>;

export const Default: HamburgerScreen = {
  args: {
    isOpen: true,
  },
};
