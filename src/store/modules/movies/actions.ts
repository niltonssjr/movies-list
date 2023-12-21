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
    const { moviesList } = await MoviesServices.list(filter);
    commit("SET_MOVIES_LIST", moviesList);
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
  dispatch("actionListMovies");
};

export default {
  actionListMovies,
  actionSearchMovies,
};
