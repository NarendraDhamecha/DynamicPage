var form = document.getElementById('form');
var username = document.getElementById('name');
var email = document.getElementById('mail');
var phone = document.getElementById('phone');
var time = document.getElementById('time');

form.addEventListener('submit',onSubmit)

function onSubmit(e)
{
   e.preventDefault();

   if(username.value==='' || email.value==='' || phone.value==='' || time.value==='')
   {
     console.log(alert('please enter all feilds'));
   }
   else
   {
    let obj = {
        name: username.value,
        email: email.value,
        mobNum: phone.value,
        tym: time.value
    };
    
    axios.post("https://crudcrud.com/api/19e6a28daafc448c98affa31f3c29278/appointmentdata",obj)
    .then((res) => showDetailsOnScreen(res.data))
    .catch(err => console.log(err));
   }
  }

  window.addEventListener('DOMContentLoaded', () =>{
   
    axios.get('https://crudcrud.com/api/19e6a28daafc448c98affa31f3c29278/appointmentdata')
    .then((res) => {
      for(let i=0; i<res.data.length; i++){
        showDetailsOnScreen(res.data[i]);
      }
    });
  })

  function showDetailsOnScreen(user)
  {
    document.getElementById('mail').value = '' ;
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '' ;

    let parentNode = document.getElementById('list');
    let childNode = `<li id=${user.email}> ${user.name} - ${user.email} 
                         <button onclick=deleteUser('${user.email}')> Delete </button>
                         <button onclick=editUser('${user.email}','${user.name}','${user.mobNum}')> edit </button>
                     </li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode;
  }

  function editUser(emailId,name,num)
  {
     document.getElementById('mail').value = emailId;
     document.getElementById('name').value = name;
     document.getElementById('phone').value = num;
     deleteUser(emailId);
  }

  function deleteUser(emailId)
  {
    removeUserFromScreen(emailId);
  }

  function removeUserFromScreen(emailId)
  {
      let parentNode = document.getElementById('list');
      let childNodeToBeDlt = document.getElementById(emailId);
      if(childNodeToBeDlt)
      {
        parentNode.removeChild(childNodeToBeDlt);
      }
  }
   