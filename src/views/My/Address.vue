<template>
    <div>
        <!--  -->
        <div>
        <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
        <!--  -->
        <div>
            <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
        </div>
    </div>
</template>

<script>
// 地址栏：新建、更新、删除收货地址
import Vue from 'vue';
import { AddressList ,Toast ,NavBar} from 'vant';
Vue.use(AddressList);
Vue.use(NavBar);

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>