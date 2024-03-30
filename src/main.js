import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import 'element-plus/dist/index.css'
import App from './App.vue'

import DescriptionComponent from './components/description.vue';
import DepartmentComponent from './components/department.vue';
import DiagnosisComponent from './components/diagnosis.vue';
import PaymentComponent from './components/payment.vue';
import MainAppComponent from './system.vue';  
import LoginComponent from './login.vue';  

import DescriptionVideoComponent from './components/description_coms/video.vue'
import DescriptionTextComponent from './components/description_coms/text.vue'
import DescriptionVoiceComponent from './components/description_coms/voice.vue'

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    {
      path: '/system', name: 'system', component: MainAppComponent, children: [
        { path: '/description', name: 'description', component: DescriptionComponent, children: [
            { path: '/description/video', name: 'video', component: DescriptionVideoComponent },
            { path: '/description/text', name: 'text', component: DescriptionTextComponent },
            { path: '/description/voice', name: 'voice', component: DescriptionVoiceComponent }
        ] },
        { path: '/department', name: 'department', component: DepartmentComponent },
        { path: '/diagnosis', name: 'diagnosis', component: DiagnosisComponent },
        { path: '/payment', name: 'payment', component: PaymentComponent }
      ]
    }
  ];
  
  
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')