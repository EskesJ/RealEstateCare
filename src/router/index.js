import { createWebHistory, createRouter } from 'vue-router'
import dashboard from '@/views/dashboard.vue'
import scheduled from '@/views/scheduledTasks.vue'
import completedRecords from '@/views/completedRecords.vue'
import knowledge from '@/views/knowledgeBase.vue'
import settings from '@/views/settings.vue'
import recordDetail from '@/views/recordDetail.vue'


const routes = [
  { 
    path: '/', 
    name: 'dashboard',
    component: dashboard 
    },
  { 
    path: '/completed', 
    name: 'completed',
    component: completedRecords
    },
  { 
    path: '/recordDetail/:id', 
    name: 'recordDetail',
    component: recordDetail
    },
  { 
    path: '/scheduled', 
    name: 'scheduled',
    component: scheduled
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;