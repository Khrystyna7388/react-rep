import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
    const [counter, setCounter] = useState(1);
    const [getValue, setValue] = useState(null);
    const firsInput = React.useRef();
    const secondInput = React.useRef();

    const PostList = ({posts}) => {
        return (
            <>
                {posts.map(post =>
                    <div key={post.id}>
                        <h3>post title: {post.title}</h3>
                        <h3>post body: {post.body}</h3>
                    </div>
                )}
             </>
        )
    }

    const CommentLIst = ({comments}) => {
        return (
            <>
                {comments.map(comment =>
                    <div key={comments.id}>
                        <h3>comment name: {comment.name}</h3>
                        <h3>comment body: {comment.body}</h3>
                    </div>)}
            </>
        )
    }

    const AlbumList = ({albums}) => {
        return (
            <>
                {albums.map(album =>
                    <div key={album.id}>
                        <h3>album title: {album.title}</h3>
                    </div>)}
            </>
        )
    }

    const PhotoList = ({photos}) => {
        return (
            <>
                {photos.map(photo =>
                    <div key={photo.id}>
                        <h3>photo title {photo.title}</h3>
                    </div>)}
            </>
        )
    }

    const TodoList = ({todos}) => {
        return (
            <>
                {todos.map(todo =>
                    <div key={todo.id}>
                        <h3>todoo title: {todo.title}</h3>
                    </div>)}
            </>
        )
    }

    const UserList = ({users}) => {
        return (
            <>
                {users.map(user =>
                    <div key={user.id}>
                        <h3>user name: {user.name()}</h3>
                        <h3>user username: {user.username}</h3>
                        <h3>user email: {user.email}</h3>
                    </div>)}
            </>
        )
    }

    const POSTS = 'posts';
    const COMMENTS = 'comments';
    const ALBUMS = 'albums';
    const PHOTOS ='photos';
    const TODOS = 'todos';
    const USERS = 'users';


    const intCounter = () => {
        if (typeof counter === 'number' && counter > 0 && counter <= 100) {
            setCounter(secondInput.current.value);
            console.log(counter);
        }
    }

    const _url = 'https://jsonplaceholder.typicode.com/';

    const getFetch = async () => {
        // let response;
        // if(secondInput.current.value){
        const response = await fetch(`${_url}${firsInput.current.value}/${counter}`);
        // } else {
        //     response = await fetch(`${firsInput.current.value}`);
        // }
        const data = await response.json();
        setValue(data);
    }

    useEffect(() => {
        getFetch();
    }, [counter]);

    console.log(getValue);
    // console.log(firsInput.current.value);
    // console.log(firsInput.target.value);
    console.log(firsInput);

    return (
        <div className="App">
            <input ref={firsInput} type="text" name="url" placeholder="enter url"/>
            <input ref={secondInput} type="number" name="id" placeholder="enter id"/>
            <button onClick={intCounter}>submit</button>
            {/*{!!getValue && (*/}
            {/*    // <h2>{value.title} - {value.body}</h2>*/}
            {/*    // <PostList posts={getValue}/>*/}
            {/*// )}*/}



            {/*{firstInput.current.value === POSTS && <PostList/>}*/}      щось таке хочу
            {/*{firstInput.current.value === POSTS && <h2>{getValue.title} - {getValue.body}</h2>}*/}  щось таке хочу
        </div>
    );
}

export default App;
