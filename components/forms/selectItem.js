// import { getSingleItem } from '../../api/itemData';
// import renderToDOM from '../../utils/renderToDom';

// const selectItem = (ItemId) => {
//   let domString = `<label for="Item">Select an Item</label>
//     <select class="form-control" id="Item_id" required>
//     <option value="">Select an Item</option>`;

//   getSingleItem().then((ItemsArray) => {
//     ItemsArray.forEach((Item) => {
//       domString += `
//           <option
//             value="${Item.firebaseKey}"
//             ${ItemId === Item.firebaseKey ? 'selected' : ''}>
//               ${Item.name} ${Item.price}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-Item', domString);
//   });
// };

// export default selectItem;
