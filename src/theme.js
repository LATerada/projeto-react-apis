import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({

    color: {
        gray:'#5e5e5e',
    },

    textStyles: {
        caption: {
            fontFamily: 'Poppins',
            fontSize: { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2.6rem', '2xl': '3rem' },
            fontWeight: 'bold',
            lineHeight: '4.5rem',
            color:'white',
        },
        h1: {
            fontFamily: 'Inter',
            fontSize: { sm: '320px', md: '768px', lg: '1.5rem', xl: '1.8rem', '2xl': '2rem' },
            fontWeight: 'bold',
            lineHeight: '2.421rem',
            color:'white',

            ml:'1.438rem',
        },
        h2: {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: '1.21rem',
            color:'white',

            ml:'1.438rem',
            mt:'1.563rem'
        },
        baseStats: {
            fontFamily: 'Inter',
            fontSize: '1.5rem',
            fontWeight: '900',
            lineHeight: '1.063rem',
        },
        stat: {
            fontFamily: 'Inter',
            fontSize: '0.75rem',
            fontWeight: 'normal',
            lineHeight: '0.5rem',
            color: 'gray.500'
        },
        move: {
            fontFamily: 'Montserrat',
            fontSize: '0.875rem',
            fontWeight: 'normal',
            lineHeight: '1.063rem',
        },
        modalText: {
            fontFamily: 'Poppins',
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: '1.5rem',
            border: 'none',
        }
    },

    components: {
        Button: {
          variants: {
            pokedex: {
                fontFamily: 'Poppins',
                fontSize:{ sm: '0.5rem', md: '0.8rem', lg: '1.2rem', xl: '1.5rem', '2xl': '1.5rem' },
                fontWeight: 'bold',
                lineHeight: '2.25rem',
                color:'white',
   
                px: '0.25rem',
                py: '0.625rem',
                w:{ sm: '8rem', md: '12rem', lg: '13rem', xl: '16rem', '2xl': '18rem' },
                h:{ sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '4.625rem' },

                bg:'#33A4F5',
                radius: 'lg'
             },
            pokemonList: {
                fontFamily: 'Poppins',
                fontSize: { sm: '0.5rem', md: '0.8rem', lg: '1.2rem', xl: '1.5rem', '2xl': '1.5rem' },
                fontWeight: 'bold',
                lineHeight: '2.25rem',
                textDecoration: 'underline'
             },
            delete: {
                fontFamily: 'Poppins',
                fontSize: { sm: '0.4rem', md: '0.7rem', lg: '0.8rem', xl: '1rem', '2xl': '1rem' },
                fontWeight: 'normal',
                lineHeight: '1.5rem',
                color:'white',

                px: '0.25rem',
                py: '0.625rem',
                w:{ sm: '6rem', md: '8rem', lg: '10rem', xl: '12rem', '2xl': '14.125rem' },
                h:{ sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3rem', '2xl': '3.563rem' },

                bg: '#FF6262',
                radius: 'lg'
             },
             capturar: {
                fontFamily: 'Poppins',
                fontSize: '1rem',
                fontWeight: 'normal',
                lineHeight: '1.5rem',

                px: '0.25rem',
                py: '0.625rem',
                w:'14.125rem',
                h:'3.563rem',

                border:'2px',
                borderColor:'black',
                radius: 'lg',
             },
            details: {
                fontFamily: 'Poppins',
                fontSize: { sm: '0.4rem', md: '0.7rem', lg: '0.8rem', xl: '1rem', '2xl': '1rem' },
                fontWeight: 'bold',
                lineHeight: '1.5rem',
                textDecoration: 'underline',
                border: 'none',
                color:'white',

                position:'absolute',
                left:'1.438rem',
                bottom:'1.25rem', 

                w:{ sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem', '2xl': '4.625rem' },
                h:'1.5rem',
             },
            captureCard: {
                fontFamily: 'Poppins',
                fontSize: { sm: '0.4rem', md: '0.7rem', lg: '0.8rem', xl: '1rem', '2xl': '1rem' },
                fontWeight: 'normal',
                lineHeight: '1.5rem',

                px: '0.25rem',
                py: '0.625rem',
                w: { sm: '3rem', md: '5rem', lg: '7rem', xl: '8.5rem', '2xl': '9.125rem' },
                h:'2.375rem',

                position:'absolute',
                right:'1.375rem',
                bottom: '0.813rem',

                bg:'white'
            },
            deleteCard: {
                fontFamily: 'Poppins',
                fontSize: { sm: '0.4rem', md: '0.7rem', lg: '0.8rem', xl: '1rem', '2xl': '1rem' },
                fontWeight: 'normal',
                lineHeight: '1.5rem',
                color:'white',

                px: '0.25rem',
                py: '0.625rem',
                w:'9.125rem',
                h:'2.375rem',

                position:'absolute',
                right:'1.375rem',
                bottom: '0.813rem',

                bg: '#FF6262',
                radius: 'lg'
             },
          }
        },
        
        Progress: {
            baseStyle: {
                track: { bg: 'transparent'},
                filledTrack: {
                    bg: '#ff7C2D'
                }
            },
            sizes: {
                sm: {
                    h: '0.625rem',
                },
            },
            variants: {
                yellow: {
                    filledTrack: {
                        bg: '#FFDE69',
                    },
                },
                green: {
                    filledTrack: {
                        bg: '#8DC25B'
                    },
                },
                blue: {
                    filledTrack: {
                        bg: '#48CAE4'
                    },
                },
            },
            defaultProps:{
                size: 'sm'
            },
        }
      },
    breakpoints
})
export default theme