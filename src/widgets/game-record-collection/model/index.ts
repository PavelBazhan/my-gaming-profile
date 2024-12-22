import type { IGameRecord } from '@/entities/game-record/model';

export type TGameRecordList = IGameRecord[];

export type TGameRecordBlock = {
  title: string,
  completed?: IGameRecord[],
  notCompleted?: IGameRecord[],
};

export type TGameRecordCollection = TGameRecordBlock[];