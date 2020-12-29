import My from '@/views/My/My';
import Login from '@/views/My/Login';
import SetUp from '@/views/My/SetUp';
import Discounts from '@/views/My/Discounts';
import Address from '@/views/My/Address';
import Balance from '@/views/My/Balance';
import Advice from '@/views/My/Advice';
import Register from '@/views/My/Register';




var myRouter =[
       { path:"/my",component:My},
       {path:"/login",component:Login},
       {path:"/setup",component:SetUp},
       {path:"/discounts",component:Discounts},
       {path:"/address",component:Address},
       {path:"/balance",component:Balance},
       {path:"/advice",component:Advice},
       {path:"/register",component:Register},

];
   

export default myRouter