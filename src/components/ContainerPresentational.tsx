import { useEffect, useState } from "react";

export function useDogImages() {
    const [dogs, setDogs] = useState([]);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breed/labrador/images/random/6")
        .then(res => res.json())
        .then(({ message }) => setDogs(message));
    }, []);
  
    return dogs;
}

export function DogImages() {
    const dogs = useDogImages();

    return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}

// follow separation of concerns pattern
// presentational and container and handlers everything need to be separated
// designer can easily design in presentaional component
