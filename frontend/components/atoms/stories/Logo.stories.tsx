import { Meta, StoryObj } from '@storybook/react';

import Logo from '../Logo';

const meta: Meta = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: 'number',
      },
    },
    link: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['black', 'white', 'blue'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type Logo = StoryObj<typeof Logo>;

export const Default: Logo = {
  args: {
    id: 1,
    link: '/',
    color: 'black',
    size: 'medium',
  },
};
