import { MoviesServices } from "./services";
import { MovieStateType } from "./state";
import { Commit, Dispatch } from "vuex";

const actionListMovies = async ({
  commit,
  state,
}: {
  commit: Commit;
  state: MovieStateType;
}) => {
  try {
    const {
      listConfig: { search, ...otherParms },
    } = state;

    const filter: Record<string, string | number> = {
      ...otherParms,
      s: search,
    };
    const { moviesList, recordCount } = await MoviesServices.list(filter);
    commit("SET_MOVIES_LIST", moviesList);
    commit("SET_RECORD_COUNT", recordCount);
    return Promise.resolve(moviesList);
  } catch (error) {
    commit("SET_MOVIES_LIST", []);
    return Promise.reject(error);
  }
};

const actionSearchMovies = async (
  {
    dispatch,
    commit,
    state,
  }: { dispatch: Dispatch; commit: Commit; state: MovieStateType },
  { search }: { search: string }
) => {
  commit("SET_MOVIES_SEARCH", search || state.defaultSearch);
  commit("SET_MOVIES_PAGE", 1);
  dispatch("actionListMovies");
};

const actionPaginateMovies = async (
  { dispatch, commit }: { dispatch: Dispatch; commit: Commit },
  { page }: { page: number }
) => {
  commit("SET_MOVIES_PAGE", page);
  dispatch("actionListMovies");
};

export default {
  actionListMovies,
  actionSearchMovies,
  actionPaginateMovies,
};
