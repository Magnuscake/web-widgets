import React from "react";

import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "You are right. Just use Vue. I hear its much better.",
  },
  {
    title: "What about Angular?",
    content: "Might as well just learn COBOL.",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
