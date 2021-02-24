# Example Daily Harvest reducer transformations

## Hiding a Banner

**Spread**

```javascript
case UIActionTypes.UI_HIDE_BANNER:
  return {
      ...state,
      banner: {
          ...state.banner,
          component: null,
      },
  };
```

**Lenses**

```javascript
case UIActionTypes.UI_HIDE_BANNER:
  return Lenses.bannerComponent.set(null)(state);
```

## Creating an Address

**Spread**

```javascript
case UserActionTypes.USER_ADDRESS_CREATE_SUCCESS:
  return {
    ...state,
    addresses: [...state.addresses, action.address],
  };
```

**Lenses**

```javascript
case UserActionTypes.USER_ADDRESS_CREATE_SUCCESS:
  const extantAddresses = Lenses.userAddresses(state);

  return Lenses.userAddresses.set(
    extantAddresses.concat([action.address])
  )(state);
```

## Adding a Product to the Cart

**Spread**

```javascript
case CartActionTypes.CART_ADD_PRODUCT_SUCCESS:
  const { quantity, sku } = action.payload;
  const currentQuantity = get(state, `products[${sku}].quantity`);
  const updatedQuantity = isNumber(currentQuantity)
    ? currentQuantity + quantity
    : quantity;

  return {
    ...state,
    products: {
      ...state.products,
      [sku]: {
        sku,
        quantity: updatedQuantity,
      },
    },
  };
```

**Lenses**

```javascript
case CartActionTypes.CART_ADD_PRODUCT_SUCCESS:
  const { quantity, sku } = action.payload;
  const currentQuantity = get(state, `products[${sku}].quantity`);
  const updatedQuantity = isNumber(currentQuantity)
    ? currentQuantity + quantity
    : quantity;

  return Lenses.cartProducts(sku).set({
    sku,
    quantity: updatedQuantity
  })(state);
```
