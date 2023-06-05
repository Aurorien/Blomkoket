import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Flower() {
  const flowerId = useParams(),
    flowers = useSelector((state) => state.flowers),
    flower = flowers.find((flower) => flower.id === parseInt(flowerId.id));
  // console.log("BLOMMAN ID", flowerId.id);
  // console.log("Blommorna", flowers);
  // console.log("BLOMMAN", flower);

  const Img = styled.img`
    max-width: 300px;
    height: auto;
  `;

  return (
    <>
      {flower && (
        <>
          <Img src={flower.img} alt={flower.name} />
          <h1>{flower.name}</h1>
          <h2>Smak: {flower.tastenotes.join(", ")}</h2>
          <h2>Användning: {flower.use.join(". ")}</h2>
        </>
      )}
    </>
  );
}

export default Flower;
