import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "react-image-lightbox/style.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// From https://stackoverflow.com/a/2450976
function shuffle_list(array: any[]) {
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

function ContributorsList({ children, people, shuffle }) {
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
        <div key={person.name}>
          <img
            className="avatar__photo"
            key={person.filename}
            src={
              "https://infinigen.cs.princeton.edu/contributors/" +
              person.filename +
              "?time=" +
              new Date()
            }
          />
          {person.name}
        </div>
      );
      // console.log(all_divs[i]);
    }
    if (shuffle) {
      all_divs = shuffle_list(all_divs).slice();
    }
    setAllDivs(all_divs);
  } else {
    console.log("Second");
    all_divs = allDivs.slice();
  }
  console.log(all_divs);

  return <div>{all_divs}</div>;
}

interface Props {
  name: string;
  description: string;
  filename: string;
  website: string;
}

const Contributor: React.FC<Props> = (props) => {
  const { name, description, filename, website } = props;

  return (
    <div key={name}>
      <img
        className="avatar__photo"
        key={filename}
        src={
          "https://infinigen.cs.princeton.edu/contributors/" +
          filename +
          "?time=" +
          new Date()
        }
      />
      {name}
    </div>
  );
};

export default function Team({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const [people, setPeople] = useState([
    {
      name: "Alexander Raistrick",
      description:
        "Team coordination, developed the creature system, transpiler and scene composition.",
      filename: "raistrick.jpeg",
      website: "http://araistrick.com/",
    },
    {
      name: "Lahav Lipson",
      description:
        "Trained models and implemented dense annotations and rendering.",
      filename: "lahav.jpeg",
      website: "https://www.lahavlipson.com/",
    },
    {
      name: "Zeyu Ma",
      description: "Developed the terrain system and camera selection.",
      filename: "zeyu.png",
      website: "https://mazeyu.github.io/",
    },
  ]);
  const [shuffled, setShuffled] = useState(false);

  // const shuffled = shuffle_list(people);
  useEffect(() => {
    setPeople((people) => [...shuffle_list(people)]);
    setShuffled(true);
  }, []);

  if (!shuffled) return <></>;

  return (
    <>
      <div className="row">
        <div className="col col--3"></div>
        <div className="col col--6">
          {/* <ContributorsList shuffle={true} people={}></ContributorsList> */}
          {/* {shuffle_list(people).map((person) => ( */}
          {/* <Contributor {...person} key={person.name} /> */}
          {/* ))} */}
          <Contributor {...people[0]} />
          <Contributor {...people[1]} />
          <Contributor {...people[2]} />
        </div>
      </div>
    </>
  );
}
