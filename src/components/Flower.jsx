import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

function Flower() {
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

  const Article = styled.article`
    display: flex;
    justify-content: space-around;
  `;

  const Img = styled.img`
    max-width: 300px;
    height: auto;
  `;

  return (
    <>
      {flower && (
        <Article>
          <section>
            <Img src={flower.img} alt={flower.name} />
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
            <RecipeCard margin={20} flowerId={flower.id} />
          </section>
        </Article>
      )}
    </>
  );
}

export default Flower;
