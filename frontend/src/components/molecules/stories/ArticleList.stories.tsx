import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ArticleList from '../ArticleList';

const meta: Meta = {
    title: 'Components/Molecules/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
};

export default meta;

type ArticleList = StoryObj<typeof ArticleList>;

export const Default: ArticleList = {
    args: {
        id: 1,
        image: 'https://placehold.jp/300x100.png',
        title: 'ArticleList',
        desc: '記事の説明',
        link: 'https://example.com',
        date: '2021-01-01',
    },
};
