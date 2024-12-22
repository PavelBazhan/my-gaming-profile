import { gameRecordCollectionMockHandlers } from '@/widgets/game-record-collection/api';

import { setupWorker } from "msw/browser";

export const worker = setupWorker(...gameRecordCollectionMockHandlers);