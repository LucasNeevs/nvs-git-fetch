import { ThemeType } from 'grommet';

const MyTheme = {
  name: 'NVS_Boilerplate',
  rounding: 2,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      brand: {
        dark: '#7700cc',
        light: '#6600cc',
      },
      background: {
        dark: '#111111',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE',
      },
      'background-front': {
        dark: '#222222',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111',
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        dark: '#444444',
        light: '#CCCCCC',
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
    },
    font: {
      family: 'Roboto Condensed',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
    control: {
      border: {
        radius: '2px',
      },
    },
    drop: {
      border: {
        radius: '2px',
      },
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  button: {
    border: {
      radius: '2px',
    },
  },
  checkBox: {
    check: {
      radius: '2px',
    },
    toggle: {
      radius: '2px',
    },
  },
  radioButton: {
    check: {
      radius: '2px',
    },
  },
  formField: {
    border: {
      color: 'border',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
      position: 'inner',
      side: 'bottom',
    },
    content: {
      pad: 'small',
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: 'medium',
      },
    },
    error: {
      color: 'status-critical',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    help: {
      color: 'dark-3',
      margin: {
        start: 'small',
      },
    },
    info: {
      color: 'text-xweak',
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    margin: {
      bottom: 'small',
    },
    round: '2px',
  },
} as unknown as ThemeType;

export default MyTheme;
