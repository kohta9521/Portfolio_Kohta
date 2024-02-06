import { Meta, StoryObj } from '@storybook/react';

import ViewMoreBtn from '../ViewMoreBtn';

const meta: Meta = {
  title: 'Components/Atoms/ViewMoreBtn',
  component: ViewMoreBtn,
  tags: ['autodocs'],
};

export default meta;

type ViewMoreBtn = StoryObj<typeof ViewMoreBtn>;

export const Default: ViewMoreBtn = {
  args: {
    id: 1,
    text: 'View More',
    color: 'white',
    link: '/',
  },
};
