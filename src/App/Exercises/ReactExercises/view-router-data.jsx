import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactRouterEventsMetaData } from '../ReactExercises/ReactRouterEvents/router-data';

import { Block9MetaData } from './Block9/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { blockRouterMetaData as LocalDevAndFetch } from './LocalDevAndFetch/router-data';
import { blockRouterMetaData as TodoList } from './TodoList/router-data';
import { blockRouterMetaData as ReactUseRef } from './ReactUseRef/router-data';
import { blockRouterMetaData as Forms } from './Forms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block9MetaData,
  MaterialUIBasicElementsMetaData,
  LocalDevAndFetch,
  TodoList,
  ReactUseRef,
  Forms,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
