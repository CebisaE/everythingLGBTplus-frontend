<template>
  <!-- card one -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }"  class="info-cards">
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
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/4Np2PrC8/Lesbian-Pride-Flag.png" top alt="..." width="96" height="100"  />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>LESBIAN</strong></MDBCardTitle>
      <MDBCardText>        
          A lesbian <br>
          is a woman who is physically and <br>
          romantically attracted to other women.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 4 -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/x1vrkXT1/Gay-Men-Pride-Flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>GAY</strong></MDBCardTitle>
      <MDBCardText>
      A gay <br>
      is a man that is physically and <br>
      romantically attracted to other men
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card5  -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/HkqQNLQX/Bisexual-Flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>BISEXUAL</strong></MDBCardTitle>
      <MDBCardText>
        Bisexuality <br>
        is an attraction to more than one gender.<br>
        Those who identify as bisexual feel a sexual and/or <br>
        romantic attraction to people of a different gender as well as their own.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 6 -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/2668FQVw/Trans-flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>TRANSGENDER</strong></MDBCardTitle>
      <MDBCardText>
        Transgender people <br>
        have a gender identity or gender expression that  <br>
        differs from the sex that they were assigned at birth.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 7 -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/02874hmV/intersex.png" top alt="..." width="96" height="100"  />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>QUEER</strong></MDBCardTitle>
      <MDBCardText>
        Queer <br>
        is a word that describes sexual and <br>
        gender identities other than straight and cisgender
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 8 -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/mkdWB0rQ/Intersex-Flag.png" top alt="..." width="96" height="100"  />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>INTERSEX</strong></MDBCardTitle>
      <MDBCardText>
      Intersex <br>
      is a general term used for a variety of situations in which<br>
      a person is born with reproductive or sexual anatomy <br>
      that doesn't fit the boxes of “female” or “male.” 
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 9 -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/KcT9FX1F/The-Pansexual-Flag.jpg" top alt="..." width="96" height="100"  />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>PANSEXUAL</strong></MDBCardTitle>
      <MDBCardText>
      Pansexuality is sexual, romantic, <br>
      or emotional attraction towards people regardless <br>
      of their sex or gender identity. <br>
      Pansexual people may refer to themselves as gender-blind,<br>
      asserting that gender and sex are not determining factors <br>
      in their romantic or sexual attraction to others
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  <!-- card 10 -->
  <MDBCard>
  <a v-mdb-ripple="{ color: 'light' }" class="info-cards">
      <MDBCardImg src="https://i.postimg.cc/xdVhD0Pw/Asexual-flag.png" top alt="..."  width="96" height="100" />
    </a>
    <MDBCardBody>
      <MDBCardTitle><strong>ASEXUAL</strong></MDBCardTitle>
      <MDBCardText>
          Asexual <br>
          is the lack of sexual attraction to others, <br>
          or a low interest in sexual activity.
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
.info-cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>