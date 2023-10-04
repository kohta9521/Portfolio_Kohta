import React from 'react'

// css import
import styles from './styles/NewBlog.module.scss'

// components import
import SectionTitle from '../common/SectionTitle'
import NewBlogCard from './NewBlogCard'

const NewBlog = () => {
  return (
    <div className={styles.newBlog}>
      <div className={styles.container}>
        <SectionTitle key={3} id="#article" text="ARTICLES" />
        <div className={styles.articlesFlexArea}>
          <NewBlogCard
            id={0}
            imgLink="./images/sampleImg1.png"
            title="npxとnpmの違い"
            date="2023/10/04"
          />
        </div>
      </div>
    </div>
  )
}

export default NewBlog
