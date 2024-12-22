import type { IGameRecord } from '@/entities/game-record/model';

export type TGameRecordList = IGameRecord[];

export type TGameRecordCollection = {
  [key: string]: IGameRecord[]
};