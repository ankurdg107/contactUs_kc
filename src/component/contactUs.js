import '../component/contactUs.css';
function ContactUs() {
  return (
  <>
{/* <header className='App'> 
<form className='form'>

<label className='title '>Contact </label><div className='us title'>Us</div>    
    <label className='text mt-5'>Any question or remarks? Just write us a message</label>
  
<div class="d-flex flex-column mb-3 mt-5">
  <div class="p-2">
  <div class="d-flex flex-row mb-3">
  <div class="p-2"><label className='formtext  fname'>first name</label>
  <br></br>
    <input  type="text" placeholder="Matthew" ></input></div>
  <div class="p-2"> <label className='formtext lname'>last name</label>
   <br></br>

    <input  type="text" placeholder="perry" ></input></div>
</div>
  </div>
  <div class="p-2"> <label className='formtext'>Mail</label>
    <br></br>
    <input  type="email" placeholder="matthew.perry@gmail.com" ></input>
    <br></br><br></br></div>
  <div class="p-2">  <label className='formtext'>Message</label>
    <input  type="textbox" placeholder="Write your message..." ></input></div>
    <div class="p-2"> 
    <button type="Submit" className='btn btn-primary'> Send my message</button>

    </div>
</div>

  </form>
</header> */}
<div class="d-flex justify-content-around App">
  <div className='form'> 
  <div class="d-flex flex-column mb-3 ">
  <div class=" div1 d-flex flex">
  
  <div class="contact title">Contact</div> 
  <div class="us">Us</div>

    </div>
  <div class="div2 text">Any question or remarks? Just write us a message</div>
  <div class=" d-flex flex">
  <div class=" d-flex flex-column">
  <div class=" div3_1_1  formtext">first name</div>
  <input className="" type="text"></input>
  </div>
  <div class=" bg-secondaryd-flex flex-column">
  <div class="div3_1_1 div3_2_1 formtext">last name</div>
  <input className="" type="text"></input>
  </div>
  </div>
  <div class="div3_1_1 formtext">Mail</div>
  <input className="" type="email"></input>
  <div class="div3_1_1 formtext"> Message</div>
  <textarea class=" div7" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div class="d-flex align-items-end justify-content-end flex-column mb-3"   >

  <button class="btn btn-primary button button" >Send my Message</button>
</div>
</div>
   </div>
  <div className='form2 d-flex flex-column justify-content-around'>
  <div className=" text2 form2txt" >
  Or check out these resources
  </div>
  <div className="discord">
  <div class="d-flex flex-row mb-3">
  <div class="d-flex flex-column justify-content-center logos">
    <div className='dislogo'>
      logo
    </div>
    </div>
  <div class=" d-flex flex-column  texts">
    <div className='title2  form2txt'>
    Join our community on Discord
    </div>
    <div className='formtext'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.

    </div>
  </div>
  </div>
  </div>
  <div className=" discord">
  <div class="d-flex flex-row mb-3">
  <div class="d-flex flex-column justify-content-center logos">
    <div className='dislogo'>
      logo
    </div>
    </div>
  <div class=" d-flex flex-column  texts">
    <div className='title2  form2txt'>
    Join our community on Discord
    </div>
    <div className='formtext'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.

    </div>
  </div>
  </div>
  </div>
  <div className="d-flex justify-content-evenly  social discord">
    <div className='mt-4 linkedin'>
      logo1
    </div>
    <div className='mt-4 twitter'>
      logO2
    </div>
    <div className='mt-4 github'>
      logo3
    </div>
    <div className='mt-4 insta'>
      logo4
    </div> 
  </div>
  </div>
</div>

  </>
  );
}

export default ContactUs;