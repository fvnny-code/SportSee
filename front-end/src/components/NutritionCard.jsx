// import { useContext } from "react";
// import { UserContext } from "../../utils/context";

export function NutritionCard() {
//   const context = useContext(UserContext);
//   console.log(context.keyData);

//   if (!context.hasLoaded) {
//     return <></>;
//   }

  

  return (
    
    <div className="nutritionCard">
      <img className="nutritionCardIcon" src="" alt="nutrition card icon" />
      <div className="nutritionCardText">
        <div className="nutritionCardKeyData">calorieCount</div>
        <div className="nutritionCardKeytype">Calories</div>
      </div>
    </div>
       
    
  );
}
