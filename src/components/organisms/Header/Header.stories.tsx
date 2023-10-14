import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta = {
    title: 'organisms/Header',
    component: Header,
    tags: ['autodocs']
}

export default meta

type Header = StoryObj<typeof Header>

export const Primary: Header = {
    args: {
        size: 'medium',
        link: '/',
        altText: 'LogoImg'
    }
}