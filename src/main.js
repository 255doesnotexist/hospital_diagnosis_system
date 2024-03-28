import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import DescriptionComponent from './components/description.vue';
import DepartmentComponent from './components/department.vue';
import DiagnosisComponent from './components/diagnosis.vue';
import PaymentComponent from './components/payment.vue';


const routes = [
    { path: '/description', name: 'description', component: DescriptionComponent },
    { path: '/department', name: 'department', component: DepartmentComponent },
    { path: '/diagnosis', name: 'diagnosis', component: DiagnosisComponent },
    { path: '/payment', name: 'payment', component: PaymentComponent }
  ];
  
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')