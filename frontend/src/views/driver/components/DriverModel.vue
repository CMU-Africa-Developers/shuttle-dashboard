<template>
  <el-container>
    <div class="app-container "
         style="height: 600px; margin: 2%; background: whitesmoke; width: 100%; border: 1px solid #eee">
      <el-form
        ref="driverForm"
        v-loading="loading"
        :element-loading-text="loadingText"
        :rules="rules"
        :model="driverForm"
        label-width="120px">
        <el-form-item label="Driver name" prop="name">
          <el-input v-model="driverForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Phone number" prop="phone">
          <el-input v-model="driverForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="Email Address" prop="email">
          <el-input v-model="driverForm.email"></el-input>
        </el-form-item>

        <el-form-item label="Account Status">
          <el-select v-model="driverForm.status" placeholder="Please choose an option">
            <el-option label="Active" value="active" />
            <el-option label="Deactivated" value="inactive" />
            <el-option label="Suspended" value="suspended" />
          </el-select>
        </el-form-item>

        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="driverForm.imageUrl" :src="driverForm.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <el-form-item class="submit">
          <el-button type="primary" @click="submitForm">Create</el-button>
          <el-button @click="resetForm('driverForm')">Reset</el-button>
        </el-form-item>

      </el-form>
    </div>
  </el-container>
</template>

<script>
  import {db} from '../../../../db/db'

  import ImageCropper from '@/components/ImageCropper'
  import PanThumb from '@/components/PanThumb'

  const defaultForm = {
    userId: '',
    name: '',
    phone: '',
    email: '',
    status: '',
    imageUrl: '',
    createdAt: 0,
    route: ''
  }
  export default {
    name: "Driver",
    components: {ImageCropper, PanThumb},
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    created() {
      if (this.isEdit) {
        this.loading = true
        const id = this.$route.params && this.$route.params.id
        this.fetchDriver(id)
      } else {
        this.driverForm = Object.assign({}, defaultForm)
      }

    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + ' is required',
            type: 'error'
          })
          callback(new Error(rule.field + ' is required'))
        } else {
          callback()
        }
      }
      return {
        formLabelWidth: '200px',
        loading: false,
        loadingText: 'false',
        driverForm: Object.assign({}, defaultForm),
        rules: {
          name: [{validator: validateRequire}],
          phone: [{validator: validateRequire}]
        }
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.driverForm.imageUrl = URL.createObjectURL(file.raw);
      },
      fetchDriver(id) {
        this.$bind('driverForm', db.collection('drivers').doc(id)).then(driverForm => {
          this.loading = false
        })
      },
      submitForm() {
        this.$refs.driverForm.validate(valid => {

          if (valid) {

            this.loading = true
            if (this.isEdit) {
              this.loadingText = 'Submitting updates..'
            } else {
              this.loadingText = 'Adding new driver'
              this.driverForm.createdAt = new Date().getTime()
            }
            if (this.driverForm.userId.length < 1) {
              this.driverForm.userId = db.collection('drivers').doc().id;
            }

            db.collection('drivers').doc(this.driverForm.userId).set(this.driverForm).then(() => {
              const msg = this.isEdit ? 'Successfully updated' : 'Driver Successfully added'
              this.$notify({
                title: 'Success',
                message: msg,
                type: 'success',
                duration: 3000
              })
              this.loading = false
            })
          } else {
            console.log('Form errors');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .avatar {
    margin: 30px 5% 0;
  }

  .submit {
    margin-top: 50px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
