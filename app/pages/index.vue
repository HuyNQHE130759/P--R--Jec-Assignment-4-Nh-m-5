<template>
    <div>
        <div class="login-header flex items-center justify-between p-8">
            <img src="~/assets/images/logo.png" />
            <div class="flex items-center">
                <div>
                    <ElInput placeholder="What do you want to learn">
                        <ElButton slot="append" icon="el-icon-search"></ElButton>
                    </ElInput>
                </div>
                <ElButton type="warning" class="ml-4">Weekly Timetable</ElButton>
                <div class="ml-4 flex items-center">
                    <ElDropdown>
                        <div class="flex items-center">
                            <ElAvatar shape="square" size="large" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"/>
                            <span class="ml-2">Welcome back,<br/> <ElLink type="primary">Le Anh Son</ElLink></span>
                        </div>
                        <ElDropdownMenu slot="dropdown">
                            <el-dropdown-item>Options</el-dropdown-item>
                            <el-dropdown-item>User Profile</el-dropdown-item>
                            <el-dropdown-item>Settings</el-dropdown-item>
                        </ElDropdownMenu>
                    </ElDropdown>
                </div>
            </div>
        </div>
        <div class="m-auto p-16 login-content flex my-8">
            <el-tabs type="border-card" class="w-full" tab-position="top">
                <el-tab-pane label="My Courses">
                    My Courses
                </el-tab-pane>
                <el-tab-pane label="Notifications">
                    <span slot="label"><i class="el-icon-bell mr-2"/>Notifications</span>
                    <div style="background-color: #dddddd" class="py-2">
                        <i class="el-icon-bell mr-2"/>
                        Ghi Thông Báo Mới
                    </div>
                    <div class="mt-2 py-2" style="background-color: #E6A23C" >
                        <i class="el-icon-bell mr-2"/>
                        Cả lớp chú ý: Hôm nay SWE được mở tài liệuGhi
                    </div>
                    <div class="mt-2 py-2" style="background-color: #04B45F">
                        <i class="el-icon-bell mr-2"/>
                        Môn học PRJ321 đang được bảo trì
                    </div>
                    <div class="text-center mt-16">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Progress">Progress</el-tab-pane>
            </el-tabs>
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
