import * as React from 'react';
import {MainLayout} from '../layouts/main';

import { withTranslation } from '../i18n';
import {Component} from 'react';
//
// const App = ({ t }) => <MainLayout>
//     <div>asdasd {t('test')}</div>
// </MainLayout>;

class App extends Component<any> {
    public render() {
        console.log(this.props.t('asdada'));
        return (<MainLayout>
            <div>asdasd {this.props.t('test')}</div>
        </MainLayout>);
    }
}

export default withTranslation('common')(App);
// export default App;
