const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif, system-ui',
      serif: 'Inter, sans-serif, system-ui',
    },
    fontSize: {
      sm: '.875rem',
      base: '1.3rem',
      xl: '1.55rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    daisyui: {
      theme: [
        {
          fantasy: {
            primary: '#0000ff',
            'primary-content': '#ffffff',
            seceondary: '#F6F6F6',
            neutral: '#E8E8E8',
          },
        },
      ],
      based: true,
      styled: true,
      utils: true,
      prefix: '',
      logs: true,
      themeRoot: 'root',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
