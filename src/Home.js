import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const handleClick = () => {
    //     console.log('Hello');
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name);
    // }

    // const [name,setName] = useState('Emerald');
    // const [age, setAge] = useState(20);

    // const handleClick = () =>{
    //     setName('Beryl');
    //     setAge(22);
    // }

    const [blogs, setBlogs] = useState(null);

    const [name,setName] = useState('emerald');

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            console.log(data);
        })
    },[])

    return ( 
        <div className="home">
            
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={()=>{handleClickAgain('Emerald')}}>Click Again</button> */}

            {/* <p>{ name } is {age}</p> */}
            {/* <button onClick={handleClick}>Click</button> */}

            {blogs && <BlogList blogs={blogs} title= "All Blogs" handleDelete={handleDelete} />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title= "Mario's Blogs" /> */}
            {/* <button onClick={()=> setName('beryl')}>Change Name</button> */}
            {/* {name} */}
        </div>
     );
}
 
export default Home;