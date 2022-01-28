module.exports = {
    publicRuntimeConfig: {
        HOST: process.env.HOST,
        IMAGES_HOST: process.env.IMAGES_HOST,
        IMAGES_UPLOADED_PATH: process.env.IMAGES_UPLOADED_PATH,
    },
    images: {
        domains: ['garant.od.ua'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
    env: {
        LAST_BUILD: new Date(),
    },
};