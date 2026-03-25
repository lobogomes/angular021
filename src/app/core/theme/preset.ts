import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * AppPreset — tema quente baseado na paleta da marca:
 *
 *   #FAEBD7  Antique White  → brand.100
 *   #C19A6B  Camel          → brand.400
 *   #704214  Sepia          → brand.700
 *
 * Paletas complementares incluídas:
 *   warmstone  → surfaces neutras quentes (substituindo slate frio)
 *   sage       → success (verde sálvia)
 *   dustyblue  → info (azul empoeirado)
 *   amber      → warning (âmbar dourado)
 *   terra      → danger (terracota)
 */
export const AppPreset = definePreset(Aura, {
  // ─────────────────────────────────────────────────────────────
  // 0. GLOBAL CSS — usa dt() para referenciar tokens do tema
  // ─────────────────────────────────────────────────────────────
  css: `
    .p-inputtext.p-invalid:not(.sf-touched) {
      border-color: dt('inputtext.border.color');
    }

    .p-inputtext.p-invalid:not(.sf-touched)::placeholder {
      color: dt('inputtext.placeholder.color');
    }

    .p-floatlabel:has(.p-invalid:not(.sf-touched)) label {
      color: dt('floatlabel.color');
    }

    .tooltip-light .p-tooltip-text {
      background: dt('primary.100');
      color: dt('primary.800');
      border: 1px solid dt('surface.200');
    }

    .tooltip-light.p-tooltip-right  .p-tooltip-arrow { border-right-color:  dt('primary.100'); }
    .tooltip-light.p-tooltip-left   .p-tooltip-arrow { border-left-color:   dt('primary.100'); }
    .tooltip-light.p-tooltip-top    .p-tooltip-arrow { border-top-color:    dt('primary.100'); border-bottom-color: dt('primary.100'); }
    .tooltip-light.p-tooltip-bottom .p-tooltip-arrow { border-bottom-color: dt('primary.100'); border-top-color:    dt('primary.100'); }
  `,

  // ─────────────────────────────────────────────────────────────
  // 1. PRIMITIVE
  // ─────────────────────────────────────────────────────────────
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '10px',
      xl: '16px',
    },

    // Paleta principal da marca (marrom quente / caramelo / sépia)
    brand: {
      50: '#fdf8f2',
      100: '#faebd7', // ← Antique White
      200: '#f3d5af',
      300: '#e8bb83',
      400: '#c19a6b', // ← Camel
      500: '#a47845',
      600: '#8a6035',
      700: '#704214', // ← Sepia
      800: '#5a3410',
      900: '#46280c',
      950: '#2b1807',
    },

    // Superfícies neutras de tom quente (substitui o slate frio)
    warmstone: {
      50: '#faf8f5',
      100: '#f3ede4',
      200: '#e8dfd0',
      300: '#d9ccb8',
      400: '#c4b49a',
      500: '#a8967c',
      600: '#8a7862',
      700: '#6e5e4b',
      800: '#524636',
      900: '#3a3027',
      950: '#231d17',
    },

    // Verde sálvia — harmoniza com o marrom, suave e natural
    sage: {
      50: '#f3f7f2',
      100: '#e3ede0',
      200: '#c6dbc2',
      300: '#9fc29a',
      400: '#76a570',
      500: '#558a4f',
      600: '#426e3d',
      700: '#355730',
      800: '#2b4627',
      900: '#223820',
      950: '#132213',
    },

    // Azul empoeirado — elegante, complementa os tons quentes
    dustyblue: {
      50: '#f1f5f9',
      100: '#e0eaf3',
      200: '#c2d5e8',
      300: '#97b8d5',
      400: '#6897be',
      500: '#4a7aa6',
      600: '#3a618a',
      700: '#2f4e70',
      800: '#27405c',
      900: '#1f334a',
      950: '#121f2e',
    },

    // Âmbar dourado — aquecido, combina naturalmente com o caramelo
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },

    // Terracota — vermelho queimado, natural dentro da paleta quente
    terra: {
      50: '#fdf3f0',
      100: '#fce4dc',
      200: '#f9c9ba',
      300: '#f4a389',
      400: '#ec7558',
      500: '#d9502e',
      600: '#c03a20',
      700: '#9e2e19',
      800: '#83281a',
      900: '#6c241b',
      950: '#3b100b',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 2. SEMANTIC
  // ─────────────────────────────────────────────────────────────
  semantic: {
    primary: {
      50: '{brand.50}',
      100: '{brand.100}',
      200: '{brand.200}',
      300: '{brand.300}',
      400: '{brand.400}',
      500: '{brand.500}',
      600: '{brand.600}',
      700: '{brand.700}',
      800: '{brand.800}',
      900: '{brand.900}',
      950: '{brand.950}',
    },

    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.500}',
      offset: '2px',
    },

    colorScheme: {
      // ── LIGHT ────────────────────────────────────────────────
      light: {
        primary: {
          color: '{primary.600}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.700}',
          activeColor: '{primary.800}',
        },

        // Superfícies quentes em vez de slate frio
        surface: {
          0: '{warmstone.50}',
          50: '{warmstone.50}',
          100: '{warmstone.100}',
          200: '{warmstone.200}',
          300: '{warmstone.300}',
          400: '{warmstone.400}',
          500: '{warmstone.500}',
          600: '{warmstone.600}',
          700: '{warmstone.700}',
          800: '{warmstone.800}',
          900: '{warmstone.900}',
          950: '{warmstone.950}',
        },

        highlight: {
          background: '{primary.100}',
          focusBackground: '{primary.200}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },

        formField: {
          background: '{surface.0}',
          borderColor: '{surface.300}',
          hoverBorderColor: '{surface.400}',
          focusBorderColor: '{primary.500}',
          color: '{surface.800}',
          placeholderColor: '{surface.400}',
          floatLabelColor: '{surface.500}',
          floatLabelFocusColor: '{primary.600}',
          floatLabelActiveColor: '{surface.600}',
        },

        text: {
          color: '{surface.900}',
          hoverColor: '{surface.950}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.600}',
        },

        content: {
          background: '{surface.0}',
          hoverBackground: '{surface.50}',
          borderColor: '{surface.200}',
          color: '{surface.800}',
          hoverColor: '{surface.900}',
        },
      },

      // ── DARK ─────────────────────────────────────────────────
      dark: {
        // Primária âmbar — mais quente e luminosa sobre fundos escuros
        primary: {
          color: '{amber.400}',
          contrastColor: '{warmstone.950}',
          hoverColor: '{amber.300}',
          activeColor: '{amber.200}',
        },

        // Superfícies invertidas: 0 = mais escuro (fundo), 950 = mais claro (texto)
        surface: {
          0: '{brand.950}',
          50: '{brand.900}',
          100: '{brand.900}',
          200: '{warmstone.700}',
          300: '{warmstone.600}',
          400: '{warmstone.500}',
          500: '{warmstone.400}',
          600: '{warmstone.300}',
          700: '{warmstone.200}',
          800: '{warmstone.100}',
          900: '{warmstone.50}',
          950: '#ffffff',
        },

        highlight: {
          background: 'color-mix(in srgb, {amber.400}, transparent 82%)',
          focusBackground: 'color-mix(in srgb, {amber.400}, transparent 72%)',
          color: '{amber.200}',
          focusColor: '{amber.100}',
        },

        formField: {
          background: '{surface.50}',
          borderColor: '{surface.200}',
          hoverBorderColor: '{surface.300}',
          focusBorderColor: '{amber.400}',
          color: '{surface.900}',
          placeholderColor: '{surface.400}',
          floatLabelColor: '{surface.500}',
          floatLabelFocusColor: '{amber.400}',
          floatLabelActiveColor: '{surface.600}',
        },

        text: {
          color: '{surface.900}',
          hoverColor: '{surface.950}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.600}',
        },

        content: {
          background: '{surface.900}',
          hoverBackground: '{surface.800}',
          borderColor: '{surface.700}',
          color: '{surface.100}',
          hoverColor: '{surface.50}',
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 3. COMPONENTS
  // ─────────────────────────────────────────────────────────────
  components: {
    button: {
      root: {
        borderRadius: '{border.radius.md}',
        roundedBorderRadius: '2rem',
        paddingX: '1.25rem',
        paddingY: '0.625rem',
        label: {fontWeight: '600'},

        primary: {
          background: '{primary.600}',
          hoverBackground: '{primary.700}',
          activeBackground: '{primary.800}',
          borderColor: '{primary.600}',
          hoverBorderColor: '{primary.700}',
          activeBorderColor: '{primary.800}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
          focusRing: {color: '{primary.600}', shadow: 'none'},
        },

        secondary: {
          background: '{surface.100}',
          hoverBackground: '{surface.200}',
          activeBackground: '{surface.300}',
          borderColor: '{surface.200}',
          hoverBorderColor: '{surface.300}',
          activeBorderColor: '{surface.400}',
          color: '{surface.700}',
          hoverColor: '{surface.800}',
          activeColor: '{surface.900}',
        },

        success: {
          background: '{sage.500}',
          hoverBackground: '{sage.600}',
          activeBackground: '{sage.700}',
          borderColor: '{sage.500}',
          hoverBorderColor: '{sage.600}',
          activeBorderColor: '{sage.700}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
        },

        info: {
          background: '{dustyblue.500}',
          hoverBackground: '{dustyblue.600}',
          activeBackground: '{dustyblue.700}',
          borderColor: '{dustyblue.500}',
          hoverBorderColor: '{dustyblue.600}',
          activeBorderColor: '{dustyblue.700}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
        },

        warn: {
          background: '{amber.500}',
          hoverBackground: '{amber.600}',
          activeBackground: '{amber.700}',
          borderColor: '{amber.500}',
          hoverBorderColor: '{amber.600}',
          activeBorderColor: '{amber.700}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
        },

        danger: {
          background: '{terra.500}',
          hoverBackground: '{terra.600}',
          activeBackground: '{terra.700}',
          borderColor: '{terra.500}',
          hoverBorderColor: '{terra.600}',
          activeBorderColor: '{terra.700}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
        },
      },

      outlined: {
        primary: {
          borderColor: '{primary.500}',
          color: '{primary.600}',
          hoverBackground: '{primary.50}',
          activeBackground: '{primary.100}',
        },
      },

      text: {
        primary: {
          color: '{primary.600}',
          hoverBackground: '{primary.50}',
          activeBackground: '{primary.100}',
        },
      },
    },

    card: {
      root: {
        color: '{primary.400}',
        background: '{primary.50}',
        borderRadius: '{border.radius.xl}',
        shadow: '2px 4px 4px 2px rgb(112 66 20 / 0.08), 2px 1px 4px -1px rgb(112 66 20 / 0.06)',
      },
    },

    inputtext: {
      root: {
        borderRadius: '{border.radius.md}',
      },
    },

    select: {
      root: {
        borderRadius: '{border.radius.md}',
      },
    },

    datepicker: {
      panel: {
        borderRadius: '{border.radius.md}',
      },
    },

    tag: {
      root: {
        borderRadius: '{border.radius.sm}',
      },
      primary: {
        background: '{primary.100}',
        color: '{primary.700}',
      },
      success: {
        background: '{sage.100}',
        color: '{sage.700}',
      },
      info: {
        background: '{dustyblue.100}',
        color: '{dustyblue.700}',
      },
      warn: {
        background: '{amber.100}',
        color: '{amber.700}',
      },
      danger: {
        background: '{terra.100}',
        color: '{terra.700}',
      },
    },

    badge: {
      root: {
        borderRadius: '{border.radius.xl}',
      },
      primary: {
        background: '{primary.500}',
        color: '#ffffff',
      },
      success: {
        background: '{sage.500}',
        color: '#ffffff',
      },
      info: {
        background: '{dustyblue.500}',
        color: '#ffffff',
      },
      warn: {
        background: '{amber.500}',
        color: '#ffffff',
      },
      danger: {
        background: '{terra.500}',
        color: '#ffffff',
      },
    },

    tooltip: {
      colorScheme: {
        light: {
          root: {
            background: '{primary.700}',
            color: '{primary.50}',
          },
        },
        dark: {
          root: {
            background: '{warmstone.700}',
            color: '{warmstone.50}',
          },
        },
      },
    },

    message: {
      root: {
        borderRadius: '{border.radius.md}',
      },
    },

    toast: {
      root: {
        borderRadius: '{border.radius.lg}',
      },
    },
  },
});
