// Write your Character component here
import React from "react";
import StyledCharacters from "./StyledChar"

const Characters = (props) => {
    const { data } = props;

    return <div className="organize-sec">
        {data.map((listOfCharacters) => {
            return(
                <>
                    <StyledCharacters>
                        <h1 className="StarNames">{listOfCharacters.name}</h1>
                        <h2>Gender: {listOfCharacters.gender}</h2>
                        <h2>Height: {listOfCharacters.height}</h2>
                        <h2>Mass: {listOfCharacters.mass}</h2>
                        <h2>Birth Year: {listOfCharacters.birth_year}</h2>
                        <h2>Hair Color: {listOfCharacters.hair_color}</h2>
                        <h2>Eye Color: {listOfCharacters.eye_color}</h2>
                    </StyledCharacters>
                </>
            )
        })}
    </div>
}
export default Characters