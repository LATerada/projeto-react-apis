export const components = {
    Button: {
      variants: {
        pokedex: {
          fontFamily: "Poppins",
          fontSize: {
            base: "0.8rem",
            md: "1rem",
            lg: "1.2rem",
            xl: "1.5rem",
            "2xl": "1.5rem",
          },
          fontWeight: "bold",
          lineHeight: "2.25rem",
          color: "white",

          px: "0.25rem",
          py: "0.625rem",
          w: {
            base: "8rem",
            md: "12rem",
            lg: "13rem",
            xl: "16rem",
            "2xl": "18rem",
          },
          h: {
            base: "2.5rem",
            md: "3rem",
            lg: "3.5rem",
            xl: "4rem",
            "2xl": "4.625rem",
          },

          bg: "#33A4F5",
          radius: "lg",
        },
        pokemonList: {
          fontFamily: "Poppins",
          fontSize: {
            base: "0.8rem",
            lg: "1.2rem",
            xl: "1.5rem",
            "2xl": "1.5rem",
          },
          fontWeight: "bold",
          lineHeight: "2.25rem",
          textDecoration: "underline",
        },
        delete: {
          fontFamily: "Poppins",
          fontSize: { base: "0.7rem", lg: "0.8rem", xl: "1rem", "2xl": "1rem" },
          fontWeight: "normal",
          lineHeight: "1.5rem",
          color: "white",

          px: "0.25rem",
          py: "0.625rem",
          w: { base: "8rem", lg: "10rem", xl: "12rem", "2xl": "14.125rem" },
          h: { base: "2.5rem", lg: "3rem", xl: "3rem", "2xl": "3.563rem" },

          bg: "#FF6262",
          radius: "lg",
        },
        capturar: {
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: "normal",
          lineHeight: "1.5rem",

          px: "0.25rem",
          py: "0.625rem",
          w: { base: "8rem", lg: "10rem", xl: "12rem", "2xl": "14.125rem" },
          h: { base: "2rem", lg: "2.5rem", xl: "3rem", "2xl": "3.563rem" },

          border: "2px",
          borderColor: "black",
          radius: "lg",
        },
        details: {
          fontFamily: "Poppins",
          fontSize: { base: "0.7rem", lg: "0.8rem", xl: "1rem", "2xl": "1rem" },
          fontWeight: "bold",
          lineHeight: "1.5rem",
          textDecoration: "underline",
          border: "none",
          color: "white",

          position: "absolute",
          left: "1.438rem",
          bottom: "1.25rem",

          w: { base: "3rem", lg: "3.5rem", xl: "4rem", "2xl": "4.625rem" },
          h: "1.5rem",
        },
        captureCard: {
          fontFamily: "Poppins",
          fontSize: { base: "0.7rem", lg: "0.8rem", xl: "1rem", "2xl": "1rem" },
          fontWeight: "normal",
          lineHeight: "1.5rem",

          px: "0.25rem",
          py: "0.625rem",
          w: { base: "6.5rem", lg: "7.5rem", xl: "8.5rem", "2xl": "9.125rem" },
          h: { base: "1.6rem", lg: "1.8rem", xl: "2rem", "2xl": "2.375rem" },

          position: "absolute",
          right: "1.375rem",
          bottom: { base: "1.3rem", lg: "0.813rem" },

          bg: "white",
        },
        deleteCard: {
          fontFamily: "Poppins",
          fontSize: { base: "0.7rem", lg: "0.8rem", xl: "1rem", "2xl": "1rem" },
          fontWeight: "normal",
          lineHeight: "1.5rem",
          color: "white",

          px: "0.25rem",
          py: "0.625rem",
          w: { base: "6rem", lg: "7rem", xl: "8.5rem", "2xl": "9.125rem" },
          h: { base: "1.5rem", lg: "1.8rem", xl: "2rem", "2xl": "2.375rem" },

          position: "absolute",
          right: "1.375rem",
          bottom: { base: "1rem", lg: "0.813rem" },

          bg: "#FF6262",
          radius: "lg",
        },
      },
    },
    Progress: {
      baseStyle: {
        track: { bg: "transparent" },
        filledTrack: {
          bg: "#ff7C2D",
        },
      },
      sizes: {
        sm: {
          h: "0.625rem",
        },
      },
      variants: {
        yellow: {
          filledTrack: {
            bg: "#FFDE69",
          },
        },
        green: {
          filledTrack: {
            bg: "#8DC25B",
          },
        },
        blue: {
          filledTrack: {
            bg: "#48CAE4",
          },
        },
      },
      defaultProps: {
        size: "sm",
      },
    },
  }