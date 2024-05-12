<template>
  <div>
    <RouterLink :to="{name: 'notes'}">Notes</RouterLink> |
    <RouterLink :to="{name: 'stats'}">Stats</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>
