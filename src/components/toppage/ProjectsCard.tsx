import React from 'react'
import Image from 'next/image'

// css import
import styles from './styles/ProjectsCard.module.scss'

// props type
type Props = {
  id: number
  imgLink: string
  cardTitle: string
  projectsTags: number
}

const ProjectsCard = ({ id, imgLink, cardTitle, projectsTags }: Props) => {
  return (
    <div className={styles.card} key={id}>
      <Image
        src={imgLink}
        width={400}
        height={350}
        quality={100}
        priority={true}
        alt="recentProjectsCardImg"
        className={styles.cardImg}
      />
      <p className={styles.cardTitle}>{cardTitle}</p>
      <div className={styles.tagsFlexBox}>{projectsTags}</div>
    </div>
  )
}

export default ProjectsCard
