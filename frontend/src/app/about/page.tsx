import React from 'react';

// scss import
import styles from './About.module.scss';

// components import
import CommonLayout from '../../components/templates/CommonLayout';
import SectionTitle from '../../components/molecules/SectionTitle';
import DefaultCard from '../../components/organisms/cards/DefaultCard';

const About = () => {
    return (
        <CommonLayout id={1}>
            <SectionTitle
                id={1}
                title='kohtaについて'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default About;
