import bug from "../assets/bug.png"
import fire from "../assets/fire.png"
import flying from "../assets/flying.png"
import grass from "../assets/grass.png"
import normal from "../assets/normal.png"
import poison from "../assets/poison.png"
import water from "../assets/water.png"

export function pokemonType (type) {
    if (type === 'bug'){
        return bug
    }
    if (type === 'fire'){
        return fire
    }
    if (type === 'flying'){
        return flying
    }
    if (type === 'grass'){
        return grass
    }
    if (type === 'normal'){
        return normal
    }
    if (type === 'poison'){
        return poison
    }
    if (type === 'water'){
        return water
    }

}