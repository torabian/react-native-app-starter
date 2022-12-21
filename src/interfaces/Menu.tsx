import {Screens} from '~/src/stacks/Screens';

export interface MenuItem {
  label: string;
  screen: Screens;
  icon?: any;
  Icon?: any;
  disabled?: boolean;
  testID?: string;
}
