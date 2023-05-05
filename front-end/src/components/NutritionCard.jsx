import { useContext } from "react";
import { UserContext } from "../utils/context";
import caloriesIcon from "../assets/dashboard-icons/calories-icon.png";
import proteinIcon from "../assets/dashboard-icons/protein-icon.png";

import carbohydrateIcon from "../assets/dashboard-icons/carbs-icon.png";
import fatIcon from "../assets/dashboard-icons/fat-icon.png";

export function NutritionCard() {
  const context = useContext(UserContext);
  const { calorieCount, carbohydrateCount, proteinCount, lipidCount } =
    context.userInfos.keyData;

    
  const nutritions = [
    {
      icon: caloriesIcon,
      // Intl = object for internationalization format (Nbers, dates, currencies etc.)
      value: new Intl.NumberFormat("en-EN", {style: "decimal",maximumFractionDigits: 0}).format(calorieCount),
      unit: "kCal",
      unitName: "Calories"
    },
    {
      icon:proteinIcon,
      value: proteinCount,
      unit: "g",
      unitName: "Protéines"
    },
    {
      icon:carbohydrateIcon,
      value: carbohydrateCount,
      unit: "g",
      unitName: "Gluciides"
    },
    {
      icon:fatIcon,
      value: lipidCount,
      unit: "g",
      unitName: "Lipides"
    }
  ];

  if (!context.hasLoaded) {
    return <></>;
  }
  console.log(context.userInfos.keyData);

  return (
    <>
      {nutritions.map((nutrition) => (
        <div className="nutritionCard">
          <img
            className="nutritionCardIcon"
            src={nutrition.icon}
            alt="nutrition card icon"
          />
          <div className="nutritionCardText">
            <div className="nutritionCardKeyData">
              {nutrition.value}
              {nutrition.unit}
            </div>
            <div className="nutritionCardKeytype">{nutrition.unitName}</div>
          </div>
        </div>
      ))}
    </>
  );
}
