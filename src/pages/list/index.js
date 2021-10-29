/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-24 19:33:31
 * @LastEditTime: 2021-10-29 13:07:26
 */
import React, { useEffect, useReducer } from "react";
import { fetchList } from "src/pages/list/actions";
import listReducer from "src/pages/list/reducer";

function List() {
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
