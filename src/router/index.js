import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Lesson from '@/components/Lesson'
import Question from '@/components/Question'
import Answer from '@/components/Answer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/answer',
      name: 'answer',
      component: Answer
    }
  ]
})
