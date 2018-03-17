import axios from "axios";

export default {
  // Gets all orders
  getOrders: function() {
    return axios.get("/api/orders");
  },
  // Gets the book with the given id
  getOrder: function(id) {
    return axios.get("/api/orders/" + id);
  },
  // Deletes the book with the given id
  deleteOrder: function(id) {
    return axios.delete("/api/orders/" + id);
  },
  // Saves a book to the database
  saveOrder: function(bookData) {
    return axios.post("/api/orders", orderData);
  }
};
