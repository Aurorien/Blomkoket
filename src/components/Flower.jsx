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
        flowers.find((flower) => flower.id === parseInt(flowerId.id)),
      [flowers, flowerId]
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
            <div>
              <h2>Smak:</h2>
              <p> {flower.tastenotes.join(", ")}</p>
              <h2>Användning:</h2>
              <p>
                {" "}
                {Array.isArray(flower.use) && flower.use.length > 1
                  ? flower.use.join(". ") + "."
                  : flower.use}
              </p>
            </div>
          </section>
          <section className="recipes-section">
            <h1 className="recipes-section-h1">Recept:</h1>
            <RecipeCard margin={20} flowerId={flower.id} />
          </section>
        </article>
      )}
    </div>
  );
}

export default styled(Flower)`
  color: #1b1b1b;
  height: 100%;
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-wrap: break-word;
  }

  h1 {
    font-size: 1.8rem;
    margin-top: 50px;
    margin-bottom: 5px;
  }

  p {
    max-width: 200px;
    padding-left: 10px;
  }

  h2 {
    font-size: 1.3rem;
    margin: 30px 0 0 0;
    padding-left: 10px;
  }

  img {
    height: auto;
    width: 400px;
  }

  p {
    margin-top: 6px;
  }

  .recipes-section {
    padding-bottom: 70px;
  }

  .recipes-section-h1 {
    margin-top: 60px;
    color: #2d1a33;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    &:first-child {
      /* background-color: rgb(208, 206, 162); */
      background-color: #fbf9d0;
      min-height: 100vh;
    }
    &:nth-child(2) {
      /* background-color: #fbf9d0; */
      background-color: rgb(208, 206, 162);
      width: 100%;
      max-width: 370px;
    }
  }

  @media (min-width: 600px) {
    article {
      flex-direction: row;
    }
    img {
      max-width: 300px;
    }
  }
`;
