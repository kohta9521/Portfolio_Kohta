import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardTitle from '../CardTitle';

const meta: Meta = {
    title: 'Components/Atoms/CardTitle',
    component: CardTitle,
    tags: ['autodocs'],
    argTypes: {
        id: {
            description: 'keyに設定する用の値',
            control: {
                type: 'number',
            },
        },
        title: {
            description: 'カードタイトル',
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type CardTitle = StoryObj<typeof CardTitle>;

export const Default: CardTitle = {
    args: {
        id: 1,
        title: 'このサイトについて',
    },
};
