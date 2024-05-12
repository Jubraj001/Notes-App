<template>
  <div class="py-4 mb-4">
    <textarea class="textarea" placeholder="Add New Note"></textarea>
    <button class="button is-link">Submit</button>
  </div>
  <div class="card mb-4" v-for="i in 5">
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
