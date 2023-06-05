/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "../store";
import { Link } from "react-router-dom";

const Div = styled.div`
  margin: 0;
  background-color: #789cb6;
  overflow: hidden;
`;

const H1 = styled.h1`
  background-color: #789cb6;
  color: #fcfcfd;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 30px;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 3px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    border-radius: 7px;
  }
`;

const Li = styled.li`
  color: aliceblue;
  margin: 0;
  padding: 0;
`;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function Home() {
  const dispatch = useDispatch(),
    flowers = useSelector((state) => state.flowers);

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  return (
    <Div>
      {flowers && flowers.length >= 2 && (
        <Ul style={{ marginTop: 0, alignItems: "flex-end" }}>
          <Li
            key={flowers[0].id}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Link to={`/flower/${flowers[0].id}`}>
              <Img src={flowers[0].img} alt={flowers[0].name} />
            </Link>
          </Li>
          <H1>Blomspis</H1>
          <Li key={flowers[1].id} style={{ display: "inline-block" }}>
            <Link to={`/flower/${flowers[1].id}`}>
              <Img src={flowers[1].img} alt={flowers[1].name} />
            </Link>
          </Li>
        </Ul>
      )}
      {flowers && flowers.length > 2 && (
        <Ul>
          {chunkArray(flowers.slice(2, 18), 4).map((chunk, chunkIndex) => (
            <Li
              key={chunkIndex}
              style={{ display: "inline-block", paddingBottom: "8vh" }}
            >
              {chunk.map((flower) => (
                <Link to={`/flower/${flower.id}`} key={flower.id}>
                  <Img
                    key={flower.id}
                    src={flower.img}
                    alt={flower.name}
                    style={{
                      marginTop: "-2px",
                      marginBottom: "-3px",
                    }}
                  />
                </Link>
              ))}
            </Li>
          ))}
        </Ul>
      )}
    </Div>
  );
}

export default Home;
