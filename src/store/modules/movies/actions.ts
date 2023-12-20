import { MoviesServices } from "./services";
import { State } from "./state";

const actionListMovies = async ({
  commit,
  state,
}: {
  commit: any;
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

export default {
  actionListMovies,
};
