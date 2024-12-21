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
      <span class="credentials">
        <span>Design & Development:</span>
        <a href="https://github.com/PavelBazhan/" target="_blank">Pavel Bazhan</a>
      </span>
    </div>
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
  background-color: var(--color-gray-1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-gray-8);
  &__title {
    font-size: 48px;
  }
}

.app-content {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  &__inner {
    background-color: var(--color-white);
    flex: 0 0 $content-width;
  }
}

.app-footer {
  background-color: var(--color-gray-1);
  flex: 0 0 80px;
  border-top: 1px solid var(--color-gray-8);
  display: flex;
  justify-content: center;
  align-items: center;

  .credentials > a {
    margin-left: 0.5em;
  }
}

</style>