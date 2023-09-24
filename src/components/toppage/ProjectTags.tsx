import React from 'react'
import Link from 'next/link'

// css import
import styles from './styles/ProjectTags.module.scss'

// props type
type Props = {
  tagNumber: number
}

// List type
type List = {
  id: number
  linkUrl: string
  text: string
}

const ProjectTags = ({ tagNumber }: Props) => {
  const TagsList: List[] = [
    {
      id: 1,
      linkUrl: '/tags/works',
      text: 'WORKS',
    },
    {
      id: 2,
      linkUrl: '/tags/products',
      text: 'PRODUCTS',
    },
    {
      id: 3,
      linkUrl: '/tags/events',
      text: 'EVENTS',
    },
    {
      id: 4,
      linkUrl: '/tags/ARTICLES',
      text: 'ARTICLES',
    },
  ]
  return (
    <Link
      key={TagsList[tagNumber].id}
      href={TagsList[tagNumber].linkUrl}
      className={styles.tagsLInk}
    >
      {TagsList[tagNumber].text}
    </Link>
  )
}

export default ProjectTags
