<template>
    <div class="login-container">
      <h1 class="login-title stroked-text">XXXX医院智能系统</h1>
      <div class="role-selection">
        <el-radio-group v-model="userRole" @change="handleRoleChange">
          <el-radio-button label="patient">患者</el-radio-button>
          <el-radio-button label="doctor">医生</el-radio-button>
          <el-radio-button label="researcher">科研人员</el-radio-button>
        </el-radio-group>
      </div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item label="用户名" label-width="80px" prop="username" class="stroked-text">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="password" class="stroked-text">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
            <div class="el-form-button-item full-width-height" >
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button type="info" @click="register">注册</el-button>
                <el-button type="warning" @click="forgetPassword">找回密码</el-button>
            </div>
        </el-form-item>
      </el-form>
    </div>
  <div class="area">
    <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
  </div>
</template>
  
<script setup>
  import './style.css'
</script>

<script>
  export default {
    data() {
      return {
        userRole: 'patient', // 默认选择患者角色
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度至少为 6 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleRoleChange(role) {
        // 这里可以添加代码来处理角色变化，例如切换不同的表单字段
        console.log(`Selected role: ${role}`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 处理登录逻辑
            console.log('Login successful');
          } else {
            console.log('Login failed');
            return false;
          }
        });
      },
      register() {
        // 处理注册逻辑
        console.log('Registering...');
      },
      forgetPassword() {
        // 处理找回密码逻辑
        console.log('Forgot password...');
      }
    }
  };
  </script>
  
  <style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: transparent;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 其他背景样式，如背景图像等 */
    z-index: 1; /* 确保背景在内容下方 */
  }
  
  .login-title {
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-size: 50px;
  }
  
  .stroked-text .el-form-item__label {
  color: #FFFFFF; /* 文字颜色 */
  text-shadow: 
     1px 1px 0 #000,  /* 右下角描边 */
  }

  .stroked-text {
  color: #FFFFFF; /* 文字颜色 */
  text-shadow: 
     1px 1px 0 #000,  /* 右下角描边 */
  }

  
  .role-selection {
    margin-bottom: 20px;
  }
  
  .login-form-container {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.login-form-item {
  margin-bottom: 15px;
}

.login-form-item label {
  display: inline-block;
  width: 50px;
  text-align: right;
  vertical-align: middle;
  margin-right: 10px;
}

.login-form-item .el-input {
  width: calc(100% - 60px);
}

.el-form-button-item {
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 80px; /* 根据需要设置行高 */
}

.full-width-height {
  width: 100%;
  height: 100%;
}

.white {
  color: white;
}

</style>
