<template>
  <MDBBtn
    color="primary"
    aria-controls="staticBackdropLabel"
    @click="staticBackdrop = true"
  >
    Edit product
  </MDBBtn>
  <!-- Modal -->
  <MDBModal
    id="staticBackdrop"
    tabindex="-1"
    labelledby="staticBackdropLabel"
    v-model="staticBackdrop"
    staticBackdrop
    class="modal"
  >
    <MDBModalHeader class="modal-header">
      <MDBModalTitle id="staticBackdropLabel">Edit product</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody class="modal-body">
      <div class="modal-item">
        <label for="product-title">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div class="modal-item">
        <label for="product-catergory">Catergory</label>
        <input type="text" v-model="catergory" />
      </div>
      <div class="modal-item">
        <label for="product-description">Description</label>
        <input type="text" v-model="description" />
      </div>
      <div class="modal">
        <label for="product-image">Image</label>
        <input type="text" v-model="image" />
      </div>
      <div class="modal-item">
        <label for="product-price">Price</label>
        <input type="text" v-model="price" />
      </div>
    </MDBModalBody>
    <MDBModalFooter class="modal-footer">
      <MDBBtn color="danger" @click="staticBackdrop = false"> Close </MDBBtn>
      <MDBBtn color="success" @click="editProduct">Edit</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script>
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";
const url = "https://everything-lgbt-plus.herokuapp.com/products";
import { ref } from "vue";
export default {
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  },
  data() {
    return {
      title: "",
      catergory: "",
      description: "",
      image: "",
      price: "",
    };
  },
  methods: {
    editProduct() {
      if (!localStorage.getItem("customer")) {
        alert("Customer not found");
        this.$router.push("/Login");
        return;
      }
      fetch(`${url}`, {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          catergory: this.catergory,
          description: this.description,
          image: this.image,
          price: this.price,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("customer")).accessToken
          }`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert("Successfully edited product");
          this.$router.push("/Products");
        });
    },
  },
  setup() {
    const staticBackdrop = ref(false);
    return {
      staticBackdrop,
    };
  },
};
</script>
<style scoped>
.modal {
  border-radius: 15px;
  box-shadow: 0 8px 50px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
.modal-body {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
}
.modal-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  row-gap: 1rem;
}
</style>