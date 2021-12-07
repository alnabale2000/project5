import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "./../reducers/resturants";
import { useHistory, useParams } from "react-router";

const SearchedRestaurant = () => {
    const [filterValue, setFilterValue] = useState(0);
    const [sortValue, setSortValue] = useState("ASC");
    const name = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            restaurants: state.restaurants.restaurants,
        };
    });

    useEffect(() => {
        console.log("name", name.name);
        axios
            .get(`http://localhost:5000/resturants/${name.name}`, {
                timeSort: sortValue,
            })
            .then((res) => {
                console.log("res.data", res.data);
                dispatch(setRestaurants(res.data));
            });
    }, []);

    const filter = (value) => {
        setFilterValue(value);
    };

    const sort = (value) => {
        setSortValue(value);
    };

    const getAllRestaurants = () => {
        axios
            .get(`http://localhost:5000/resturants/${sortValue}/${filterValue}`, {})
            .then((res) => {
                dispatch(setRestaurants(res.data));
            });
    };

    const goToRestaurant = (id) => {
        history.push(`/restaurant/${id}`);
    };

    return (
        <main>
            <section>
                <div>
                    <p>Higher Of {filterValue}</p>
                    <Slider
                        min={0}
                        max={5}
                        defaultValue={0}
                        onAfterChange={filter}
                        onChange={filter}
                        dots={true}
                    />
                </div>
                <div>
                    <span
                        onClick={() => {
                            sort("DESC");
                        }}
                    >
                        Newest
                    </span>{" "}
                    <span
                        onClick={() => {
                            sort("ASC");
                        }}
                    >
                        Oldest
                    </span>
                </div>
                <button onClick={getAllRestaurants}>Apply</button>
            </section>
            {state.restaurants &&
                state.restaurants.map((restaurant) => (
                    <div
                        className="restaurant"
                        key={restaurant.id}
                        style={{ backgroundImage: `url(${restaurant.resturantImage})` }}
                        onClick={() => {
                            goToRestaurant(restaurant.id);
                        }}
                    >
                        <div className="inner">
                            <p>here :{restaurant.id}</p>
                            <image src={restaurant.resturantImage} alt="no pic" />
                            <h2> {restaurant.resturantName}</h2>
                            <p>plates : {restaurant.plates}</p>
                            <p>{restaurant.rates}/5</p>
                        </div>
                    </div>
                ))}
        </main>
    );
};

export default SearchedRestaurant;
