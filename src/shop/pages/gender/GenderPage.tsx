import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { useParams } from "react-router";

export const GenderPage = () => {
  const { gender } = useParams();
  const genderLabel =
    gender === "men" ? "Hombres" : gender === "women" ? "Mujeres" : "Niños";

  return (
    <>
      <CustomJumbotron title={`Productos para ${genderLabel}`} />
    </>
  );
};
