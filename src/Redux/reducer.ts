import { actionType, dataType, stateType } from "../constraints/type";
import { ADD_ARTICLE, DELETE_ARTICLE } from "./actionTypes";

const initialState: stateType = {
  data: [
    {
      id: 1,
      title: "Post-1",
      body: "Body-1",
    },
    {
      id: 2,
      title: "Post-2",
      body: "Body-2",
    },

    { id: 1689411718056, title: "Post-3", body: "Body-3" },
    { id: 1689411725667, title: "Post-4", body: "Body-4" },
    { id: 1689411752592, title: "Post-5", body: "Body-5" },
  ],
};

export const reducer = (
  state: stateType = initialState,
  action: actionType
) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ARTICLE: {
      return { ...state, data: [...state.data, payload] };
    }
    case DELETE_ARTICLE: {
      let updatedData: dataType[] = state.data.filter((item) => {
        return item.id !== payload.id;
      });
      return { ...state, data: updatedData };
    }
    default: {
      return state;
    }
  }
};
