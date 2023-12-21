import { MoviesServices } from "./services";
import { State } from "./state";
import { Commit, Dispatch } from "vuex";

const actionListMovies = async ({
  commit,
  state,
}: {
  commit: Commit;
  state: State;
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
  { dispatch, commit }: { dispatch: Dispatch; commit: Commit },
  { search }: { search: string }
) => {
  commit("SET_MOVIES_SEARCH", search);
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
