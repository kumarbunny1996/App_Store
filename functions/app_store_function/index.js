const express = require("express");
const handleAddPost = require("./Actors/addPost.actor");
const handlePosts = require("./Actors/posts.actor");
const handleAddAlbum = require("./Actors/addAlbum.actor");
const handleAlbums = require("./Actors/albums.actor");
const handleSinglePost = require("./Actors/getPost.actor");
const handleUpdatePost = require("./Actors/updatePost.actor");
const handleDeletePost = require("./Actors/deletePost.actor");
const app = express();
app.use(express.json());
console.log(process.env);
app.post("/api/addPost", (req, res) => {
  handleAddPost(req, res);
});
app.get("/api/postsList", (req, res) => {
  handlePosts(req, res);
});
app.post("/api/album", (req, res) => {
  handleAddAlbum(req, res);
});
app.get("/api/albumsList", (req, res) => {
  handleAlbums(req, res);
});
app.get("/api/post", (req, res) => {
  handleSinglePost(req, res);
});
app.put("/api/updatePost", (req, res) => {
  handleUpdatePost(req, res);
});
app.delete("/api/deletePost", (req, res) => {
  handleDeletePost(req, res);
});

module.exports = app;
