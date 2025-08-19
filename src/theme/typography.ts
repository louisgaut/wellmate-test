const sSize = 12;
const mSize = 14;
const lSize = 18;
const xlSize = 24;

const normal = "PlusJakartaSans-Regular";
const bold = "PlusJakartaSans-SemiBold";

const typography = {

    regular: {
        s: {
            fontSize: sSize,
            fontFamily: normal,
        },
        m: {
            fontSize: mSize,
            fontFamily: normal,
        },
        l: {
            fontSize: lSize,
            fontFamily: normal,
        },
        xl: {
            fontSize: xlSize,
            fontFamily: normal,
        },
    },

    semiBold: {
        s: {
            fontSize: sSize,
            fontFamily: bold,
        },
        m: {
            fontSize: mSize,
            fontFamily: bold,
        },
        l: {
            fontSize: lSize,
            fontFamily: bold,
        },
        xl: {
            fontSize: xlSize,
            fontFamily: bold,
        },
    },
};

export default typography;