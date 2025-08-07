const { fontFamily } = require('tailwindcss/defaultTheme');

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',     // keep this simple if you don't need opacity
        foreground: 'var(--foreground)',
        // Optional advanced version with opacity support:
        // background: withOpacityValue('--background'),
        // foreground: withOpacityValue('--foreground'),
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
