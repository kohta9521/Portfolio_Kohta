import { Meta, StoryObj } from '@storybook/react';

import HeaderListBox from '../HeaderListBox';

const meta: Meta = {
  title: 'Components/Molecules/HeaderListBox',
  component: HeaderListBox,
  tags: ['autodocs'],
  argTypes: {
    childred: {
      description: '小要素のList componentが入る',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type HeaderListBox = StoryObj<typeof HeaderListBox>;

export const Default: HeaderListBox = {
  args: {
    children: 'About',
  },
};
