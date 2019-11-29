import React from "react";
import PropTypes from "prop-types";

const foodLike = [
  {
    id: 1,
    name: "김치",
    image: "http://www.mknews.kr/files/attach/news/20170705095650-tmp.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "삼겹살",
    image:
      "http://static.hubzum.zumst.com/hubzum/2018/02/05/10/00ada3e050e9403ba3214006a9e2b5fe.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "보쌈",
    image:
      "https://ext.fmkorea.com/files/attach/new/20170508/486616/38307501/647835939/5a36febeaa11240030120a3f628aa65d.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "된장찌개",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2018/08/14/ac0570d0e08584bcc98f5c07a5f961251.jpg",
    rating: 4.2
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt={name} />
      <h4>{rating}/5</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodLike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
