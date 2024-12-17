<template>
  <div class="app-container">
    <div class="app-header">
      <h1 class="app-header__title">MyGamingProfile</h1>
    </div>
    <div class="app-content">
      <div class="app-content__inner">
        <router-view></router-view>
      </div>
    </div>
    <div class="app-footer">
      footer
    </div>
    <!-- <h1>App.vue</h1>
    <strong>Current route path:</strong> {{ $route.fullPath }}
    <router-link to="/">main</router-link>
    <router-link to="/about">about</router-link>
    <router-view /> -->
  </div>
</template>

<style lang="scss" scoped>
$content-width: 1200px;

.app-container {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

.app-header {
  background-color: var(--color-black-light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-blue);
  &__title {
    font-size: 48px;
  }
}

.app-content {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  &__inner {
    background-color: var(--color-black-light);
    flex: 0 0 $content-width;
  }
}

.app-footer {
  background-color: var(--color-black-light);
}

</style>