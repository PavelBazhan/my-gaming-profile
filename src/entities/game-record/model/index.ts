export enum Position {
  left = 'LEFT',
  right = 'RIGHT',
}

export interface Props {
  active?: boolean,
  completed?: boolean,
  position?: Position,
}