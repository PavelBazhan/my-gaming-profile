export enum Position {
  left = 'LEFT',
  right = 'RIGHT',
}

export enum Platform {
  ps1 = 'Sony PlayStation',
  ps2 = 'Sony PlayStation 2',
  ps3 = 'Sony PlayStation 3',
  ps4 = 'Sony PlayStation 4',
  ps5 = 'Sony PlayStation 5',
  windows = 'Microsoft Windows',
  nes = 'Nintendo Entertainment System',
  web = 'Web',
  ios = 'iOS',
}

export interface IGameRecord {
  id: number;
  title: string;
  platform: Platform;
  releaseYear: number;
  isDlc?: boolean;
  finished: boolean;
  mastered: boolean;
  favourite: boolean;
  betterTogether: boolean;
  playingYear: number;
  imagePath?: string;
}

export interface Props {
  active?: boolean,
  completed?: boolean,
  position?: Position,
  gameRecord?: IGameRecord,
}
