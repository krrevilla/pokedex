import PropTypes from 'prop-types';

export const pokemonSpriteType = {
    back_default: PropTypes.string.isRequired,
    back_female: PropTypes.string,
    back_shiny: PropTypes.string,
    back_shiny_female: PropTypes.string,
    front_default: PropTypes.string.isRequired,
    front_female: PropTypes.string,
    front_shiny: PropTypes.string,
    front_shiny_female: PropTypes.string,
    other: PropTypes.shape({
        'official-artwork': PropTypes.shape({
            front_default: PropTypes.string.isRequired
        })
    })
};

export const pokemonTypesType = {
    slot: PropTypes.number.isRequired,
    type: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
};

export const pokemonType = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape(pokemonSpriteType).isRequired,
    types: PropTypes.arrayOf(PropTypes.shape(pokemonTypesType)).isRequired
};
