import { Meta, StoryObj } from '@storybook/react';

import ContactBtn from '../ContactBtn';

const meta: Meta = {
  title: 'Components/Atoms/ContactBtn',
  component: ContactBtn,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'id',
      control: {
        type: 'number',
      },
    },
    link: {
      description: 'link',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type ContactBtn = StoryObj<typeof ContactBtn>;

export const Default: ContactBtn = {
  args: {
    id: '1',
    link: '/',
  },
};
