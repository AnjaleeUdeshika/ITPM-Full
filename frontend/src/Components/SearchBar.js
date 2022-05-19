// import React , {useState,useEffect}from 'react';
// import axios from "axios";
// import '../Styles/SearchBarStyle.css'

// const  SearchBar = () => {

//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       albums: [],
//     //     };
//     //   }
//     //   componentDidMount() {
//     //     this.getAlbums();
//     //   }

//     const [albums, setAlbums] = useState([]);
//     const [isLoading, setLoading] = useState(true);
    
//     useEffect(() => {
    
//         const fetchData = async () => {
//             const albumData = await axios.get('http://localhost:8090/album/')
//             setAlbums(albumData.data)
//             setLoading(false);
    
//         }
//         fetchData()
//     },[])
                
//     if(isLoading) { return <div> Loading ... </div> }; 

//     filterContent(albums, searchTerm) ;{
//         const result = albums.filter(
//           (post) =>
//             post.albumId.toLowerCase().includes(searchTerm) ||
//             post.groomName.toLowerCase().includes(searchTerm) ||
//             post.brideName.toLowerCase().includes(searchTerm) ||
//             post.category.toLowerCase().includes(searchTerm)
//         );
//         this.setState({ albums: result });
//       }
    
// handleTextSearch = (e) => {
// const searchTerm = e.currentTarget.value;
// axios.get("/album").then((res) => {
//     if (res.data.success) {
//      this.filterContent(res.data.albums, searchTerm);
//     }
// });
// };


//     return(
//         <div className="Search-Bar col-lg-12 mt-2 mb-3">
//             <div class="input-group">
//                 <input 
//                     type="search" 
//                     className="form-control rounded" 
//                     placeholder="Search" 
//                     aria-label="Search" 
//                     aria-describedby="search-addon" 
//                     onChange={this.handleTextSearch}
//                     />
//                 {/* <button type="button" class="btn btn-outline-light">search</button> */}
//             </div>
//         </div>

//     );
// }

// export default SearchBar;

