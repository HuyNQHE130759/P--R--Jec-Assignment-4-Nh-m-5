<template>
    <div>
        <div class="login-header flex items-center justify-between p-8">
            <img src="~/assets/images/logo.png" />
            <div class="flex">
                <ElInput placeholder="What do you want to learn">
                    <ElButton slot="append" icon="el-icon-search"></ElButton>
                </ElInput>
            </div>
        </div>
        <div class="w-1/2 m-auto border border-gray-300 p-16 rounded-lg text-center login-content my-8">
            <div class="font-bold text-3xl">
                RESET PASSWORD
            </div>
            <div>
                <el-divider>Please enter username and password</el-divider>
                <ElForm>
                    <ElFormItem label="Username">
                        <ElInput/>
                    </ElFormItem>
                    <ElFormItem label="Old Password">
                        <ElInput/>
                    </ElFormItem>
                    <ElFormItem label="New Password">
                        <ElInput/>
                    </ElFormItem>
                    <ElFormItem label="Confirm Password">
                        <ElInput/>
                    </ElFormItem>
                </ElForm>
                <ElButton type="primary">Enter</ElButton>
            </div>

            <div class="mt-8">
                <el-divider>if you've forgotten your password, enter your account and email</el-divider>
                <ElForm>
                    <ElFormItem label="Username">
                        <ElInput/>
                    </ElFormItem>
                    <ElFormItem label="Mail">
                        <ElInput/>
                    </ElFormItem>
                </ElForm>
                <ElButton type="primary">Enter</ElButton>
            </div>
        </div>
        <div class="login-footer flex items-center px-8 justify-between py-2" style="background-color: #eeeeee">
            <p>
                © 2020 FPT University, All right reversed.
            </p>
            <div class="flex">
                <i class="fas fa-envelope mr-2" style="color:#e94820"></i>
                <i class="fab fa-facebook mr-2" style="color:#e94820"/>
                <i class="fab fa-instagram mr-2" style="color:#e94820"/>
                <i class="fab fa-google mr-2" style="color:#e94820"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: 'FU - Hoà Lạc'
                }, {
                    value: '2',
                    label: 'FU - Hồ Chí Minh'
                }, {
                    value: '3',
                    label: 'FU - Đà Nẵng'
                }, {
                    value: '4',
                    label: 'FU - Cần thơ'
                }],
                value: ''
            }
        },

        mounted() {
            const heightHeader = this.$el.querySelector('.login-header').clientHeight;
            const heightFooter = this.$el.querySelector('.login-footer').clientHeight;

            const totalHeight = `${heightHeader + heightFooter}px`;
            this.$el.querySelector('.login-content').style.minHeight = `calc(100vh - ${totalHeight})`;
        }
    }
</script>

<style scoped>

</style>
