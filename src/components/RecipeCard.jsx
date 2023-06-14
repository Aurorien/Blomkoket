import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  border-color: rgb(242, 173, 83);
  border-width: 1em;
  border-radius: 10px;
  max-width: fit-content;
  padding: 15px;
  background-color: #f5d9ff;
  margin: ${(props) => props.margin}px;
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
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
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
