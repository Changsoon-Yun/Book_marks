import { DehydratedState } from 'react-query';
import { UserConfig } from 'next-i18next';

export interface PageProps {
  slugName?: string | string[];
  _nextI18Next?: { initialI18nStore: any; initialLocale: string; ns: string[]; userConfig: UserConfig | null };
  dehydratedState: DehydratedState;
}
