import { useReducer } from "react";

const initialValue = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      let updatedItem;
      if (existingItem >= 0) {
        updatedItem[existingItem] = {
          ...updatedItem[existingItem],
          quantity: updatedItem[existingItem].quantity + 1,
        };
      } else {
        updatedItem = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      return {
        ...state.item,
        items: updatedItem,
        totalPrice: updatedItem.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        totalItems: updatedItem.reduce((acc, item) => acc + item.quantity, 0),
      };
    }
    default:
      return state;
  }
};
const LreanReducer = () => {
  const [state, dispatch] = useReducer(productReducer, initialValue);
  const product = [
    {
      id: 1,
      name: "Hello",
      price: 23.4,
    },
    {
      id: 2,
      name: "Word",
      price: 44.5,
    },
    {
      id: 3,
      name: "Update",
      price: 20.4,
    },
  ];

  console.log(state.items);

  return (
    <div>
      <h2>Shopping Cart using use Reducer</h2>

      {product.map((item) => (
        <div
          style={{ border: "1px solid green", margin: "10px", padding: "10px" }}
          key={item.id}
        >
          <p>
            {item.name} ${item.price}
          </p>
          <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>
            Add to cart
          </button>
        </div>
      ))}

      <div>
        <h2>Shppoing Cart</h2>
        {state.items.length === 0 ? (
          <p>No product in a Cart</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div
                style={{
                  border: "1px solid green",
                  margin: "10px",
                  padding: "10px",
                }}
                key={item.id}
              >
                <p>
                  {item.name} - ${item.price} x{item.quantity}
                </p>
                <button>Clear to cart</button>
              </div>
            ))}

            <h3>Total Items: {state.totalItems}</h3>
            <h3>Total Price: {state.totalPrice}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default LreanReducer;
