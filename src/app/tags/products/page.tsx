import React from 'react'

// css import
import styles from './styles/products.module.scss'
import Template from '@/components/layouts/Template1'
import TagPageTitle from '@/components/tagspage/TagPageTitle'

function Products() {
  return (
    <Template templateNumber={false}>
      <div className={styles.products}>
        <TagPageTitle id={0} text="All Products" />
      </div>
    </Template>
  )
}

export default Products
