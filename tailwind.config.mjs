import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      full: '9999px'
    },
    fontSize: {
      'xxxs-mobile': [
        '10px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      xxxs: [
        '14px',
        { lineHeight: '1', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'xxs-mobile': [
        '16px',
        { lineHeight: '1.7', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      xxs: [
        '20px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'xs-mobile': [
        '20px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      xs: [
        '24px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      's-mobile': [
        '24px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      s: [
        '28px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'm-mobile': [
        '28px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      m: [
        '32px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'l-mobile': [
        '32px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      l: [
        '36px',
        { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      xl: [
        '45px',
        { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      xxl: [
        '57px',
        { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'base-l': [
        '16px',
        { lineHeight: '1.7', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'base-m': [
        '14px',
        { lineHeight: '1.7', letterSpacing: '0.04em', fontWeight: '400' }
      ],
      'label-l': [
        '14px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      'label-m': [
        '12px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '500' }
      ],
      'sup-l': [
        '12px',
        { lineHeight: '1.7', letterSpacing: '0.02em', fontWeight: '400' }
      ],
      'sup-m': [
        '10px',
        { lineHeight: '1.7', letterSpacing: '0.02em', fontWeight: '400' }
      ],
      button: [
        '16px',
        { lineHeight: '1.5', letterSpacing: '0.04em', fontWeight: '700' }
      ]
    },
    letterSpacing: {
      s: '0.02em',
      m: '0.04em'
    },
    lineHeight: {
      s: '1.4',
      m: '1.5',
      l: '1.7'
    },

    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        'noto-sans-jp': ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans]
      },
      transitionDuration: {
        400: '400ms'
      },
      colors: {
        body: 'rgb(var(--color-bg))',
        'box-bg': 'rgb(var(--color-box))',
        'box-shadow': 'rgb(var(--box-sd))',
        'box-border': 'rgb(var(--box-border))',
        primary: '#2ac3de',
        'heading-1': 'rgb(var(--heading-1))',
        'heading-2': 'rgb(var(--heading-2))',
        'heading-3': 'rgb(var(--heading-3))'
      }
    }
  },
  plugins: []
}
