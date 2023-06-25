import React, { useEffect, useState } from "react";
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
  let imgURL =
    "https://infinigen.cs.princeton.edu/contributors/" +
    filename +
    "?time=" +
    new Date();
  return (
    <div className="card margin-top--sm">
      <a href={website}>
        <div className="card__header">
          <div className="avatar">
            <img className="avatar__photo" key={filename} src={imgURL} />
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

export default function ContributorsList({ children, persons, shuffle }) {
  const [people, setPeople] = useState(persons);
  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    if (shuffle) {
      setPeople((people) => [...shuffle_list(people)]);
    }
    setShuffled(true);
  }, []);

  if (!shuffled) return <></>;

  const num_items = people.length;

  let all_divs = [];

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
  }

  return <div>{all_divs}</div>;
}
