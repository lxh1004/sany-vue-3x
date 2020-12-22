<template>
  <div>
    <div>查询条件</div>
    <div class="box_table">
      <v-Table
        :tableData="tableData"
        :title="columns"
        @operate="dataOperation"
        :gg="false"
      >
        <template slot="dealScreenshot" slot-scope="scope">
          <el-button
            size="small"
            type="text"
            @click="handleRowEdit(scope.$index, scope.row)"
            >查看</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="handleRowEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="text"
            @click="handleRowEdit(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </v-Table>
    </div>
    <div class="box_footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pageNo"
        :page-size="page.pageSize"
        :page-count="page.totalPage"
        :total="page.totalRecord"
        layout="total,sizes,prev,pager,next"
        prev-text="上一页"
        next-text="下一页"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import loadpage from "@/mixins/loadpage";
import VTable from "@/components/table";
export default {
  name: "project",
  components: {
    VTable,
  },
  mixins: [loadpage],
  data() {
    return {
      tableData: [],
      columns: [
        {
          prop: "name",
          label: "用户名",
          sort: "sortable",
        },
        {
          prop: "roleId",
          label: "用户角色",
          eventType: "type",
        },
        {
          prop: "status",
          label: "用户状态",
          isType: "status",
        },
        {
          prop: "dealScreenshot", //要与上面预留的slot位置一致
          label: "操作",
          operate: true,
        },
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 1; i < 11; i++) {
        let item = {
          projectId: i,
          name: "王二小" + i,
          roleId:
            `管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员
          管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员管理员` +
            i,
          status: 1,
        };
        this.tableData.push(item);
      }
    },
    handleRowEdit(val, v) {
      console.log(val, v);
    },
    dataOperation() {},
  },
};
</script>

<style lang="scss" scoped></style>
