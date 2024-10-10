import { createWebHistory, createRouter } from 'vue-router'
import { useMainStore } from '@/stores/mainStore';
import login from '@/views/login.vue'
import secondLogin from '@/views/secondLogin.vue'
import dashboard from '@/views/dashboard.vue'
import scheduled from '@/views/scheduledTasks.vue'
import completedRecords from '@/views/completedRecords.vue'
import knowledge from '@/views/knowledgeBase.vue'
import settings from '@/views/settings.vue'
import recordDetail from '@/views/recordDetail.vue'
import recordAssigned from '@/views/recordAssigned.vue'
import information from '@/views/information.vue'


const routes = [
  { 
    path: '/', 
    name: 'login',
    component: login 
    },
  { 
    path: '/second-login', 
    name: 'secondLogin',
    component: secondLogin 
    },
  { 
    path: '/dashboard', 
    name: 'dashboard',
    component: dashboard 
    },
  { 
    path: '/completed', 
    name: 'completed',
    component: completedRecords
    },
  { 
    path: '/record-detail/:id', 
    name: 'recordDetail',
    component: recordDetail
    },
  { 
    path: '/scheduled', 
    name: 'scheduled',
    component: scheduled
  },
  { 
    path: '/record-assigned/:id', 
    name: 'recordAssigned',
    component: recordAssigned
  },
  { 
    path: '/knowledge', 
    name: 'knowledge',
    component: knowledge
  },
  { 
    path: '/settings', 
    name: 'settings',
    component: settings
  },
  { 
    path: '/information', 
    name: 'information',
    component: information
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const store = useMainStore();
  const isAuthenticated = store.authenticated;
  const isSecondAuthenticated = store.secondAuthenticated;

  if (to.name === 'login' && isAuthenticated) {
   
    next({ name: 'secondLogin' });
  } else if (to.name === 'secondLogin' && (!isAuthenticated || isSecondAuthenticated)) {
   
    if (!isAuthenticated) {
      next({ name: 'login' });
    } else {
      next({ name: 'dashboard' });
    }
  } else if (!isAuthenticated && to.name !== 'login') {
    
    next({ name: 'login' });
  } else if (isAuthenticated && !isSecondAuthenticated && to.name !== 'secondLogin') {
      
    next({ name: 'secondLogin' });
  } else {

    next();
  }
});


export default router;