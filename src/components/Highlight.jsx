import React, { useRef, useState } from "react";
import clsx from "clsx";
import styles from "../pages/index.module.css";
// import React, { useRef } from "react";

// From https://stackoverflow.com/a/2450976
function shuffle_list(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Contributor({ children, name, filename, website, description }) {
  let path = require("@site/static/img/contributors/" + filename).default;

  return (
    <div className="card margin-top--sm">
      <a href={website}>
        <div className="card__header">
          <div className="avatar">
            <img className="avatar__photo" key={path} src={path} />
            <div className="avatar__intro">
              <div className="avatar__name">{name}</div>
              <small className="avatar__subtitle">{description}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function ContributorsList({ children, people, shuffle }) {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  // console.log("Rendered! " + renderCounter.current);
  const num_items = people.length;

  const [allDivs, setAllDivs] = useState([]);
  let all_divs = [];

  if (allDivs.length == 0) {
    console.log("First");
    for (let i = 0; i < num_items; i++) {
      const person = people[i];
      all_divs.push(
        <Contributor
          key={person.name}
          filename={person.filename}
          name={person.name}
          website={person.website}
          description={person.description}
        />
      );
      // console.log(all_divs[i]);
    }
    if (shuffle) {
      shuffle_list(all_divs);
    }
    setAllDivs(all_divs);
  } else {
    console.log("Second");
    all_divs = allDivs;
  }

  // const [allDivs, setItemOffset] = useState({});

  // console.log("Finally!");
  console.log(<div>{all_divs}</div>);

  return <div>{all_divs}</div>;
}
