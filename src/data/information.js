import PropTypes from "prop-types";


export const information = PropTypes.shape({
    title: PropTypes.string.isRequired,
    id:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    points:PropTypes.array
})