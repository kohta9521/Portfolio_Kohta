import React from 'react';

// scss import
import styles from './Htmlcsssass.module.scss';
import CommonLayout from '../../../../components/templates/CommonLayout';
import SectionTitle from '../../../../components/molecules/SectionTitle';

// components import

const Htmlcsssass = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='Htmlcsssass'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Htmlcsssass;
