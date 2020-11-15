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
        <div class="m-auto p-16 login-content my-8">
            <div class="text-3xl font-bold">
                FPT Learning Online
            </div>
            <div class="text-xl font-bold">
                Course Information
            </div>
            <div>
                <div class="text-2xl text-red-400">
                    SWE 102
                </div>
                <div class="text-xl">
                    Introduction to software Engineering (SWE102)
                </div>
                <div class="my-4 px-4 py-16 border border-gray-300 rounded-lg text-blue-300">
                    SWE is subject about...
                </div>
                <div class="flex text-2xl">
                    <div class="w-1/2">
                        <div>
                            * Teacher: Kien NT
                        </div>
                        <div class="my-2">
                            * Slot: 30
                        </div>
                        <div class="my-2">
                            * Date: Tuesday 20/10/2020
                        </div>
                        <div>
                            * Class: SE1416
                        </div>
                    </div>
                    <div class="w-1/2">
                        <span>
                            Progress
                        </span>
                        <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
                        <div class="mt-4 flex justify-end">
                            <ElButton type="warning" @click="$router.push('/joined-in')">
                                Enroll
                            </ElButton>
                        </div>
                    </div>
                </div>
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
                tableData: [{
                    id: 'PRJ321',
                    name: 'Java desktop application',
                    class: 'SE1436',
                    slot: 4.5,
                    teacher: 'Kien NT'
                }, {
                    id: 'PRF192',
                    name: 'C core',
                    class: 'SE1436',
                    slot: 4.5,
                    teacher: 'Kien NT'
                }, {
                    id: 'CSD201',
                    name: 'Data structure and algorithm',
                    class: 'SE1436',
                    slot: 4.5,
                    teacher: 'Kien NT'
                }, {
                    id: 'LAB221',
                    name: 'OOP with java lap',
                    class: 'SE1436',
                    slot: 4.5,
                    teacher: 'Kien NT'
                }],
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
