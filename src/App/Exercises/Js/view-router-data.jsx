import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as emptyValuesComments } from './EmptyValuesComments/router-data';
import { blockRouterMetaData as JsArrayBasics } from './JsArrayBasics/router-data';
import { blockRouterMetaData as Time } from './Time/router-data';
import { blockRouterMetaData as HitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as jsStorages } from './jsStorages/routerr-data';
import { blockRouterMetaData as SavedInput } from './SavedInput/router-data';
import { blockRouterMetaData as TryCatchAndFinally } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as Prototypes } from './Prototypes/router-data';
import { blockRouterMetaData as ThisKeywords } from './ThisKeywords/router-data';
import { blockRouterMetaData as Promises } from './Promises/router-data';
import { blockRouterMetaData as AsyncAwait } from './AsyncAwait/router-data';
import { blockRouterMetaData as Testing } from './Testing/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesComments,
  JsArrayBasics,
  Time,
  HitTheMoleGame,
  MemoGame,
  jsStorages,
  SavedInput,
  TryCatchAndFinally,
  Prototypes,
  ThisKeywords,
  Promises,
  AsyncAwait,
  Testing,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
