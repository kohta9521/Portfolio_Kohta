import React from 'react';

// scss import
import styles from './ReactNative.module.scss';

// components import
import CommonLayout from '../../../../components/templates/CommonLayout';
import SectionTitle from '../../../../components/molecules/SectionTitle';

// components import

const Reactnative = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='React Native'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Reactnative;
