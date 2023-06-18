/* eslint-disable react-refresh/only-export-components */
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import styled from "styled-components";

interface Flower {
  id: number;
  name: string;
  tastenotes: string;
  img: string;
}

interface Recipe {
  id: number;
  title: string;
  source: string;
  flowerIds: number[];
  ingredients: Ingredient[];
  method: string[];
}

interface Ingredient {
  amount: string;
  unit: string;
  ingredient: string;
}

interface Params extends Record<string, string> {
  id: string;
}

interface StyledComponentsProps {
  className: string;
}

interface RootState {
  flowers: Flower[];
  recipes: Recipe[];
}

function Recipe(props: StyledComponentsProps) {
  const { id } = useParams<Params>();
  const flowers = useSelector((state: RootState) => state.flowers);
  const recipes = useSelector((state: RootState) => state.recipes);
  const recipe = useMemo(() => {
    if (id !== undefined) {
      return (
        recipes && recipes.find((recipeItem) => recipeItem.id === parseInt(id))
      );
    }
    return null;
  }, [recipes, id]);

  const flowerIds = useMemo(() => recipe?.flowerIds ?? [], [recipe]);
  const flowersUsed = useMemo(() => {
    return flowers?.filter((flower) => flowerIds.includes(flower.id));
  }, [flowers, flowerIds]);

  return (
    <div className={props.className}>
      {recipe && (
        <div className="recipe-container">
          <article style={{ padding: " 7% 0 20px 10%", width: "400px;" }}>
            <h1>{recipe.title} </h1>
            <p>Källa: {recipe.source}</p>
            <section>
              <h2>Ingredienser</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount} {ingredient.unit}{" "}
                    {ingredient.ingredient}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Beredning</h2>
              <ol>
                {recipe.method.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ol>
            </section>
          </article>

          <article
            style={{
              width: "230px",
              backgroundColor: "rgb(211, 205, 192)",
              marginTop: 0,
              minHeight: "100vh",
            }}
          >
            <h2 className="recipe-flowers-used-h2">Blommor i receptet:</h2>
            <ul className="recipe-flowers-used">
              {flowersUsed.map((flower, index) => (
                <li key={index}>
                  <Link to={`/flower/${flower.id}`}>
                    <img src={flower.img} alt={flower.name} />
                    <p>{flower.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </div>
  );
}

export default styled(Recipe)`
  background-color: #b2cad5;
  color: #1b1b1b;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
  overflow-wrap: break-word;
  width: 100vw;
  text-shadow: 7px 7px 18px white, -7px -7px 18px white -7px 7px 18px white,
    7px -7px 18px white;

  article {
    min-height: 100vh;
    max-width: 490px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0;
    padding-right: 60px;
  }

  h2 {
    font-size: 1.3em;
    margin-top: 27px;
    margin-bottom: 40px;
  }

  ol,
  ul {
    max-width: 400px;
    li {
      margin-bottom: 10px;
      padding-right: 70px;
    }
  }

  p {
    font-size: 0.7rem;
    margin-top: 0;
    margin-bottom: 6px;
    margin-left: -20px;
    padding: 0 25px 0 25px;
    width: fit-content;
    &:hover {
      font-size: 1rem;
    }
  }

  .recipe-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  .recipe-flowers-used {
    list-style-type: none;

    a {
      text-decoration: none;
    }

    img {
      border-radius: 7px;
      max-width: 150px;
    }

    li {
      padding-bottom: 10px;
      padding-right: 0;
      width: 150px;
      transition: transform 0.05s;
      &:hover {
        transform: scale(1.05);
      }
    }
    p {
      font-size: 1rem;
    }
  }

  .recipe-flowers-used-h2 {
    color: #241554;
    margin-left: 28px;
  }

  @media (min-width: 704px) and (max-width: 750px) {
    h1 {
      padding-right: 100px;
    }
  }

  @media (min-width: 845px) {
    .recipe-container {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;
