import BeautyPlug from "@/views/Beauty/BeautyPlug";
import Division from "@/views/Beauty/Division";
import OutdoorServe from "@/views/Beauty/OutdoorServe";
import Experience from "@/views/Beauty/Experience";
import StoresView from "@/views/Beauty/StoresView";
// import Project from "@/views/Beauty/Project/Project";
// import List from '@/views/Beauty/Project/List'
// import Detail from "@/views/Beauty/Project/Detail";

var beautyplugRouter = [
    // Beauty,
    {
        path: "/beautyplug",
        component: BeautyPlug,
    },
     // 到店体验
    {path:"/experience",component:Experience},
     //门店风采
     { path: "/storeview", component: StoresView },
     //上门服务
     { path: "/outdoorserve", component: OutdoorServe },
     // 美体师风采
     { path: "/division", component: Division },

    // {
    //     path: "/project",
    //     component: Project,
    //     children: [
    //       {path:"list/:id",component:List},
    //       {path: "detail", component: Detail},
    //     ],
    // },
];

export default beautyplugRouter;
