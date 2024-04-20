import react from "react";

const Rating = ({ rate }) => {
  const stars = rate;
  console.log(`RATE = ${stars}`);
  return (
    <div>
      {stars >= 1 ? (
        <i class="fa-solid fa-star" aria-hidden="true"></i>
      ) : (
        <i class="fa-regular fa-star" aria-hidden="true"></i>
      )}
      {stars >= 2 ? (
        <i class="fa-solid fa-star" aria-hidden="true"></i>
      ) : (
        <i class="fa-regular fa-star" aria-hidden="true"></i>
      )}
      {stars >= 3 ? (
        <i class="fa-solid fa-star" aria-hidden="true"></i>
      ) : (
        <i class="fa-regular fa-star" aria-hidden="true"></i>
      )}
      {stars >= 4 ? (
        <i class="fa-solid fa-star" aria-hidden="true"></i>
      ) : (
        <i class="fa-regular fa-star" aria-hidden="true"></i>
      )}
      {stars >= 5 ? (
        <i class="fa-solid fa-star" aria-hidden="true"></i>
      ) : (
        <i class="fa-regular fa-star" aria-hidden="true"></i>
      )}
    </div>
  );
};

export default Rating;
