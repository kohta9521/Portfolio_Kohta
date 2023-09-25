import React from 'react'

// css import
import styles from './styles/articles.module.scss'
import Template from '@/components/layouts/Template1'
import TagPageTitle from '@/components/tagspage/TagPageTitle'

const Articles = () => {
  return (
    <Template templateNumber={false}>
      <div className={styles.articles}>
        <TagPageTitle id={0} text="All Articles" />
      </div>
    </Template>
  )
}

export default Articles
