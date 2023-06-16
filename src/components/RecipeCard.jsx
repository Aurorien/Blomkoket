import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  background-color: #dfd9ff;
  border-color: rgb(242, 173, 83);
  border-radius: 10px;
  border-style: double;
  border-width: 0.3em;
  margin: ${(props) => props.margin}px;
  max-width: fit-content;
  padding: 15px;
  transition: transform 0.05s;
  &:hover {
    transform: scale(1.05);
  }
`;

function RecipeCard(props) {
  const flowerId = props.flowerId;
  const recipes = useSelector((state) => state.recipes);
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.flowerIds.includes(parseInt(flowerId))
  );

  console.log("props.value", props.flowerId);
  console.log("Recipes", recipes);
  console.log("recipe", filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>Inga recept än.</p>;
  }

  return (
    <>
      {filteredRecipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          style={{ textDecoration: "none" }}
        >
          <Div key={recipe.id} margin={props.margin}>
            {recipe.title}
          </Div>
        </Link>
      ))}
    </>
  );
}

RecipeCard.propTypes = {
  flowerId: PropTypes.number,
  margin: PropTypes.number,
};

export default RecipeCard;
