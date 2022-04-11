<template>
  <div class="container">
  <div class="row header">
    <h1>CONTACT US &nbsp;</h1>
    <h3>Fill out the form below for enquiries!</h3>
  </div>
  <div class="row body">
    <form @submit.prevent="handleSubmit">
      <ul>
        
        <li>
          <p class="left">
            <label for="first_name" class="titles">first name</label>
            <input type="text" name="first_name" placeholder="John"  v-model="text"/>
          </p>
          <p class="pull-right">
            <label for="last_name" class="titles">last name</label>
            <input type="" name="last_name" placeholder="Smith"/>      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email" class="titles">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" v-model="email" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="message" class="titles">message</label>
          <textarea cols="46" rows="3" name="message" required v-model="textarea"></textarea>
        </li>
        
        <li>
          <input class="btn btn-submit" type="submit" value="SEND" />
          <small>or press <strong>enter</strong></small>
        </li>
        
      </ul>
    </form>  
  </div>
</div>

</template>

<script>
export default {
}

</script>

<style>
.titles {
  color:#fff;
  font-size:20px;
  font-weight:bold;
}
div, textarea, input {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.container {
  background-color:transparent;
  border: 5px solid #111;
  /* border-bottom: 3px solid #ccc; */
}

.row {
  width: 100%;
  margin: 0 0 1em 0;
  padding: 0 2.5em;
}
.row.header {
  border-bottom: 4px solid #ccc;
  color: #fff;
}
.row.body {
  padding: .5em 2.5em 1em;
}

.pull-right {
  float: right;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  display: inline-block;
  font-weight: 100;
  font-size: 2.8125em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 0 0.1em 0;
  padding: 0 0 0.4em 0;
}

h3 {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1.25em;
  margin: 1em 0 0.4em 0;
}

.btn {
  font-size: 1.0625em;
  display: inline-block;
  padding: 0.74em 1.5em;
  margin: 1.5em 0 0;
  color: #fff;
  border-width: 0 0 0 0;
  border-bottom: 5px solid;
  text-transform: uppercase;
  background-color: #b3b3b3;
  border-bottom-color: #8c8c8c;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}
.btn:hover {
  background-color: #bfbfbf;
}
.btn.btn-submit {
  background-color: #4f6fad;
  border-bottom-color: #374d78;
}
.btn.btn-submit:hover {
  background-color: #5f7db6;
}

form {
  max-width: 100%;
  display: block;
}
form ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
form ul li {
  margin: 0 0 0.25em 0;
  clear: both;
  display: inline-block;
  width: 100%;
}
form ul li:last-child {
  margin: 0;
}
form ul li p {
  margin: 0;
  padding: 0;
  float: left;
}
form ul li p.right {
  float: right;
}
form ul li .divider {
  margin: 0.5em 0 0.5em 0;
  border: 0;
  height: 1px;
  width: 100%;
  display: block;
  background-color: #4f6fad;
  background-image: linear-gradient(to right, #ee9cb4, #4f6fad);
}
form ul li .req {
  color: #ee9cb4;
}
form label {
  display: block;
  margin: 0 0 0.5em 0;
  color: #4f6fad;
  font-size: 1em;
}
form input {
  margin: 0 0 0.5em 0;
  border: 1px solid #ccc;
  padding: 6px 10px;
  color: #555;
  font-size: 1em;
}
form textarea {
  border: 1px solid #ccc;
  padding: 6px 10px;
  width: 100%;
  color: #555;
}
form small {
  color: #4f6fad;
  margin: 0 0 0 0.5em;
}

@media only screen and (max-width: 480px) {
  .pull-right {
    float: none;
  }

  input {
    width: 100%;
  }

  label {
    width: 100%;
    display: inline-block;
    clear: both;
  }

  li, p {
    width: 100%;
  }

  input.btn {
    margin: 1.5em 0 0.5em;
  }

  h1 {
    font-size: 2.25em;
  }

  h3 {
    font-size: 1.125em;
  }

  li small {
    display: none;
  }
}

</style>