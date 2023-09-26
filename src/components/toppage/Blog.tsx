'use client'
import React from 'react'

// css import
import styles from './styles/Blog.module.scss'
import ModalCard from '../common/ModalCard'
// import Modal from './Modal'

const Blog = () => {
  // const [show, setShow] = useState(false)

  // const openModal = () => {
  //   setShow(true)
  // }

  return (
    <>
      <div className={styles.blog}>
        <div className={styles.container}>
          <h1>===================================</h1>
          this areas modal is new modal child components
          <ModalCard
            key={1}
            imgLink="/images/sampleImg1.png"
            articleTitle="New Company Site!"
            articleDate="2023-09-26"
            tagsNumber={1}
          />
          <h1>===================================</h1>
          <h1 className={styles.blogTitle}>BLOG</h1>
          {/* <div>
          <p>modal window sample</p>
          <button onClick={openModal}>Click</button>
          <Modal show={show} setShow={setShow} />
        </div> */}
        </div>
      </div>
    </>
  )
}

// function Modal(props: { show: boolean; setShow: any }) {
//   const closeModal = () => {
//     props.setShow(false)
//   }
//   if (props.show) {
//     return (
//       <div id="overlay" className={styles.overlay}>
//         <div id="content" className={styles.content}>
//           <p>this is modal window</p>
//           <button onClick={closeModal}>Close</button>
//         </div>
//       </div>
//     )
//   } else {
//     return null
//   }
// }

export default Blog
