import React from 'react';

// scss import
import styles from './Blog.module.scss';

// components import
import CommonLayout from '../../components/templates/CommonLayout';
import SectionTitle from '../../components/molecules/SectionTitle';
import RowBox from '../../components/organisms/RowBox';
import QiitaArticles from './QiitaArticles';

const Blog = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='Blogについて'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
            <RowBox id={2}>
                <QiitaArticles />
            </RowBox>
        </CommonLayout>
    );
};

export default Blog;
