import App from 'next/app';
import React, {useEffect, useState} from 'react';
import {grommet, Grommet, extendDefaultTheme} from 'grommet';
import {deepMerge} from 'grommet/utils';
import {Header} from '../layout/header';
import {I18nContext} from '../lib/hooks';
import {setLanguageAsync} from '../lib/i18n';

extendDefaultTheme(
    deepMerge(grommet, {
        global: {
            colors: {
                'light-3': 'red'
            }
        }
    })
);

export default function MyApp({Component, pageProps, dictionary, language}) {
    const [lang, updateLang] = useState(language);
    const [dict, updateDict] = useState(dictionary);

    // If lang changed, re-request the dictionary
    useEffect(() => {
        setLanguageAsync(lang).then((res: any) => {
            updateDict(res);
        });
    }, [lang]);
    return (
        <I18nContext.Provider value={dict}>
            <Grommet theme={grommet} plain>
                <Header/>
                <Component {...pageProps} />
            </Grommet>
        </I18nContext.Provider>
    );
}

MyApp.getInitialProps = async () => {
    const language = 'nsl';
    const dictionary = await setLanguageAsync(language);
    return { dictionary, language };
};
