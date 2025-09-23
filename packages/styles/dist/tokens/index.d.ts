export namespace tokens {
    namespace colors {
        let primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
        };
        let secondary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
        };
        let success: {
            50: string;
            500: string;
            600: string;
            900: string;
        };
        let warning: {
            50: string;
            500: string;
            600: string;
            900: string;
        };
        let error: {
            50: string;
            500: string;
            600: string;
            900: string;
        };
        let info: {
            50: string;
            500: string;
            600: string;
            900: string;
        };
        let neutral: {
            0: string;
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
            1000: string;
        };
    }
    namespace typography {
        namespace fontFamily {
            let sans: string[];
            let mono: string[];
            let display: string[];
        }
        let fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
            '5xl': string;
            '6xl': string;
        };
        namespace fontWeight {
            let thin: string;
            let light: string;
            let normal: string;
            let medium: string;
            let semibold: string;
            let bold: string;
            let extrabold: string;
            let black: string;
        }
        namespace lineHeight {
            export let none: string;
            export let tight: string;
            export let snug: string;
            let normal_1: string;
            export { normal_1 as normal };
            export let relaxed: string;
            export let loose: string;
        }
        namespace letterSpacing {
            export let tighter: string;
            let tight_1: string;
            export { tight_1 as tight };
            let normal_2: string;
            export { normal_2 as normal };
            export let wide: string;
            export let wider: string;
            export let widest: string;
        }
    }
    let spacing: {
        px: string;
        0: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        18: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        88: string;
        96: string;
    };
    let borderRadius: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    let shadows: {
        none: string;
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
    };
    namespace zIndex {
        let hide: number;
        let auto: string;
        let base: number;
        let docked: number;
        let dropdown: number;
        let sticky: number;
        let banner: number;
        let overlay: number;
        let modal: number;
        let popover: number;
        let skipLink: number;
        let toast: number;
        let tooltip: number;
    }
    let breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    namespace animation {
        namespace duration {
            let none_1: string;
            export { none_1 as none };
            export let fast: string;
            let base_1: string;
            export { base_1 as base };
            export let slow: string;
            export let slower: string;
            export let slowest: string;
        }
        namespace easing {
            export let linear: string;
            let _in: string;
            export { _in as in };
            export let out: string;
            export let inOut: string;
            export let bounce: string;
        }
    }
}
export const cssVariables: string;
export function hexToRgb(hex: any): {
    r: number;
    g: number;
    b: number;
} | null;
export function rgbToHex(r: any, g: any, b: any): string;
export function getCSSVariable(variableName: any, fallback?: string): any;
export default tokens;
//# sourceMappingURL=index.d.ts.map