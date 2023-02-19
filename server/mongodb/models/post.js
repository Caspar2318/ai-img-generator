import mongoose from "mongoose";

const Post = new mongoose.Schema({
  nane: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, reuqired: true },
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
