import React, {Context, createContext, ReactNode, useContext} from 'react';

import appTheme, {ITheme} from '../theme/theme';

const ThemeContext: Context<{theme: ITheme}> = createContext({
  theme: appTheme,
});

interface IThemeHook {
  children: ReactNode;
  theme?: ITheme;
}

const ThemeProvider = ({children, theme = appTheme}: IThemeHook) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): ITheme => {
  const {theme} = useContext(ThemeContext);

  return theme;
};

export {ThemeProvider, useTheme};
