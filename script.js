var typed=new Typed(".text",{
    strings:["Frontend Developer","Backend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
}

function opentab(tabname) {
  // Remove active classes from all tabs and contents
  for (let tablink of tablinks) {
   
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
}
 

  // Add active class to the clicked tab and corresponding content
 event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}

function closemenu(){
  sidemenu.style.right="-200px";
}


document.querySelector('.contact-form form').addEventListener('submit', async function (e) {
  console.log("clicked");
  e.preventDefault();

  const formData = new FormData(e.target);
  console.log(formData);

  const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
      }),
  });

  if (response.ok) {
      alert('Message sent successfully!');
      e.target.reset();
  } else {
      alert('Failed to send message.');
  }
});
