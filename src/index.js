import './index.css'; // loads all styles

import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  // Must use array.from to create a real array from a DOM collection
  // getElementByClassName() only returns an array-like object

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      // grab the anchor tag
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      // grab row, goes up two parents from a tag to td, then tr
      const row = element.parentNode.parentNode;
      // tell tbody to remove child (the row)
      row.parentNode.removeChild(row);
    }
  })
});
