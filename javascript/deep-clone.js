/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
const deepClone = (args) => {
    return structuredClone(args)
}

deepClone({
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
            {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
            },
            {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                    "Million tonne punch",
                    "Damage resistance",
                    "Superhuman reflexes"
                ]
            },
            {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                    "Immortality",
                    "Heat Immunity",
                    "Inferno",
                    "Teleportation",
                    "Interdimensional travel"
                ]
            }
        ]
    }
)
