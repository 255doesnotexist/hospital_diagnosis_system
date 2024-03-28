<template>
    <div>
      <el-menu mode="vertical" class="vertical-menu">
        <el-menu-item index="video" @click="navigateTo('video')">
          <el-icon><video-camera /></el-icon>
          <span>视频自述</span>
        </el-menu-item>
        <el-menu-item index="text" @click="navigateTo('text')">
          <el-icon><document /></el-icon>
          <span>文字描述</span>
        </el-menu-item>
        <el-menu-item index="voice" @click="navigateTo('voice')">
          <el-icon><mic /></el-icon>
          <span>语音描述</span>
        </el-menu-item>
      </el-menu>
  
      <div>
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import { VideoCamera, Document, Mic } from '@element-plus/icons';
  
  export default {
    components: {
      VideoCamera,
      Document,
      Mic
    },
    methods: {
      navigateTo(routeName) {
        this.$router.push({ name: routeName });
      }
    }
  };
  </script>
  
  <style>
  .vertical-menu {
    width: 200px; /* 根据需要调整宽度 */
    height: 100vh; /* 使导航栏占据全屏高度 */
  }
  
  .full-screen-container {
    width: calc(100% - 200px); /* 使内容区域宽度适应导航栏宽度 */
    height: 100vh;
    background-color: #f0f0f0;
    position: absolute;
    left: 200px;
    top: 0;
  }
  </style>
  