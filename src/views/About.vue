<template>
<header>
  <h1 class="text-centers">ABOUT EVERYTHING LGBT+</h1>
  <h3 class="text-center">Everything lgbt+ is an online store that was created to sell lgbtqi community clothes.</h3>
</header>
<section class="services">
  <div class="container">
    <div class="row">
      <h2 class="text-centers">A breakdown of the letters LGBTQI</h2>
      <div class="col-sm-6 col-lg-3"><div class="services-info text-center">
          <h4>Lesbian</h4>
          <p> A lesbian
          is a woman who is physically           and romantically attracted              to other women. </p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
          <h4>Gay</h4>
          <p>  A gay is a man that is physically and 
      romantically attracted to other        men.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
          <h4>Bisexual</h4>
          <p>Bisexuality is an         attraction to more than one gender
        Those who identify as bisexual feel a sexual and/or 
        romantic attraction to people of a different gender as well as their own.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
          <h4>Transgender</h4>
          <p>Transgender people
        have a gender identity or gender expression that  differs from the sex that they were assigned at birth.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
          <h4>Queer</h4>
          <p>Queer 
        is a word that describes sexual and gender identities other than straight and cisgender</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
          <h4>Intersex</h4>
          <p> Intersex is a general term used for a variety of situations in which a person is born with reproductive or sexual anatomy that doesn't fit the boxes of “female” or “male.” </p>
        </div>
      </div>
        <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
          <h4>Pansexual</h4>
          <p>Pansexuality is sexual, romantic, or emotional attraction towards people regardless of their sex or gender identity. Pansexual people may refer to themselves as gender-blind, asserting that gender and sex are not determining factors  in their romantic or sexual attraction to others </p>
        </div>
      </div>
        <div class="col-sm-6 col-lg-3">
        <div class="services-info text-center">
    <h4>Asexual</h4>
          <p> Asexual is the lack of sexual attraction to others, or a low interest in sexual activity. </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    components: {
   
  }
  }
</script>

<style>
body {
	font-size: 16px !important;
	background: #fff !important;
}
h1, h2, h3, h4, a, p {
	font-family: 'Alegreya Sans', sans-serif !important;
}
header {
	background: #fff;
	padding: 60px;
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
	margin: 0 0 30px;
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
		padding-bottom: 130px;
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