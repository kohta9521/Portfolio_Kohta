import { Meta, StoryObj } from '@storybook/react';

import SectionTitle from '../SectionTitle';

const meta: Meta = {
  title: 'Components/Molecules/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'black'],
      },
    },
  },
};

export default meta;

type SectionTitle = StoryObj<typeof SectionTitle>;

export const Default: SectionTitle = {
  args: {
    id: 1,
    idName: 'news',
    number: '01',
    jaTitle: '最近の仕事',
    enTitle: 'Recent Works',
  },
};
