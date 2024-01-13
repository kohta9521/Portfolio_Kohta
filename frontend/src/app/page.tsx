import React from 'react';

// scss import
import styles from '../styles/Page.module.scss';

// components import
import CommonLayout from '../components/templates/CommonLayout';
import SectionTitle from '../components/molecules/SectionTitle';
import RowBox from '../components/organisms/RowBox';
import LargeCard from '../components/organisms/cards/LargeCard';
import ViewMoreButton from '../components/atoms/ViewMoreButton';

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
                        <h1>このサイトについて</h1>
                        <ViewMoreButton id={1} text='View More' link='/about' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat voluptatibus nobis obcaecati vero soluta ut ad
                        fugit hic unde accusantium!
                    </p>
                </LargeCard>
            </RowBox>
            <RowBox id={1}>
                <h1>sample</h1>
            </RowBox>
        </CommonLayout>
    );
}
