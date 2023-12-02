module.exports = (mongoose) => {
    const postSchema = mongoose.Schema({
        name: String,
        description: String,
        facility: String,
        location: String,
        price: Number,
        images: [String],
        link: String
    },
    {
        timestamps: true
    })

    postSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    const Post = mongoose.model("posts", postSchema);
    return Post
}