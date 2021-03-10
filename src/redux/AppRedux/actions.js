import { makeActionCreator, makeConstantCreator } from '../../utils/utils';

export const AppTypes = makeConstantCreator('START_APP', 'MAKE_SKIP_INTRO', 'GO_TO_INTRO');

export const userStartApp = () => makeActionCreator(AppTypes.START_APP);

export const goToIntro = () => makeActionCreator(AppTypes.GO_TO_INTRO);

export const makeSkipIntro = () => makeActionCreator(AppTypes.MAKE_SKIP_INTRO);
