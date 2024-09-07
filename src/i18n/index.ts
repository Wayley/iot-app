import { createI18n } from 'vue-i18n';
import en from './en';
import zhHans from './zh-Hans';

type LocaleMessage<T extends string> = {
  [key in T]: any;
};

export const enum SupportedLocalEnum {
  En = 'en',
  ZhHans = 'zh-Hans',
}

export const enum SupportedLanguageEnum {
  En = 'en-US',
  ZhHans = 'zh-CN',
}

export const localeLanguageMap: Map<SupportedLocalEnum, SupportedLanguageEnum> = new Map([
  [SupportedLocalEnum.En, SupportedLanguageEnum.En],
  [SupportedLocalEnum.ZhHans, SupportedLanguageEnum.ZhHans],
]);

const messages: LocaleMessage<SupportedLocalEnum> = {
  en,
  'zh-Hans': zhHans,
};

const locale = uni.getLocale();

export const i18n = createI18n({
  locale,
  messages,
  legacy: false,
  globalInjection: true,
});

export default i18n;
