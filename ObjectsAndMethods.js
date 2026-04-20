
const post = {
    username: 'Eric',
    caption: 'The code that I created runs efficiently',
    likes: 2,
    comments: [],
    addLikes(){
        this.likes += 1;
    }
}

const {username, caption} = post;

console.log(username, "'s caption:", caption);