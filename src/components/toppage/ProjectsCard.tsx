import React from 'react'
import Link from 'next/link'

// css import
import styles from './styles/ProjectsCard.module.scss'

// components impor
import ProjectTags from './ProjectTags'

// props type
type Props = {
  id: number
  imgLink: string
  cardTitle: string
  projectsTags: number
}

const ProjectsCard = ({ id, imgLink, cardTitle, projectsTags }: Props) => {
  return (
    <Link href={`/projects/${id}`} className={styles.card} key={id}>
      <img
        src={imgLink}
        width={300}
        height={280}
        alt="recentProjectsCardImg"
        className={styles.cardImg}
      />
      <p className={styles.cardTitle}>{cardTitle}</p>
      <div className={styles.tagsFlexBox}>
        <ProjectTags tagNumber={projectsTags} />
      </div>
    </Link>
  )
}

export default ProjectsCard
