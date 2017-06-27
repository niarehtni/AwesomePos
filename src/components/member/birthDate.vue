<template>
    <div>
        <el-form-item label="出生日期" required>
            <el-col :span="11">
            <el-form-item >
                <el-date-picker  placeholder="选择日期"  style="width: 100%;">
                </el-date-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
    </div>
</template>
<script>
export default {
    name:'birthDate',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>

</style>

