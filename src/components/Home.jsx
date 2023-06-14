/* eslint-disable react-refresh/only-export-components */

import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Div = styled.div`
  margin: 0;
  background-color: #789cb6;
  overflow: hidden;
  text-align: center;
  padding-bottom: 60px;
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

function Home(props) {
  const flowers = useSelector((state) => state.flowers);

  return (
    <Div className={props.className}>
      {flowers && flowers.length >= 2 && (
        <ul className="ul-title">
          <li className="img-title-left" key={flowers[0].id}>
            <Link to={`/flower/${flowers[0].id}`}>
              <Img src={flowers[0].img} alt={flowers[0].name} />
            </Link>
          </li>
          <li className="text-title">
            <h1>Blomgott</h1>
            <p>Ätbara blommor och recept</p>
          </li>
          <li className="img-title-right" key={flowers[1].id}>
            <Link to={`/flower/${flowers[1].id}`}>
              <Img src={flowers[1].img} alt={flowers[1].name} />
            </Link>
          </li>
        </ul>
      )}

      {flowers && flowers.length > 2 && (
        <ul className="ul-lawn">
          {flowers.slice(2, 18).map((flower) => (
            <li key={flower.id}>
              <Link to={`/flower/${flower.id}`}>
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
            </li>
          ))}
        </ul>
      )}
    </Div>
  );
}

export default styled(Home)`
  .img-title-left {
    display: inline-block;
    margin: 0;
  }

  .img-title-right {
    display: inline-block;
    margin: 0;
  }

  li {
    color: aliceblue;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .text-title {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
      background-color: #789cb6;
      color: #fcfcfd;
      font-size: 3.4rem;
      height: 100%;
      margin: 0;
      width: 100%;
    }
    p {
      font-size: 1rem;
      font-weight: 100;
      margin-bottom: 9px;
      margin-top: 8px;
      padding-bottom: 0px;
      text-align: center;
      width: 200px;
    }
  }

  .ul-lawn {
    background-image: url("../src/assets/img/meadow.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0;
    margin: 0;
    padding: 0;
    @media (min-width: 700px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  .ul-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding-left: 0;
  }

  @media (min-width: 600px) {
    .img-title-left {
      margin: 0 40px 0 0;
    }

    .img-title-right {
      margin: 0 0 0 40px;
    }

    .text-title {
      h1 {
        align-items: end;
        display: flex;
        font-size: 3.4rem;
        justify-content: center;
      }
      p {
        padding-bottom: 10px;
      }
    }

    .ul-title {
      flex-wrap: unset;
    }
  }
`;
