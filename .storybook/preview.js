import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import '!css-loader!postcss-loader!.././src/Styles/main.scss';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: '#root',
    manual: false
  }
}
