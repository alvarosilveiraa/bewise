const getTheme = async () => {
  return {
    light: {
      colors: {
        background: "white",
        foreground: "black",
        primary: "red",
        secondary: "blue",
      },
    },
    dark: {
      colors: {
        background: "black",
        foreground: "white",
        primary: "red",
        secondary: "blue",
      },
    },
  };
};

export const ThemeStyle = async () => {
  const theme = await getTheme();

  return (
    <style>
      {`:root {
        --color-background: ${theme.light.colors.background};
        --color-foreground: ${theme.light.colors.foreground};
        --color-primary: ${theme.light.colors.primary};
        --color-secondary: ${theme.light.colors.secondary};
      }

      [data-theme='dark'] {
        --color-background: ${theme.dark.colors.background};
        --color-foreground: ${theme.dark.colors.foreground};
        --color-primary: ${theme.dark.colors.primary};
        --color-secondary: ${theme.dark.colors.secondary};
      }`}
    </style>
  );
};
