import App from 'next/app';
import React, { useEffect, useState } from 'react';
import { grommet, Grommet, extendDefaultTheme, Grid, Box} from 'grommet';
import { deepMerge } from 'grommet/utils';
import Header from '../layout/header';
import { I18nContext } from '../lib/hooks';
import { setLanguageAsync } from '../lib/i18n';
import Sidebar from '../layout/Sidebar';

extendDefaultTheme(
  deepMerge(grommet, {
    global: {
      colors: {
        'light-3': 'red',
      },
    },
  }),
);

function MyApp({ Component, pageProps, dictionary, language }) {
  const [lang, updateLang] = useState(language);
  const [dict, updateDict] = useState(dictionary);
  const items = [
    { label: 'search', href: '/' },
    { label: 'addWord', href: '/words/new' },
    { label: 'addAffix', href: '/affixes/new' },
  ];

  // If lang changed, re-request the dictionary
  useEffect(() => {
    setLanguageAsync(lang).then((res: any) => {
      updateDict(res);
    });
  }, [lang]);
  return (
    <I18nContext.Provider value={dict}>
      <Grommet theme={grommet} plain full>
        <Grid
          fill
          rows={['auto', 'flex']}
          columns={['auto', 'flex']}
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'sidebar', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}>
          <Header menu={items}/>
          <Sidebar menu={items}/>
          <Box gridArea="main">
            <Component {...pageProps} />
          </Box>
        </Grid>
      </Grommet>
    </I18nContext.Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const language = 'nsl';
  let pageProps = {};
  const dictionary = await setLanguageAsync(language);
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, dictionary, language };
};

export default MyApp;
