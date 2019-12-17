import('./src/assets/styles/index.scss')
import PropTypes from 'prop-types'

export const wrapRootElement = ({ element }) => element

wrapRootElement.propTypes = {
    element: PropTypes.object,
}
