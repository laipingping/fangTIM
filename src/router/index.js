import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import mainMianBan from '@/components/mainMianBan'
import Message from  '@/components/Message'
import Friends from  '@/components/Friends'
import friend from '@/components/friend'
import groups from '@/components/groups'
import chatManyPeople from '@/components/chatManyPeople'

import onLineWord from  '@/components/onLineWord'
import messageChat from '@/components/messageChat'
import messageChat2 from '@/components/messageChat2'
require('@/assets/base.css')

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/mainMianBan',
      redirect:'/Message',
      name: 'mainMianBan',
      component: mainMianBan,
      children:[
        {
        path:'/Message',
        name:'Message',
          // redirect:'/messageChat',
        component:Message,
          children:[
            {
              path:'/messageChat',
              name:'messageChat',
              component:messageChat
            },
            {
              path:'/messageChat2',
              name:'messageChat2',
              component:messageChat2
            }
          ]
        },
        {
          path:'/Friends',
          name:'Friends',
          component:Friends,
          // children: [
          //   {
          //     path:'/friend',
          //     name:'friend',
          //     component: friend
          //   },
          //   {
          //     path: '/groups',
          //     name: 'groups',
          //     component: groups
          //   },
          //   {
          //     path: '/chatManyPeople',
          //     name: 'chatManyPeople',
          //     component: chatManyPeople
          //   },

          // ]
        },
        {
          path:'/onLineWord',
          name:'onLineWord',
          component:onLineWord
        },
      ]
    }
  ]
})
