import { Meta, StoryObj } from '@storybook/react';

import SectionTitle from '../SectionTitle';

const meta: Meta = {
  title: 'Components/Atoms/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
};

export default meta;

type SectionTitle = StoryObj<typeof SectionTitle>;

export const Default: SectionTitle = {
  args: {
    id: 1,
    text: 'Section Title',
    idName: 'section-title',
    color: 'white',
    size: 'medium',
  },
};
