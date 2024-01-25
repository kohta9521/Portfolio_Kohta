import React from 'react';
import Image from 'next/image';

// scss import
import styles from '../styles/Page.module.scss';

// components import
import CommonLayout from '../components/templates/CommonLayout';
import SectionTitle from '../components/molecules/SectionTitle';
import RowBox from '../components/organisms/RowBox';
import LargeCard from '../components/organisms/cards/LargeCard';
import ViewMoreButton from '../components/atoms/ViewMoreButton';
import CardTitle from '../components/atoms/CardTitle';
import { Row } from 'antd';
import BasicCard from '../components/organisms/cards/BasicCard';
import NameText from '../components/atoms/NameText';

export default function Home() {
    return (
        <CommonLayout id={1}>
            <SectionTitle
                id={1}
                title='Welcome to my Portfolio Site!!'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
            <RowBox id={1}>
                <LargeCard id={1}>
                    <div className={styles.titleFlex}>
                        <CardTitle id={1} title='このサイトについて' />
                        <ViewMoreButton id={1} text='View More' link='/about' />
                    </div>
                    <div className={styles.contentFlex}>
                        <div>
                            <NameText />
                            <p className={styles.contentText}>
                                このサイトでは私、kohtaのエンジニアとして、またそれ以外の活動をご紹介しています。
                                エンジニアとしての日々の活動や普段使用している言語・ツール。DJ、動画編集、コミュニティ運営など多岐にわたる活動をしています。
                                是非このサイトで楽しい時間を過ごしていただければ幸いです。
                            </p>
                        </div>

                        <Image
                            className={styles.contentImage}
                            src='/images/samplePerson.jpeg'
                            width={250}
                            height={250}
                            alt='kohta-profile-image'
                        />
                    </div>
                </LargeCard>
            </RowBox>
            <RowBox id={2}>
                <BasicCard id={1}>
                    <CardTitle id={2} title='ブログ記事' />
                </BasicCard>
                <BasicCard id={1}>
                    <CardTitle id={3} title='Qiita記事' />
                </BasicCard>
            </RowBox>
        </CommonLayout>
    );
}
