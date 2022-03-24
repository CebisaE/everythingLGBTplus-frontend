<template>
<div id="about">
<header>
  <h1 class="text-centers">ABOUT EVERYTHING LGBT+</h1>
  <h3 class="text-center">Everything lgbt+ is an online store that was created to sell lgbtqi community clothes.</h3>
</header>
<section class="services">
  <div class="container-about">
    <div class="row">
      <h2 class="text-centers">A breakdown of the letters LGBTQI</h2>
      <div class="col-sm-8 col-lg-4"><div class="services-info text-center">
          <h4>Lesbian</h4>
          <p> A lesbian
          is a woman who is physically  and romantically attracted  to other women. </p>
        </div>
      </div>
      <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
          <h4>Gay</h4>
          <p>  A gay is a man that is physically and 
      romantically attracted to other men.</p>
        </div>
      </div>
      <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
          <h4>Bisexual</h4>
          <p>sexually attracted not exclusively to people of one particular gender; attracted to both men and women.</p>
        </div>
      </div>
      <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
          <h4>Transgender</h4>
          <p>Transgender people
        have a gender identity or gender expression that  differs from the sex that they were assigned at birth.</p>
        </div>
      </div>
      <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
          <h4>Queer</h4>
          <p>Queer 
        is a word that describes sexual and gender identities other than straight and cisgender</p>
        </div>
      </div>
      <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
          <h4>Intersex</h4>
          <p> Intersex people are born with sex characteristics (including genitals, gonads and chromosome patterns) that do not fit typical binary notions of male or female. </p>
        </div>
      </div>
        <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
          <h4>Pansexual</h4>
          <p>not limited in sexual choice with regard to biological sex, gender, or gender identity.</p>
        </div>
      </div>
        <div class="col-sm-8 col-lg-4">
        <div class="services-info text-center">
    <h4>Asexual</h4>
          <p> Asexual is the lack of sexual attraction to others, or a low interest in sexual activity. </p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
  export default {
    components: {
   
  }
  }
</script>

<style>
/* body {
	font-size: 16px !important;
	background: #fff !important;
} */
#about{
  width: 100%;
  height: 100vh;
}
h1, h2, h3, h4, a, p {
	font-family: 'Alegreya Sans', sans-serif !important;
}
header {
	background: #fff;
	padding: 115px;
}
header h1, 
header h3,
header h1 {
	font-weight: 700;
}
header h3, 
.services .row {
	background: #fff;
/* 	border: 5px solid #8b844e; */
}

.services .services-info {
	margin: 10px;
	padding: 10px;
	border: 5px solid #FFFF00;
	border-radius: 3px;
}
.text-centers{
  color:#FF0000;
}
.services i {
	color: #5a5533;
}

.services a {
	color: black;
	padding: 3px;
	border-bottom: 1px dashed #222;
}
.container-about{
  border: 6px solid #111;
    margin: 10%;
}
.services a:hover {
	text-decoration: none;
  color: #2A6496;
}
/**
 * MEDIA QUERIES styles
 *
 */


@media only screen and (min-width: 641px) {

	header {
		padding-bottom: 50px;
	}
	.services .row {
		margin-top: -70px;
	}   
}
@media only screen and (min-width: 1200px) {

  .services .services-info {
    margin: 30px 0;
  }
  
}
</style>