/* eslint-disable react-refresh/only-export-components */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import styled from "styled-components";

interface Recipe {
  id: number;
  title: string;
  source: string;
  ingredients: Ingredient[];
  method: [];
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
  recipes: Recipe[];
}

function Recipe(props: StyledComponentsProps) {
  const { id } = useParams<Params>();
  const recipes = useSelector((state: RootState) => state.recipes);
  const recipe = useMemo(() => {
    if (id !== undefined) {
      return (
        recipes && recipes.find((recipeItem) => recipeItem.id === parseInt(id))
      );
    }
    return null;
  }, [recipes, id]);

  return (
    <div className={props.className}>
      {recipe && (
        <article>
          <h1>{recipe.title}</h1>
          <p>Källa: {recipe.source}</p>
          <section>
            <h2>Ingredienser</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
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
      )}
    </div>
  );
}

export default styled(Recipe)`
  background-color: #6cb8fa;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
  overflow-wrap: break-word;
  width: 100vw;
  text-shadow: 7px 7px 10px white, -7px -7px 10px white, 7px 7px 18px white,
    -7px -7px 18px white;

  article {
    width: 100vw;
    padding: 7% 0 90px 10%;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0;
    padding-right: 40px;
  }

  h2 {
    font-size: 1.3em;
    margin-top: 27px;
  }

  ol,
  ul {
    max-width: 550px;
    li {
      margin-bottom: 10px;
      padding-right: 40px;
    }
  }

  p {
    font-size: 0.7rem;
    margin-top: 10px;
    margin-left: -20px;
    padding: 0 25px 0 25px;
    width: fit-content;
    &:hover {
      font-size: 1rem;
    }
  }

  @media (min-width: 845px) {
    article {
      max-width: 100vw;
    }
  }
`;
