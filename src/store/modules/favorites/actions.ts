import { Commit } from "vuex";
const actionPaginateFavorites = (
  { commit }: { commit: Commit },
  { page }: { page: number }
) => {
  commit("SET_FAVORITES_PAGE", page);
};

export default {
  actionPaginateFavorites,
};
