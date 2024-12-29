module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGreen: '#32794F',
        },
        secondary: {
          mediumGreen: '#BEEBC2',
          lightGreen: '#DDF7E3',
          red: '#DC2F39',
        },
        black: {
          white: '#FFFFFF',
          black: '#000000',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          500: '#757575',
          600: '#616161',
          800: '#252525',
        },
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'p1-regular': ['1.25rem', '1.6875rem'], // 20px, 27px
        'p1-bold': ['1.25rem', '1.6875rem'],   // 20px, 27px
        'p2-bold': ['1.125rem', '1.5625rem'],  // 18px, 25px
        'p2-regular': ['1.125rem', '1.5625rem'], // 18px, 25px
        'p3-regular': ['1.5rem', '2.0625rem'], // 24px, 33px
        'p4-regular': ['0.875rem', '1.1875rem'], // 14px, 19px
        'p5-regular': ['1rem', '1.375rem'],    // 16px, 22px
        'h3-bold': ['1.75rem', '2.375rem'],    // 28px, 38px
        'h2-bold': ['3.625rem', '2.375rem'],   // 58px, 38px
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Accordion
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        // Dialog
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        // Drawer
        drawerSlideLeftAndFade:
        "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}