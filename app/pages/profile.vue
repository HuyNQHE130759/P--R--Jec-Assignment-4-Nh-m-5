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
        <div class="p-16 login-content">
            <div class="flex items-center justify-between w-full">
                <ElButton><i class="el-icon-back mr-2"/>Previous</ElButton>
                <ElButton>Settings</ElButton>
            </div>
            <div class="text-3xl font-bold my-4">
                User Profile
            </div>
            <div class="border border-gray-300 rounded-lg p-8 flex">
                <div class="w-1/2">
                    <div class="flex items-center">
                        <div class="p-4 border border-gray-300 rounded-lg mr-4">
                            <ElAvatar shape="square" size="large" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"/>
                        </div>
                        <div>
                            <div class="font-bold text-2xl">
                                Hoàng Tâm Long - HE146254
                            </div>
                            <div>
                                Male
                            </div>
                            <div>
                                LongHT@gmail.com
                            </div>
                            <div>
                                Joined on 21/7/2019
                            </div>
                        </div>
                    </div>
                    <div class="my-4">
                        <div class="text-2xl font-normal">
                            Currently learning
                        </div>
                        <div>
                            <i class="el-icon-collection-tag"/>
                            SWE101 - Introduction to software engineering
                        </div>
                        <div>
                            <i class="el-icon-collection-tag"/>
                            PDG220 - pixel art Drawing
                        </div>
                    </div>
                    <div>
                        <div class="text-2xl font-normal">
                            Achievements
                        </div>
                        <div>
                            <i class="el-icon-collection-tag"/>
                            WED201 - Web design for everybody capstone
                        </div>
                        <div>
                            <i class="el-icon-collection-tag"/>
                            SYB113 - Start your bussiness
                        </div>
                        <div>
                            <i class="el-icon-collection-tag"/>
                            WDU202 - UX/UI Design
                        </div>
                        <div>
                            <i class="el-icon-collection-tag"/>
                            MKT208 - Social media marketing
                        </div>
                    </div>
                </div>
                <div class="flex w-1/2 justify-center">
                    <div>
                        <ElButton type="primary">Edit Profile</ElButton>
                        <ElButton type="primary">Change Password</ElButton>
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
