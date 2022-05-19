import React , {useState,useEffect}from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
//import { Table } from 'react-materialize';


const Card = () => {


    //useEffect- when ccomponent is rendering get all the data from database and insert those inot albums array
    //useState -hook- They let you use state and other React features without writing a class.
    //update value in an object in an array using useStae
    const [albums, setAlbums] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
    
        const fetchData = async () => {
            const albumsData = await axios.get('http://localhost:8090/album/')
            setAlbums(albumsData.data)
            setLoading(false);
    
        }
        fetchData()
    },[])
                
    if(isLoading) { return <div> Loading ... </div> }; 


    return(
      <div className='container'>
        <h1>All Albums</h1>
       
        <table className="table">
            <thead>
                <tr>
                <th scope="col" data-field="id">
                Album ID
                </th>
                <th scope="col" data-field="category">
                Category
                </th>
                <th scope="col" data-field="groomName">
                Groom's Name
                </th>
                <th scope="col" data-field="phone">
                Phone
                </th>
                <th data-field="date">
                Date
                </th>
                <th>
                <button type="button" class="btn btn-success btn-lg " >Download</button>
                </th>
                </tr>
            </thead>
            <tbody>
            {
          albums.length >= 1
          ? albums.map(album => 
              <tr key={album._id}>
                 <td className="table-primary">
                  {album.albumId}
                </td>
                <td className="table-secondary">
                  {album.category}
                </td>
                <td className="table-success">
                  {album.groomName}
                </td>
                <td className="table-danger">
                  {album.brideName}
                </td>
                <td className="table-warning">
                  {album.date}
                </td>
                <td className="table-info">
                  {album.phone}
                </td>
                <td className="table-light">
                  {album.coverImg}
                </td>
                {/* <td className="table-success">
                  {album.NIC}
                </td>
                <td className="table-danger">
                  {album.userName}
                </td> */}

                {/*update Staff member*/}

                <td data-field="button">
                {/* <Link className="btn btn-warning" to={`/update/${album._id}`} > Update </Link> */}
                
                </td>

            {/*delete album member by albumId*/}
                <td data-field="button">
                <button type="button" class="btn btn-danger"
                   onClick={() => {
                    const idAlbum = album.albumId
                    console.log(album.albumId)
                    axios.delete("http://localhost:8090/album/delete/"+idAlbum).then(() => {
                        alert("Album Deleted")
                        window.location = '/'; //current location-auto refresh
                    }).catch((err) => {
                        alert(err)
                    })
                }}
                >Delete</button>
                </td>
               
              </tr>
            )
            :<tr>
                <td>There is no Staff Member</td>
             </tr>
            
            }
        </tbody>
        </table>
        
        </div> 
    );

//implement delete method

/*<th data-field="password">Password</th> 

 <td>{album.password}</td>*/

}

export default Card;