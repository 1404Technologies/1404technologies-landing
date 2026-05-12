/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ─── Brand Design Tokens ──────────────────────────────────────────────
        // All brand colors live here. To rebrand, only edit this block.
        //
        // Dark backgrounds (navy scale)
        //   bg-brand          bg-brand-dark        bg-brand-mid         bg-brand-slate
        //
        // Text on light backgrounds
        //   text-brand        text-brand-muted      text-brand-steel
        //
        // Text on dark backgrounds
        //   text-brand-on-dark   text-brand-on-dark-2
        //
        // Interactive / CTA
        //   bg-brand-accent   hover:bg-brand-accent-hover   ring-brand-accent
        //
        // Accents & tags
        //   text-brand-tag    bg-brand-tag
        //
        // Surfaces & borders
        //   bg-brand-surface  bg-brand-surface-2   border-brand-border  border-brand-border-2
        // ─────────────────────────────────────────────────────────────────────
        brand: {
          DEFAULT:        '#1E2A5E', // primary navy — main dark bg, body text
          dark:           '#162050', // deepest navy — section bg, gradients
          mid:            '#253470', // lighter navy — gradient stops
          slate:          '#354E7A', // mid-tone — subtle dark elements
          steel:          '#7BAAC8', // light blue — decorative / icon strokes
          muted:          '#526A96', // muted text — subtitles on light bg
          accent:         '#2563EB', // CTA / interactive blue
          'accent-hover': '#1D4ED8', // accent hover state
          'accent-ring':  '#3B82F6', // focus ring
          tag:            '#2DD4BF', // section tag text (teal)
          'tag-bg':       '#0D9488', // section tag background
          surface:        '#F5F8FF', // page background
          'surface-2':    '#F9FBFF', // alternate light surface
          border:         '#DBEAFE', // subtle borders (blue-100 equiv)
          'border-2':     '#BFDBFE', // slightly stronger borders (blue-200 equiv)
          'on-dark':      '#BFDBFE', // primary text on dark bg (blue-200 equiv)
          'on-dark-2':    '#93C5FD', // secondary text on dark bg (blue-300 equiv)
          'on-dark-3':    '#60A5FA', // tertiary / decorative on dark (blue-400 equiv)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
