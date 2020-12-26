import BeautyPlug from '@/views/Beauty/BeautyPlug'
import Division from '@/views/Beauty/Division'
import OutdoorServe from '@/views/Beauty/OutdoorServe'
import Experience from '@/views/Beauty/Experience'
import StoresView from '@/views/Beauty/StoresView'


var beautyplugRouter =[
      // Beauty,
      {
        path:"/beautyplug",
        component:BeautyPlug,
        children:[
          //门店风采
          {path:"storeview" ,component:StoresView},
          //上门服务
          {path:"outdoorserve" ,component:OutdoorServe},
          // 美体师风采
          {path:"division" ,component:Division},
          // 到店体验
          {path:"experience" ,component:Experience},
        ]
      },
   
]

export default beautyplugRouter;