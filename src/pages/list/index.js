import React, { useEffect, useReducer } from "react";
import { fetchList } from "src/pages/list/actions";
import listReducer from "src/pages/list/reducer";

function List() {
  // const { state, dispatch } = useContext(ListContext);
  const [state, dispatch] = useReducer(listReducer, { list: [] });


  useEffect(() => {
    fetchList(dispatch);
  }, []);

  return (
      <div className="list">
        <ul>
          {state.list.map((a, index) => (
            <li key={index}>
              <p>{a.id}</p>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default List;
