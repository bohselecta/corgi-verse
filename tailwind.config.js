/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{tsx,jsx}", "./components/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark candy base
        night:    "#0B1220", // near-black navy
        midnight: "#0E1630", // surface
        abyss:    "#121A3A", // deeper cards
        // Candy accents
        strawberry:   "#EC4899",
        grape:        "#7C3AED",
        blueRaspberry:"#3B82F6",
        cyanCandy:    "#22D3EE",
        amberCandy:   "#F59E0B",
        cream:        "#F1E9D6", // logo text vibe
      },
      boxShadow: {
        neon:  "0 0 0 1px rgba(255,255,255,.12), 0 20px 60px -25px rgba(124,58,237,.55)",
        candy: "0 14px 40px -8px rgba(236,72,153,.45)",
        abyss: "0 8px 30px -10px rgba(2,6,23,.8)"
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem", "3xl": "1.75rem" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pan:   { "0%": { transform: "translate3d(-2%,-1%,0)" }, "100%": { transform: "translate3d(2%,1%,0)" } }
      },
      animation: { float: "float 8s ease-in-out infinite", pan: "pan 22s linear infinite alternate" },
    },
  },
  plugins: [],
};
