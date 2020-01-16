import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../i18n';

export interface IError {
    statusCode: number|null;
    // tslint:disable-next-line:ban-types
    t: Function;
}

const Error: any = ({ statusCode, t }) => (
    <p>{statusCode ? t('error-with-status', { statusCode }) : t('error-without-status')}</p>
);

Error.getInitialProps = async ({ res, err }) => {
    let statusCode = null;
    if (res) {
        ({ statusCode } = res);
    } else if (err) {
        ({ statusCode } = err);
    }
    return {
        namespacesRequired: ['common'],
        statusCode,
    };
};

export default withTranslation('common')(Error);
