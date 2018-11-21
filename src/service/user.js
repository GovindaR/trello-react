import axios from 'axios';

export async function getJson(){
   const response= await axios.get('https://us-central1-school-ef9c0.cloudfunctions.net/getUsers', {
     
      })
return response.data;
}

export async function postJson(data){
  const response=await axios.post('https://us-central1-school-ef9c0.cloudfunctions.net/addUser', data)
  .then(function (response) {
    return response;
    console.log(response);
  })

  .catch(function (error) {
    return error;
    console.log(error);
  });

}