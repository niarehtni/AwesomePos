<template>
    <div class="main">
        <h4 class="main_hd">会员信息</h4>
        <div class="main_bd-left">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <!-- 子组件引用日历 值: 子传父 -->
                <birth-date v-model="ruleForm.date" prop="date" type="date"></birth-date>
                <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="学历" prop="education">
                    <el-select v-model="ruleForm.education" placeholder="请选择学历">
                        <el-option label="专科" value="zk"></el-option>
                        <el-option label="本科" value="bk"></el-option>
                        <el-option label="研究生及以上" value="yjs"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否结婚" prop="marry">
                    <el-switch on-text="" off-text="" v-model="ruleForm.marry"></el-switch>
                </el-form-item>
                <el-form-item label="兴趣爱好" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="电影" name="type"></el-checkbox>
                        <el-checkbox label="动漫" name="type"></el-checkbox>
                        <el-checkbox label="运动" name="type"></el-checkbox>
                        <el-checkbox label="读书" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="自我介绍" prop="intro">
                    <el-input type="textarea" v-model="ruleForm.intro" placeholder="100个字以内"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

import birthDate from './birthDate'

export default {
    name:'member',
    components:{
        birthDate, // 出生日期
    },
    data(){
        return {
            ruleForm: {
                name: '',       // 姓名
                phone: '',      // 手机号码
                sex: '',        // 性别
                education: '',  // 学历
                date: '',       // 出生日期
                marry: false,   // 是否结婚
                type: [],       // 兴趣爱好
                intro: ''       // 自我介绍
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur'},
                    {  message: '请输入11位的数字', trigger: 'blur'}
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                education: [
                    { required: true, message: '请选择学历', trigger: 'change' }
                ],
                date: [
                    { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个兴趣爱好', trigger: 'change' }
                ],
                intro: [
                    { required: true, message: '请填写自我介绍', trigger: 'blur' }
                ]
            }
        }
    },
    created:function(){

    },
    mounted:function(){

    },
    methods:{
        // 提交表单
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('提交成功');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },

        // 重置表单
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        padding: 20px;

        .main_hd {
            color:#000;
            font-size: 22px;
            margin-bottom: 20px;
        }
        
        .main_bd-left {
            float:left;
            width: 50%;
        }
    }
</style>

