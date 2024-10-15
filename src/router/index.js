import { createWebHistory, createRouter } from 'vue-router'
import { useMainStore } from '@/stores/mainStore';
import login from '@/views/LoginPage.vue'
import secondLogin from '@/views/SecondLoginPage.vue'
import dashboard from '@/views/MainDashboard.vue'
import scheduledd from '@/views/ScheduledTasks.vue'
import completedRecords from '@/views/CompletedRecords.vue'
import knowledge from '@/views/KnowledgeBase.vue'
import settings from '@/views/SettingsPage.vue'
import recordDetail from '@/views/RecordDetail.vue'
import recordAssigned from '@/views/RecordAssigned.vue'
import information from '@/views/InformationPage.vue'


const routes = [
  { 
    path: '/', 
    name: 'Login',
    component: login 
    },
  { 
    path: '/second-login', 
    name: 'SecondLogin',
    component: secondLogin 
    },
  { 
    path: '/dashboard', 
    name: 'Dashboard',
    component: dashboard 
    },
  { 
    path: '/completed-records', 
    name: 'CompletedRecords',
    component: completedRecords
    },
  { 
    path: '/record-detail/:id', 
    name: 'RecordDetail',
    component: recordDetail
    },
  { 
    path: '/scheduled-tasks', 
    name: 'Scheduled',
    component: scheduled
  },
  { 
    path: '/record-assigned/:id', 
    name: 'RecordAssigned',
    component: recordAssigned
  },
  { 
    path: '/knowledge-base', 
    name: 'KnowledgeBase',
    component: knowledge
  },
  { 
    path: '/settings', 
    name: 'Settings',
    component: settings
  },
  { 
    path: '/information', 
    name: 'Information',
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

  // Allow access to the information page regardless of authentication status
  if (to.name === 'Information') {
    next();
  } 
  // Redirect from Login to SecondLogin if the user is authenticated but hasn't completed the second login
  else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'SecondLogin' });
  } 
  // Redirect from SecondLogin if the user is not authenticated or has already completed second authentication
  else if (to.name === 'SecondLogin' && (!isAuthenticated || isSecondAuthenticated)) {
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next({ name: 'Dashboard' });
    }
  } 
  // Redirect to Login if not authenticated and trying to access any other page
  else if (!isAuthenticated && to.name !== 'Login') {
    next({ name: 'Login' });
  } 
  // Redirect to SecondLogin if authenticated but not fully authenticated and accessing other restricted pages
  else if (isAuthenticated && !isSecondAuthenticated && to.name !== 'SecondLogin') {
    next({ name: 'SecondLogin' });
  } 
  // Allow navigation to the intended route
  else {
    next();
  }
});


export default router;