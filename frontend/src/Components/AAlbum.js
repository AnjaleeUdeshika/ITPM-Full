import React , {useState,useEffect}from 'react';
import axios from 'axios';

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

const  AAlbum = () => {


//useEffect- when ccomponent is rendering get all the data from database and insert those isnot albums array
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
                 

  return (
    <div className="AAlbum">
    
        {
          albums.length >= 1
          ? albums.map(album => 
            <MDBRow className='mb-3'>
              <MDBCol size='6' lg='4' >
                <MDBCard className='h-100' key={album._id}>
                  <MDBCardBody>
                    <MDBCardText>{album.albumId}</MDBCardText>
                    <MDBCardTitle className="card-title"><h3>{album.groomName} {'+'} {album.brideName}</h3></MDBCardTitle>
                    <MDBCardText>{album.tool}</MDBCardText>
                    <MDBCardText>{album.phone}</MDBCardText>
                    <MDBCardText>{album.date}</MDBCardText>
                    {/* <MDBCardText>{album.description}</MDBCardText> */}
                  </MDBCardBody>
                  <MDBCardFooter>

                    {/* UPDATE BUTTON */}

                    {/* <MDBBtn color='success' href='/update/${album._id}'>Edit</MDBBtn> */}
                   <MDBBtn className="btn btn-success" href={`/update/${album._id}`} > Edit </MDBBtn>
                    
                    {/*delete staff member by staffId*/}

                    <MDBBtn className='mx-2' color='danger'
                        onClick={() => {
                            const idAlbum = album._id
                            console.log(album._id)
                            axios.delete("http://localhost:8090/album/delete/"+idAlbum).then(() => {
                                alert("Album Deleted Successfully")
                                window.location = '/'; //current location-auto refresh
                            }).catch((err) => {
                                alert(err)
                            })
                    }}
                    >Delete </MDBBtn>

                  </MDBCardFooter>
                  <a href="/weddingalbum" >
                  <MDBCardImage
                    size='6' lg='8'
                    src={album.coverImg}
                    alt='cover image of the album'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            )
            :<div>
                <div>There is no Albums</div>
             </div>
            
            }

    </div>
  );
}

export default AAlbum;
