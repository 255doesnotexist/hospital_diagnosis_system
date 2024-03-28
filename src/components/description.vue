<template>
    <div class="navigation-page">
      <!-- 竖向导航栏 -->
      <div class="vertical-nav">
        <div class="nav-item" @click="navigateTo('video')">
          <svg class="nav-icon">
            <!-- 这里插入视频图标的 SVG -->
          </svg>
          视频自述
        </div>
        <div class="nav-item" @click="navigateTo('text')">
          <svg class="nav-icon">
            <!-- 这里插入文字图标的 SVG -->
          </svg>
          文字描述
        </div>
        <div class="nav-item" @click="navigateTo('audio')">
          <svg class="nav-icon">
            <!-- 这里插入语音图标的 SVG -->
          </svg>
          语音描述
        </div>
      </div>
  
      <!-- 另一个全屏容器 -->
      <div class="full-screen-container">
        <!-- 这里可以添加其他内容，例如视频、文字、语音等 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
    methods: {
      navigateTo(section) {
        // 根据点击的导航项，路由到相应的内容
        // 你可以使用 Vue Router 来实现路由跳转
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式可以根据你的需求自定义 */
  .vertical-nav {
    /* 竖向导航栏样式 */
  }
  
  .nav-item {
    /* 导航项样式 */
  }
  
  .nav-icon {
    /* 图标样式 */
  }
  
  .full-screen-container {
    /* 全屏容器样式 */
  }
  </style>
  