import React, {useContext} from 'react';

export const I18nContext = React.createContext<any>({});

export function useTranslation(key: string, params?: any) {
    const dict = useContext(I18nContext);
    if (params) {
        return dict[key];
    } else {
        return dict[key];
    }
}
