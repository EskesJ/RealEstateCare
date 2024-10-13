import { createWebHistory, createRouter } from 'vue-router'
import { useMainStore } from '@/stores/mainStore';
import login from '@/views/Login.vue'
import secondLogin from '@/views/SecondLogin.vue'
import dashboard from '@/views/MainDashboard.vue'
import scheduled from '@/views/ScheduledTasks.vue'
import completedRecords from '@/views/CompletedRecords.vue'
import knowledge from '@/views/KnowledgeBase.vue'
import settings from '@/views/Settings.vue'
import recordDetail from '@/views/RecordDetail.vue'
import recordAssigned from '@/views/RecordAssigned.vue'
import information from '@/views/Information.vue'


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