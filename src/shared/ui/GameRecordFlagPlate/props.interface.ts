export enum Icon {
  finished = 'check-bold',
  mastered = 'trophy',
  favourite = 'star',
  betterTogether = 'account-multiple',
}

export interface Props {
  disabled?: boolean;
  icon?: Icon;
  color?: string;
}