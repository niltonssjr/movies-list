import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken2, // #E53935
        secondary: colors.blue.lighten1, // #FFCDD2
        accent: colors.blue.darken4, // #3F51B5
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
