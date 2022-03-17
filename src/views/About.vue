<template>
<MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://i.postimg.cc/Kjf5KxSs/Original-Pride-Flag-8-Stripes-1.jpg" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle>The Pride Flag That Started It All </MDBCardTitle>
      <MDBCardText>
            Hot pink symbolizes sex <br>
            Red equals life <br>
            Orange symbolizes healing <br>
            Yellow stands for sunlight <br>
            Green represents nature <br>
            Turquoise equals magic and art <br>
            Indigo stands for serenity <br>
            Violet represents the spirit of LGBTQ people <br>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card two -->
  <MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://i.postimg.cc/xdk5Cwd9/Gay-pride-flag-1.jpg" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle>The 6-Color Pride Flag</MDBCardTitle>
      <MDBCardText>
            Red equals life <br>
            Orange symbolizes healing <br>
            Yellow stands for sunlight <br>
            Green represents nature <br>
            Turquoise equals magic and art <br>
            Indigo stands for serenity <br>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card three -->
  <MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://i.postimg.cc/4Np2PrC8/Lesbian-Pride-Flag.png" top alt="..." width="96" height="100"  />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>LESBIAN</strong></MDBCardTitle>
      <MDBCardText>
          
A lesbian is a woman who is physically and romantically attracted to other women.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 4 -->
  <MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://i.postimg.cc/x1vrkXT1/Gay-Men-Pride-Flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>GAY</strong></MDBCardTitle>
      <MDBCardText>
      A gay is a man that is physically and romantically attracted to other men
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card5  -->
  <MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://i.postimg.cc/HkqQNLQX/Bisexual-Flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>BISEXUAL</strong></MDBCardTitle>
      <MDBCardText>
        Bisexuality is an attraction to more than one gender. Those who identify as bisexual feel a sexual and/or romantic attraction to people of a different gender as well as their own.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 6 -->
  <MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="https://i.postimg.cc/2668FQVw/Trans-flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>TRANSGENDER</strong></MDBCardTitle>
      <MDBCardText>
        Transgender people have a gender identity or gender expression that differs from the sex that they were assigned at birth.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 7 -->
  <MDBCard>
   <a v-mdb-ripple="{ color: 'light' }">
      <MDBCardImg src="" top alt="..." width="96" height="100"  />
    </a>
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
 import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBCardImg,
      MDBBtn
    },
    directives: {
      mdbRipple
    }
  };
</script>

<style>

</style>