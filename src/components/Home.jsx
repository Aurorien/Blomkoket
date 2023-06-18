/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

const Div = styled.div`
  background-color: #789cb6;
  margin: 0;
  overflow: hidden;
  padding-bottom: 50px;
  text-align: center;
`;

const FlowerImageContainer = styled.div`
  margin: -3px;
  overflow: hidden;
  position: relative;

  z-index: 1;
  &:hover {
    overflow: visible;
    z-index: 2;
  }
`;

const Img = styled.img`
  border-radius: 3px;
  height: auto;
  max-width: 100%;
  transition: transform 0.2s;
  ${FlowerImageContainer}:hover & {
    transform: scale(1.05);
    border-radius: 7px;
  }
`;

const FlowerTastenotes = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(29, 77, 29, 0.7);
  color: #fffcf5;
  padding: 2.5px 5px;
  border-radius: 20%;
  opacity: 0;
  transition: opacity 0.2s;
  ${FlowerImageContainer}:hover & {
    opacity: 1;
    ${Img} {
      transform: scale(1.05);
      border-radius: 7px;
    }
  }
`;

function Home(props) {
  const flowers = useSelector((state) => state.flowers);
  const [titleClassName, setTitleClassName] = useState("title-h1");
  function titleClick() {
    console.log(
      "Du kan plocka flera av blommorna i det vilda. Blåbärsblommor är ett bra vandringssnacks!"
    );
    titleClassName === "title-h1-clicked"
      ? setTitleClassName("title-h1")
      : setTitleClassName("title-h1-clicked");
  }

  return (
    <Div className={props.className}>
      {flowers && flowers.length >= 2 && (
        <ul className="ul-title">
          <li className="img-title-left" key={flowers[0].id}>
            <Link to={`/flower/${flowers[0].id}`}>
              <FlowerImageContainer>
                <Img src={flowers[0].img} alt={flowers[0].name} />
                <FlowerTastenotes>
                  {flowers[0].tastenotes.join(", ")}
                </FlowerTastenotes>
              </FlowerImageContainer>
            </Link>
          </li>
          <li className="text-title">
            <h1 className={titleClassName} onClick={titleClick}>
              Blomgott
            </h1>
            <p>Ätbara blommor och recept</p>
          </li>
          <li className="img-title-right" key={flowers[1].id}>
            <Link to={`/flower/${flowers[1].id}`}>
              <FlowerImageContainer>
                <Img src={flowers[1].img} alt={flowers[1].name} />
                <FlowerTastenotes>
                  {flowers[1].tastenotes.join(", ")}
                </FlowerTastenotes>
              </FlowerImageContainer>
            </Link>
          </li>
        </ul>
      )}

      {flowers && flowers.length > 2 && (
        <ul className="ul-lawn">
          {flowers.slice(2, 18).map((flower) => (
            <li key={flower.id}>
              <Link to={`/flower/${flower.id}`}>
                <FlowerImageContainer>
                  <Img
                    key={flower.id}
                    src={flower.img}
                    alt={flower.name}
                    style={{
                      marginTop: "-2px",
                      marginBottom: "-3px",
                    }}
                  />
                  <FlowerTastenotes>
                    {flower.tastenotes.join(", ")}
                  </FlowerTastenotes>
                </FlowerImageContainer>
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
    color: rgb(240, 248, 255);
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .text-title {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
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

  .title-h1 {
    background-color: rgb(120, 156, 182);
    color: rgb(252, 252, 253);
    font-size: 3.4rem;
    height: 100%;
    margin: 0;
    width: 100%;
  }

  .title-h1-clicked {
    color: #fcfcfd;
    font-size: 3.4rem;
    height: 100%;
    margin: 0;
    text-shadow: 2px 2px 5px rgb(221, 242, 137), -2px -2px 5px #ddf289,
      -2px -2px 15px rgb(255, 204, 0), 2px 2px 15px rgb(255, 204, 0);
    width: 100%;
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
