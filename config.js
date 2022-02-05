// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();

// export const API = publicRuntimeConfig.PRODUCTION
//     ? publicRuntimeConfig.API_PRODUCTION
//     : publicRuntimeConfig.API_DEVELOPMENT;

// export const APP_NAME = publicRuntimeConfig.APP_NAME;

// export const DOMAIN = publicRuntimeConfig.PRODUCTION
//     ? publicRuntimeConfig.DOMAIN_PRODUCTION
//     : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

// export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
// export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
// export const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;

export const API =
    process.env.NEXT_PUBLIC_NODE_ENV === "PRODUCTION"
        ? process.env.NEXT_PUBLIC_API_PRODUCTION
        : process.env.API_DEVELOPMENT;

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export const DOMAIN =
    process.env.NODE_ENV === "PRODUCTION"
        ? process.env.NEXT_PUBLIC_DOMAIN_PRODUCTION
        : process.env.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = process.env.FB_APP_ID;
export const DISQUS_SHORTNAME = process.env.DISQUS_SHORTNAME;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
