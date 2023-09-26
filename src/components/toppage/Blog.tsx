import React from 'react'

// css import
import styles from './styles/Blog.module.scss'

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <h1 className={styles.blogTitle}>BLOG</h1>
        <div>
          <p>modal window sample</p>
          <button>Click</button>
          <div id='overlay' className={styles.overlay}>
            <div id='content' className={styles.content}>
              <p>this is modal window</p>
              <p><button>close</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
