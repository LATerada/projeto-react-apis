import { border, extendTheme } from "@chakra-ui/react";


const theme = extendTheme({

    color: {
        gray:'#5e5e5e',
    },

    textStyles: {
        caption: {
            fontFamily: 'Poppins',
            fontSize: '3rem',
            fontWeight: 'bold',
            lineHeight: '4.5rem',
            color:'white',
        },
        h1: {
            fontFamily: 'Inter',
            fontSize: '2rem',
            fontWeight: 'bold',
            lineHeight: '2.421rem',
            color:'white',
        },
        h2: {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: '1.21rem',
            color:'white',
        },
    },
    components: {
        Button: {
          variants: {
            pokedex: {
                fontFamily: 'Poppins',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                lineHeight: '2.25rem',
                color:'white',
   
                px: '0.25rem',
                py: '0.625rem',
                w:'18rem',
                h:'4.625rem',

                bg:'#33A4F5',
                radius: 'lg'
             },
            pokemonList: {
                fontFamily: 'Poppins',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                lineHeight: '2.25rem',
                textDecoration: 'underline'
             },
            delete: {
                fontFamily: 'Poppins',
                fontSize: '1rem',
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
            details: {
                fontFamily: 'Poppins',
                fontSize: '1rem',
                fontWeight: 'bold',
                lineHeight: '1.5rem',
                textDecoration: 'underline',
                border: 'none',
                color:'white',

                w:'4.625rem',
                h:'1.5rem',

                position:'absolute',
                left:'1.438rem',
                bottom:'1.25rem', 
             },
            captureCard: {
                fontFamily: 'Poppins',
                fontSize: '1rem',
                fontWeight: 'normal',
                lineHeight: '1.5rem',

                px: '0.25rem',
                py: '0.625rem',
                w:'9.125rem',
                h:'2.375rem',

                position:'absolute',
                right:'1.375rem',
                bottom: '0.813rem',

                bg:'white'
            }
          }
        },
      },
})
export default theme