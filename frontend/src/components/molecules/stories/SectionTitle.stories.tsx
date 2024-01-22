import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '../SectionTitle';

const meta: Meta = {
    title: 'Components/Molecules/SectionTitle',
    component: SectionTitle,
    tags: ['autodocs'],
    argTypes: {
        id: {
            description: 'key設定用の値',
            control: {
                type: 'number',
            },
        },
        title: {
            description: '表示するテキスト',
            control: {
                type: 'text',
            },
        },
        subtitle: {
            description: 'サブタイトル',
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type SectionTitle = StoryObj<typeof SectionTitle>;

export const Default: SectionTitle = {
    args: {
        id: 1,
        title: 'SectionTitle',
        subtitle: 'サブタイトル',
    },
};
