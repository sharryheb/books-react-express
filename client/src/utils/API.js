import axios from "axios";

export default {
  // Search Google Books API
  search: function(query) {
      query = "q=" + query.replace(" ", "+");
      let endpoint = "https://www.googleapis.com/books/v1/volumes?";
      let apiKey = "&apikey=" + process.env.API_KEY;
      let request = endpoint + query + apiKey;

      return axios.get(request);
  },

  getBooks: function() {
    return axios.get("/api/saved");
  },

  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/search", bookData);
  }
};
