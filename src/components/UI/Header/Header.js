import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestGetAllCategories } from "../../../actions/general";

export const Header = () => {
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    dispatch(requestGetAllCategories());
  }, []);

  return (
    <header className="header clearfix">

    </header>
  );
};
