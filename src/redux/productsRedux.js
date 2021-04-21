/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const compareProducts = ({ products }) =>
  products.filter(product => product.compare === true);

//action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

//action types
export const COMPARING_ADD_REMOVE = createActionName('COMPARING_ADD_REMOVE');
const ADD_FAVORITE = createActionName('ADD_FAVORITE');
const REMOVE_FAVORITE = createActionName('REMOVE_FAVORITE');

//action creators
export const comparingAddRemove = productId => ({
  payload: { productId },
  type: COMPARING_ADD_REMOVE,
});

export const addFavorite = payload => ({ payload, type: ADD_FAVORITE });
export const removeFavorite = payload => ({ payload, type: REMOVE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case COMPARING_ADD_REMOVE: {
      const maxQuantity = 4;
      const productIndex = statePart.findIndex(
        ({ id }) => id === action.payload.productId
      );
      const compareLenght = statePart.filter(product => product.compare).length;

      if (compareLenght === maxQuantity && !statePart[productIndex].compare) {
        return statePart;
      }

      statePart[productIndex] = {
        ...statePart[productIndex],
        compare: !statePart[productIndex].compare,
      };
      return [...statePart];
    }
    case ADD_FAVORITE: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.favorite = true;
        }
        return product;
      });
    }
    case REMOVE_FAVORITE: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          product.favorite = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}
