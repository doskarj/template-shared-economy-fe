
import '../src/index.css';
import '../src/assets/css/variables.css';
import '../src/assets/css/utils.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}