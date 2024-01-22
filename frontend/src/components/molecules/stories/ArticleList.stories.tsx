import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ArticleList from '../ArticleList';

const meta: Meta = {
    title: 'Components/Molecules/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    argTypes: {
        id: {
            description: 'key設定用の値',
            control: {
                type: 'number',
            },
        },
        image: {
            description: '記事のトップ画像 ない場合はサンプル画像を差し込む',
            control: {
                type: 'text',
            },
        },
        title: {
            description: '記事のタイトル',
            control: {
                type: 'text',
            },
        },
        desc: {
            description: '記事の説明',
            control: {
                type: 'text',
            },
        },
        link: {
            description: '記事のリンク',
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type ArticleList = StoryObj<typeof ArticleList>;

export const Default: ArticleList = {
    args: {
        id: 1,
        image: 'https://placehold.jp/150x100.png',
        title: 'ArticleList',
        desc: '記事の説明',
        link: 'https://example.com',
        date: '2021-01-01',
    },
};
export const LongText: ArticleList = {
    args: {
        id: 1,
        image: 'https://placehold.jp/150x100.png',
        title: 'LongTitleLongTitleLongTitleLongTitleLongTitle',
        desc: '記事の説明記事の説明説明説明説明説明説明説明説明説明',
        link: 'https://example.com',
        date: '2021-01-01',
    },
};
