import Found from '@/views/Found/Found'
import FoundDetail from "@/views/Found/FoundDetail"

var foundRouter = [
        {path:"/found",component:Found},
        {path:"/found/:id",component:FoundDetail}

]
   


export default foundRouter