
export type Language = 'en' | 'fa';

export const LANGUAGES: { [key: string]: Language } = {
    EN: 'en',
    FA: 'fa',
};

export const DEFAULT_LANGUAGE = LANGUAGES.EN;

export const pathnameToLanguage = (pathname: string = ''): { userLanguage: Language; canonical: string; } => {
    // https://example.com/fa/blue --> fa
    const userLanguage = pathname.substring(1, 3) as Language;

    // pathname: /fa/blue OR /fa
    const validLanguageInUrl = pathname.startsWith(`/${userLanguage}/`) || pathname === `/${userLanguage}`;

    if (Object.values(LANGUAGES).indexOf(userLanguage) !== -1 && userLanguage !== DEFAULT_LANGUAGE && validLanguageInUrl) {
        const canonical = pathname.substring(3);
        return {
            userLanguage,
            canonical: canonical || '/',
        };
    }

    return {
        userLanguage: DEFAULT_LANGUAGE,
        canonical: pathname,
    };
};
