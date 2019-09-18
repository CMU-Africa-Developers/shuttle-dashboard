<template>
  <div class="app-container">
    <div>
      <FilenameOption v-model="filename" />
      <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" />
      <el-button
        :loading="downloadLoading"
        style="margin:0 0 20px 20px;"
        type="primary"
        icon="document"
        @click="handleDownload"
      >
        Export Excel
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-spinner="el-icon-loading"
      element-loading-text="Loading drivers..."
      border
      fit
      highlight-current-row
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column align="center" label="Image" width="95">
        <template slot-scope="scope">
          <img class="img-circle" :src="scope.row.imageUrl">
        </template>
      </el-table-column>
      <el-table-column label="Name" width="150">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Email">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Phone" width="130" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" width="125" label="Account Status" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Date Created" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createdAt | formatTime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Actions"
        width="110"
      >
        <template slot-scope="{row}">
          <!--<router-link :to="'/drivers/edit/'+scope.row.userId">-->
          <el-button type="primary" size="small" icon="el-icon-edit" circle @click="handleUpdate(row)" />
          <!--</router-link>-->
          <el-button type="danger" size="small" circle icon="el-icon-delete" @click="deleteDialogVisible = true, idToDelete = row.userId" />
          <!--<el-button type="success" size="small" circle icon="el-icon-view"></el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <!--<pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />-->

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" v-loading="updateProgress" :rules="rules" :model="driverForm" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">

        <el-form-item label="Driver name" prop="name" required :label-width="formLabelWidth">
          <el-input v-model="driverForm.name" />
        </el-form-item>
        <el-form-item label="Driver Email" required prop="email" :label-width="formLabelWidth">
          <el-input v-model="driverForm.email" />
        </el-form-item>
        <el-form-item label="Phone Number" required prop="phone" :label-width="formLabelWidth">
          <el-input
            v-model="driverForm.phone"
            placeholder="Please input"
            clearable
          />
        </el-form-item>

        <el-form-item label="Account Status" :label-width="formLabelWidth">
          <el-select v-model="driverForm.status" placeholder="please choose an option">
            <el-option label="Active" value="active" />
            <el-option label="Deactivated" value="inactive" />
            <el-option label="Suspended" value="suspended" />
          </el-select>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="Delete Driver"
      :visible.sync="deleteDialogVisible"
      width="30%"
    >
      <span>Are you sure you want to delete this driver ?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">Cancel</el-button>
        <el-button type="danger" @click="onDeleteDriver()">Delete</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import {db} from '../../../db/db'
  import { parseTime } from '@/utils'
  import moment from 'moment'
  import FilenameOption from '../common/FilenameOption'
  import AutoWidthOption from '../common/AutoWidthOption'
  import BookTypeOption from '../common/BookTypeOption'
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination

  export default {
    components: { FilenameOption, AutoWidthOption, BookTypeOption, Pagination },
    filters: {
      statusFilter(status) {
        const statusMap = {
          active: 'success',
          inactive: 'gray',
          suspended: 'danger'
        }
        return statusMap[status]
      },
      formatTime(msgTimestamp) {
        return moment(msgTimestamp).format('MMM Do YYYY')
      }
    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })
          callback(new Error(rule.field + '为必传项'))
        } else {
          callback()
        }
      }
      return {
        driverForm: {
          userId: '',
          name: '',
          phone: '',
          email: '',
          status: '',
          imageUrl: '',
          createdAt: 0,
          route: ''
        },
        list: [],
        total: 0,
        lastKey: null,
        lastValue: null,
        listQuery: {
          page: 1,
          limit: 20,
          sort: '+id'
        },
        dialogFormVisible: false,
        listLoading: true,
        updateProgress: false,
        dialogStatus: '',
        deleteDialogVisible: false,
        downloadLoading: false,
        idToDelete: 0,
        filename: '',
        rules: {
          name: [{ validator: validateRequire }],
          phone: [{ validator: validateRequire }]
        },
        autoWidth: true,
        bookType: 'xlsx',
        formLabelWidth: '200px',
        textMap: {
          update: 'Edit',
          create: 'Create'
        }
      }
    },
    created() {
    },
    mounted() {
      this.$bind('list', db.collection('drivers')).then(list => {
        console.log(list)
        this.listLoading = false
        this.total = this.list.length
      })
    },
    methods: {
      getList() {
        this.listLoading = true
        console.log(this.listQuery)
        this.$bind('list', db.collection('drivers')).then(list => {
          this.listLoading = false
        })
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['Name', 'Phone', 'Email', 'Designation', 'Rating', 'Account Status', 'Date Added']
          const filterVal = ['name', 'phone', 'email', 'designation', 'rating', 'status', 'createdAt']
          const list = this.list
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename,
            autoWidth: this.autoWidth,
            bookType: this.bookType
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      },
      onDeleteDriver() {
        this.deleteDialogVisible = false
        db.collection('drivers').doc(this.idToDelete).delete().then(() => {
          this.$notify({
            title: 'Successful',
            message: 'Driver deleted!',
            type: 'success',
            duration: 2000
          })
        })
      },
      handleUpdate(row) {
        this.driverForm = Object.assign({}, row) // copy obj
        this.driverForm.updatedAt = new Date(this.driverForm.updatedAt).getTime()
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
        this.updateProgress = true
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.driverForm)
            tempData.updatedAt = +new Date().getTime() // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464

            db.collection('drivers').doc(tempData.userId).update(tempData).then(() => {
              this.dialogFormVisible = false
              this.$notify({
                title: 'Success',
                message: 'Update Successfully',
                type: 'success',
                duration: 2000
              })
              this.updateProgress = false
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .radio-label {
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 30px;
  }

  .img-circle {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    float: left;
  }
</style>
