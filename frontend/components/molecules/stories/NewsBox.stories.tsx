import { Meta, StoryObj } from '@storybook/react';

import NewsBox from '../NewsBox';

const meta: Meta = {
  title: 'Components/Molecules/NewsBox',
  component: NewsBox,
  tags: ['autodocs'],
};

export default meta;

type NewsBox = StoryObj<typeof NewsBox>;

export const Default: NewsBox = {
  args: {
    id: 1,
    link: '/',
    image: 'https://source.unsplash.com/random',
    title: 'Title',
    date: '2021-10-10',
    desc: 'Description',
  },
};
