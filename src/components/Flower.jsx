/* eslint-disable react-refresh/only-export-components */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

function Flower(props) {
  const flowerId = useParams(),
    flowers = useSelector((state) => state.flowers),
    flower = useMemo(
      () =>
        flowers &&
        flowers.find((flower) => flower.id === parseInt(flowerId.id), [flowers])
    );

  console.log("BLOMMAN ID", flowerId.id);
  console.log("Blommorna", flowers);
  console.log("BLOMMAN", flower);

  return (
    <div className={props.className}>
      {flower && (
        <article>
          <section>
            <img src={flower.img} alt={flower.name} />
            <h1>{flower.name}</h1>
            <p>Smak: {flower.tastenotes.join(", ")}</p>
            <p>
              Användning:{" "}
              {Array.isArray(flower.use) && flower.use.length > 1
                ? flower.use.join(". ")
                : flower.use}
            </p>
          </section>
          <section>
            <h2>Recept</h2>
            <RecipeCard margin={20} flowerId={flower.id} />
          </section>
        </article>
      )}
    </div>
  );
}

export default styled(Flower)`
  article {
    display: flex;
    justify-content: space-around;
  }

  h2 {
    font-size: 1.5rem;
  }

  img {
    max-width: 300px;
    height: auto;
  }
`;
