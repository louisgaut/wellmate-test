const palette = {
    pro: {
        light: '#FFD4E3',
        base: '#D8226C',
        dark: '#941E4E',
    },

    training: {
        light: '#A4E6ED',
        base: '#2CB8CA',
        dark: '#005488',
    },

    white: {
        light: '#FEFDFD',
        base: '#F9F6F6',
        dark: '#E3DFDF',
    },

    black: {
        extraLight: '#9A9A9A',
        light: '#606161',
        base: '#2B2C2C',
        dark: '#1A1B1B',
    },

    green: {
        light: '#BFF1D1',
        base: '#43C785',
        dark: '#1F7D53',
    },

    orange: {
        light: '#FFE5B7',
        base: '#FFB84C',
        dark: '#C97516',
    },

    red: {
        light: '#F7B9BA',
        base: '#E05757',
        dark: '#A33131',
    },
};

const colors = {
    text:{
        base: palette.black.dark, //couleur des textes importants
        light: palette.black.extraLight //couleur pour les textes secondaires comme les remarques, petites infos...
    },

    background:{
        page: palette.white.base, //tous les fonds de page
        card: palette.white.light //tous les fonds de cartes/composants
    },

    icon: palette.black.base, //couleur par défaut des icônes

    pro: {
        light: palette.pro.light,
        base: palette.pro.base,
        dark: palette.pro.dark,
    },

    training: {
        light: palette.training.light,
        base: palette.training.base,
        dark: palette.training.dark,
    },

    white: {
        light: palette.white.light,
        base: palette.white.base,
        dark: palette.white.dark,
    },

    black: {
        extraLight: palette.black.extraLight,
        light: palette.black.light,
        base: palette.black.base,
        dark: palette.black.dark,
    },

    green: {
        light: palette.green.light,
        base: palette.green.base,
        dark: palette.green.dark,
    },

    orange: {
        light: palette.orange.light,
        base: palette.orange.base,
        dark: palette.orange.dark,
    },

    red: {
        light: palette.red.light,
        base: palette.red.base,
        dark: palette.red.dark,
    },
}

export default colors;